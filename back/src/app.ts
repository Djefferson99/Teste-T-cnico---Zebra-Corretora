import express from 'express';
import { getEstados } from './ibgeService';

const app = express();

app.get('/estados', async (req, res) => {
  try {
    const estados = await getEstados();
    res.json(estados);
  } catch (error) {
    res.status(500).send('Erro ao obter dados dos estados');
  }
});

export default app;