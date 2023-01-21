// Este componente es el que se encarga de mostrar las preguntas y opciones de respuesta y de manejar el estado de las respuestas
import React from "react";

export const Question = ({ id, text, options, handleChange, answers }) => (
    <div>
      <h3>{text}</h3>
      {options.map(option => (
        <Option
          key={option}
          value={option}
          questionId={id}
          handleChange={handleChange}
          checked={answers[id] === option}
        />
      ))}
    </div>
  );

const Option = ({ value, questionId, handleChange, checked }) => (
    <div style={{ display: "inline-block" }}>
        <input
            type="radio"
            value={value}
            checked={checked}
            onChange={(e) => handleChange(e, questionId)}
        />{" "}{value}
    </div>
  );