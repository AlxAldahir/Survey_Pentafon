//Componente principal de la encuetsa que contiene las preguntas y las opciones de respuesta
import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import {Question} from "./AnswerOption";

function Survey() {
  const [answers, setAnswers] = useState({});

  const handleChange = (event, question) => {
    const updatedAnswers = { ...answers, [question]: event.target.value };
    setAnswers(updatedAnswers);
  };

  const questions = [
    {
      id: "question1",
      text: "Que es CRECE",
      options: ["option1", "option2", "option3", "option4", "option5"],
    },
    {
      id: "question2",
      text: "Apertura de generación",
      options: ["option1", "option2", "option3", "option4", "option5"],
    },
    {
      id: "question3",
      text: "Duración del programa",
      options: ["option1", "option2", "option3", "option4", "option5"],
    },
    {
        id: "question4",
        text: "Vacantes para las que se puede participar",
        options: ["option1", "option2", "option3", "option4", "option5"],
    },
    {
        id: "question5",
        text: "Filtros de selección",
        options: ["option1", "option2", "option3", "option4", "option5"],
    },
    {
        id: "question6",
        text: "Evaluaciones que se aplican",
        options: ["option1", "option2", "option3", "option4", "option5"],
    },
    {
        id: "question7",
        text: "Temario",
        options: ["option1", "option2", "option3", "option4", "option5"],
    },
  ];

  return (
    <Container>
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
      <br />
      <Button variant="contained" color="info" onClick={()=>submitSurvey(answers)}>
        Enviar
      </Button>
    </Container>
  );
}

const submitSurvey = (answers) => {
    console.log(answers);
}

export default Survey;
