import { FC } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from './features/navigation/NavigationBar';
import Restaurant from './features/restaurant/Restaurant';
import DailyMenu from './features/restaurant/DailyMenu';
import SkiSlopes from './features/skiSlopes/SkiSlopes';
import SkiSlopesPrices from './features/skiSlopes/SkiSlopesPrices';
import Sauna from './features/sauna/Sauna';
import Reservation from './features/reservation/Reservation';
import SkiEquipment from './features/skiEquipment/SkiEquipment';
import Profile from './features/profile/Profile';
import Login from './features/profile/Login';

const App: FC = () => {
  return (
    <Router>
      <NavigationBar/>

      <Routes>
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/dailyMenu" element={<DailyMenu/>}/>
        <Route path="/skiSlopes" element={<SkiSlopes/>}/>
        <Route path="/skiSlopesPrices" element={<SkiSlopesPrices/>}/>
        <Route path="/skiEqipment" element={<SkiEquipment/>}/>
        <Route path="/sauna" element={<Sauna/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default App;
