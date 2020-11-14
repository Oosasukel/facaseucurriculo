import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { CurriculoData } from '../pages/Home/FormCurriculo/model';

export type UsePersistedStateResponse = [CurriculoData, Dispatch<SetStateAction<CurriculoData>>];

function usePersistedCurriculo(key: string, initialState: CurriculoData): UsePersistedStateResponse {
  const [state, setState] = useState<CurriculoData>(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  const curriculoDataConverted: CurriculoData = { ...state };

  curriculoDataConverted.dateBirth = new Date(
    curriculoDataConverted.dateBirth
  );

  curriculoDataConverted.empregos.forEach((emprego) => {
    emprego.inicio = new Date(emprego.inicio);
    emprego.fim = new Date(emprego.fim);
  });

  curriculoDataConverted.cursos.forEach((curso) => {
    curso.inicio = new Date(curso.inicio);
    curso.fim = new Date(curso.fim);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [curriculoDataConverted, setState];
}

export default usePersistedCurriculo;
