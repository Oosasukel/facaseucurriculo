import React, { useRef } from 'react';
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
        <FormTitle>Informações de contato</FormTitle>
        <FormParagraph>
          Qual a melhor maneira dos recrutadores entrarem em contato com você?
        </FormParagraph>
        <FormParagraph>
          Não é necessário preencher todos os campos, mas sugerimos você
          preencher seu email e telefone.
        </FormParagraph>
        <Form ref={formRef} initialData={curriculoData} onSubmit={handleSubmit}>
          <Input onBlur={updateCurriculoData} name='nome' placeholder='Nome' />
          <Input
            onBlur={updateCurriculoData}
            name='sobrenome'
            placeholder='Sobrenome'
          />
          <Input
            onBlur={updateCurriculoData}
            name='profissao'
            placeholder='Profissao'
          />
          <Input
            onBlur={updateCurriculoData}
            name='cidade'
            placeholder='Cidade'
          />
          <Input onBlur={updateCurriculoData} name='estado' placeholder='UF' />
          <Input onBlur={updateCurriculoData} name='rua' placeholder='Rua' />
          <Input
            onBlur={updateCurriculoData}
            name='bairro'
            placeholder='Bairro'
          />
          <Input
            onChange={formatInput}
            onBlur={updateCurriculoData}
            name='telefone'
            placeholder='Telefone'
          />
          <Input
            onBlur={updateCurriculoData}
            name='email'
            placeholder='Email'
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

          <PhotoLabel htmlFor='foto'>Alterar foto</PhotoLabel>
          <input
            onChange={handleFotoChange}
            id='foto'
            ref={inputFotoRef}
            type='file'
          />
        </ImageContainer>

        <ButtonsContainer>
          <div></div>
          <FormButton onClick={handleNextClick}>
            Próximo
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
