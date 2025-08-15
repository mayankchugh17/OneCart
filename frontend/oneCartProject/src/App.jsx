import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Nav from './component/Nav.jsx';
import { useContext } from 'react';
import { userDataContext } from './context/UserContext.jsx';

function App() {
  const { userData } = useContext(userDataContext);
  return ( 
  <>
    {userData && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  </> );
}

export default App;