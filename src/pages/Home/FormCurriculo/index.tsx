import ReactPDF from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';

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

const FormCurriculo: React.FC = () => {
  const [lastCurriculoData, setLastCurriculoData] = usePersistedState<
    CurriculoData
  >('lastCurriculoData', curriculoDefaultData);
  const [step, setStep] = useState(1);
  const [curriculoData, setCurriculoData] = useState<CurriculoData>(
    lastCurriculoData
  );
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [
    curriculoCanvas,
    setCurriculoCanvas,
  ] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    const updatePdfBlob = async () => {
      const blob = await ReactPDF.pdf(
        <Curriculo1 curriculoData={curriculoData} />
      ).toBlob();
      const url = URL.createObjectURL(blob);

      if (isMounted) {
        setPdfUrl(url);
      }
    };

    updatePdfBlob();

    return () => {
      isMounted = false;
    };
  }, [curriculoData]);

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
    if (step === 6) {
      setLastCurriculoData({
        ...curriculoData,
        foto: curriculoDefaultData.foto,
      });
    }
  }, [step, setLastCurriculoData, curriculoData]);

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
          pdfUrl={pdfUrl}
          curriculoCanvas={curriculoCanvas}
        />
      ) : null}
    </FormContainer>
  );
};

export default FormCurriculo;
