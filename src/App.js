import "./App.css";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PrintDocument from "./pdf-template/PrintDocument";
import Blog from "./pages";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NewFeature from "./pages/NewFeature";
function App() {
  return (
    <div>
      {/* <h1>Downlaod Pdf</h1>
    <div >
    <PDFViewer style={{width:"100%",height:"80vh"}}>
        <PrintDocument />
    </PDFViewer>
    </div>
      <PDFDownloadLink document={<PrintDocument fileName={`pdf`} />}>
        {({ loading }) => !loading && <button>Download Pdf</button>}
      </PDFDownloadLink> */}
      <DndProvider backend={HTML5Backend}>
        <Blog />
        <NewFeature />
      </DndProvider>
    </div>
  );
}

export default App;
