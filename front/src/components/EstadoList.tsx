import React, { useEffect, useState } from 'react'; 
import { api } from '../api';

type State = {
  id: number;
  name: string;
};

const EstadoList = () => {
  const [estados, setEstados] = useState<State[]>([]);
  const [selectedState, setSelectedState] = useState<string>(''); 

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const response = await api.get('/estados');
        setEstados(response.data);
      } catch (error) {
        console.error('Erro ao obter estados:', error);
      }
    };
    fetchEstados();
  }, []);

  return (
    <div>
      <h2>Endereço</h2>
      <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Endereço</option>
        {estados.map((estado) => (
          <option key={estado.id} value={estado.name}>
            {estado.name}
          </option>
        ))}
      </select>
      <select>
        <option value="">Cidade</option>
      </select>
      <select>
        <option value="">Numero</option>
      </select>
    </div>
  );
};

export default EstadoList;
