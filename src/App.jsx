import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { TabProvider } from './context';
function App() {
  return (
    <>
      <TabProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </TabProvider>
    </>
  );
}

export default App;
