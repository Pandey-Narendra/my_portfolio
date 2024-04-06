const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: 'https://pandey-narendra.github.io/my_portfolio/',
	title: 'NP.',
}

const about = {
	// all the properties are optional - can be left empty or deleted
	name: 'Narendra Pandey',
	role: 'Developer and a Programmer',
	description:`I am a seasoned Web Developer with over 2 years of professional experience. Specialize in developing, maintaining, and deploying websites for diverse clients.
	`,
	resume: 'https://drive.google.com/file/d/1hM3Id01Jqk5AwaWKRq8fEhDPyb7uqPVJ/view?usp=drive_link',
	social: {
		linkedin: 'https://linkedin.com/in/pandey-narendra',
		github: 'https://github.com/Pandey-Narendra',
	},
}

const experiences = [
	// projects can be added and removed
	// if there are no projects, Projects section won't show up
	
	{
		name: 'Goldengate Technolabs',
		duration: 'August 2022 - October 2023',
		post: 'Web Developer',
		description: [
			`I’ve gained extensive experience in React JS, Laravel, WordPress, MySQL and more.`,
			`I’ve been deeply involved in developing, maintaining, and deploying websites for diverse clients.`,
			`Prioritized project clearity by meeting clients, writing detailed docs, and keeping things organized in Jira.`,
			`Additionally, integrating React.js within Laravel and Gatsby Js with WordPress (Headless CMS).`,
		],
		stack: ['React','Laravel', 'PHP','Wordpress', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git', 'Jira'],
		// sourceCode: 'https://github.com/Pandey-Narendra/Tic_Tac_toe',
		livePreview: 'https://goldengatetechnolabs.com/',
	},

	{
		name: 'GEC - Dahod',
		duration: 'January 2022 – May 2022',
		post: 'Web Developer',
		description: [
			`Worked on the GEC Dahod website, concentrating on understanding its flow and developing dynamic modules while ensuring the maintenance of dependencies by following directives from the HOD and internal mentor..`,
		],
		stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
		// sourceCode: 'https://github.com/Pandey-Narendra/Tic_Tac_toe',
		livePreview: 'https://gecdahod.ac.in/',
	},
];

const projects = [
	// projects can be added and removed
	// if there are no projects, Projects section won't show up

	{
		name: 'Snapgram',
		description: [
			`Developed a fully functional application with features similar to Instagram, where users can create, update, delete,
			like, explore, search and save posts with proper authentication and more. Used Appwrite, React Query for back-end
			and Shadcn UI, React Js for the front-end.`,
		],
		stack: ['Appwrite', 'React Query', 'Shadcn UI', 'React Js', 'TypeScript', 'Tailwind CSS'],
		sourceCode: 'https://github.com/Pandey-Narendra/not_instragram',
		livePreview: 'https://not-instragram.vercel.app/',
	},

	{
		name: 'Figma Liveblocks',
		description: [
			`Create a web application similar to Figma for collaborative design work. Utilize Liveblocks for real-time collaboration, Fabric.js for canvas interactions, Shadcn UI for UI components, Next.js for development efficiency, TypeScript for code quality, and Tailwind CSS for styling.`,
		],
		stack: ['Liveblocks', 'Fabric Js', 'Shadcn UI', 'Next Js', 'TypeScript', 'Tailwind CSS'],
		sourceCode: 'https://github.com/Pandey-Narendra/figma_clone/',
		livePreview: 'https://figma-liveblocks.vercel.app',
	},

	{
		name: 'Expense Tracker',
		description: [
			`Developed a Expense Tracker application, designed to help users manage their finances effectively. This application allows users to track their expenses, income, and overall financial transactions seamlessly.`,
		],
		stack: ['React Js'],
		sourceCode: 'https://github.com/Pandey-Narendra/Expense-Tracker/',
		livePreview: 'https://pandey-narendra.github.io/Expense-Tracker/',
	},

	{
		name: 'Tic Tac Toe',
		description: [
			` In this Application players can edit their names, easy to differentiate players turns, dynamically updating after each move,
			identifies winning as well as draw conditions and declares a winner or draw, stores the history of moves and more.`,
		],
		stack: ['React Js'],
		sourceCode: 'https://github.com/Pandey-Narendra/Tic_Tac_toe',
		livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
	},

	{
		name: 'TO-DO',
		description: [
			`This application serves as a practical tool for users to efficiently manage their tasks. Users can seamlessly create a list of
			tasks that require completion, and as they accomplish each task, they have the ability to delete it from the list.`,
		],
		stack: ['React Js'],
		sourceCode: 'https://github.com/Pandey-Narendra/TO-DO-Application',
		livePreview: 'https://pandey-narendra.github.io/TO-DO-Application/',
	},

	{
		name: 'Monolithic Authentication System',
		description: [
			`The application’s front-end is developed using React.js and the back-end is built on Laravel‘s MVC
			pattern, MySQL as a monolithic application which allows register, login and more to manage their profiles through a user-friendly interface.`,
		],
		stack: ['React Js', 'Laravel', 'Breeze', 'Inertia Js', 'MySQL'],
		sourceCode: 'https://github.com/Pandey-Narendra/laravel_React_Inertia',
		// livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
	},

	{
		name: 'Realtime Chat Application',
		description: [
			`This is a real-time messaging system built with Laravel for the backend, Vue.js for the frontend, and MySQL for secure data storage. WebSockets are used for instant client-server communication, with Pusher ensuring efficient message transmission.`,
		],
		stack: ['Laravel', 'Vue js', 'MySQL', 'WebSockets', 'Pusher', 'Bootstrap'],
		sourceCode: 'https://github.com/Pandey-Narendra/Chat_Application',
		// livePreview: 'https://pandey-narendra.github.io/TO-DO-Application/',
	},

	{
		name: 'POSTMAN API Testing',
		description: [
			`The Authentication Validation system built using Laravel and tested using Postman. The system includes features such
			as login, registration, change password, and forget password.`,
		],
		stack: ['Laravel', 'Postman'],
		sourceCode: 'https://github.com/Pandey-Narendra/AuthenticateWithPostman',
		// livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
	},
];

const skills = [
	// skills can be added or removed
	// if there are no skills, Skills section won't show up
	'Python',
	'Java',
	'C',
	'HTML',
	'CSS',
	'JavaScript',
	'Bootstrap',
	'Material UI',
	'React',
	'PHP',
	'Laravel',
	'Wordpress',
	'MySQL',
	'Git',
	'Heroku',
	'Jira',
	'Postman',
]

const contact = {
	// email is optional - if left empty Contact section won't show up
	email: 'pandeynarendra7487@mail.com',
}

export { header, about, experiences, projects, skills, contact }
