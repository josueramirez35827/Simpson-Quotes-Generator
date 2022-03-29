
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import Expanded from './components/Expanded';
import NoMatch from './components/NoMatch';

function App() {
  return (
<BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Results' element={<Results />} />
        <Route path='/Expanded' element={<Expanded />} />
        <Route path='*' element={<NoMatch />} />

      </Routes> 
</BrowserRouter>


  );
}

export default App;
