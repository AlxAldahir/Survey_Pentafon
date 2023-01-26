//Componente principal de la encuetsa que contiene las preguntas y las opciones de respuesta
  import React, { useState } from "react";
  import { Button, Container } from "@mui/material";
  import { Question } from "./AnswerOption";
  import { questions, questions2, questions3 } from "./questions";


  function Survey() {
    const [employeeId, setEmployeeId] = useState("");
    const [answers, setAnswers] = useState({});

    const handleChange = (event, question) => {
      const updatedAnswers = { ...answers, [question]: event.target.value };
      setAnswers(updatedAnswers);
    };

    const handleIdChange = (e) => {
      e.preventDefault();
      setEmployeeId("");
    };
    

    const QuestonList = (questions, handleChange, answers) => {
      return (
        <div>
          {questions.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              text={question.text}
              options={question.options}
              handleChange={handleChange}
              answers={answers}
            />
          ))}
        </div>
      );
    };

    return (
      <Container>
        <div style={{textAlign:"center", marginBottom: "40px"}}>
        <form onSubmit={handleIdChange}>
            <label htmlFor="employee_id">ID Empleado </label>
            <input 
              type="text"
              placeholder="ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              />
          </form>
        </div>
        <Container className="section-container">
          <h3>
          REFERENTE AL PROGRAMA CRECE INDICA EN NIVEL DE CONOCIMIENTOS Y
            CLARIDAD QUE TIENES SOBRE LOS SIGUIENTES PUNTOS
          </h3>
          {QuestonList(questions, handleChange, answers)}
          <br />
        </Container>
        <Container style={{ marginTop: "70px"}} className="section-container">
          <h3 style={{ textAlign: "center" }}>AL CANDIDATO CRECE</h3>
          {QuestonList(questions2, handleChange, answers)}
        </Container>
        <Container style={{ marginTop: "70px"}} className="section-container">
          <h3 style={{ textAlign: "center" }}>AL REPRESENTANTE DEL PROGRAMA CRECE</h3>
          {QuestonList(questions3, handleChange, answers)}
        </Container>
        <br />
        <Button style={{ marginTop: "20px", marginBottom: "50px", marginLeft: "50px"}}
          variant="contained"
          color="info"
          onClick={() => {{submitSurvey(answers, employeeId);}}}
        >
          Enviar
        </Button>
      </Container>
    );
  }

  
  const submitSurvey = async (answers, employeeId) => {
  if (employeeId === "") {
    alert("Por favor llena todos los campos");
    return;
  }
  else if (Object.keys(answers).length < questions.length + questions2.length + questions3.length ) {
    alert("Por favor llena todos los campos");
    return;
  }
  else {
    try {
      const response = await fetch("http://localhost:4000/survey", {
        method: "POST",
        body: JSON.stringify({ employee_id: employeeId, answers: answers }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if(response.ok){
        alert("Gracias por tu participación");
        open("https://www.pentafon.net/", "_self");
      }
    } catch (error) {
      console.error(error);
    }
  }
};



export default Survey;
