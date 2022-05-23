
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Purchase from './components/Pages/Purchase';
import Navigation from './components/Shared/Navigation';
import RequireAuth from './components/Utilities/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchase/:toolId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
