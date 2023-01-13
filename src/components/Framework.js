import frame1 from '../assets/img/skills/frame1.png';
import frame2 from '../assets/img/skills/frame2.png';
import frame3 from '../assets/img/skills/frame3.png';
import frame4 from '../assets/img/skills/frame4.svg';
import frame5 from '../assets/img/skills/frame5.svg';
import frame6 from '../assets/img/skills/frame6.png';

const Framework = () => {
  return (
    <div className='img-tab frame-img'>
      <img src={frame1} alt='Bootstrap' />
      <img src={frame2} alt='Ruby on Rails' />
      <img src={frame3} alt='ReactJs' />
      <img src={frame4} alt='NodeJS' />
      <img src={frame5} alt='Vite' />
      <img src={frame6} alt='ExpressJs' />
    </div>
  );
};

export default Framework;
