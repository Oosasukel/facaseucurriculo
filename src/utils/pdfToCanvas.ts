import workerURL from './pdf.worker.min.es5.data';

var pdfjsLib = require("pdfjs-dist/es5/build/pdf");

/** This function returns a canvas or undefined if pdfUrl is not valid */
function pdfToCanvas(pdfUrl: string | null | undefined): Promise<HTMLCanvasElement | null> {
  return new Promise(resolve => {
    if (pdfUrl) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = workerURL;
  
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
  
      loadingTask.promise.then(function (pdf: any) {
        pdf.getPage(1).then(function (page: any) {
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
              resolve(canvas);
            });
          } else {
            resolve(null);
          }
        });
      });
    }
    else{
      resolve(null);
    }
  });
}

export default pdfToCanvas;