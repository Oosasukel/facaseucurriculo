import React from 'react';
import { FaAngleLeft, FaDownload } from 'react-icons/fa';
import FormButton from '../../../../../components/FormButton';
import Spinner from '../../../../../components/Spinner';
import { CurriculoData } from '../../model';
import PreviewPDF from '../../PreviewPDF';
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
  return (
    <FormDownloadContainer>
      <InputsContainer>
        <FormTitle>Currículo pronto! :D</FormTitle>
        <FormParagraph>
          Escolha em qual formato deseja fazer o download.
        </FormParagraph>

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
          >
            Download PDF
            <FaDownload />
          </LinkDownload>
        ) : (
          <FormParagraph>Carregando...</FormParagraph>
        )}

        {curriculoCanvas ? (
          <LinkDownload
            download={`Curriculo_${curriculoData.nome}`}
            href={curriculoCanvas.toDataURL()}
          >
            Download PNG
            <FaDownload />
          </LinkDownload>
        ) : (
          <FormParagraph>Carregando...</FormParagraph>
        )}

        <ButtonsContainer>
          <FormButton onClick={previousStep}>
            <FaAngleLeft />
            Voltar
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
