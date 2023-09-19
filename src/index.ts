import express, { Request, Response, NextFunction } from 'express'


const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send({ foo: 'Sucesso Total'})
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});