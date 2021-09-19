import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';

import Input from '../../../../../components/Form/Input';
import { CurriculoData } from '../../model';
import {
  FormContatoContainer,
  ImagePreview,
  PhotoLabel,
  ImageContainer,
  ImagePreviewContainer,
  DateContainer,
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
  ModelosContainer,
  ModeloItem,
  ModelosItems,
} from '../../styles';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import FormButton from '../../../../../components/FormButton';
import { LanguageContext, ModeloContext } from '../../../../../App';
import { messages } from '../../../../../languages';

import modelo1Image from '../../../../../assets/images/Modelo1.png';
import modelo2Image from '../../../../../assets/images/Modelo2.png';
import FormDatePicker from '../../../../../components/Form/FormDatePicker';
import InputPhone from '../../../../../components/Form/InputPhone';

import Teste from '../../../../../utils/utilsPhoneFormats.data';

interface Props {
  nextStep: () => void;
  curriculoData: CurriculoData;
  setCurriculoData: (data: CurriculoData) => void;
  curriculoCanvas: HTMLCanvasElement | null;
}

const FormContato: React.FC<Props> = ({
  nextStep,
  curriculoData,
  setCurriculoData,
  curriculoCanvas,
}) => {
  const [modelo, setModelo] = useContext(ModeloContext);
  const formRef = useRef<FormHandles>(null);
  const inputFotoRef = useRef<HTMLInputElement>(null);
  const [language] = useContext(LanguageContext);
  const [labels, setLabels] = useState(messages[language]);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const [intlTelInputRef, setIntlTelInputRef] = useState<
    intlTelInput.Plugin | undefined
  >(undefined);

  useEffect(() => {
    setLabels(messages[language]);
  }, [language]);

  useEffect(() => {
    if (phoneInputRef.current) {
      let initialCountry = curriculoData.telefone.country;

      if (!initialCountry) {
        initialCountry = language === 'pt' ? 'br' : 'us';
      }

      const intlTelRef = intlTelInput(phoneInputRef.current as Element, {
        initialCountry,
        separateDialCode: true,
        utilsScript: Teste,
        formatOnDisplay: true,
      });
      setIntlTelInputRef(intlTelRef);

      phoneInputRef.current.addEventListener('countrychange', () => {
        const value = phoneInputRef.current?.value.replace(/\D/gim, '');
        if (value) {
          intlTelRef.setNumber(value);
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/gim, '');
    intlTelInputRef?.setNumber(value);
  };

  const handleSubmit = (data: CurriculoData) => {
    if (intlTelInputRef) {
      data.telefone.code = intlTelInputRef.getSelectedCountryData().dialCode;
      data.telefone.country = intlTelInputRef.getSelectedCountryData().iso2;
    }
    setCurriculoData({ ...curriculoData, ...data });
    nextStep();
  };

  const handleNextClick = () => {
    formRef.current?.submitForm();
  };

  const updateCurriculoData = () => {
    const data = formRef.current?.getData() as CurriculoData;
    if (intlTelInputRef) {
      data.telefone.code = intlTelInputRef.getSelectedCountryData().dialCode;
      data.telefone.country = intlTelInputRef.getSelectedCountryData().iso2;
    }
    setCurriculoData({ ...curriculoData, ...data });
  };

  const updateBirthDay = (date: Date | [Date, Date] | null) => {
    const newBirthDay = date as Date;

    setCurriculoData({ ...curriculoData, dateBirth: newBirthDay });
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

  const handleFotoClick = () => {
    inputFotoRef.current?.click();
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
          <DateContainer>
            <label htmlFor='dateBirth'>{labels.CurriculoBirthdayTitle}:</label>
            <FormDatePicker
              id='dateBirth'
              onChange={updateBirthDay}
              name='dateBirth'
            />
          </DateContainer>
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
          <InputPhone
            inputRef={phoneInputRef}
            onBlur={updateCurriculoData}
            onChange={handleChangePhone}
            name='telefone.number'
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
    </FormContatoContainer>
  );
};

export default FormContato;
