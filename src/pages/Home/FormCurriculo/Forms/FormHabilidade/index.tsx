import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../../../../components/Form/Input';
import { CurriculoData, Habilidade, HabilidadeChild } from '../../model';
import {
  FormHabilidadeContainer,
  NivelContainer,
  SkillCategoryContainer,
  SkillCategoryTitle,
} from './styles';
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
import Slider from '../../../../../components/Form/Slider';
import { LanguageContext } from '../../../../../App';
import { messages } from '../../../../../languages';

interface Props {
  previousStep: () => void;
  nextStep: () => void;
  curriculoData: CurriculoData;
  setCurriculoData: React.Dispatch<React.SetStateAction<CurriculoData>>;
  curriculoCanvas: HTMLCanvasElement | null;
}

let childId = 1;

const FormHabilidade: React.FC<Props> = ({
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

  useEffect(() => {
    formRef.current?.setData(curriculoData);
  }, [curriculoData]);

  const handleSubmit = (data: CurriculoData) => {
    const habilidades = data.habilidades;

    const habilidadesWithoutUndefined = removeUndefinedChildren(habilidades);

    data.habilidades = habilidadesWithoutUndefined;

    setCurriculoData({ ...curriculoData, ...data });

    nextStep();
  };

  const handleNextClick = () => {
    formRef.current?.submitForm();
  };

  const updateCurriculoData = () => {
    const data = formRef.current?.getData() as CurriculoData;
    const habilidades = data.habilidades;

    const habilidadesWithoutUndefined = removeUndefinedChildren(habilidades);

    data.habilidades = habilidadesWithoutUndefined;

    setCurriculoData({ ...curriculoData, ...data });
  };

  const handleRemoveChild = (categoryIndex: number, childIndex: number) => {
    const formData = formRef.current?.getData() as CurriculoData;
    const habilidades = formData.habilidades;

    if (habilidades) {
      const categoryUpdated = habilidades[categoryIndex].children.filter(
        (child, currentChildIndex) => currentChildIndex !== childIndex
      );

      const habilidadesUpdated = [...habilidades];
      habilidadesUpdated[categoryIndex].children = [...categoryUpdated];

      const habilidadesFiltered = habilidadesUpdated.filter((category) => {
        const hasChildren = category.children !== undefined;
        const isDefaultCategory = category.id < 0;

        if (!hasChildren && !isDefaultCategory) {
          return false;
        }

        return true;
      });

      const habilidadesWithoutUndefined = removeUndefinedChildren(
        habilidadesFiltered
      );

      const dataUpdated = {
        ...curriculoData,
        habilidades: habilidadesWithoutUndefined,
      };

      setCurriculoData(dataUpdated);
    }
  };

  const handleAddHabilidade = (categoryId: number) => {
    const newHabilidade: HabilidadeChild = {
      id: childId,
      habilidade: '',
      nivel: 80,
    };
    childId++;

    const habilidades = curriculoData.habilidades;
    const habilidadesUpdated = removeUndefinedChildren(habilidades);

    habilidadesUpdated[categoryId].children.push(newHabilidade);

    setCurriculoData({
      ...curriculoData,
      habilidades: habilidadesUpdated,
    });
  };

  const removeUndefinedChildren = (habilidades: Habilidade[]): Habilidade[] => {
    const habilidadesWithoutUndefinedChildren = [...habilidades];
    habilidadesWithoutUndefinedChildren.forEach((category) => {
      const hasChildren = category.children !== undefined;

      if (!hasChildren) {
        category.children = [];
      }
    });

    return habilidadesWithoutUndefinedChildren;
  };

  return (
    <FormHabilidadeContainer>
      <InputsContainer>
        <FormTitle>{labels.FormHabilidadeTitle}</FormTitle>
        <FormParagraph>{labels.FormHabilidadeMessage1}</FormParagraph>
        <FormParagraph>{labels.FormHabilidadeMessage2}</FormParagraph>

        <Form ref={formRef} initialData={curriculoData} onSubmit={handleSubmit}>
          <EmpregoContainer>
            {curriculoData.habilidades.map((habilidade, categoryIndex) => {
              return (
                <SkillCategoryContainer key={habilidade.id}>
                  <SkillCategoryTitle>{habilidade.category}</SkillCategoryTitle>

                  <InvisibleInput name={`habilidades[${categoryIndex}].id`} />

                  <InvisibleInput
                    name={`habilidades[${categoryIndex}].category`}
                  />

                  {habilidade.children !== undefined &&
                    habilidade.children.map((habilidadeChild, childIndex) => {
                      return (
                        <EmpregoItem key={habilidadeChild.id}>
                          <EmpregoInfo>
                            <InvisibleInput
                              name={`habilidades[${categoryIndex}].children[${childIndex}].id`}
                            />
                            <Input
                              onBlur={updateCurriculoData}
                              type='text'
                              name={`habilidades[${categoryIndex}].children[${childIndex}].habilidade`}
                              placeholder={labels.FormHabilidadeHabilidade}
                            />
                            <NivelContainer>
                              <InputLabel>
                                {labels.FormHabilidadeNivel}
                              </InputLabel>
                              <Slider
                                onPointerUp={updateCurriculoData}
                                name={`habilidades[${categoryIndex}].children[${childIndex}].nivel`}
                              />
                            </NivelContainer>
                          </EmpregoInfo>
                          <EmpregoEdit>
                            <ButtonRemoveContainer>
                              <ButtonRemove
                                type='button'
                                onClick={() =>
                                  handleRemoveChild(categoryIndex, childIndex)
                                }
                              >
                                <FaTrash />
                              </ButtonRemove>
                            </ButtonRemoveContainer>
                          </EmpregoEdit>
                        </EmpregoItem>
                      );
                    })}

                  <ButtonAddContainer>
                    <ButtonAdd
                      type='button'
                      onClick={() => handleAddHabilidade(categoryIndex)}
                    >
                      <FaPlus />
                    </ButtonAdd>
                  </ButtonAddContainer>
                </SkillCategoryContainer>
              );
            })}
          </EmpregoContainer>
        </Form>

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
    </FormHabilidadeContainer>
  );
};

export default FormHabilidade;
