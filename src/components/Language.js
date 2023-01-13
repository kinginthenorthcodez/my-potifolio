import lang1 from '../assets/img/skills/lang1.png';
import lang2 from '../assets/img/skills/lang2.svg';
import lang3 from '../assets/img/skills/lang3.png';
import lang4 from '../assets/img/skills/lang4.svg';
import lang5 from '../assets/img/skills/lang5.png';

const Language = () => {
  return (
    <div className='img-tab lang-img'>
      <img src={lang1} alt='C++' />
      <img src={lang2} alt='Javascript' />
      <img src={lang3} alt='Html' />
      <img src={lang4} alt='CSS' />
      <img src={lang5} alt='Ruby' />
    </div>
  );
};

export default Language;
