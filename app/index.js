import express from "express";
//fix para path
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));



//server
const app = express();
app.set('port', 3000);
app.listen(app.get('port'));
console.log('Servidor corriendo en el puerto :', app.get('port'));

//configuracion
app.use(express.static(__dirname + '/public'));

//Rutas
app.get('/', (req, res) => { res.sendFile(__dirname + '/pages/login.html') });
app.get('/register', (req, res) => { res.sendFile(__dirname + '/pages/register.html') });
