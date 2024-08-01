import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { TabProvider } from './context';
import TravelPage from './pages/TravelPage/TravelPage';
import Travels from './pages/Travles/Travels';
import ContactUs from './pages/ContactUs/ContactUs';
// import RulePage from './pages/RulesPage/RulesPage';

function App() {
  return (
    <>
      <TabProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/travelpage' element={<TravelPage />} />
          <Route path='/travels' element={<Travels />} />
          <Route path='/contactus' element={<ContactUs />} />
          {/* <Route path='/rulespage' element={<RulePage />} /> */}
        </Routes>
      </TabProvider>
    </>
  );
}
export default App;
