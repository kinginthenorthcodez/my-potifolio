import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Header = () => {
  const toRotate = [
    'Full stack Developer',
    'Web Developer',
    'Web Designer',
    'AI Enthusiast',
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = counter % toRotate.length;
    let fullText = toRotate[i];
    let upDatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(upDatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && upDatedText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && upDatedText === '') {
      setIsDeleting(false);
      setCounter(counter + 1);
      setDelta(500);
    }
  };

  return (
    <section className='header' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} xm={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated' : ''}>
                  <span className='tagline'>
                    Kinginthenorthcodez greets you!
                  </span>
                  <h1 className='txt-rotate '>
                    Hi, I'm a <span className='wrap'>{text}</span>
                  </h1>
                  <p>
                    🚀 🌍 I love everything binary and asynchronous plus huge
                    interest in climate change. Open to new job opportunities.
                  </p>
                  <button onClick={() => console.log('lets connect')}>
                    Let's Connect{' '}
                    <ArrowRightCircle color='orangered' size={24} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='header-img' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
