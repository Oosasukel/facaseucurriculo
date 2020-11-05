import ReactPDF from '@react-pdf/renderer';
import React, { useContext, useEffect, useState } from 'react';

import FormContato from './Forms/FormContato';
import FormEducacao from './Forms/FormEducacao';
import FormExperiencia from './Forms/FormExperiencia';
import FormHabilidade from './Forms/FormHabilidade';
import FormResumo from './Forms/FormResumo';
import Curriculo1 from './Curriculos/Curriculo1';
import { CurriculoData, curriculoDefaultData } from './model';
import FormDownload from './Forms/FormDownload';
import { FormContainer } from './styles';
import pdfToCanvas from '../../../utils/pdfToCanvas';
import FormProgress from './FormProgress';
import usePersistedState from '../../../utils/usePersistedState';
import { LanguageContext } from '../../../App';
import { messages } from '../../../languages';

const FormCurriculo: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const [lastCurriculoData, setLastCurriculoData] = usePersistedState<
    CurriculoData
  >('lastCurriculoDataV3', curriculoDefaultData);
  const [step, setStep] = useState(1);
  const [curriculoData, setCurriculoData] = useState<CurriculoData>(
    lastCurriculoData
  );
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [curriculoLoading, setCurriculoLoading] = useState<boolean>(false);
  const [
    curriculoCanvas,
    setCurriculoCanvas,
  ] = useState<HTMLCanvasElement | null>(null);
  const [labels, setLabels] = useState(messages[language]);

  useEffect(() => {
    const curriculoDataConverted = { ...lastCurriculoData };

    curriculoDataConverted.empregos.forEach((emprego) => {
      emprego.inicio = new Date(emprego.inicio);
      emprego.fim = new Date(emprego.fim);
    });

    curriculoDataConverted.cursos.forEach((curso) => {
      curso.inicio = new Date(curso.inicio);
      curso.fim = new Date(curso.fim);
    });

    setCurriculoData(curriculoDataConverted);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (language === 'pt') {
      const newCurriculoData = { ...curriculoData };
      newCurriculoData.habilidades[0].category = 'Profissionais';
      newCurriculoData.habilidades[1].category = 'Pessoais';
      newCurriculoData.habilidades[2].category = 'Idiomas';

      setCurriculoData(newCurriculoData);
    } else {
      const newCurriculoData = { ...curriculoData };
      newCurriculoData.habilidades[0].category = 'professional';
      newCurriculoData.habilidades[1].category = 'Personal';
      newCurriculoData.habilidades[2].category = 'Languages';

      setCurriculoData(newCurriculoData);
    }
    setLabels(messages[language]);
    // eslint-disable-next-line
  }, [language]);

  useEffect(() => {
    let isMounted = true;

    const updatePdfBlob = async () => {
      setCurriculoLoading(true);

      const blob = await ReactPDF.pdf(
        <Curriculo1
          labels={labels}
          language={language}
          curriculoData={curriculoData}
        />
      ).toBlob();
      const url = URL.createObjectURL(blob);

      if (isMounted) {
        setPdfUrl(url);
        setCurriculoLoading(false);
      }
    };

    updatePdfBlob();

    return () => {
      isMounted = false;
    };
  }, [curriculoData, language, labels]);

  useEffect(() => {
    let isMounted = true;

    setTimeout(() => {
      pdfToCanvas(pdfUrl).then((canvas) => {
        if (canvas) {
          if (isMounted) {
            setCurriculoCanvas(canvas);
          }
        }
      });
    }, 200);

    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  useEffect(() => {
    setLastCurriculoData({
      ...curriculoData,
      foto: curriculoDefaultData.foto,
    });
    // eslint-disable-next-line
  }, [step]);

  const previousStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    const newStep = step + 1;
    if (newStep <= 6) {
      setStep(newStep);
    }
  };

  return (
    <FormContainer>
      <FormProgress step={step} setStep={setStep} />

      {step === 1 ? (
        <FormContato
          nextStep={nextStep}
          curriculoData={curriculoData}
          setCurriculoData={setCurriculoData}
          curriculoCanvas={curriculoCanvas}
        ></FormContato>
      ) : null}
      {step === 2 ? (
        <FormExperiencia
          previousStep={previousStep}
          nextStep={nextStep}
          curriculoData={curriculoData}
          setCurriculoData={setCurriculoData}
          curriculoCanvas={curriculoCanvas}
        />
      ) : null}
      {step === 3 ? (
        <FormEducacao
          previousStep={previousStep}
          nextStep={nextStep}
          curriculoData={curriculoData}
          setCurriculoData={setCurriculoData}
          curriculoCanvas={curriculoCanvas}
        />
      ) : null}
      {step === 4 ? (
        <FormHabilidade
          previousStep={previousStep}
          nextStep={nextStep}
          curriculoData={curriculoData}
          setCurriculoData={setCurriculoData}
          curriculoCanvas={curriculoCanvas}
        />
      ) : null}
      {step === 5 ? (
        <FormResumo
          previousStep={previousStep}
          nextStep={nextStep}
          curriculoData={curriculoData}
          setCurriculoData={setCurriculoData}
          curriculoCanvas={curriculoCanvas}
        />
      ) : null}
      {step === 6 ? (
        <FormDownload
          previousStep={previousStep}
          curriculoData={curriculoData}
          curriculoLoading={curriculoLoading}
          pdfUrl={pdfUrl}
          curriculoCanvas={curriculoCanvas}
        />
      ) : null}
    </FormContainer>
  );
};

export default FormCurriculo;
