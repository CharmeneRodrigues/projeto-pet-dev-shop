import express from 'express';
import dotenv from 'dotenv';
import mustache from "mustache-express";
import path from 'path';
import mainRoutes from './routes/index';


dotenv.config();

console.log(`Servidor escutando na porta ${process.env.PORT}`);

const server = express();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache()); 

server.use(express.static(path.join(__dirname, '../public')));

// Criado por Tiago em 202203301130
server.use('/static', express.static(path.join(__dirname, '../_html')));

server.use(mainRoutes);

server.use((req, res)=> {
    res.render('pages/404');
}); 

server.listen(process.env.PORT);