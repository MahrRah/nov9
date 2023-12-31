import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'HIIII', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'i ate a croissaint', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Harpy',
  subtitle: 'I love to eat croissaint.',
  cta: 'Know more abt me!',
};

// ABOUT DATA
export const aboutData = {
  title: 'MY FAV FOOOOD',
  img: 'harpseal.png',
  paragraphOne: 'I ate a quaso for breakfast and for lunch and for dinner.',
  paragraphTwo: 'It tasted so delicious, i want to eat it again.',
  paragraphThree: 'I want 100 croissaints for my christmas present.',
  resume: 'https://www.linkedin.com/in/yuliskov/', // if no resume, the button will not show up
  btn: 'next',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  title: '',
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export const copyrightInfo = {
  isEnabled: false, // set to false to disable
};

export const disclaimerData = {
  title: 'Використання персональних даних',
  cta: 'Творець цієї сторінки НЕ дає згоду на поширення персональної інформації. Сторінка призначена тільки для огляду на НТУ ДП.',
  btn: '',
  url: '',
};

export const motivationData = {
  title: 'Чому я обрав НТУ ДП',
  cta:
    'Я обрав Національний технічний університет, бо тут: по-перше, навчають актуальним спеціальностям, таким як Інженерія програмного забеспечення. ' +
    'По-друге, тут висококваліфіковані викладачі, які концентрують увагу на розумінні матеріалу та практичних ' +
    'навичках для майбутньої роботи. По-третє, тут хороша атмосфера, що робить навчання більш приємним і колектив групи більш товариським.',
  btn: 'Сайт НТУ ДП',
  url: '',
  btn2: 'Кафедра ПЗКС',
  url2: '',
};

export const mediaData = {
  title: 'Про НТУ ДП',
  videoId: 'UeoLPhtWfMA',
};
