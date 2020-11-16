import workerURL from './pdf.worker.min.es5.data';

var pdfjsLib = require('pdfjs-dist/es5/build/pdf');

interface pdfToCanvasResponse {
  canvas: HTMLCanvasElement | null;
  pages: number;
}

/** This function returns a canvas or undefined if pdfUrl is not valid */
function pdfToCanvas(
  pdfUrl: string | null | undefined,
  pageToDisplay: number
): Promise<pdfToCanvasResponse> {
  return new Promise((resolve) => {
    if (pdfUrl) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = workerURL;

      const loadingTask = pdfjsLib.getDocument(pdfUrl);

      loadingTask.promise.then(function (pdf: any) {
        const pages = pdf.numPages;

        if (pageToDisplay > pages) {
          pageToDisplay = pages;
        }

        pdf.getPage(pageToDisplay).then(function (page: any) {
          const viewport = page.getViewport({ scale: 2 });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          if (context) {
            const renderContext = {
              canvasContext: context,
              viewport: viewport,
            };

            page.render(renderContext).promise.then(() => {
              resolve({ canvas, pages });
            });
          } else {
            resolve({ canvas: null, pages: 0 });
          }
        });
      });
    } else {
      resolve({ canvas: null, pages: 0 });
    }
  });
}

export default pdfToCanvas;
