import ReactPDF from '@react-pdf/renderer';
import React, { useCallback, useContext, useEffect, useState } from 'react';

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
import { LanguageContext, ModeloContext } from '../../../App';
import { messages } from '../../../languages';
import Curriculo2 from './Curriculos/Curriculo2';
import usePersistedCurriculo from '../../../utils/usePersistedCurriculo';

export const pagesContext = React.createContext<
  [PagesContext, React.Dispatch<React.SetStateAction<PagesContext>>]
>([{ pages: 1, currentPage: 1 }, () => {}]);

interface PagesContext {
  pages: number;
  currentPage: number;
}

const FormCurriculo: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const [modelo] = useContext(ModeloContext);
  const [lastCurriculoData, setLastCurriculoData] = usePersistedCurriculo(
    'lastCurriculoDataV4',
    curriculoDefaultData
  );
  const [step, setStep] = useState(1);
  const [curriculoData, setCurriculoData] =
    useState<CurriculoData>(lastCurriculoData);
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [curriculoLoading, setCurriculoLoading] = useState<boolean>(false);
  const [curriculoCanvas, setCurriculoCanvas] =
    useState<HTMLCanvasElement | null>(null);
  const [labels, setLabels] = useState(messages[language]);
  const [pdfPages, setPdfPages] = useState<PagesContext>({
    pages: 1,
    currentPage: 1,
  });

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
    setCurriculoCanvas(null);
  }, [modelo]);

  useEffect(() => {
    let isMounted = true;

    const updatePdfBlob = async () => {
      setCurriculoLoading(true);

      let ModeloEscolhido;

      if (modelo === 1) {
        ModeloEscolhido = Curriculo1;
      } else {
        ModeloEscolhido = Curriculo2;
      }

      const blob = await ReactPDF.pdf(
        <ModeloEscolhido
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
  }, [curriculoData, language, labels, modelo]);

  useEffect(() => {
    let isMounted = true;

    pdfToCanvas(pdfUrl, pdfPages.currentPage).then((response) => {
      const { canvas, pages } = response;
      let currentPage = pdfPages.currentPage;

      if (pdfPages.currentPage > pages) {
        currentPage = pages;
      }

      if (canvas) {
        if (isMounted) {
          setCurriculoCanvas(canvas);
          setPdfPages({ currentPage, pages });
        }
      }
    });

    return () => {
      isMounted = false;
    };
  }, [pdfUrl, pdfPages.currentPage]);

  const previousStep = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const nextStep = useCallback(() => {
    const newStep = step + 1;
    if (newStep <= 6) {
      setStep(newStep);
    }
  }, [step]);

  const updateCurriculoData = useCallback(
    (data: CurriculoData) => {
      setCurriculoData(data);
      setLastCurriculoData(data);
    },
    [setLastCurriculoData]
  );

  return (
    <pagesContext.Provider value={[pdfPages, setPdfPages]}>
      <FormContainer>
        <FormProgress step={step} setStep={setStep} />

        {step === 1 ? (
          <FormContato
            nextStep={nextStep}
            curriculoData={curriculoData}
            setCurriculoData={updateCurriculoData}
            curriculoCanvas={curriculoCanvas}
          ></FormContato>
        ) : null}
        {step === 2 ? (
          <FormExperiencia
            previousStep={previousStep}
            nextStep={nextStep}
            curriculoData={curriculoData}
            setCurriculoData={updateCurriculoData}
            curriculoCanvas={curriculoCanvas}
          />
        ) : null}
        {step === 3 ? (
          <FormEducacao
            previousStep={previousStep}
            nextStep={nextStep}
            curriculoData={curriculoData}
            setCurriculoData={updateCurriculoData}
            curriculoCanvas={curriculoCanvas}
          />
        ) : null}
        {step === 4 ? (
          <FormHabilidade
            previousStep={previousStep}
            nextStep={nextStep}
            curriculoData={curriculoData}
            setCurriculoData={updateCurriculoData}
            curriculoCanvas={curriculoCanvas}
          />
        ) : null}
        {step === 5 ? (
          <FormResumo
            previousStep={previousStep}
            nextStep={nextStep}
            curriculoData={curriculoData}
            setCurriculoData={updateCurriculoData}
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
    </pagesContext.Provider>
  );
};

export default FormCurriculo;
