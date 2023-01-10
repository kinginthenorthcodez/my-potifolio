import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
  const initialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(initialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (name, value) => {
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);

    setButtonText('Sending...');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        console.log('DATA:', res.json());
        setStatus({ success: true, message: 'Message sent Successfully!' });
        setFormDetails(initialDetails);
      })
      .catch((error) => {
        setStatus({
          success: false,
          message: 'Something went wrong,please resubmit.',
          error: error,
        });
      });
    setButtonText('Send');

    // let result = response.json();

    // if (result.code === 200) {
    //   setStatus({ success: true, message: 'Message sent Successfully!' });
    // } else {
    //   setStatus({
    //     success: false,
    //     message: 'Something went wrong,please resubmit.',
    //   });
    // }

    //REMEMBER: Above code reserved for server side submission
  };

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
                    value={formDetails.firstName}
                    onChange={(e) =>
                      onFormUpdate(e.target.name, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='lastName:'
                    value={formDetails.lastName}
                    onChange={(e) =>
                      onFormUpdate(e.target.name, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='email:'
                    value={formDetails.email}
                    onChange={(e) =>
                      onFormUpdate(e.target.name, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='Phone No:'
                    value={formDetails.phone}
                    onChange={(e) =>
                      onFormUpdate(e.target.name, e.target.value)
                    }
                  />
                </Col>
                <Col>
                  <textarea
                    rows='6'
                    name='message'
                    id='message'
                    placeholder='Message:'
                    value={formDetails.message}
                    onChange={(e) =>
                      onFormUpdate(e.target.name, e.target.value)
                    }
                  />
                  <button name='submit' type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? 'danger' : 'success'
                      }
                    >
                      {status.message}
                    </p>
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
