import React from 'react'; 
import EstadoList from './components/EstadoList';
import { Conteiner } from './styles/styles';

const App = () => {
  return (
    <Conteiner>
        <div>
            <EstadoList />
        </div>
    </Conteiner>
  );
};

export default App;