const courses = [
	{
		varsity: "University of Barishal",
		year: 1,
		semester: 1,
		department: "Computer Science & Engineering",
		courses: [
			{
				title: "Introduction to Computer Systems",
				code: "CSE-1101",
				credit: 3,
				hours: 45,
			},

			{
				title: "Introduction to Computer Systems Lab",
				code: "CSE-1102",
				credit: 0.75,
				hours: 30,
			},

			{
				title: "Programming Fundamentals",
				code: "CSE-1103",
				credit: 3,
				hours: 45,
			},
			{
				title: "Programming Fundamentals Lab",
				code: "CSE-1104",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Physics",
				code: "PHY-1105",
				credit: 3,
				hours: 45,
			},

			{
				title: "Physics Lab",
				code: "PHY-1106",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Chemistry",
				code: "CHEM-1107",
				credit: 3,
				hours: 45,
			},

			{
				title: "Chemistry Lab",
				code: "CHEM-1108",
				credit: 0.75,
				hours: 45,
			},

			{
				title: "Differential Calculus and Co-ordinate Geometry",
				code: "MATH-1109",
				credit: 3,
				hours: 45,
			},

			{
				title: "English Communication Skills Lab",
				code: "ENG-1110",
				credit: 1.5,
				hours: 45,
			},
		],
	},

	{
		varsity: "University of Barishal",
		year: 1,
		semester: 2,
		department: "Computer Science & Engineering",
		courses: [
			{
				title: "Data Structures",
				code: "CSE-1201",
				credit: 3,
				hours: 45,
			},

			{
				title: "Data Structures Lab",
				code: "CSE-1202",
				credit: 0.75,
				hours: 30,
			},

			{
				title: "Discrete Mathematics",
				code: "CSE-1203",
				credit: 3,
				hours: 45,
			},

			{
				title: "Discrete Mathematics Lab",
				code: "CSE-1204",
				credit: 0.75,
				hours: 30,
			},

			{
				title: "Introduction to Electrical Engineering",
				code: "EEE-1205",
				credit: 3,
				hours: 45,
			},

			{
				title: "Introduction to Electrical Engineering Lab",
				code: "EEE-1206",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Basic Mechanical Engineering",
				code: "EEE-1207",
				credit: 3,
				hours: 45,
			},

			{
				title: "Engineering Drawing",
				code: "EEE-1208",
				credit: 0.75,
				hours: 30,
			},

			{
				title:
					"Integral Calculus, Ordinary and Partial Differential Equations, and Series Solutions",
				code: "MATH-1209",
				credit: 3,
				hours: 45,
			},

			{
				title: "Statistics and Probability",
				code: "STAT-1211",
				credit: 3,
				hours: 45,
			},
		],
	},

	{
		varsity: "University of Barishal",
		year: 2,
		semester: 1,
		department: "Computer Science & Engineering",
		courses: [
			{
				title: "Database Management Systems",
				code: "CSE-2101",
				credit: 3,
				hours: 45,
			},

			{
				title: "Database Management Systems Lab",
				code: "CSE-2102",
				credit: 1.5,
				hours: 30,
			},

			{
				title: "Digital Logic Design",
				code: "CSE-2103",
				credit: 3,
				hours: 45,
			},

			{
				title: "Digital Logic Design Lab",
				code: "CSE-2104",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Electronic Devices and Circuits",
				code: "EEE-2105",
				credit: 3,
				hours: 45,
			},

			{
				title: "Electronic Devices and Circuits Lab",
				code: "EEE-2106",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Object Oriented Programming",
				code: "CSE-2107",
				credit: 3,
				hours: 45,
			},

			{
				title: "Object Oriented Programming Lab",
				code: "CSE-2108",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Complex Variable and Matrices",
				code: "MATH-2109",
				credit: 3,
				hours: 45,
			},
		],
	},

	{
		varsity: "University of Barishal",
		year: 2,
		semester: 2,
		department: "Computer Science & Engineering",
		courses: [
			{
				title: "Design and Analysis of Algorithms",
				code: "CSE-2201",
				credit: 3,
				hours: 45,
			},

			{
				title: "Design and Analysis of Algorithms Lab",
				code: "CSE-2202",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Computer Architecture and Organization",
				code: "CSE-2203",
				credit: 3,
				hours: 45,
			},

			{
				title: "Data Communication",
				code: "CSE-2205",
				credit: 3,
				hours: 45,
			},

			{
				title: "Operating System",
				code: "CSE-2207",
				credit: 3,
				hours: 45,
			},

			{
				title: "Operating System Lab",
				code: "CSE-2208",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Web Engineering Lab",
				code: "CSE-2210",
				credit: 3,
				hours: 45,
			},

			{
				title: "Vectors, Fourier Analysis, and Laplace Transforms",
				code: "MATH-2211",
				credit: 3,
				hours: 45,
			},
		],
	},

	{
		varsity: "University of Barishal",
		year: 3,
		semester: 1,
		department: "Computer Science & Engineering",
		courses: [
			{
				title: "Microprocessors and Microcontrollers",
				code: "CSE-3301",
				credit: 3,
				hours: 45,
			},

			{
				title: "Assembly Language, Microprocessors, and Microcontrollers Lab",
				code: "CSE-3302",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Software Engineering and Information System Design",
				code: "CSE-3303",
				credit: 3,
				hours: 45,
			},

			{
				title: "Software Engineering and Information System Design Lab",
				code: "CSE-3304",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Computer Networks",
				code: "CSE-3305",
				credit: 3,
				hours: 45,
			},

			{
				title: "Computer Networks Lab",
				code: "CSE-3306",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Numerical Methods",
				code: "CSE-3307",
				credit: 3,
				hours: 45,
			},

			{
				title: "Financial and Managerial Accounting",
				code: "HUM-3109",
				credit: 2,
				hours: 30,
			},

			{
				title: "Economics",
				code: "HUM-3209",
				credit: 2,
				hours: 30,
			},

			{
				title: "Technical Writing and Presentation",
				code: "CSE-3114",
				credit: 1,
				hours: 30,
			},
		],
	},

	{
		varsity: "University of Barishal",
		year: 3,
		semester: 2,
		department: "Computer Science & Engineering",
		courses: [
			{
				title: "Mathematical Analysis for Computer Science",
				code: "CSE-3201",
				credit: 3,
				hours: 45,
			},

			{
				title: "Theory of Computation",
				code: "CSE-3203",
				credit: 3,
				hours: 45,
			},

			{
				title: "Artificial Intelligence",
				code: "CSE-3205",
				credit: 3,
				hours: 45,
			},

			{
				title: "Artificial Intelligence Lab",
				code: "CSE-3206",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Peripherals and Interfacing",
				code: "CSE-3207",
				credit: 3,
				hours: 45,
			},

			{
				title: "Peripherals and Interfacing Lab",
				code: "CSE-3208",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Simulation and Modeling",
				code: "CSE-3209",
				credit: 3,
				hours: 45,
			},

			{
				title: "Simulation and Modeling Lab",
				code: "CSE-3210",
				credit: 0.75,
				hours: 30,
			},

			{
				title: "Mobile Application Development Lab",
				code: "CSE-3212",
				credit: 1.5,
				hours: 30,
			},
		],
	},

	{
		varsity: "University of Barishal",
		year: 4,
		semester: 1,
		department: "Computer Science & Engineering",
		courses: [
			{
				title: "Compiler Design and Construction",
				code: "CSE-4103",
				credit: 3,
				hours: 45,
			},

			{
				title: "Compiler Design and Construction Lab",
				code: "CSE-4104",
				credit: 0.75,
				hours: 22.5,
			},

			{
				title: "System Programming",
				code: "CSE-4105",
				credit: 2,
				hours: 30,
			},

			{
				title: "System Programming Lab",
				code: "CSE-4106",
				credit: 1.5,
				hours: 45,
			},

			{
				title: "Computer Graphics",
				code: "CSE-4109",
				credit: 3,
				hours: 45,
			},

			{
				title: "Computer Graphics Lab",
				code: "CSE-4110",
				credit: 0.75,
				hours: 22.5,
			},

			{
				title: "Professional Ethics and Industrial Management",
				code: "HUM-3211",
				credit: 3,
				hours: 45,
			},
		],
	},
];

module.exports = courses;
