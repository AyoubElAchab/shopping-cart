import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/header/Header';
import Pages from './pages/Pages';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Pages/> } />
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
