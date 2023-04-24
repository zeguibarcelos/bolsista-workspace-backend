import { Router } from 'express';
import eventoRouter from './eventoRoutes';
import tarefaRouter from './tarefaRoutes';
import tecnicoRouter from './tecnicoRoutes';
import localidadeRouter from './localidadeRoutes';



const routes = Router();


 routes.use('/evento', eventoRouter);
 routes.use('/tarefa', tarefaRouter);
 routes.use('/tecnico', tecnicoRouter);
 routes.use('/localidade', localidadeRouter);


export default routes;
