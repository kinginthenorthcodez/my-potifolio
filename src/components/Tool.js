import tool1 from '../assets/img/skills/tool1.svg';
import tool2 from '../assets/img/skills/tool2.png';
import tool3 from '../assets/img/skills/tool3.svg';
import tool4 from '../assets/img/skills/tool4.svg';
import tool5 from '../assets/img/skills/tool5.png';
import tool6 from '../assets/img/skills/tool6.png';
import tool7 from '../assets/img/skills/tool7.png';
import tool8 from '../assets/img/skills/tool8.png';

const Tool = () => {
  return (
    <div className='img-tab tool-img'>
      <img src={tool1} alt='netlify' />
      <img src={tool2} alt='Rspec' />
      <img src={tool3} alt='PostgreSQL' />
      <img src={tool4} alt='Webpack' />
      <img src={tool5} alt='MySQL' />
      <img src={tool6} alt='MongoDB' />
      <img src={tool7} alt='Git' />
      <img src={tool8} alt='GitHub' />
    </div>
  );
};

export default Tool;
