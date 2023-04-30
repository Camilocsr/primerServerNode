let infoCursos = {
  programacion : [
    {
      id:1,
      titulo:"Pyrhon desde cero",
      lenguaje:"python",
      profesor:"salasar",
      vistas:15000,
      nivel:"basico"
    },
    {
      id:2,
      titulo:"python intermedio",
      lenguaje:"python",
      vistas:52000,
      nivel:"intermedio"
    },
    {
      id:3,
      titulo:"javaScript desde cero",
      lenguaje:"javascript",
      vistas:520120,
      nivel:"basico"
    }
  ],
  Mtematicas: [
    {
      id:1,
      titulo:"aprende calculo",
      vistas:6500,
      nivel:"intermedio"
    },
    {
      id:2,
      titulo:"calculo abansado",
      vistas:6400,
      nivel:"abansado"
    }
  ]
}

module.exports = { 
  cursos: infoCursos
}