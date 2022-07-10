
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbars from './components/Navbars';

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Navbars/>
     </BrowserRouter>
    </div>
  );
}

export default App;
