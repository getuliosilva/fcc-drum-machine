import Display from './Display.js'
import PadGroup from './PadGroup'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './global.css'
import { useState } from 'react'

function App() {
  const [displayMessage, setDisplayMessage] = useState('## POWERSYNTHS 3000 ##')

  function handleDisplay(message){
    setDisplayMessage(message)
  }

  return (
    <Container fluid className='vh-100 border'>
      <Row id='drum-machine' className='h-50 m-5 w-25 bg-light border border-dark justify-content-center align-items-center mx-auto shadow rounded'>
        <Row className=''>
          <p className='monospace rounded w-50 text-center border '>POWERSYNTHS 3000</p>
          <Display displayMessage={displayMessage}/>
        </Row>
        <Row className='justify-content-center h-50'>
          <PadGroup handleDisplay={handleDisplay}/>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
