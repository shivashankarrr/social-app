import './App.css'
import Signin from './components/pages/Signin'
import Home from './components/pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin></Signin>}/> 
        <Route path="/" element={<Home></Home>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
