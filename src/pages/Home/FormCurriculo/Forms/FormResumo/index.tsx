import React, { useContext, useEffect, useRef, useState } from 'react';
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
import { LanguageContext } from '../../../../../App';
import { messages } from '../../../../../languages';

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
  const [language] = useContext(LanguageContext);
  const [labels, setLabels] = useState(messages[language]);

  useEffect(() => {
    setLabels(messages[language]);
  }, [language]);

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

  return (
    <FormResumoContainer>
      <InputsContainer>
        <FormTitle>{labels.FormResumoTitle}</FormTitle>
        <FormParagraph>{labels.FormResumoMessage1}</FormParagraph>
        <FormParagraph>{labels.FormResumoMessage2}</FormParagraph>

        <Form ref={formRef} initialData={curriculoData} onSubmit={handleSubmit}>
          <Textarea
            onBlur={updateCurriculoData}
            name='resumo'
            placeholder={labels.FormResumoResumo}
          />
        </Form>

        <ButtonsContainer>
          <FormButton onClick={previousStep}>
            <FaAngleLeft />
            {labels.FormPrevious}
          </FormButton>
          <FormButton onClick={handleNextClick}>
            {labels.FormFinish}
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
