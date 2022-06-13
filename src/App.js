import "./App.css";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import ClientsOverview from "./components/ClientsOverview";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import Signup from './components/SignUps/Signup'
import Login from './components/SignUps/Login'
import AddClient from './components/SignUps/AddClient'
import PageNotFound from './components/SignUps/PageNotFound'
import logo from './assets/yummy.png'
import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import ResetPassword from './components/SignUps/resetPassword'
import Restaurantprofile from "./components/SignUps/Restaurantprofile";

function App() {

  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    setLoading(true)

    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [])


  const subRoutesData = [{name: 'dashboard', element: <Main />}, {name: 'orders', element: <Main2 />}, {name: 'overview', element: <ClientsOverview />}, {name: 'menu', element: <Menu />}, {name: 'profile', element: <Profile />}]

  const subRoutes = subRoutesData.map((subroute, index)=>{
    return <Route key={index} path={subroute.name} element={subroute.element} />
  })
  
  return (
    <div className="App">
    {
      loading ?
        <div className='w-screen h-screen flex items-center justify-center '>
          <Fade duration={300}>
            <img className='logo' src={logo} alt="logo" width='300px' />
          </Fade>
        </div>
      :
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user" element={<Dashboard />}>
          {subRoutes}
        </Route>
        <Route path="/register" exact element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route  path='*' element={<PageNotFound />} />
        <Route path='/addClient' element={<AddClient />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/createProfile' element={ <Restaurantprofile /> } />
      </Routes>
    }
    </div>
  );
}

export default App;
