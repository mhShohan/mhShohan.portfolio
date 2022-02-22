export const slider = [
  { id: 1, img: './images/slider/1.jpg' },
  { id: 2, img: './images/slider/2.jpg' },
  { id: 3, img: './images/slider/3.jpg' },
  { id: 4, img: './images/slider/4.jpg' },
  { id: 5, img: './images/slider/5.jpg' },
  { id: 6, img: './images/slider/6.jpg' },
  { id: 7, img: './images/slider/7.jpg' },
  { id: 8, img: './images/slider/8.jpg' },
  { id: 9, img: './images/slider/9.jpg' },
  { id: 10, img: './images/slider/10.jpg' },
];

export const skills = {
  Languages: [
    { id: 1, name: 'Javascript', img: './images/skills/js.svg' },
    { id: 2, name: 'Typescript', img: './images/skills/ts.svg' },
    { id: 3, name: 'NodeJS', img: './images/skills/node.webp' },
    { id: 4, name: 'C/C++', img: './images/skills/cpp.svg' },
  ],
  libraries: [
    { id: 1, name: 'React', img: './images/skills/react.svg' },
    { id: 2, name: 'Redux', img: './images/skills/redux.svg' },
    { id: 3, name: 'Next.js', img: './images/skills/next.png' },
    { id: 4, name: 'Express.js', img: './images/skills/express.png' },
    { id: 5, name: 'Bootstrap', img: './images/skills/bootstrap.svg' },
    { id: 6, name: 'Material UI', img: './images/skills/mui.png' },
    { id: 7, name: 'TailwindCSS', img: './images/skills/tailwind.svg' },
  ],
  database: [
    { id: 1, name: 'MongoDB', img: './images/skills/mongo.png' },
    { id: 2, name: 'Firebase', img: './images/skills/firebase.svg' },
  ],
  tools: [
    { id: 1, name: 'Git', img: './images/skills/git.svg' },
    { id: 2, name: 'VS Code', img: './images/skills/vscode.png' },
    { id: 3, name: 'Postman', img: './images/skills/postman.png' },
    { id: 4, name: 'Figma', img: './images/skills/figma.svg' },
  ],
};

export const blogs = [
  {
    id: '1',
    title: 'How TypeScript can change your life',
    img: './images/blogs/ts.png',
    details:
      "JavaScript is now one of the most used programming languages, and it's fantastic at what it does. But it's not always strict enough. It will give us a lot of freedom, which sometimes is exactly what we want. But for big applications not ideal, as we can break parts over time An example of this might be a variable you have in your database, it's intended as a number, but one day it returns a stringed version of a number like 123. This might not be the end of the world, but let's say you were doing calculations with this, and always expected a number, so you don't parse it in any way.That's exactly where TypeScript would have warned you about the value not being correctly defined. So, what is TypeScript?' TypesScript is a superset of JavaScript, giving us static typing, classes, and interfaces.",
    source: {
      name: 'daily.dev',
      link: 'https://h.daily-dev-tips.com/how-typescript-can-change-your-life',
    },
  },
  {
    id: '3',
    title: 'Why I choose NextJS over CRA for new projects',
    img: './images/blogs/blog1.png',
    details:
      'When starting a new application, the main goal is to find product market fit. This means reducing distractions. With Create React App, we might need to build three different applications to test out our idea (Client App, Landing Page, API). With NextJS, we only need to build one app to test out our idea.NextJS allows us to build our landing page, application, and API server all in a monolith. We can write backend routes that interact with a database inside of the api/ directory, server side render pages that is important to SEO, and also render things in the client side if necessary.I want to build a monolith when kickstarting an app without compromising SEO. NextJS is the only tool that allows me to do that so that I can focus on solving problems for customers...',

    source: {
      name: 'dev.to',
      link: 'https://dev.to/andyrewlee/why-i-choose-nextjs-over-cra-for-new-projects-3f77',
    },
  },
  {
    id: '4',
    title: 'Never stop learning!',
    img: './images/blogs/never.jpg',
    details:
      "It's an endless game of learning. And most people either think it's a joke or think I'm crazy. But I'm not. This is why I got into development. The ever-changing ecosystem and upcoming frameworks fuel my endless need to learn and grow. Never stop learning comes to mind when thinking about what it means to be a good developer. And I would say this should be the fact for every single one of us. There is always something to learn, something that changed, or something you could improve on. It also means we are never at 100%, making the hunt to become your best self even more fun.",
    source: {
      name: 'daily.dev',
      link: 'https://h.daily-dev-tips.com/never-stop-learning',
    },
  },

  {
    id: '2',
    title: 'reduce() method in javascript',
    img: './images/blogs/code.png',
    details:
      "The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.The first time that the callback is run there is no 'return value of the previous calculation'. If supplied, an initial value may be used in its place. Otherwise, the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0). pretty intense ☝️.Actually, this one is quite tricky as compared to map and filter.for now understand this: Each element of the array passes through the function provided by us in order to give a single value as output.",

    source: {
      name: 'dev.to',
      link: 'https://dev.to/therajatg/reduce-method-in-javascript-138o',
    },
  },
];

//  mern-stack
//  psdToHTML
export const projects = [
  {
    id: 1,
    title: 'GPT3 - Figma to React',
    description:
      'This front-end web app is a convertion of figma template to React with vanilla CCS, It is a fully mobile responsive site.',
    viewFront: true,
    appType: 'frontend',
    img: './images/projects/gtp3.jpg',
    github: 'https://github.com/mhShohan/gpt3-figma-react',
    liveLink: 'https://gpt3-react-figma.netlify.app',
  },
  {
    id: 2,
    title: 'Admin Dashboard (React)',
    description:
      'This admin dashborad is created with react and vanilla CSS. Server site logic and database has not been implemented,',
    viewFront: true,
    appType: 'frontend',
    img: './images/projects/admin-dashboard.jpeg',
    github: 'https://github.com/mhShohan/admin-dashboard-react',
    liveLink: 'https://admin-dashboard2321.netlify.app',
  },
  {
    id: 3,
    title: 'Tesla Homepage Clone',
    description:
      'This is a clone of TESLA homepage. Its created with react, react-reveal and vanilla CSS',
    viewFront: true,
    appType: 'frontend',
    img: './images/projects/tesla.jpeg',
    github: 'https://github.com/mhShohan/Tesla_Homepage_Clone_with_React',
    liveLink: 'https://tesla-homepage-clone131.netlify.app/',
  },
  {
    id: 4,
    title: 'Expense Tracker (React, ContextAPI)',
    description:
      'A moble responsive front-end app created with React, ContextAPI and vanilla CSS. You can calculate your income/expense with this app.',
    viewFront: false,
    appType: 'frontend',
    img: './images/projects/expense-tracker.png',
    github: 'https://github.com/mhShohan/expense-tracker',
    liveLink: 'https://expense-tracker-mhs.netlify.app/',
  },
  {
    id: 5,
    title: 'React To-Do (ContextAPI & MUI5)',
    description:
      'A todo app created with React, ContextAPI and Material UI, Its only a Front-end app, no server site logic has been implemented.',
    appType: 'frontend',
    viewFront: false,
    img: './images/projects/MUI-todo-app.png',
    github: 'https://github.com/mhShohan/Todo-app-MaterialUI',
    liveLink: 'https://csb-94n9j.netlify.app/',
  },
  {
    id: 6,
    title: 'Simple tour App (Material UI)',
    description:
      "It's a simple front-end app created with React and Material UI. This app is created for  learning MUI-Material UI.",
    appType: 'frontend',
    viewFront: false,
    img: './images/projects/MUI-tour-app.jpg',
    github: 'https://github.com/mhShohan/MUI5-tour-app',
    liveLink: 'https://mui5-tour-app.netlify.app/',
  },
  {
    id: 7,
    title: 'CUDA - PSD to HTML',
    description:
      'Completely Mobile responsive website designed with HTML, CSS and Bootstrap.',
    viewFront: false,
    appType: 'psdToHTML',
    img: './images/projects/cuda.jpg',
    github: 'https://github.com/mhShohan/CUDA--PSD-to-HTML',
    liveLink: 'https://mhshohan.github.io/CUDA--PSD-to-HTML/',
  },
  {
    id: 8,
    title: 'BizPage - PSD to HTML',
    description:
      'Completely Mobile responsive website designed with HTML, CSS and Bootstrap.',
    viewFront: false,
    appType: 'psdToHTML',
    img: './images/projects/bizPage.jpg',
    github: 'https://github.com/mhShohan/BizPage-PSD-to-HTML',
    liveLink: 'https://mhshohan.github.io/BizPage-PSD-to-HTML/',
  },
  {
    id: 9,
    title: 'Digital Marketing - PSD to HTML',
    description:
      'Completely Mobile responsive website designed with HTML, CSS and Bootstrap.',
    viewFront: false,
    appType: 'psdToHTML',
    img: './images/projects/digital.jpg',
    github: 'https://github.com/mhShohan/Digital-Marketing--PSD-to-HTML-',
    liveLink: 'https://mhshohan.github.io/Digital-Marketing--PSD-to-HTML-/',
  },
];
