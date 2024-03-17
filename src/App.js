import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Navbar'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Events from './components/pages/Events.js'

export default function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
        <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
        <Routes>
        <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
        <Routes>
        <Route exact path='/events' element={<Events/>}></Route>
        </Routes>
        
    </Router>
      {/* <div>
        <Header/>
        <Container>
          <h1>Home</h1>
        </Container>
        <Footer/>
      </div> */}
    </>
  )
}
