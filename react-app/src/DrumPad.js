import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useState, useEffect, useRef } from 'react';

function DrumPad(props) {

  const audioRef = useRef(null)

  if(props.isClicked === true){
    playAudio()
  }

  function playAudio(){
    audioRef.current.play()
    audioRef.current.currentTime = 0
  }

  if(props.isClicked === false){
    return (
      <Row className='justify-content-center col-3 m-1'>
        <Button
          id={props.id}
          variant='primary'
          size='lg'
          className='drum-pad text-center btn-danger border border-dark'
          onClick={playAudio}
        >
          {props.label}
          <audio
            id={props.label}
            className='clip'
            src={props.soundFile}
            preload='auto'
            ref={audioRef}
          >
          </audio>
        </Button>
      </Row>
    )
  }
  else {
    return (
      <Row className='justify-content-center col-3 m-1'>
        <Button
          id={props.id}
          variant='primary'
          size='lg'
          className='drum-pad text-center btn-danger border border-dark active'
          onClick={playAudio}
        >
          {props.label}
          <audio
            id={props.label}
            className='clip'
            src={props.soundFile}
            preload='auto'
            ref={audioRef}
          >
          </audio>
        </Button>
      </Row>
    )
  }
}

export default DrumPad;
