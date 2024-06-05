import axios from 'axios';

const IBGE_API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const encrypt = (text: string): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const encryptedAlphabet = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  
  return text.split('').map(char => {
    const index = alphabet.indexOf(char);
    return index !== -1 ? encryptedAlphabet[index] : char;
  }).join('');
};

const decrypt = (text: string): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const encryptedAlphabet = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  
  return text.split('').map(char => {
    const index = encryptedAlphabet.indexOf(char);
    return index !== -1 ? alphabet[index] : char;
  }).join('');
};

type State = {
  id: number,
  name: string
};

export const getEstados = async (): Promise<State[]> => {
  try {
    const response = await axios.get(IBGE_API_URL);
    const estados: State[] = response.data.map((estado: any) => ({
      id: estado.id,
      name: encrypt(estado.nome)
    }));
    return estados;
  } catch (error) {
    throw new Error('Erro ao obter dados dos estados do IBGE');
  }
};
