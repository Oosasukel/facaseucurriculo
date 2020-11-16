import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { pagesContext } from '..';
import Spinner from '../../../../components/Spinner';

import {
  NavigationContainer,
  NavigationItems,
  NavigationPagesButton,
  Preview,
  PreviewContainer,
} from './styles';

interface PreviewPdfProps {
  curriculoCanvas: HTMLCanvasElement;
}

const PreviewPDF: React.FC<PreviewPdfProps> = ({ curriculoCanvas }) => {
  const [pdfPages, setPdfPages] = useContext(pagesContext);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    drawPdf(curriculoCanvas);
  }, [curriculoCanvas]);

  const drawPdf = (pdfImage: HTMLCanvasElement) => {
    const canvas = (canvasRef.current as unknown) as HTMLCanvasElement;
    if (canvas) {
      const context = canvas.getContext('2d');

      canvas.width = pdfImage.width;
      canvas.height = pdfImage.height;

      if (context) {
        context.drawImage(pdfImage, 0, 0);
      }

      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (pdfPages.currentPage < pdfPages.pages) {
      setPdfPages({
        ...pdfPages,
        currentPage: pdfPages.currentPage + 1,
      });
    }
  };

  const handlePreviousPage = () => {
    if (pdfPages.currentPage > 1) {
      setPdfPages({
        ...pdfPages,
        currentPage: pdfPages.currentPage - 1,
      });
    }
  };

  return (
    <PreviewContainer>
      <Preview ref={canvasRef} enabled={!loading} />

      {loading ? (
        <Spinner fontSize={16} />
      ) : (
        <NavigationContainer enabled={pdfPages.pages > 1}>
          <NavigationItems>
            <NavigationPagesButton onClick={handlePreviousPage}>
              <FaAngleLeft />
            </NavigationPagesButton>
            <span>
              {pdfPages.currentPage}/{pdfPages.pages}
            </span>
            <NavigationPagesButton onClick={handleNextPage}>
              <FaAngleRight />
            </NavigationPagesButton>
          </NavigationItems>
        </NavigationContainer>
      )}
    </PreviewContainer>
  );
};

export default PreviewPDF;
