import './App.css';
import DashBoard from './components/DashBoard';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <DashBoard />
    </div>
    </BrowserRouter>
  );
}

export default App;
