import './App.css';
import Dashboard from './components/Dashboard'
import Menu from './components/Menu';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="w-full h-full bg-black ">
      <Dashboard />
    </div>
  );
}

export default App;
