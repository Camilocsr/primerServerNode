const { cursos } = require('./cursos.js');

const http = require('http');
const puerto = 9999;

const servidor = http.createServer((req,res)=>{
    const { method } = req;
    switch (method) {
        case 'GET':
            return manejarSolicitudGet(req,res);
        case 'POST':
            return manejarSolicitudPost(req,res);
        default:
            res.statusCode = 501;
            res.end(`El methodo ==> ${method} usado no puede ser manejado por el servidor..`);
    }
});

const manejarSolicitudGet = (req,res) => {
    const path = req.url;
    if(path === '/'){
        res.statusCode = 200;
        return res.end(`welcome to my server and api built with node.js`);
    }else if(path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos));
    }else if(path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.programacion));
    }else if(path === '/cursos/matematicas') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.Mtematicas));
    } else {
        res.statusCode = 404;
        return res.end('Lo siento la url ue estas buscando en mi servidor no puedo manejarla o no existe por el momento...');
    }
};

const manejarSolicitudPost = (req,res) => {
    const path = req.url;
    if(path === '/cursos/programacion') {
        res.statusCode = 200;

        let curso = '';

        req.on('data',(informacion)=>{
            curso += informacion.toString();
        });

        req.on('end',()=>{
            console.log(curso);
            console.log(typeof curso);
            res.end(`El servidor resivio una solicitud para ingresar un curso de programacion;`);
        });

        // return res.end(`El servidor resivio una solicitud para ingresar un curso de programacion;`);
    }
};

servidor.listen(puerto,()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
})