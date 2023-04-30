// I m p o r t a c i o n e s
const { cursos } = require('./cursos.js');
const http = require('http');


// S e r v i d o r.
class Server {
  constructor() {
    this.port = 9999;
    this.server = http.createServer(this.servidor.bind(this));
  }

  // Metodo para manejar las solicitudes H T T P
  servidor(req, res) {
    const { method } = req;
    switch (method) {
      case 'GET':
        return this.manejarSolicitudGet(req, res);
      case 'POST':
        return this.manejarSolicitudPost(req, res);
      default:
        res.statusCode = 501;
        res.end(`El método ${method} usado no puede ser manejado por el servidor.`);
    }
  }

  //Manejo de H T T P -- G E T
  manejarSolicitudGet(req, res) {
    const path = req.url;
    if (path === '/') {
      res.statusCode = 200;
      return res.end('Welcome to my server and API built with Node.js');
    } else if (path === '/cursos') {
      res.statusCode = 200;
      return res.end(JSON.stringify(cursos));
    } else if (path === '/cursos/programacion') {
      res.statusCode = 200;
      return res.end(JSON.stringify(cursos.programacion));
    } else if (path === '/cursos/matematicas') {
      res.statusCode = 200;
      return res.end(JSON.stringify(cursos.Mtematicas));
    } else {
      res.statusCode = 404;
      return res.end('Lo siento, la URL que estás buscando en mi servidor no puede ser manejada o no existe por el momento.');
    }
  }

  //Manejo de H T T P -- P O S T
  manejarSolicitudPost(req, res) {
    const path = req.url;
    if (path === '/cursos/programacion') {
      res.statusCode = 200;

      let curso = '';

      req.on('data', (informacion) => {
        curso += informacion.toString();
      });

      req.on('end', () => {
        console.log(curso);
        console.log(typeof curso);
        curso = JSON.parse(curso);
        console.log(curso.CapacidadEstudiantes);

        res.end(`El servidor recibió una solicitud para ingresar un curso de programación.`);
      });
    }
  }

  //Llamado al servidor ( E S C U C H A ).
  listen() {
    this.server.listen(this.port, () => {
      console.log(`El servidor está escuchando en el puerto ${this.port}.`);
    });
  }
}

//Inicio una instancia de la clase S e r v e r.
server = new Server();
//Llamo a el metodo e s c u c h a...
server.listen();