
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Navigation from './components/Shared/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
