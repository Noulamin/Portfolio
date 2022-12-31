import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";
import LOL from "../containers/Home/lol";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="lol" element={<LOL/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
