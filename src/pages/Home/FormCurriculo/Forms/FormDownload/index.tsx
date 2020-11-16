import React, { useContext, useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaDownload } from 'react-icons/fa';
import FormButton from '../../../../../components/FormButton';
import Spinner from '../../../../../components/Spinner';
import { CurriculoData } from '../../model';
import PreviewPDF from '../../PreviewPDF';
import Modal from 'react-modal';
import {
  ButtonsContainer,
  CurriculoContainer,
  FormParagraph,
  FormTitle,
  InputsContainer,
  ModeloItem,
  ModelosContainer,
  ModelosItems,
} from '../../styles';
import {
  FormDownloadContainer,
  LinkDownload,
  PreviewPDFMobile,
  ModelosMobile,
} from './styles';
import FormFeedback from './FormFeedback';
import { firestoreDB } from '../../../../../services/firestore';
import { LanguageContext, ModeloContext } from '../../../../../App';
import { messages } from '../../../../../languages';

import modelo1Image from '../../../../../assets/images/Modelo1.png';
import modelo2Image from '../../../../../assets/images/Modelo2.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    backgroundColor: 'initial',
    border: 'none',
  },
};

Modal.setAppElement('#root');

interface Props {
  previousStep: () => void;
  curriculoData: CurriculoData;
  pdfUrl: string;
  curriculoCanvas: HTMLCanvasElement | null;
  curriculoLoading: boolean;
}

const FormDownload: React.FC<Props> = ({
  previousStep,
  curriculoData,
  pdfUrl,
  curriculoCanvas,
  curriculoLoading,
}) => {
  const [modelo, setModelo] = useContext(ModeloContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [language] = useContext(LanguageContext);
  const [labels, setLabels] = useState(messages[language]);

  useEffect(() => {
    setLabels(messages[language]);
  }, [language]);

  const openFeedbackModal = () => {
    setModalIsOpen(true);
  };

  const closeFeedbackModal = () => {
    setModalIsOpen(false);
  };

  const handleDownloadPdf = () => {
    sendDataToStatistic('PDF');

    setTimeout(() => {
      openFeedbackModal();
    }, 300);
  };

  const handleDownloadPng = () => {
    sendDataToStatistic('PNG');

    setTimeout(() => {
      openFeedbackModal();
    }, 300);
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

  const sendDataToStatistic = (type: string) => {
    firestoreDB
      .collection('downloads')
      .add({
        curriculo: curriculoData,
        type,
        modelCV: modelo,
        date: Date.now(),
      })
      .catch((error) => {
        console.error('Erro ao enviar o feedback: ', error);
      });
  };

  return (
    <FormDownloadContainer>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel='Feedback Modal'
        onRequestClose={closeFeedbackModal}
      >
        <FormFeedback
          closeModal={closeFeedbackModal}
          curriculoData={curriculoData}
        />
      </Modal>

      <InputsContainer className='inputsContainer'>
        <FormTitle>{labels.FormDownloadTitle} :D</FormTitle>
        <FormParagraph>{labels.FormDownloadMessage}</FormParagraph>

        <PreviewPDFMobile>
          {curriculoCanvas ? (
            <PreviewPDF curriculoCanvas={curriculoCanvas} />
          ) : (
            <Spinner fontSize={16} />
          )}
        </PreviewPDFMobile>

        <ModelosMobile>
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
        </ModelosMobile>

        {pdfUrl && !curriculoLoading ? (
          <LinkDownload
            download={`Curriculo_${curriculoData.nome}`}
            href={pdfUrl}
            onClick={handleDownloadPdf}
          >
            Download PDF
            <FaDownload />
          </LinkDownload>
        ) : (
          <FormParagraph>{labels.Loading}...</FormParagraph>
        )}

        {curriculoCanvas && !curriculoLoading ? (
          <LinkDownload
            download={`Curriculo_${curriculoData.nome}`}
            href={curriculoCanvas.toDataURL()}
            onClick={handleDownloadPng}
          >
            Download PNG
            <FaDownload />
          </LinkDownload>
        ) : (
          <FormParagraph>{labels.Loading}...</FormParagraph>
        )}

        <ButtonsContainer>
          <FormButton onClick={previousStep}>
            <FaAngleLeft />
            {labels.FormPrevious}
          </FormButton>
        </ButtonsContainer>
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
    </FormDownloadContainer>
  );
};

export default FormDownload;
