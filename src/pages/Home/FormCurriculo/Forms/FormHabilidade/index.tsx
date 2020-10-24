import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../../../../components/Form/Input';
import { CurriculoData, Habilidade } from '../../model';
import { FormHabilidadeContainer, NivelContainer } from './styles';
import {
  ButtonAdd,
  ButtonAddContainer,
  ButtonRemove,
  ButtonRemoveContainer,
  ButtonsContainer,
  CurriculoContainer,
  EmpregoContainer,
  EmpregoEdit,
  EmpregoInfo,
  EmpregoItem,
  FormParagraph,
  FormTitle,
  InputLabel,
  InputsContainer,
} from '../../styles';
import InvisibleInput from '../../../../../components/Form/InvisibleInput';
import PreviewPDF from '../../PreviewPDF';
import Spinner from '../../../../../components/Spinner';
import FormButton from '../../../../../components/FormButton';
import { FaAngleLeft, FaAngleRight, FaPlus, FaTrash } from 'react-icons/fa';

interface Props {
  previousStep: () => void;
  nextStep: () => void;
  curriculoData: CurriculoData;
  setCurriculoData: React.Dispatch<React.SetStateAction<CurriculoData>>;
  curriculoCanvas: HTMLCanvasElement | null;
}

let id = 1;

const FormHabilidade: React.FC<Props> = ({
  previousStep,
  nextStep,
  curriculoData,
  setCurriculoData,
  curriculoCanvas,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (data: CurriculoData) => {
    setCurriculoData({ ...curriculoData, ...data });

    nextStep();
  };

  const handleNextClick = () => {
    formRef.current?.submitForm();
  };

  const updateCurriculoData = () => {
    const data = formRef.current?.getData();
    setCurriculoData({ ...curriculoData, ...data });
  };

  const handleRemove = (indexToRemove: number) => {
    const formData = formRef.current?.getData() as CurriculoData;
    const habilidades = formData.habilidades;

    if (habilidades) {
      const habilidadesUpdated = habilidades.filter(
        (emprego, habilidadeIndex) => indexToRemove !== habilidadeIndex
      );

      const dataUpdated = { ...curriculoData, habilidades: habilidadesUpdated };

      setCurriculoData(dataUpdated);
    }
  };

  const handleAddHabilidade = () => {
    const newHabilidade: Habilidade = {
      id,
      habilidade: '',
      nivel: 80,
    };
    id++;

    const habilidades = curriculoData.habilidades;
    habilidades.push(newHabilidade);

    setCurriculoData({ ...curriculoData, habilidades });
  };

  return (
    <FormHabilidadeContainer>
      <InputsContainer>
        <FormTitle>Habilidades</FormTitle>
        <FormParagraph>
          Recrutadores analisam as habilidades por palavras-chave.
        </FormParagraph>
        <FormParagraph>
          Exemplos: MS-Office, Soluções de problemas, Organização.
        </FormParagraph>

        <Form ref={formRef} initialData={curriculoData} onSubmit={handleSubmit}>
          <EmpregoContainer>
            {curriculoData.habilidades.map((habilidade, index) => {
              return (
                <EmpregoItem key={habilidade.id}>
                  <EmpregoInfo>
                    <InvisibleInput name={`habilidades[${index}].id`} />
                    <Input
                      onBlur={updateCurriculoData}
                      type='text'
                      name={`habilidades[${index}].habilidade`}
                      placeholder='Habilidade'
                    />
                    <NivelContainer>
                      <InputLabel>Nível (0 - 100)</InputLabel>
                      <Input
                        onBlur={updateCurriculoData}
                        type='number'
                        min='0'
                        max='100'
                        name={`habilidades[${index}].nivel`}
                        placeholder='Nível (0 - 100)'
                      />
                    </NivelContainer>
                  </EmpregoInfo>
                  <EmpregoEdit>
                    <ButtonRemoveContainer>
                      <ButtonRemove
                        type='button'
                        onClick={() => handleRemove(index)}
                      >
                        <FaTrash />
                      </ButtonRemove>
                    </ButtonRemoveContainer>
                  </EmpregoEdit>
                </EmpregoItem>
              );
            })}
          </EmpregoContainer>
        </Form>

        <ButtonAddContainer>
          <ButtonAdd onClick={handleAddHabilidade}>
            <FaPlus />
          </ButtonAdd>
        </ButtonAddContainer>

        <ButtonsContainer>
          <FormButton onClick={previousStep}>
            <FaAngleLeft />
            Voltar
          </FormButton>
          <FormButton onClick={handleNextClick}>
            Próximo
            <FaAngleRight />
          </FormButton>
        </ButtonsContainer>
      </InputsContainer>

      <CurriculoContainer>
        {curriculoCanvas ? (
          <PreviewPDF curriculoCanvas={curriculoCanvas} />
        ) : (
          <Spinner fontSize={16} />
        )}
      </CurriculoContainer>
    </FormHabilidadeContainer>
  );
};

export default FormHabilidade;
