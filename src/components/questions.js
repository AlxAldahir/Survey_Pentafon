const options = ["Totalmente en desacuerdo", "En desacuerdo", "Ni de acuerdo ni en desacuerdo", "De acuerdo", "Totalmente de acuerdo"];

const generateQuestion = (id, text) => {
  return {
    id,
    text,
    options
  }
}

//ENCUESTA REFERENTE AL PROGRAMA CRECE
export const questions = [
  generateQuestion("question1", "Que es CRECE"),
  generateQuestion("question2", "Apertura de generación"),
  generateQuestion("question3", "Duración del programa"),
  generateQuestion("question4", "Vacantes para las que se puede participar"),
  generateQuestion("question5", "Filtros de selección"),
  generateQuestion("question6", "Evaluaciones que se aplican"),
  generateQuestion("question7", "Temario"),
];

//ENCUESTA AL CANDIDATO CRECE
  export const questions2 = [
    generateQuestion("question8", "Dominio de indicadores del proyecto"),
    generateQuestion("question9", "Conocimiento de plataformas operativas (RH Admin, Genesys, SOP, BI etc.)"),
    generateQuestion("question10", "Manejo de plataformas operativas (RH Admin, Genesys, SOP, BI, hojas de cálculo etc.)"),
    generateQuestion("question11", "Cuenta con los skills para la posición que ocupa"),
    generateQuestion("question12", "Correcta imagen corporativa"),
    generateQuestion("question13", "Lenguaje apropiado y respetuoso"),
    generateQuestion("question14", "Habilidades blandas (empatía, tolerancia a la frustración, solución de problemas etc.)"),
  ];

//AL REPRESENTANTE DEL PROGRAMA CRECE
  export const questions3 = [
    generateQuestion("question15", "Atención al recibir solitud de vacantes"),
    generateQuestion("question16", "Tiempo de entrega (máximo dos semanas)"),
    generateQuestion("question17", "La entrega del candidato se hizo con los insumos necesarios (chaleco, usuarios y accesos)"),
    generateQuestion("question18", "Forma en que nuestro representante de proyecto CRECE atendió su solicitud"),
    generateQuestion("question19", "Solución / respuesta de manera oportuna a la solicitud de operación"),
    generateQuestion("question20", "Nuestro representante tenía el conocimiento de la vacante suficiente para atender su consulta "),

  ];