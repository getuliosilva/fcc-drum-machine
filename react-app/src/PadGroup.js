import DrumPad from './DrumPad';

import Row from 'react-bootstrap/Row'
import { useEffect, useState } from 'react';

function PadGroup(props) {
  const [keyArray, setKeyArray] = useState([
    {
      label: 'Q',
      keyCode: 81,
      instrument: 'SYNTH-1',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      isClicked: false
    },
    {
      label: 'W',
      keyCode: 87,
      instrument: 'SYNTH-2',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      isClicked: false
    },
    {
      label: 'E',
      keyCode: 69,
      instrument: 'SYNTH-3',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      isClicked: false
    },
    {
      label: 'A',
      keyCode: 65,
      instrument: 'PIANO-1',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
      isClicked: false
    },
    {
      label: 'S',
      keyCode: 83,
      instrument: 'PIANO-2',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
      isClicked: false
    },
    {
      label: 'D',
      keyCode: 68,
      instrument: 'PIANO-3',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
      isClicked: false
    },
    {
      label: 'Z',
      keyCode: 90,
      instrument: 'DRUM-1',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      isClicked: false
    },
    {
      label: 'X',
      keyCode: 88,
      instrument: 'DRUM-2',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
      isClicked: false
    },
    {
      label: 'C',
      keyCode: 67,
      instrument: 'DRUM-3',
      soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
      isClicked: false
    }
  ])

  useEffect( () => {
    document.addEventListener('keydown', handleKeyEvent)

    function handleKeyEvent(event){
      setKeyArray( prev => {
        let newKeyArray = prev.map(element => {
          if(element.keyCode === event.keyCode){
            element.isClicked = true
            props.handleDisplay(element.instrument)
          }
          return element
        })
        return newKeyArray
      })
    }

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [])

  useEffect( () => {
    document.addEventListener('keyup', handleKeyEvent)

    function handleKeyEvent(event){
      setKeyArray( prev => {
        let newKeyArray = prev.map(element => {
          if(element.keyCode === event.keyCode){
            element.isClicked = false
            props.handleDisplay('## POWERSYNTHS 3000 ##')
          }
          return element
        })
        return newKeyArray
      })
    }

    return () => {
      document.removeEventListener('keyup', handleKeyEvent)
    }
  }, [])

  const drumPadGroup = keyArray.map( element => {
    return <DrumPad
        key={element.label}
        id={element.label}
        label={element.label}
        soundFile={element.soundFile}
        isClicked={element.isClicked}
      />
  })

  return (
    <Row className='justify-content-center'>
      {drumPadGroup}
    </Row>
  );
}

export default PadGroup;
