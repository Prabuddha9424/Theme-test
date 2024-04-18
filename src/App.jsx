import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Buttons from "./pages/Buttons";
import Paragraph from "./pages/Paragraph";
import BreadcrumbComp from "./pages/BreadcrumbComp";
import Form1 from "./pages/Form1";
import FormLogin from "./pages/FormLogin";
import Components from "./layouts/Components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/button" element={<Buttons />} />
          <Route path="/text" element={<Paragraph />} />
          <Route path="/breadcrumb" element={<BreadcrumbComp />} />
          <Route path="/form-1" element={<Form1 />} />
          <Route path="/form-login" element={<FormLogin />} />
        </Route>
        <Route path="/sample-components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
