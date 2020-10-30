import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../../../../components/Form/Input';
import { CurriculoData } from '../../model';
import {
  FormContatoContainer,
  ImagePreview,
  PhotoLabel,
  ImageContainer,
  ImagePreviewContainer,
} from './styles';
import PreviewPDF from '../../PreviewPDF';

import userImage from '../../../../../assets/images/userImage.png';
import Spinner from '../../../../../components/Spinner';
import {
  CurriculoContainer,
  FormParagraph,
  FormTitle,
  InputsContainer,
  ButtonsContainer,
} from '../../styles';
import { FaAngleRight } from 'react-icons/fa';
import FormButton from '../../../../../components/FormButton';
import { LanguageContext } from '../../../../../App';
import { messages } from '../../../../../languages';

interface Props {
  nextStep: () => void;
  curriculoData: CurriculoData;
  setCurriculoData: React.Dispatch<React.SetStateAction<CurriculoData>>;
  curriculoCanvas: HTMLCanvasElement | null;
}

const FormContato: React.FC<Props> = ({
  nextStep,
  curriculoData,
  setCurriculoData,
  curriculoCanvas,
}) => {
  const formRef = useRef<FormHandles>(null);
  const inputFotoRef = useRef<HTMLInputElement>(null);
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

  const handleFotoChange = () => {
    const files = inputFotoRef.current?.files;

    const hasFiles = !!files && files.length > 0;
    if (hasFiles) {
      const fileUrl = URL.createObjectURL((files as FileList)[0]);
      setCurriculoData({ ...curriculoData, foto: fileUrl });
    } else {
      setCurriculoData({ ...curriculoData, foto: userImage });
    }
  };

  const handleFotoClick = () => {
    inputFotoRef.current?.click();
  };

  const formatInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const arrayNumbers = value.split('').filter((n) => Number(n) || n === '0');

    // 1
    if (arrayNumbers.length > 0) {
      arrayNumbers.splice(0, 0, '(');
    }
    // (159
    if (arrayNumbers.length > 3) {
      arrayNumbers.splice(3, 0, ') ');
    }
    // (15)99733-2
    if (arrayNumbers.length > 9) {
      arrayNumbers.splice(9, 0, '-');
    }

    const newValue = arrayNumbers.join('');

    event.target.value = newValue;
  };

  return (
    <FormContatoContainer>
      <InputsContainer>
        <FormTitle>{labels.FormContatoTitle}</FormTitle>
        <FormParagraph>{labels.FormContatoMessage1}</FormParagraph>
        <FormParagraph>{labels.FormContatoMessage2}</FormParagraph>
        <Form ref={formRef} initialData={curriculoData} onSubmit={handleSubmit}>
          <Input
            onBlur={updateCurriculoData}
            name='nome'
            placeholder={labels.FormContatoFirstName}
          />
          <Input
            onBlur={updateCurriculoData}
            name='sobrenome'
            placeholder={labels.FormContatoLastName}
          />
          <Input
            onBlur={updateCurriculoData}
            name='profissao'
            placeholder={labels.FormContatoJobTitle}
          />
          <Input
            onBlur={updateCurriculoData}
            name='cidade'
            placeholder={labels.FormContatoCity}
          />
          <Input
            onBlur={updateCurriculoData}
            name='estado'
            placeholder={labels.FormContatoUF}
          />
          <Input
            onBlur={updateCurriculoData}
            name='rua'
            placeholder={labels.FormContatoStreet}
          />
          <Input
            onBlur={updateCurriculoData}
            name='bairro'
            placeholder={labels.FormContatoDistrict}
          />
          <Input
            onChange={formatInput}
            onBlur={updateCurriculoData}
            name='telefone'
            placeholder={labels.FormContatoPhone}
          />
          <Input
            onBlur={updateCurriculoData}
            name='email'
            placeholder={labels.FormContatoEmail}
          />
          <Input
            onBlur={updateCurriculoData}
            name='linkedin'
            placeholder='Linkedin'
          />
        </Form>

        <ImageContainer>
          <ImagePreviewContainer onClick={handleFotoClick}>
            <ImagePreview
              src={curriculoData.foto ? curriculoData.foto : ''}
              alt='Foto'
            />
          </ImagePreviewContainer>

          <PhotoLabel htmlFor='foto'>
            {labels.FormContatoChangeImage}
          </PhotoLabel>
          <input
            onChange={handleFotoChange}
            id='foto'
            accept='image/*'
            ref={inputFotoRef}
            type='file'
          />
        </ImageContainer>

        <ButtonsContainer>
          <div></div>
          <FormButton onClick={handleNextClick}>
            {labels.FormNext}
            <FaAngleRight />
          </FormButton>
        </ButtonsContainer>

        {/*
            Criar um input aqui, com uma imagem também default ou a imagem da pessoa com botão alterar
          */}
      </InputsContainer>

      <CurriculoContainer>
        {curriculoCanvas ? (
          <PreviewPDF curriculoCanvas={curriculoCanvas} />
        ) : (
          <Spinner fontSize={16} />
        )}
      </CurriculoContainer>
    </FormContatoContainer>
  );
};

export default FormContato;
