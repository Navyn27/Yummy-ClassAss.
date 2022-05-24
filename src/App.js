import "./App.css";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Main from "./components/AboutUs";
import Main2 from "./components/Main2";
import ClientsOverview from "./components/ClientsOverview";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/user" element={<Dashboard />}>
          <Route path="dashboard" element={<Main />} />
          <Route path="orders" element={<Main2 />} />
          <Route path="overview" element={<ClientsOverview />} />
          <Route path="menu" element={<Menu />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
