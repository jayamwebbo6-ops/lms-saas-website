import Router from "./components/Admin/AdminRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRouter from "./components/Admin/AdminRouter";
import InstituteRouter from "./components/Institute/InstituteRouter";
const App = () => {
  return (
    <BrowserRouter basename="/lms-saas/">
      <Routes>
       
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/institute/*" element={<InstituteRouter />} />
      </Routes>
    </BrowserRouter>
  
  );
};

export default App;




