import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import LoginPage from "./pages/LoginPage";
import UserInfoPage from "./pages/UserInfoPage";
import LoadingPage from "./pages/LoadingPage";
import PachinkoPage from "./pages/PachinkoPage";
import RoutePage from "./pages/RoutePage";
import PaymentPage from "./pages/PaymentPage";
import MyReservations from "./pages/MyReservations";
import GoogleMapComponent from "./pages/GoogleMapComponent";
import ResultPage from "./pages/ResultPage";
import AddStorePage from "./pages/AddStorePage";
import Qrtest from "./pages/qrtest";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userinfo" element={<UserInfoPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/pachinko" element={<PachinkoPage />} />
        <Route path="/route" element={<RoutePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/myreservation" element={<MyReservations />} />
        <Route path="/addstore" element={<AddStorePage />} />
        <Route path="/qrtest" element={<Qrtest />} />
        {/* <Route path="/map" element={<GoogleMapComponent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
