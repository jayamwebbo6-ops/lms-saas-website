import Router from "./components/Admin/AdminRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRouter from "./components/Admin/AdminRouter";
const App = () => {
  return (
    <BrowserRouter basename="/lms-saas/">
      <Routes>
          <Route path="/*" element={<AdminRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  
  );
};

export default App;




