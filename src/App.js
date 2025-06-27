import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import GoogleMapComponent from "./pages/GoogleMapComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path="/map" element={<GoogleMapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
