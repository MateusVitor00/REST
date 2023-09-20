import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';


const app = express();

// Configuração de aplicação
// app.use(express.json);
// app.use(express.urlencoded({ extended: true }));

// Configuração de Rotas
app.use(usersRoute);
app.use(statusRoute);

// Inicializador do servidor

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});