import React from 'react'
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Container>
          <h1>Home</h1>
        </Container>
        <Footer/>
      </div>
    </>
  )
}
