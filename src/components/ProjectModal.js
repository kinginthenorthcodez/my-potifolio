import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Badge } from 'react-bootstrap';
import proImg from '../assets/img/Airpollutionapp.png';

function ProjectModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='modalProj'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter' className='modalTitle'>
          <h1 className='modalTitleTx'>Latest Project</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='proTitle'>{props.title}</h4>
        <img src={props.imgUrl} alt={props.title} className='proImg' />
        <p className='proDescription'>{props.description}</p>
        <div className='proTags'>
          <span>
            <Badge bg='secondary'>{props.tags[0]}</Badge>
          </span>
          <span>
            <Badge bg='primary'>{props.tags[1]}</Badge>
          </span>
          <span>
            <Badge bg='success'>{props.tags[2]}</Badge>
          </span>
          <span>
            <Badge bg='secondary'>{props.tags[3]}</Badge>
          </span>
          <span>
            <Badge bg='primary'>{props.tags[4]}</Badge>
          </span>
        </div>
        <div className='proLinks p-3 d-flex justify-content-evenly'>
          <Button
            href={props.sourceLink}
            target='_blank'
            className='sourceLink'
          >
            See Source
          </Button>
          <Button href={props.liveLink} target='_blank' className='liveLink'>
            See Live
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
