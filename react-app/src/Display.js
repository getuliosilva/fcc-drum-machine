import Row from 'react-bootstrap/Row'

function Display(props) {
  return (
    <Row id="display" className='border border-dark rounded bg-danger p-2 text-dark bg-opacity-25 mx-auto align-items-center overflow-hidden'>
      <h1 className='display-font text-center text-danger m-1 overflow-hidden'>{props.displayMessage}</h1>
    </Row>
  );
}

export default Display;
