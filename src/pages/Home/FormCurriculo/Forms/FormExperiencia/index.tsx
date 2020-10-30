import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../../../../components/Form/Input';
import { CurriculoData, Emprego } from '../../model';
import { FormExperienciaContainer, CityContainer } from './styles';
import {
  ButtonsContainer,
  CurriculoContainer,
  FormParagraph,
  FormTitle,
  InputsContainer,
  DatesContainer,
  DateItemContainer,
  InputLabel,
  EmpregoContainer,
  EmpregoItem,
  EmpregoInfo,
  EmpregoEdit,
  ButtonAddContainer,
  ButtonAdd,
  ButtonRemoveContainer,
  AtualContainer,
  AtualLabel,
  ButtonRemove,
} from '../../styles';
import PreviewPDF from '../../PreviewPDF';
import Spinner from '../../../../../components/Spinner';
import Textarea from '../../../../../components/Form/Textarea';
import MonthPicker from '../../../../../components/Form/MonthPicker';
import InvisibleInput from '../../../../../components/Form/InvisibleInput';
import FormButton from '../../../../../components/FormButton';
import { FaAngleLeft, FaAngleRight, FaPlus, FaTrash } from 'react-icons/fa';
import Checkbox from '../../../../../components/Form/Checkbox';
import { LanguageContext } from '../../../../../App';
import { messages } from '../../../../../languages';

interface Props {
  previousStep: () => void;
  nextStep: () => void;
  curriculoData: CurriculoData;
  setCurriculoData: React.Dispatch<React.SetStateAction<CurriculoData>>;
  curriculoCanvas: HTMLCanvasElement | null;
}

let id = 1;

const FormExperiencia: React.FC<Props> = ({
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

  const updateDate = (
    date: Date | [Date, Date] | null,
    indexToUpdate: number,
    field: 'fim' | 'inicio'
  ) => {
    if (date) {
      const formData = formRef.current?.getData() as CurriculoData;
      const empregos = formData.empregos;

      if (empregos) {
        empregos[indexToUpdate][field] = date as Date;

        setCurriculoData({ ...curriculoData, empregos });
      }
    }
  };

  const handleRemove = (indexToRemove: number) => {
    const formData = formRef.current?.getData() as CurriculoData;
    const empregos = formData.empregos;

    if (empregos) {
      const empregosUpdated = empregos.filter(
        (emprego, empregoIndex) => indexToRemove !== empregoIndex
      );

      const dataUpdated = { ...curriculoData, empregos: empregosUpdated };

      setCurriculoData(dataUpdated);
    }
  };

  const handleAddEmprego = () => {
    const newEmprego: Emprego = {
      id,
      cargo: '',
      cidade: '',
      estado: '',
      descricao: '',
      empresa: '',
      fim: new Date(),
      atualmente: false,
      inicio: new Date(),
    };
    id++;

    const empregos = curriculoData.empregos;
    empregos.push(newEmprego);

    setCurriculoData({ ...curriculoData, empregos });
  };

  return (
    <FormExperienciaContainer>
      <InputsContainer>
        <FormTitle>{labels.FormExperienciaTitle}</FormTitle>
        <FormParagraph>{labels.FormExperienciaMessage1}</FormParagraph>
        <FormParagraph>{labels.FormExperienciaMessage2}</FormParagraph>

        <Form ref={formRef} initialData={curriculoData} onSubmit={handleSubmit}>
          <EmpregoContainer>
            {curriculoData.empregos.map((emprego, index) => {
              return (
                <EmpregoItem key={emprego.id}>
                  <EmpregoInfo>
                    <InvisibleInput name={`empregos[${index}].id`} />
                    <Input
                      onBlur={updateCurriculoData}
                      type='text'
                      name={`empregos[${index}].empresa`}
                      placeholder={labels.FormExperienciaEmpresa}
                    />
                    <Input
                      onBlur={updateCurriculoData}
                      type='text'
                      name={`empregos[${index}].cargo`}
                      placeholder={labels.FormExperienciaCargo}
                    />
                    <CityContainer>
                      <Input
                        onBlur={updateCurriculoData}
                        type='text'
                        name={`empregos[${index}].cidade`}
                        placeholder={labels.FormExperienciaCidade}
                      />
                      <Input
                        onBlur={updateCurriculoData}
                        type='text'
                        name={`empregos[${index}].estado`}
                        placeholder={labels.FormExperienciaEstado}
                      />
                    </CityContainer>
                    <DatesContainer>
                      <DateItemContainer>
                        <InputLabel>Início</InputLabel>
                        <MonthPicker
                          onChange={(date) => updateDate(date, index, 'inicio')}
                          name={`empregos[${index}].inicio`}
                        />
                      </DateItemContainer>
                      <DateItemContainer>
                        <InputLabel>Fim</InputLabel>
                        <MonthPicker
                          onChange={(date) => updateDate(date, index, 'fim')}
                          name={`empregos[${index}].fim`}
                          disabled={emprego.atualmente}
                        />
                        <AtualContainer>
                          <Checkbox
                            onChange={updateCurriculoData}
                            name={`empregos[${index}].atualmente`}
                            id={`${index}_atualmente`}
                          />
                          <AtualLabel htmlFor={`${index}_atualmente`}>
                            {labels.FormExperienciaAtualmente}
                          </AtualLabel>
                        </AtualContainer>
                      </DateItemContainer>
                    </DatesContainer>
                    <Textarea
                      onBlur={updateCurriculoData}
                      name={`empregos[${index}].descricao`}
                      placeholder={labels.FormExperienciaDescricao}
                    />
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
          <ButtonAdd onClick={handleAddEmprego}>
            <FaPlus />
          </ButtonAdd>
        </ButtonAddContainer>

        <ButtonsContainer>
          <FormButton onClick={previousStep}>
            <FaAngleLeft />
            {labels.FormPrevious}
          </FormButton>
          <FormButton onClick={handleNextClick}>
            {labels.FormNext}
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
    </FormExperienciaContainer>
  );
};

export default FormExperiencia;
