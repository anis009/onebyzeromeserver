// const resources = [
// 	{
// 		id: 1,
// 		varsity: "University of Barishal",
// 		department: "Computer Science & Engineering",
// 		year: 1,
// 		semester: 1,
// 		courseTitle: "Introduction to Computer Systems",
// 		courseCode: "CSE-1101",
// 		creditHours: "3 Credit, 45 Hours",
// 		courseTeachers: [
// 			{
// 				id: 1,
// 				name: "Md. Samsuddoha",
// 				email: "sams.csebu@gmail.com",
// 				sessions: ["2021-22", "2020-21", "2019-20", "2018-19"],
// 				"profile-link": "https://bu.ac.bd/view-profile.php?editId=95",
// 			},
// 		],
// 		syllabus:
// 			"Introduction to computations; Early history of computing devices, Computers, Major components of a computer; Hardware: processor, memory, I/O devices, Software: Operating system, application software; Basic architecture of a computer; Basic Information Technology; The Internet; Number system: binary, octal, hexadecimal, binary arithmetic; Basic programming concepts; Program development stages: flow charts; Programming constructs: data types, operators, expressions, statements, control statements, functions, array.",
// 		books: [
// 			{
// 				id: 1,
// 				name: "Introduction to Computing",
// 				authors: ["David Evans"],
// 				"the-book": [
// 					{
// 						edition: 1,
// 						contributor: "Obaydul Hasan Nayeem",
// 						link: "https://drive.google.com/file/d/1drLmal4kak3Ya3s0IeIro3t8nAaMQGfB/view?usp=share_link",
// 					},
// 				],
// 			},
// 			{
// 				id: 2,
// 				name: "Introduction to Computers",
// 				authors: ["Pradeep K. Sinha", "Priti Sinha"],
// 				"the-book": [
// 					{
// 						edition: "",
// 						contributor: "Obaydul Hasan Nayeem",
// 						link: "https://drive.google.com/file/d/1fft5Wiv1ek2rd86Bhgq405EIoW6SLc50/view?usp=sharing",
// 					},
// 				],
// 			},
// 			{
// 				id: 3,
// 				name: "Introduction to Computers",
// 				authors: ["Peter Norton"],
// 				"the-book": [
// 					{
// 						edition: "6",
// 						contributor: "Obaydul Hasan Nayeem",
// 						link: "https://drive.google.com/file/d/1nC19blSLZDZLl7sBQBwsXw8izqsOEMgs/view?usp=sharing",
// 					},
// 				],
// 			},
// 			{
// 				id: 4,
// 				name: "Computer Fundamentals",
// 				authors: [""],
// 				"the-book": [
// 					{
// 						edition: "",
// 						contributor: "Obaydul Hasan Nayeem",
// 						link: "https://drive.google.com/file/d/1Hth8Y42JzGzxuwj2YzTIeCMQx5_6mMnY/view?usp=sharing",
// 					},
// 				],
// 			},
// 		],
// 		slides: [
// 			{
// 				id: 1,
// 				name: "Introduction to Computers",
// 				author: "Md. Samsuddoha",
// 				contributor: "Obaydul Hasan Nayeem",
// 				link: "https://drive.google.com/file/d/1VLDCGXxUdBOres4qIEnGxBSIlPjUN_ba/view?usp=sharing",
// 			},
// 		],
// 		questions: [
// 			{
// 				id: 1,
// 				name: "1st Mid",
// 				session: "",
// 				contributor: "Obaydul Hasan Nayeem",
// 				link: "https://drive.google.com/file/d/169mNR96_5g4OLNumI5hD13a5fsZIuHy5/view?usp=sharing",
// 			},
// 		],
// 		handNotes: [
// 			{
// 				id: 1,
// 				name: "",
// 				author: "",
// 				session: "",
// 				contributor: "",
// 			},
// 		],
// 	},

// 	{
// 		id: 3,
// 		varsity: "University of Barishal",
// 		department: "Computer Science & Engineering",
// 		year: "1",
// 		semester: "1",
// 		courseTitle: "Programming Fundamentals",
// 		courseCode: "CSE-1103",
// 		creditHours: "3 Credit, 45 Hours",
// 		courseTeachers: [
// 			{
// 				id: 1,
// 				name: "Dr. Md Manjur Ahmed",
// 				email: "manjur_39@yahoo.com",
// 				sessions: [],
// 				"profile-link": "",
// 			},
// 		],
// 		syllabus:
// 			"Structured programming language: data types, operators, expressions, control structures; Functions and program structure: parameter passing conventions, scope rules and storage classes, recursion; Header files; Preprocessor; Pointers and arrays; Strings; Multidimensional array; User-defined data types: structures, unions, enumerations; Input and Output: standard input and output, formatted input and output, file access; Variable length argument list; Command line parameters; Error Handling; Graphics; Linking; Library functions.",
// 		books: [
// 			{
// 				id: 1,
// 				name: "কম্পিউটার প্রোগ্রামিং-১ম খণ্ড",
// 				authors: ["তামিম শাহারিয়ার সুবিন"],
// 				"the-book": [
// 					{
// 						edition: "",
// 						contributor: "Zahid Hasan",
// 						link: "https://drive.google.com/file/d/1HS4hY6p99uB2g74n4uYVbOMLjSW5Egws/view",
// 					},
// 				],
// 			},
// 			{
// 				id: 2,
// 				name: "Data Types in C language",
// 				authors: [""],
// 				"the-book": [
// 					{
// 						edition: "",
// 						contributor: "Zahid Hasan",
// 						link: "https://drive.google.com/file/d/1ZvD3WXV1RJ6MinSjdVOwgjHMXJxvqvtH/view",
// 					},
// 				],
// 			},
// 			{
// 				id: 3,
// 				name: "Teach  Yourself  C",
// 				authors: ["Herbert Schildt"],
// 				"the-book": [
// 					{
// 						edition: "5",
// 						contributor: "Zahid Hasan",
// 						link: "https://drive.google.com/file/d/1dZ91uk2t3FlLVp4OW7YI8e33tG0ZCVJm/view",
// 					},
// 				],
// 			},
// 			{
// 				id: 4,
// 				name: "The C Programming Language (ANSI C) ",
// 				authors: ["Brian W.Kernighan & Dennis M.Ritchie"],
// 				"the-book": [
// 					{
// 						edition: "2",
// 						contributor: "Zahid Hasan",
// 						link: "https://drive.google.com/file/d/1K3sv1WEL3jFRb_r1Pm3gJiG0sYIMWfgU/view",
// 					},
// 				],
// 			},
// 		],
// 		slides: [
// 			{
// 				id: 1,
// 				name: "From New York University (NYU)",
// 				author: "Md. Mostafijur Rahman Sir",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/u/0/folders/1nEcbsbGZFcfi-0_RbuwIAEDU-A-Qihf9",
// 			},

// 			{
// 				id: 2,
// 				name: "From Massachusetts Institute of Technology (MIT)",
// 				author: "Md. Mostafijur Rahman Sir",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/u/0/folders/1CLt9LL9wYvq4VEEiOfEwzl_grWTcJWpk",
// 			},
// 		],
// 		questions: [
// 			{
// 				id: 1,
// 				name: "1st Mid",
// 				session: "2018-19",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1k2B5yQ76ZIb2Ws_yDotSt6EdWjEuwfgi/view",
// 			},
// 			{
// 				id: 2,
// 				name: "1st Mid",
// 				session: "2017-18",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1LVfxhy-XEUmFmqQ3omCNS3T5ChUEB8Pf/view",
// 			},
// 			{
// 				id: 3,
// 				name: "1st Mid",
// 				session: "2016-17",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/folders/11_rXAzwFkf6sFTuVBF84JLPTBSnlmvz5",
// 			},
// 			{
// 				id: 4,
// 				name: "Semester Final",
// 				session: "2020-21",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/folders/1TWqzINxvBqXteTiOeptccEQYZhDiWb0s",
// 			},
// 			{
// 				id: 5,
// 				name: "Semester Final",
// 				session: "2019-20",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/folders/11_rXAzwFkf6sFTuVBF84JLPTBSnlmvz5",
// 			},
// 			{
// 				id: 6,
// 				name: "Semester Final",
// 				session: "2018-19",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/folders/1RD3XdH7tlu12xeP9n0u6snHylt7ccD3L?usp=sharing",
// 			},
// 			{
// 				id: 7,
// 				name: "Semester Final",
// 				session: "2017-18",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/folders/1eILj0aTRPDxIxvG3vgYg9hhJ4DMh6Vsw?usp=sharing",
// 			},
// 		],
// 		handNotes: [
// 			{
// 				id: "",
// 				name: "",
// 				author: "",
// 				session: "",
// 				contributor: "",
// 			},
// 		],
// 	},
// 	{
// 		id: 5,
// 		varsity: "University of Barishal",
// 		department: "Computer Science & Engineering",
// 		year: "1",
// 		semester: "1",
// 		courseTitle: "Physics",
// 		courseCode: "PHY-1105",
// 		creditHours: "3 Credit, 45 Hours",
// 		courseTeachers: [
// 			{
// 				id: 1,
// 				name: "Md. Matiur Rahman",
// 				email: "mmarahman@bu.ac.bd",
// 				sessions: [],
// 				"profile-link": "",
// 			},
// 		],
// 		syllabus:
// 			"Heat and Thermodynamics: Principle of temperature measurements:platinum resistance thermometer, thermo-electric thermometer, pyrometer. Kinetic theory of gases: Maxwell's distribution of molecular speeds, mean free path, equipartition of energy, Brownian motion, Van der Waal's equation of state, review of the First Law of thermodynamics and its application, reversible and irreversible processes, Second Law of thermodynamics, Carnot cycle. Efficiency of heat engines, Carnot's Theorem, entropy and disorder, thermodynamic functions, Maxwell relations, Clausius-Clapeyron Equation, Gibbs Phase Rule, Third Law of thermodynamics.      Structure of Matter: Crystalline and non-crystalline solids, single crystal and polycrystal solids, unit cell, crystal systems, co-ordinations number, crystal planes and directions, sodium chloride, and CsCl structure, packing factor, Miller indices, the relation between interplanar spacing and Miller indices, Bragg's Law, methods of determination of interplanar spacing from diffraction patterns.       Defects in solids: point defects, line defects .    Bonds in solids, inter-atomic distances, calculation of cohesive and bonding energy . ntroduction to band theory: the distinction between metal, semiconductor, and insulator.  Waves and Oscillations:  Differential equation of a simple harmonic oscillator, total energy and average energy, combination of simple harmonic oscillations, Lissajous' figures, spring-mass system, calculation of time period of the torsional pendulum, damped oscillation, determination of damping co-efficient, forced oscillation, resonance, two-body oscillations, Reduced mass, differential equation of a progressive wave, power and intensity of wave motion, stationary wave, group velocity and phase velocity, architectural acoustics, reverberation, and Sabine's formula.   Physical Optics: Theories of light. Interference of light, Young's double slit experiment. Displacements of fringes and their uses. Fresnel Bi-prism, interference at wedge-shaped films, Newton's rings, interferometers.  Diffraction of light: Fresnel and Fraunhofer diffraction, diffraction by the single slit, diffraction from a circular aperture, resolving power of optical instruments, diffraction at double slit & N-slits-diffraction grating.  Polarization: production and analysis of polarized light, Brewster's law, Malus law, Polarization by double refraction, retardation plates, Nicol prism, optical activity, polarimeters, polaroid. ",

// 		books: [
// 			{
// 				id: 1,
// 				name: "Waves and Oscillations",
// 				authors: ["N Subrahmanyam, Brij Lal"],
// 				"the-book": [
// 					{
// 						edition: "2",
// 						contributor: "Zahid Hasan",
// 						link: "https://drive.google.com/file/d/1ZdqykvaEYCOpmS_2WOCdtL8V5Ea5rYmz/view?usp=sharing",
// 					},
// 				],
// 			},
// 			{
// 				id: 2,
// 				name: "Waves",
// 				authors: [""],
// 				"the-book": [
// 					{
// 						edition: "",
// 						contributor: "Zahid Hasan",
// 						link: "https://drive.google.com/file/d/13ax_wwxnt_iI4HWES8LVmMt_xzWmBJWh/view?usp=sharing",
// 					},
// 				],
// 			},
// 		],
// 		slides: [
// 			{
// 				id: 1,
// 				name: "Heat & Thermodynamics",
// 				author: "",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1HCdqJr82tFikUy2lq9v2nllOcsQNPM_j/view?usp=sharing",
// 			},

// 			{
// 				id: 2,
// 				name: " Structure of Matter",
// 				author: "",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1REOd1kAWTzufHF2dlV0dkZELGcLzs-_U/view?usp=sharing",
// 			},

// 			{
// 				id: 3,
// 				name: "Simple Harmonic Motion",
// 				author: "",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1vmiIMLgowPgsYwSyIJO78pj03eL5gqfR/view?usp=sharing",
// 			},
// 			{
// 				id: 4,
// 				name: "Wave",
// 				author: "",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1lmVJ_8KpHKUIXt05GCojjbix7hfnN6aO/view?usp=sharing",
// 			},
// 			{
// 				id: 5,
// 				name: "Physical Optics",
// 				author: "",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1MuZ6DOxUhhCMrXJ4cIhjhlQu2MudB7JK/view?usp=sharing",
// 			},
// 		],
// 		questions: [
// 			{
// 				id: 1,
// 				name: "1st Mid",
// 				session: "2020-21",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1r17_IEv1eYa02-c6I_vf5Dj9v9jds_HP/view?usp=sharing",
// 			},

// 			{
// 				id: 2,
// 				name: "1st Mid",
// 				session: "2019-20",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1r17_IEv1eYa02-c6I_vf5Dj9v9jds_HP/view?usp=sharing",
// 			},
// 			{
// 				id: 3,
// 				name: "1st Mid",
// 				session: "2018-19",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1c-n94-6HVXinFhlq7GMIQQZDYz2T3e9c/view?usp=sharing",
// 			},
// 			{
// 				id: 4,
// 				name: "1st Mid",
// 				session: "2017-18",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1cO5SsExINlTdiXA16g5vGD8J6FL4g8na/view?usp=sharing",
// 			},

// 			{
// 				id: 5,
// 				name: " 2nd Mid",
// 				session: "2020-21",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1du0zg-auK6sKEOMcerSvgOesp8YmSV8B/view?usp=sharing",
// 			},
// 			{
// 				id: 6,
// 				name: " 2nd Mid",
// 				session: "2017-18",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1et4iQzhJ3InDootfwuFhW_EOnkZ6a8nQ/view?usp=sharing",
// 			},
// 			{
// 				id: 7,
// 				name: "Semester Final",
// 				session: "2020-21",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/folders/1OFFQLqAxAovljtDU7iFar4QIJTxZLqA3?usp=share_link",
// 			},
// 			{
// 				id: 8,
// 				name: "Semester Final",
// 				session: "2019-20",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/folders/1SOVDw6o4goFgj35D7NYh9XcxWWbo9tEm?usp=sharing",
// 			},
// 			{
// 				id: 9,
// 				name: "Semester Final",
// 				session: "2018-19",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/file/d/1bZjTI5npaSfThCf_5XoDDUSpGjsw_620/view?usp=sharing",
// 			},
// 			{
// 				id: 10,
// 				name: "Semester Final",
// 				session: "2017-18",
// 				contributor: "Zahid Hasan",
// 				link: "https://drive.google.com/drive/folders/1SOVDw6o4goFgj35D7NYh9XcxWWbo9tEm?usp=sharing",
// 			},
// 		],
// 		handNotes: [
// 			{
// 				id: "",
// 				name: "",
// 				author: "",
// 				session: "",
// 				contributor: "",
// 			},
// 		],
// 	},
// ];

const resources = [
	{
		id: 9,
		varsity: "University of Barishal",
		department: "Computer Science & Engineering",
		year: 1,
		semester: 1,
		courseTitle: "Differential Calculus and Co-ordinate Geometry",
		courseCode: "MATH-1109",
		creditHours: "3 Credit, 45 Hours",
		courseTeachers: [
			{
				id: 1,
				name: "",
				designation: "",
				department: "",
				varsity: "",
				email: "",
				sessions: [""],
				"profile-link": "",
			},
		],
		syllabus:
			"(i) Differential Calculus:Limits, continuity, and differentiability, Successive differentiation of various types of functions; Leibnitz Theorem; Rolle's Theorem; Mean value Theorem in finite and infinite forms; Lagrange form of remainders; Cauchy form of remainder; Expansion of functions; Evaluation of indeterminate forms by L Hospital rule: Partial differentiation; Euler Theorem: Tangent and Normal, Subtangent and subnormal in cartesian and polar co-ordinates; Maximum and minimum values of functions of single variable; Points of inflection; Curvature, the radius of curvature, center of curvature; Asymptotes, Curve tracing.(ii) Co-ordinate Geometry:Transformation of co-ordinates axes and their uses; Equation of conics and its reduction to standard forms; Pair of straight lines; Homogeneous equations of the second degree; Angle between a pair of straight lines; Pair of lines joining the origin to the point of intersection of two given curves, circles; System of circles; Orthogonal circles, Radical axis, radical center, properties of radical axes; Coaxial circles and limiting points; Equations of parabola, ellipse, and hyperbola in cartesian and polar co-ordinates; Tangents and normals, pair of tangents; Chord of contact; Chord in terms of its middle points; Pole and polar parametric coordinates; Diameters; Conjugate diameters and their properties; Director circles and asymptotes.",

		books: [
			{
				id: 1,
				name: "Calculus",
				authors: ["Anton", "Bivens", "Davis"],
				"the-book": [
					{
						edition: "10th",
						contributor: "Obaydul Hasan Nayeem",
						link: "https://drive.google.com/file/d/1tbrBLTl1o9iMU2DfwV40CPegMZc8Zbdu/view?usp=sharing",
					},
				],
			},
		],

		slides: [
			{
				id: 1,
				name: "Geometry: Conics",
				author: "",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1iGpbSW3VKvQdTqEwGGL-8uzz1lGi6dLg/view?usp=sharing",
			},
			{
				id: 2,
				name: "Geometry: Co-ordinates",
				author: "",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1iGpbSW3VKvQdTqEwGGL-8uzz1lGi6dLg/view?usp=sharing",
			},
		],

		questions: [
			{
				id: 1,
				name: "1st Mid",
				session: "2020-21",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1saDHCW0_EPwTYbXlX-XrBh_RCvUPyPOD/view?usp=sharing",
			},
			{
				id: 2,
				name: "1st Mid",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/10Lf24pgRa6kFZWPNddfyJHKXzR_6iPKV/view?usp=sharing",
			},
			{
				id: 3,
				name: "1st Mid",
				session: "2018-19",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1AFKNtn17x6LmbxE0r5M12-yraJ5W8A0z/view?usp=sharing",
			},
			{
				id: 4,
				name: "1st Mid",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1v4tCZKtvq6HwCxBK9T2JQWP2haHXv_VQ/view?usp=sharing",
			},
			{
				id: 5,
				name: "2nd Mid",
				session: "2018-19",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/13EUp531ebh1h4s7QlMor5t9D4k7DaqEM/view?usp=sharing",
			},
			{
				id: 6,
				name: "2nd Mid",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1KKijsk9Z1KfVIxr2_VKoye3yj907FjrA/view?usp=sharing",
			},
			{
				id: 7,
				name: "Semester Final",
				session: "2020-21",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1axQLO2vlPIwzTbBbR5hDFHasvKz5tBXE?usp=share_link",
			},
			{
				id: 8,
				name: "Semester Final",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/18wpN-xnqe3H8v4GpX6QpyyD2v-Tc3Bzc/view?usp=sharing",
			},
			{
				id: 9,
				name: "Semester Final",
				session: "2018-19",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/u/2/folders/1xxzI5dFwnfWb3tPjKXecLaJ7FNW2aK-W",
			},
			{
				id: 10,
				name: "Semester Final",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1JnBrnpXbrmvatKtTQ-b8j7EsAyq0LHD0/view?usp=sharing",
			},
			{
				id: 10,
				name: "Lab",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1pSelpUmIEVOFceXU6khg7Jsf2q33oFnO/view?usp=sharing",
			},
			{
				id: 10,
				name: "Extra",
				session: "2016-17",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/u/2/folders/1vY3w3qM_lrJTXBIV-mLi-ohvutxVb3iE",
			},
		],
		handnotes: [
			{
				id: "1",
				name: "Geometry",
				author: "Any",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/105k79BDTYYTQkiZH5FETphyQp7VRGzSY/view?usp=share_link",
			},
			{
				id: "2",
				name: "Conics",
				author: "Any",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1QOK2tnUr1IRda8ZWCgLJS0j1jM-75zqE/view?usp=share_link",
			},
			{
				id: "3",
				name: "Math Handnote",
				author: "Hafsa Rashid",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1sv1Jl_Kqg6KWKfNyc1Iq17TkoRfyWnmR/view?usp=share_link",
			},
			{
				id: "4",
				name: "Math Handnote",
				author: "Sima",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1kZkjGCZa00h1C425PsYwYT4Ii-5jKx6O/view?usp=share_link",
			},
			{
				id: "5",
				name: "Math Handnote",
				author: "",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/138PnGYmBSLQkeLHQsqVZCfupRRATQah_/view?usp=share_link",
			},
			{
				id: "6",
				name: "Math Handnote",
				author: "",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/17dp771fKKqH04Y3VxNAe24brZ10PLbbL/view?usp=share_link",
			},
		],
	},
	{
		id: 10,
		varsity: "University of Barishal",
		department: "Computer Science & Engineering",
		year: 1,
		semester: 1,
		courseTitle: "English Communication Skills Lab",
		courseCode: "ENG-1110",
		creditHours: "1.5 Credit, 45 Hours",
		courseTeachers: [
			{
				id: 1,
				name: "",
				designation: "",
				department: "",
				varsity: "",
				email: "",
				sessions: [""],
				"profile-link": "",
			},
		],
		syllabus:
			"(i) Grammar: Tense, article, preposition, subject-verb agreement, clause, conditional and sentence structure.(ii) Vocabulary building: Correct and precise diction, affixes, and level of appropriateness. Colloquial and standard, informal and formal.(iii) Developing reading skills: Strategies of reading, skimming, scanning, predicting, inferring; analyzing, and interpreting a variety of texts, practicing comprehension from literary and nonliterary texts.(iv) Developing writing skills: Sentences, sentence variety, generating sentences, clarity, and correctness of sentences, linking sentences to form paragraphs, writing paragraphs, essays, reports, and formal and informal letters.(v) Listening skills and note taking: Listening to recorded texts and class lectures and learning to take useful notes based on listening.(vi) Developing speaking skills: Oral skills including communicative expressions for personal identification, life at home, giving advice and opinion, instruction and directions, requests, complaints, apologies, describing people and places and narrating events.",

		books: [
			{
				id: 1,
				name: "Advanced Grammar in Use",
				authors: ["Martin Hewings"],
				"the-book": [
					{
						edition: "2nd",
						contributor: "",
						link: "https://drive.google.com/file/d/1DjXqiluKDLMyYvXyNqA-CRcCj-Oqg_kk/view?usp=sharing",
					},
				],
			},
			{
				id: 2,
				name: "English Grammar in Use",
				authors: [""],
				"the-book": [
					{
						edition: "4th",
						contributor: "",
						link: "https://drive.google.com/file/d/1fR2lvn1L3a_R3e0RbU9BeVR7KGxFNrjQ/view?usp=sharing",
					},
				],
			},
			{
				id: 3,
				name: "Barron 800 Essential Words for GRE",
				authors: [""],
				"the-book": [
					{
						edition: "",
						contributor: "",
						link: "https://drive.google.com/file/d/18PVY-I2JOhL2Lq7ZF1tzBtLNswoV1mIF/view?usp=sharing",
					},
				],
			},
			{
				id: 4,
				name: "Barron GRE Word List",
				authors: [""],
				"the-book": [
					{
						edition: "",
						contributor: "",
						link: "https://drive.google.com/file/d/1jouX1QhiBheNW4LSYewjw369clDoq_na/view?usp=sharing",
					},
				],
			},
			{
				id: 5,
				name: "English Grammar and Composition",
				authors: ["Wren", "Martin"],
				"the-book": [
					{
						edition: "",
						contributor: "",
						link: "https://drive.google.com/file/d/1HgYQmLoctD5AYPPCjLORAatzrpmcNvyB/view?usp=sharing",
					},
				],
			},
			{
				id: 6,
				name: "English Phonetics and Phonology",
				authors: ["Peter Roach"],
				"the-book": [
					{
						edition: "2nd",
						contributor: "",
						link: "https://drive.google.com/file/d/1q9MqPW97IjVO6ehcIYFT05SGurHraCe1/view?usp=sharing",
					},
					{
						edition: "4th",
						contributor: "",
						link: "https://drive.google.com/file/d/1pjKBg4OlbVqTlv8RR17wgFjVnDEkxPFz/view?usp=sharing",
					},
				],
			},
			{
				id: 7,
				name: "Practical English Usage",
				authors: ["Michael Swann"],
				"the-book": [
					{
						edition: "",
						contributor: "",
						link: "https://drive.google.com/file/d/1LN8BEOPXJYsLs1ZY39T5J0p-qRFG4Nh9/view?usp=sharing",
					},
				],
			},
		],
		slides: [
			{
				id: 1,
				name: "",
				author: "",
				contributor: "",
				link: "",
			},

			{
				id: 2,
				name: "",
				author: "",
				contributor: "",
				link: "",
			},
			{
				id: 3,
				name: "",
				author: "",
				contributor: "",
				link: "",
			},
			{
				id: 4,
				name: "",
				author: "",
				contributor: "",
				link: "",
			},
		],

		questions: [
			{
				id: 1,
				name: "1st Mid",
				session: "2020-21",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1Mxo220ECzcr4S4D7Rq2ojbVCvndfDZju/view?usp=sharing",
			},
			{
				id: 2,
				name: "1st Mid",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1UhXqJxP8ElelbNp1h7vg31WZfPA9Us2K/view?usp=sharing",
			},
			{
				id: 3,
				name: "Lab Final",
				session: "2020-21",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/184zcyDH-VZT9z87xJI68GJV7vCtiov7g?usp=share_link",
			},
			{
				id: 4,
				name: "Lab Final",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1Lcq3agPTHeS4dtEn3HW8lOj__hkdgJWX?usp=share_link",
			},
		],
		handnotes: [
			{
				id: 1,
				name: "",
				author: "",
				session: "",
				contributor: "",
				link: "",
			},
		],
		others: [
			{
				id: 1,
				name: "Culture Shock",
				author: "",
				session: "",
				contributor: "",
				link: "https://drive.google.com/drive/u/4/folders/1Aky7ts2xRHg9EYrvS9AkzpDvBWFjXmSr",
			},
		],
	},
	{
		id: 11,
		varsity: "University of Barishal",
		department: "Computer Science & Engineering",
		year: 1,
		semester: 2,
		courseTitle: "Data Structures",
		courseCode: "CSE-1201",
		creditHours: "3 Credit, 45 Hours",
		courseTeachers: [
			{
				id: 1,
				name: "",
				designation: "",
				department: "",
				varsity: "",
				email: "",
				sessions: [""],
				"profile-link": "",
			},
		],
		syllabus:
			"Internal data representation; Abstract data types; Elementary data structures: arrays, lists, stacks, queues, trees, graphs; Advanced data Structures: heaps, Fibonacci heaps, B-trees; Recursion, sorting, searching, hashing, storage management.",

		books: [
			{
				id: 1,
				name: "Introduction to Algorithms",
				authors: ["T.H. Cormen", "C.E. Leiserson"],
				"the-book": [
					{
						edition: "4th",
						contributor: "Sahad",
						link: "https://drive.google.com/file/d/1CezYykM2NwzqUV9yvD4WIBd9_N6O6d7T/view?usp=share_link",
					},
				],
			},
			{
				id: 2,
				name: "The Algorithm Design Manual",
				authors: ["Steven S. Skiena"],
				"the-book": [
					{
						edition: "2nd",
						contributor: "Zahid",
						link: "https://drive.google.com/file/d/13GfAeD8Eu8ZRjVd-6UkasbmhMhzXNY-L/view?usp=share_link",
					},
				],
			},
			{
				id: 3,
				name: "Introduction to Algorithms [Solution]",
				authors: ["T.H. Cormen", "C.E. Leiserson"],
				"the-book": [
					{
						edition: "3rd",
						contributor: "Zahid",
						link: "https://drive.google.com/file/d/1ryRaiJs5qZcf7B85gy-Wsc47rfn1RgNh/view?usp=share_link",
					},
				],
			},
		],

		slides: [
			{
				id: 1,
				name: "2018-19 (6th Batch)",
				author: "",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1xpDS0ySEuCrPRlgeygLnCY2LCMQHXKiB?usp=sharing",
			},
		],

		questions: [
			{
				id: 1,
				name: "1st Mid",
				session: "2019-20",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/file/d/1HXhBEH_7KEGRM1JYovn0j2Zm2iqeqA9G/view?usp=share_link",
			},
			{
				id: 2,
				name: "1st Mid",
				session: "2018-19",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/file/d/1Gpm8iv9FkmRVXtU_KZK7zfWCI8vJo5U_/view?usp=sharing",
			},
			{
				id: 3,
				name: "1st Mid",
				session: "2017-18",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/file/d/1T8lWKM7E7VuZRTPzds7bDpZPLOPV7npe/view?usp=sharing",
			},
			{
				id: 4,
				name: "1st Mid",
				session: "2016-17",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/file/d/1huD_IVqvRo5i8_SHX1wM71k00UW9AoCu/view?usp=sharing",
			},
			{
				id: 5,
				name: "2nd Mid",
				session: "2017-18",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1O1eB34DILKH5V_pOS93xS7Dia8kngDWY?usp=sharing",
			},
			{
				id: 6,
				name: "2nd Mid",
				session: "2018-19",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1i9u7gi2xOAG6e3BBEj7ZusogS8BASXtF?usp=sharing",
			},
			{
				id: 7,
				name: "Semester Final",
				session: "2017-18",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1C3tletCDt5MVzVHwN1_22PP_RJByqBrC?usp=sharing",
			},
			{
				id: 8,
				name: "Semester Final",
				session: "2018-19",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/file/d/1h0v9vuuLOrLlR4a9OKWVHcfl5pkIRt5j/view?usp=sharing",
			},
			{
				id: 9,
				name: "Semester Final",
				session: "2016-17",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1KWw3QgqijUDWgGRoee74PJZaziNIl97V?usp=sharing",
			},
			{
				id: 10,
				name: "Semester Final",
				session: "2019-20",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1QUfW0RuCEJXkJUdaL1EbTDi37nRH_nAs?usp=share_link",
			},
		],
		handnotes: [
			{
				id: 1,
				name: "18-19 (6th Batch): ",
				author: "",
				session: "2018-19",
				contributor: "Saykot Khandakar",
				link: "https://drive.google.com/drive/folders/128hKQ03O-88FQD2njCg-G06qKlmLSJEp?usp=sharing",
			},
			{
				id: 2,
				name: "18-19 (6th Batch)",
				author: "",
				session: "2018-19",
				contributor: "Sumaiya Meem",
				link: "https://drive.google.com/drive/folders/1VQQQP3X7s3qHNXoTHVBdVKmvCV4aQENQ?usp=sharing",
			},
			{
				id: 3,
				name: "17-18 (5th Batch)",
				author: "",
				session: "2017-18",
				contributor: "Saidul Islam",
				link: "https://drive.google.com/drive/folders/1PNQ6sXIM_PCbk9aPAx1n6c4wUhye5zWp?usp=sharing",
			},
			{
				id: 4,
				name: "17-18 (5th Batch)",
				author: "",
				session: "2017-18",
				contributor: "Jubayer Abdullah Joy",
				link: "https://drive.google.com/drive/folders/11tEAPId5Km4PdM4DoDHkpNSBx2mviLam?usp=sharing",
			},
		],
		others: [
			{
				id: 1,
				name: "Some Algorithms",
				author: "",
				session: "2017-18",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1Mi1pFkCYEROse5bQ7VuAgCNouqsUpsnP?usp=sharing",
			},
		],
	},
	{
		id: 15,
		varsity: "University of Barishal",
		department: "Computer Science & Engineering",
		year: 1,
		semester: 2,
		courseTitle: "Introduction to Electrical Engineering",
		courseCode: "EEE-1205",
		creditHours: "3 Credit, 45 Hours",
		courseTeachers: [
			{
				id: 1,
				name: "",
				designation: "",
				department: "",
				varsity: "",
				email: "",
				sessions: [""],
				"profile-link": "",
			},
		],
		syllabus:
			"Fundamental electrical concepts and measuring units. Direct current: voltage, current, resistance, and power. Laws of electrical circuits and methods of network analysis; Introduction to magnetic circuits. Alternating current: instantaneous and r.m.s. current, voltage, and power, average power for various combinations of R, L, and C circuits, and phasor representation of sinusoidal quantities.",

		books: [
			{
				id: 1,
				name: "A Text Book of Electrical Technology",
				authors: ["B. L. Theraja", "A. K. Theraja"],
				"the-book": [
					{
						edition: "1st",
						contributor: "Md. Tanvir Ahmed",
						link: "https://drive.google.com/file/d/1oA8Xkv7NDwfZ-VbxVNyU25hbDAGy3J6G/view?usp=sharing",
					},
				],
			},
			{
				id: 2,
				name: "Fundamentals of Electric Circuits",
				authors: ["Charles K. Alexander", "Matthew N.O. Sadiku"],
				"the-book": [
					{
						edition: "5th",
						contributor: "Md. Tanvir Ahmed",
						link: "https://drive.google.com/file/d/1A2HJ10M9r41pvX3oBSdY5dPDJWcxcmB1/view?usp=sharing",
					},
				],
			},
			{
				id: 3,
				name: " Basic Electronics (Solid State)",
				authors: ["B. L. Theraja"],
				"the-book": [
					{
						edition: "",
						contributor: "Md. Tanvir Ahmed",
						link: "https://mega.nz/file/Qd9jUSLI#1AIOl1aYICaF4iMXir6ILZpmtxAr-4xGgDG5ndzRPZE",
					},
				],
			},
		],

		slides: [
			{
				id: 1,
				name: "",
				author: "",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1D_GqOaqQzmbV2yVPBV2nVj5UAdnI3Sam?usp=sharing",
			},
			{
				id: 2,
				name: "",
				author: "",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/15Dq3ynPLrpscnDdokAdPxuDvqk3sM2KW",
			},
		],

		questions: [
			{
				id: 1,
				name: "1st Mid",
				session: "2019-20",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/drive/folders/1eQd0PLI1Jr2So-FW3ESqBzDpvZe59LgH",
			},
			{
				id: 2,
				name: "1st Mid",
				session: "2016-17",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1iofXgLlj4DZpvE_WVdIX-ttR2d4_f_Mg/view?usp=sharing",
			},
			{
				id: 3,
				name: "1st Mid",
				session: "2018-19",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1tYvwnXKnDc8Lncm2p_GgMH81NpjA5rfq/view?usp=sharing",
			},
			{
				id: 4,
				name: "2nd Mid",
				session: "2016-17",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/18wgHzmIj33KkXMiTosANXxQJ7bF-MXuq/view?usp=sharing",
			},
			{
				id: 5,
				name: "2nd Mid",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/file/d/1LM-tJdq4caJVCJtJT0-MLeaHGGTI58PW/view?usp=share_link",
			},
			{
				id: 6,
				name: "Semester Final",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1xY2G3wtinLQgD3bApFQ17HaUVcKnCMOc",
			},
			{
				id: 7,
				name: "Semester Final",
				session: "2018-19",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1CWIAibdTQTgtE-IziCs0T-NmeMwEOIHq",
			},
			{
				id: 8,
				name: "Semester Final",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1iEbidOCXLbzsjRAD32353nJ6kLTjDBzN",
			},
			{
				id: 9,
				name: "Semester Final",
				session: "2016-17",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1zpknDf0cy2ksogvtA9b5HU76oFNGUw_z",
			},
		],
		handnotes: [
			{
				id: 1,
				name: "",
				author: "",
				session: "2019-10",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/10xVIuaksujnjp7iJxBmUBKmMYoZjm24G?usp=sharing",
			},
		],
		others: [
			{
				id: 1,
				name: "",
				author: "",
				session: "",
				contributor: "",
				link: "",
			},
		],
	},
	{
		id: 13,
		varsity: "University of Barishal",
		department: "Computer Science & Engineering",
		year: "1",
		semester: 2,
		courseTitle: "Discrete Mathematics",
		courseCode: "CSE-1203",
		creditHours: "3 Credit, 45 Hours",
		courseTeachers: [
			{
				id: 1,
				name: "",
				designation: "",
				department: "",
				varsity: "",
				email: "",
				sessions: [""],
				"profile-link": "",
			},
		],
		syllabus:
			"Set theory; Relations; Functions; Graph theory: Propositional calculus and predicate calculus; Mathematical reasoning: induction, contradiction, and recursion; counting; Principles of inclusion and exclusion: Recurrence relations: Algebraic structures: rings and groups.",

		books: [
			{
				id: 1,
				name: "Discrete Mathematics and its Applications",
				authors: ["Kenneth H Rosen"],
				"the-book": [
					{
						edition: "7th",
						contributor: "Md. Tanvir Ahmed",
						link: "https://drive.google.com/file/d/1QBFJRVa7C3KyfOaVY2nxSqRgcNcKt9wv/view?usp=share_link",
					},
					{
						edition: "8th",
						contributor: "Sahad",
						link: "https://drive.google.com/file/d/1SZDDiupU5tEXVDqjGesfyVlvINiUqUAk/view?usp=share_link",
					},
				],
			},
		],

		slides: [
			{
				id: 1,
				name: "",
				author: "",
				contributor: "",
				link: "",
			},
		],

		questions: [
			{
				id: 1,
				name: "1st Mid",
				session: "2019-20",
				contributor: "Md. Tanvir Ahmed",
				link: "https://drive.google.com/file/d/1S87FoksdzB2qPPzRpoGRca_Tc4JJfxIu/view?usp=share_link",
			},
			{
				id: 2,
				name: "1st Mid",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1pTCbq8A8VNmD3xolwn-33VWAuT21NcWi",
			},
			{
				id: 3,
				name: "1st Mid",
				session: "2018-19",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1pTCbq8A8VNmD3xolwn-33VWAuT21NcWi",
			},
			{
				id: 4,
				name: "1st Mid",
				session: "2016-17",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1pTCbq8A8VNmD3xolwn-33VWAuT21NcWi",
			},
			{
				id: 5,
				name: "2nd Mid",
				session: "2016-17",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/17-tLRMC-62H-3ZZc7SWOWkMLDSMTu2aa",
			},
			{
				id: 6,
				name: "2nd Mid",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/17-tLRMC-62H-3ZZc7SWOWkMLDSMTu2aa",
			},
			{
				id: 7,
				name: "Semester Final",
				session: "2019-20",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1GUEvZHlULntnR0SJxkwCK2YfIM5U4xKA",
			},
			{
				id: 8,
				name: "Semester Final",
				session: "2018-19",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1qn6PzdrP3iibyFOJNXuYDMSDfazM0vQz",
			},
			{
				id: 9,
				name: "Semester Final",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1HBQsV9UzGXian2vHfluP0VSftct6M8AL",
			},
			{
				id: 10,
				name: "Semester Final",
				session: "2016-17",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1lzQCChi4Lk6lFSAh1QRqQ8mkQML95ngu",
			},
		],
		handnotes: [
			{
				id: 1,
				name: "Note(Quick Preparation)",
				author: "",
				session: "2018-19",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1JgIXZNZjVDd-o3mFA8EaHunNpx2QBlSd",
			},
			{
				id: 2,
				name: "Note(Quick Preparation)",
				author: "",
				session: "2017-18",
				contributor: "Obaydul Hasan Nayeem",
				link: "https://drive.google.com/drive/folders/1iul3Um5qTu1UE6R4q9VJrHaeE5HtH-rW",
			},
		],
		others: [
			{
				id: 1,
				name: "",
				author: "",
				session: "",
				contributor: "",
				link: "",
			},
		],
	},
];

module.exports = resources;
