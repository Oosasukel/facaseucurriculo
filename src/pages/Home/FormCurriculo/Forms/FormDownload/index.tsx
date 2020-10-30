import React, { useContext, useEffect, useState } from 'react';
import { FaAngleLeft, FaDownload } from 'react-icons/fa';
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
} from '../../styles';
import {
  FormDownloadContainer,
  LinkDownload,
  PreviewPDFMobile,
} from './styles';
import FormFeedback from './FormFeedback';
import { firestoreDB } from '../../../../../services/firestore';
import { LanguageContext } from '../../../../../App';
import { messages } from '../../../../../languages';

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
}

const FormDownload: React.FC<Props> = ({
  previousStep,
  curriculoData,
  pdfUrl,
  curriculoCanvas,
}) => {
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

  const sendDataToStatistic = (type: string) => {
    firestoreDB
      .collection('downloads')
      .add({
        curriculo: curriculoData,
        type,
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

        {pdfUrl ? (
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

        {curriculoCanvas ? (
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
      </CurriculoContainer>
    </FormDownloadContainer>
  );
};

export default FormDownload;
