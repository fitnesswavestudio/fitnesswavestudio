import "./App.scss";
import { Pages } from "./Components/Pages/Pages";
import { LoginSignup } from "./Components/Pages/LoginSignup/LoginSignup";
import { Error } from "./Components/Pages/Error/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginSignup />} />
        <Route path="*" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
