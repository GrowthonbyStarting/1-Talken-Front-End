import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState(1);
  //   const url = (pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  //     "Balance Place. PPT.pdf",
  //     import.meta.url
  //   ).toString());

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <Document
        file="public\assets\others\Balance Place. PPT.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document> */}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
