import React from "react";
import Home from "./components/Home";
import SolarPanelCalculator from "./components/SolarPanelCalculator";
import RenewableEnergyProviders from "./components/RenewableEnergyProviders";
import Donation from "./components/donation";
import {BrowserRouter,Routes,Route} from 'react-router-dom';  
import LoginPage from "./components/login";
import RegistrationPage from "./components/register";

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={[<Home/>]}></Route>
  <Route path="/energy" element={[<RenewableEnergyProviders/>]}></Route>
  <Route path="/donation" element={[<Donation/>]}></Route>
  <Route path="/calculater" element={[<SolarPanelCalculator/>]}></Route>
  <Route path="/login" element={[<LoginPage/>]}></Route>
  <Route path="/register" element={[<RegistrationPage/>]}></Route>
</Routes>
</BrowserRouter>

</>
    );
}

export default App;
