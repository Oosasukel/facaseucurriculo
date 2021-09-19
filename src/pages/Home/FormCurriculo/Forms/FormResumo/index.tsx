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
  ModelosContainer,
  ModelosItems,
  ModeloItem,
} from '../../styles';
import Textarea from '../../../../../components/Form/Textarea';
import FormButton from '../../../../../components/FormButton';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PreviewPDF from '../../PreviewPDF';
import Spinner from '../../../../../components/Spinner';
import { LanguageContext, ModeloContext } from '../../../../../App';
import { messages } from '../../../../../languages';

import modelo1Image from '../../../../../assets/images/Modelo1.png';
import modelo2Image from '../../../../../assets/images/Modelo2.png';

interface Props {
  previousStep: () => void;
  nextStep: () => void;
  curriculoData: CurriculoData;
  setCurriculoData: (data: CurriculoData) => void;
  curriculoCanvas: HTMLCanvasElement | null;
}

const FormResumo: React.FC<Props> = ({
  previousStep,
  nextStep,
  curriculoData,
  setCurriculoData,
  curriculoCanvas,
}) => {
  const [modelo, setModelo] = useContext(ModeloContext);
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

  const handlePreviousModel = () => {
    if (modelo > 1) {
      setModelo(modelo - 1);
    } else {
      setModelo(2);
    }
  };

  const handleNextModel = () => {
    if (modelo < 2) {
      setModelo(modelo + 1);
    } else {
      setModelo(1);
    }
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
            maxLength={600}
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
        <ModelosContainer>
          <FormButton onClick={handlePreviousModel}>
            <FaAngleLeft />
          </FormButton>

          <ModelosItems>
            <ModeloItem
              onClick={() => setModelo(1)}
              className={modelo === 1 ? 'active' : ''}
            >
              <img src={modelo1Image} alt='Model' />
            </ModeloItem>
            <ModeloItem
              onClick={() => setModelo(2)}
              className={modelo === 2 ? 'active' : ''}
            >
              <img src={modelo2Image} alt='Model' />
            </ModeloItem>
          </ModelosItems>

          <FormButton onClick={handleNextModel}>
            <FaAngleRight />
          </FormButton>
        </ModelosContainer>
      </CurriculoContainer>
    </FormResumoContainer>
  );
};

export default FormResumo;
