import React, { useEffect, useRef, useState } from 'react';
import Spinner from '../../../../components/Spinner';

import { Preview } from './styles';

interface PreviewPdfProps {
  curriculoCanvas: HTMLCanvasElement;
}

const PreviewPDF: React.FC<PreviewPdfProps> = ({ curriculoCanvas }) => {
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

  return (
    <>
      <Preview ref={canvasRef} enabled={!loading} />

      {loading && <Spinner fontSize={16} />}
    </>
  );
};

export default PreviewPDF;
