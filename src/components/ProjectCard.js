import { Col, Badge } from 'react-bootstrap';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import Button from 'react-bootstrap/Button';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const ProjectCard = ({ title, description, imgUrl, ...rest }) => {
  const gaEventTracker = useAnalyticsEventTracker('Project-details view');
  const [modalShow, setModalShow] = useState(false);
  const details = {
    id: rest.id,
    title: title,
    description: description,
    tags: rest.tags,
    imgUrl: imgUrl,
    liveLink: rest.liveLink,
    sourceLink: rest.sourceLink,
  };
  return (
    <>
      <Col sm={6} md={4}>
        <div className='proj-imgbx'>
          <img src={imgUrl} alt='project' />
          <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description.substring(0, 78) + '...'}</span>
            <p className='d-tags'>
              {details.tags.map((tag) => (
                <Badge bg='primary'>{tag}</Badge>
              ))}
            </p>
            <div className='projBtn'>
              <Button
                variant='primary'
                onClick={(() => setModalShow(true), gaEventTracker(title))}
              >
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Col>
      <ProjectModal
        show={modalShow}
        {...details}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProjectCard;
