//Componente que contiene la tabla de preguntas y Opciones de respuesta(Emojis) y el boton de enviar. 
//En este componente no se como hacer para que se guarden las opciones de respuesta en cada pregunta.
//Es como pensaba hacerlo inicialmente, pero no se como hacerlo.
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RadioGroupRating from "./RadioGrup";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

function createData(pregunta, respuesta) {
  return { pregunta, respuesta };
}

const rows = [
  createData("1. Que es CRECE", <RadioGroupRating />),
  createData("2. Apertura de generación", <RadioGroupRating />),
  createData("3. Duración del programa", <RadioGroupRating />),
  createData(
    "4. Vacantes para las que se puede participar",
    <RadioGroupRating />
  ),
  createData("5. Filtros de selección", <RadioGroupRating />),
  createData("6. Evaluaciones que se aplican", <RadioGroupRating />),
  createData("7. Temario", <RadioGroupRating />),
];


export default function TableQuestion() {
  return (
    <form>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.pregunta}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.pregunta}
                </TableCell>
                <TableCell align="rigth">{row.respuesta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" type="submit">
        Enviar
      </Button>
    </form>
  );
}