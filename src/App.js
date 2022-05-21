import './App.css';
import Dashboard from './components/Dashboard'
import Menu from './components/Menu';


function App() {
  return (
    <div className="w-[100vw] h-full   flex">
      <Dashboard />
      <Menu/>
    </div>
  );
}

export default App;
