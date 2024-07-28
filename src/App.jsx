import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { TabProvider } from './context';
import TravelPage from './pages/TravelPage/TravelPage';
import Travels from './pages/Travles/Travels';

function App() {
  return (
    <>
      <TabProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/travelpage' element={<TravelPage />} />
          <Route path='/travels' element={<Travels />} />
        </Routes>
      </TabProvider>
    </>
  );
}
export default App;
