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

const FormCurriculo: React.FC = () => {
  const [step, setStep] = useState(1);
  const [curriculoData, setCurriculoData] = useState<CurriculoData>(
    curriculoDefaultData
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

    setTimeout(() => {
      updatePdfBlob();
    }, 200);

    return () => {
      isMounted = false;
    };
  }, [curriculoData]);

  useEffect(() => {
    let isMounted = true;

    pdfToCanvas(pdfUrl).then((canvas) => {
      if (canvas) {
        if (isMounted) {
          setCurriculoCanvas(canvas);
        }
      }
    });

    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  const previousStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
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
