import { Routes, Route } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import SecondPage from "./Pages/SecondPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
