import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { CurriculoData } from '../../model';
import { FormResumoContainer } from './styles';
import {
  ButtonsContainer,
  CurriculoContainer,
  FormParagraph,
  FormTitle,
  InputsContainer,
} from '../../styles';
import Textarea from '../../../../../components/Form/Textarea';
import FormButton from '../../../../../components/FormButton';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PreviewPDF from '../../PreviewPDF';
import Spinner from '../../../../../components/Spinner';

interface Props {
  previousStep: () => void;
  nextStep: () => void;
  curriculoData: CurriculoData;
  setCurriculoData: React.Dispatch<React.SetStateAction<CurriculoData>>;
  curriculoCanvas: HTMLCanvasElement | null;
}

const FormResumo: React.FC<Props> = ({
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
    setTimeout(() => {
      const data = formRef.current?.getData();
      setCurriculoData({ ...curriculoData, ...data });
    }, 200);
  };

  return (
    <FormResumoContainer>
      <InputsContainer>
        <FormTitle>Descrição</FormTitle>
        <FormParagraph>Um breve resumo sobre você.</FormParagraph>
        <FormParagraph>
          O resumo mostra aos empregadores que você está preparado para o
          trabalho.
        </FormParagraph>

        <Form ref={formRef} initialData={curriculoData} onSubmit={handleSubmit}>
          <Textarea
            onBlur={updateCurriculoData}
            name='resumo'
            placeholder='Uma breve descrição...'
          />
        </Form>

        <ButtonsContainer>
          <FormButton onClick={previousStep}>
            <FaAngleLeft />
            Voltar
          </FormButton>
          <FormButton onClick={handleNextClick}>
            Concluir
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
    </FormResumoContainer>
  );
};

export default FormResumo;
