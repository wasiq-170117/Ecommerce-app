import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Policy from '../src/pages/Policy';
import PagenotFound from '../src/pages/PagenotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/register' element = {<Register />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/policy' element = {<Policy />} />
      <Route path='/*' element = {<PagenotFound />} />
    </Routes>
  );
}

export default App;
