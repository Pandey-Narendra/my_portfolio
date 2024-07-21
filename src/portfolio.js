const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: 'https://pandey-narendra.github.io/my_portfolio/',
	title: 'NP.',
}

const about = {
	// all the properties are optional - can be left empty or deleted
	name: 'Narendra Pandey',
	role: 'Developer and a Programmer',
	description:`I'm a seasoned Web Developer with over 2 years of experience specializing in developing, maintaining, and deploying websites for diverse clients. Proficient in React JS, Laravel, WordPress, and MySQL, I optimize performance and streamline project management using Jira. My focus on advanced technologies ensures high-quality outcomes and reflects my dedication to continual learning and excellence in web development.`,
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
			`Developed proficiency in React JS development, Laravel development, and WordPress development alongside proficient MySQL usage. Skilled in Project Management, Deployment, Debugging, and API integration.`,
			`My role involved end-to-end website development, maintenance, and deployment for various clients, focusing on clear project communication via client meetings, detailed documentation, and efficient Jira management.`,
			`Built dynamic web applications using UI componets, Hooks, Axios, Redux, State Management, Router and more.`,
			`Developed and maintained over 30 websites, optimizing code and database queries for enhanced performance. Implemented code reusability strategies to reduce development time and ensure consistency across projects.`,
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
			`Contributed to the development and maintenance of the GEC Dahod website, implementing dynamic modules and ensuring adherence to project guidelines.`,
			`Employed HTML, CSS, Bootstrap, JavaScript, and jQuery for front-end development, and PHP and MySQL for back-end functionality, following established coding standards.`,
			`Collaborated with Head of Department (HOD) and internal mentors to understand project requirements and deliver solutions aligned with organizational goals.`
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
			`Developed an Instagram-like app using Appwrite for the back-end and Shadcn for UI components.`,
			`Implemented functionalities including explore, save, search posts, edit posts and profiles, like, and tags, utilizing
			React Query for data fetching.`,
		],
		stack: ['Appwrite', 'React Query', 'Shadcn UI', 'React Js', 'TypeScript', 'Tailwind CSS'],
		sourceCode: 'https://github.com/Pandey-Narendra/not_instragram',
		livePreview: 'https://not-instragram.vercel.app/',
	},

	{
		name: 'Figma Liveblocks',
		description: [
			`Designed a Figma-like collaborative web app using Liveblocks for real-time collaboration with data storage,
			Fabric.js for the canvas, and Shadcn for UI components.`,
			`Enabled multiple users to interact, create designs, and use live chat and reaction functionality.`,
		],
		stack: ['Liveblocks', 'Fabric Js', 'Shadcn UI', 'Next Js', 'TypeScript', 'Tailwind CSS'],
		sourceCode: 'https://github.com/Pandey-Narendra/figma_clone/',
		livePreview: 'https://figma-liveblocks.vercel.app',
	},
	{
		name: 'Management Panel',
		description: [
			`Built an Admin, User and product management. Enabled role-based access control and RESTful APIs,
			documented with Swagger and tested using Postman. REST and non-REST API access for flexibility.`,
		],
		stack: ['Laravel', 'Bootstrap', 'Swagger UI', 'Postman', 'MySQL', 'API Documentation'],
		sourceCode: 'https://github.com/Pandey-Narendra/admin_panel',
		// livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
	},
	{
		name: 'Shop Mart',
		description: [
			`Facilitates a seamless shopping experience for users and robust management for admins. Key features encompass real-time cart updates, checkout processing, invoice generation, and email notifications with the invoice.`,
		],
		stack: [' Bootstrap', 'Laravel', 'MySQL', ' jQuery', 'AJAX', 'Payment Systems', 'Mai'],
		sourceCode: 'https://github.com/Pandey-Narendra/task',
		// livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
	},
	{
		name: 'Blog API',
		description: [
			`Crafted a robust RESTful API for user authentication and blog post management, including efficient CRUD
			operations for users and management of categories, tags, and comments within the API infrastructure.`,
		],
		stack: ['RESTful API', 'Laravel', 'Swagger UI', 'Postman'],
		sourceCode: 'https://github.com/Pandey-Narendra/blog_Management_Restapi',
		// livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
	},
	{
		name: 'Monolithic Authentication System',
		description: [
			`Built a monolithic app using Laravel’s MVC pattern and MySQL for the back-end, and React JS for the
			front-end, featuring separate authenticated user and admin panels with profile management.`,
		],
		stack: ['React Js', 'Laravel', 'Breeze', 'Inertia Js', 'MySQL'],
		sourceCode: 'https://github.com/Pandey-Narendra/laravel_React_Inertia',
		// livePreview: 'https://pandey-narendra.github.io/Tic_Tac_toe/',
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
		name: 'Realtime Chat Application',
		description: [
			`This is a real-time messaging system built with Laravel for the backend, Vue.js for the frontend, and MySQL for secure data storage. WebSockets are used for instant client-server communication, with Pusher ensuring efficient message transmission.`,
		],
		stack: ['Laravel', 'Vue js', 'MySQL', 'WebSockets', 'Pusher', 'Bootstrap'],
		sourceCode: 'https://github.com/Pandey-Narendra/Chat_Application',
		// livePreview: 'https://pandey-narendra.github.io/TO-DO-Application/',
	}
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
	'Shadcn UI',
	'React',
	'PHP',
	'Laravel',
	'Wordpress',
	'MySQL',
	'Appwrite',
	'Git',
	'Heroku',
	'Vercel',
	'Jira',
	'Postman',
	'cPanel'
]

const contact = {
	// email is optional - if left empty Contact section won't show up
	email: 'pandeynarendra7487@mail.com',
}

export { header, about, experiences, projects, skills, contact }
