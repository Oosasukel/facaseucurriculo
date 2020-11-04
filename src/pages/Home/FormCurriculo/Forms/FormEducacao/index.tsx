import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { v4 } from 'uuid';

import Input from '../../../../../components/Form/Input';
import { CurriculoData, Curso } from '../../model';
import { FormEducacaoContainer } from './styles';
import {
  ButtonAddContainer,
  ButtonRemoveContainer,
  ButtonRemove,
  ButtonsContainer,
  CurriculoContainer,
  DateItemContainer,
  DatesContainer,
  EmpregoContainer,
  EmpregoEdit,
  EmpregoInfo,
  EmpregoItem,
  FormParagraph,
  FormTitle,
  InputLabel,
  InputsContainer,
  AtualContainer,
  AtualLabel,
  ButtonAdd,
} from '../../styles';
import PreviewPDF from '../../PreviewPDF';
import Spinner from '../../../../../components/Spinner';
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

const FormEducacao: React.FC<Props> = ({
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
      const cursos = formData.cursos;

      if (cursos) {
        cursos[indexToUpdate][field] = date as Date;

        setCurriculoData({ ...curriculoData, cursos });
      }
    }
  };

  const handleRemove = (indexToRemove: number) => {
    const formData = formRef.current?.getData() as CurriculoData;
    const cursos = formData.cursos;

    if (cursos) {
      const cursosUpdated = cursos.filter(
        (emprego, cursoIndex) => indexToRemove !== cursoIndex
      );

      const dataUpdated = { ...curriculoData, cursos: cursosUpdated };

      setCurriculoData(dataUpdated);
    }
  };

  const handleAddCurso = () => {
    const newCurso: Curso = {
      id: v4(),
      escola: '',
      cidade: '',
      curso: '',
      inicio: new Date(),
      fim: new Date(),
      atualmente: false,
    };

    const cursos = curriculoData.cursos;
    cursos.push(newCurso);

    setCurriculoData({ ...curriculoData, cursos });
  };

  return (
    <FormEducacaoContainer>
      <InputsContainer>
        <FormTitle>{labels.FormEducacaoTitle}</FormTitle>
        <FormParagraph>{labels.FormEducacaoMessage}</FormParagraph>

        <Form ref={formRef} initialData={curriculoData} onSubmit={handleSubmit}>
          <EmpregoContainer>
            {curriculoData.cursos.map((curso, index) => {
              return (
                <EmpregoItem key={curso.id}>
                  <EmpregoInfo>
                    <InvisibleInput name={`cursos[${index}].id`} />
                    <Input
                      onBlur={updateCurriculoData}
                      type='text'
                      name={`cursos[${index}].curso`}
                      placeholder={labels.FormEducacaoCurso}
                    />
                    <Input
                      onBlur={updateCurriculoData}
                      type='text'
                      name={`cursos[${index}].escola`}
                      placeholder={labels.FormEducacaoEscola}
                    />
                    <Input
                      onBlur={updateCurriculoData}
                      type='text'
                      name={`cursos[${index}].cidade`}
                      placeholder={labels.FormEducacaoCidade}
                    />

                    <DatesContainer>
                      <DateItemContainer>
                        <InputLabel>{labels.FormEducacaoStart}</InputLabel>
                        <MonthPicker
                          onChange={(date) => updateDate(date, index, 'inicio')}
                          name={`cursos[${index}].inicio`}
                        />
                      </DateItemContainer>
                      <DateItemContainer>
                        <InputLabel>{labels.FormEducacaoEnd}</InputLabel>
                        <MonthPicker
                          onChange={(date) => updateDate(date, index, 'fim')}
                          name={`cursos[${index}].fim`}
                          disabled={curso.atualmente}
                        />
                        <AtualContainer>
                          <Checkbox
                            onChange={updateCurriculoData}
                            name={`cursos[${index}].atualmente`}
                            id={`${index}_atualmente`}
                          />
                          <AtualLabel htmlFor={`${index}_atualmente`}>
                            {labels.FormEducacaoAtualmente}
                          </AtualLabel>
                        </AtualContainer>
                      </DateItemContainer>
                    </DatesContainer>
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
          <ButtonAdd onClick={handleAddCurso}>
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
    </FormEducacaoContainer>
  );
};

export default FormEducacao;
