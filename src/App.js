import Landing from "./home";
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
   <div>
    <div className="w-[100vw] h-full">
      <Landing />
    </div>
    <div className="w-full h-full bg-black ">
      <Dashboard />
    </div>
    <div className="w-full h-full bg-black ">
      <Dashboard />
    </div>
   </div>
  );
}

export default App;
