const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'NP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Narendra Pandey',
  role: 'Developer and a Programmer',
  // description:'',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/pandey-narendra',
    github: 'https://github.com/Pandey-Narendra',
  },
}

const experience = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Goldengate Technolabs',
    description: [
      `In my web development journey, I’ve gained extensive experience in React JS, Laravel, WordPress, MySQL and
      more. I’ve been deeply involved in developing, maintaining, and deploying websites for diverse clients. I prioritize
      project clarity through client meetings, detailed documentation, and streamlined Jira management`,

      `Utilized essential features and libraries like React Hooks, Axios, React Redux-Toolkit, React Router and more, to craft
      dynamic web applications. Additionally, integrating React.js within Laravel and Gatsby with WordPress
      (Headless CMS). This integration involved utilizing essential React features and libraries to ensure versatile and
      efficient development across diverse frameworks and platforms`,
    ],
    stack: ['React', 'HTML', 'CSS'],
    // sourceCode: 'https://github.com/Pandey-Narendra/Tic_Tac_toe',
    // livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
  },
  {
    name: 'Goldengate Technolabs',
    description: [
      `In my web development journey, I’ve gained extensive experience in React JS, Laravel, WordPress, MySQL and
      more. I’ve been deeply involved in developing, maintaining, and deploying websites for diverse clients. I prioritize
      project clarity through client meetings, detailed documentation, and streamlined Jira management`,
    ],
    stack: ['React', 'HTML', 'CSS'],
    // sourceCode: 'https://github.com/Pandey-Narendra/Tic_Tac_toe',
    // livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
  },
];

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tic Tac Toe',
    description: [
      `In this Application players can edit their names, easy to differentiate players turns, dynamically updating after each move,
      identifies winning as well as draw conditions and declares a winner or draw, stores the history of moves and more.`,
    ],
    stack: ['React', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Pandey-Narendra/Tic_Tac_toe',
    livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
  },
  {
    name: 'TO-DO-Application',
    description: [
      `This application serves as a practical tool for users to efficiently manage their tasks. Users can seamlessly create a list of
      tasks that require completion, and as they accomplish each task, they have the ability to delete it from the list.`,
    ],
    stack: ['React', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Pandey-Narendra/TO-DO-Application',
    livePreview: 'https://pandey-narendra.github.io/TO-DO-Application/',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Material UI',
  'React',
  'PHP',
  'Laravel',
  'Wordpress',
  'MySQL',
  'Git',
  'Jira',
  'Postman',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pandeynarendra7487@mail.com',
}

export { header, about, experience,projects, skills, contact }
