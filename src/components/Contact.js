import { useForm, ValidationError } from '@formspree/react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const Contact = () => {
  const gaEventTracker = useAnalyticsEventTracker('Form submission');
  const [state, handleSubmit] = useForm('mwkjkgyr');

  if (state.succeeded) {
    return (
      <>
        <div className='my-note'> Thank you, will get in touch shortly!</div>
        {setTimeout(() => {
          window.location.reload();
        }, 3000)}
      </>
    );
  }

  return (
    <section className='contact' id='contact'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='contact me' />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form
              name='contact-form'
              onSubmit={handleSubmit}
              data-netlify='true'
            >
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='hidden'
                    name='subject'
                    value='Sales inquiry from kinginthenorthcodez.netlify.app'
                  />
                  <input type='hidden' name='form-name' value='contact-form' />
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='firstName:'
                  />
                  <ValidationError
                    field='firstName'
                    prefix='firstName'
                    errors={state.errors}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='lastName:'
                    required
                  />
                  <ValidationError
                    field='lastName'
                    prefix='lastName'
                    errors={state.errors}
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='email:'
                    required
                  />
                  <ValidationError
                    field='email'
                    prefix='Email'
                    errors={state.errors}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='Phone No:'
                  />
                  <ValidationError
                    field='phone'
                    prefix='Phone'
                    errors={state.errors}
                  />
                </Col>
                <Col>
                  <textarea
                    rows='6'
                    name='message'
                    id='message'
                    placeholder='Message:'
                    required
                  />
                  <ValidationError
                    field='message'
                    prefix='Message'
                    errors={state.errors}
                  />
                  <button
                    name='submit'
                    type='submit'
                    disabled={state.submitting}
                    onClick={() => gaEventTracker('form-submit')}
                  >
                    {state.submitting ? 'Sending' : 'send'}
                  </button>
                </Col>
                {state.succeeded && (
                  <Col>
                    <div className='success'>
                      <p>Form recieved!</p>
                    </div>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
