import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;
