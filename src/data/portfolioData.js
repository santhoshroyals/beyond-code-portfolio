// Portfolio Data Store for "Beyond Code — My Python Journey"
// Advanced Python Programming Course Portfolio

export const initialPortfolioData = {
  meta: {
  studentName: "Gilledi Santhosh",
  studentId: "23MID0233",
  courseTitle: "Advanced Python Programming",
  courseCode: "Advanced Python Programming",
  academicTerm: "2026",
  institution: "VIT Vellore",
  portfolioTitle: "Beyond Code — My Python Journey",
  portfolioSubtitle:
    "My learning journey through Python programming, practical activities, and project development.",
  instructor: "",
  lastUpdated: "October 2026",
  statusBadge: "Academic Portfolio"
},

  about: {
    philosophy: "Programming is a way to think clearly, solve problems, and turn ideas into useful solutions.",
    story: [
      "My Advanced Python Programming journey helped me strengthen my understanding of Python and explore how programming concepts can be used in practical situations.",
      "Through classroom activities, discussions, quizzes, and coding exercises, I explored Python data structures, lists, shallow and deep copying, sorting, object-oriented programming, and multithreading.",
      "I also took part in collaborative project activities, developed an idea for an IoT-based assistive system, prepared a business thesis presentation with my team, and shared my learning through a Medium article. This portfolio brings together the work and experiences that shaped my learning throughout the course."
    ],
    principles: [
      {
        title: "Logical Problem-Solving",
        desc: "Breaking problems into smaller steps and using Python concepts to develop clear solutions."
      },
      {
        title: "Learning by Practice",
        desc: "Strengthening understanding through coding exercises, classroom activities, quizzes, and discussions."
      },
      {
        title: "Collaboration",
        desc: "Sharing ideas, coordinating with teammates, and contributing to group activities and presentations."
      },
      {
        title: "Continuous Improvement",
        desc: "Reflecting on feedback, exploring new concepts, and documenting what I learn."
      }
    ]
  },

 skills: {
  categories: [
    {
      name: "Python Fundamentals",
      icon: "Code",
      skills: [
        {
          name: "Python Syntax and Core Concepts",
          level: 75,
          details: "Practising Python statements, variables, conditions, loops, and functions."
        },
        {
          name: "Lists and Data Structures",
          level: 75,
          details: "Working with Python lists and commonly used data structures."
        },
        {
          name: "Shallow and Deep Copy",
          level: 75,
          details: "Understanding object references and the differences between shallow and deep copying."
        },
        {
          name: "Sorting Techniques",
          level: 70,
          details: "Practising sorting operations and organising data."
        }
      ]
    },
    {
      name: "Object-Oriented Programming",
      icon: "Boxes",
      skills: [
        {
          name: "Classes and Objects",
          level: 70,
          details: "Understanding classes, objects, attributes, and methods."
        },
        {
          name: "Core OOP Concepts",
          level: 70,
          details: "Learning and practising fundamental object-oriented programming concepts."
        },
        {
          name: "OOP Problem Solving",
          level: 65,
          details: "Practising object-oriented programming questions through classroom and Padlet activities."
        }
      ]
    },
    {
      name: "Multithreading and Programming Practice",
      icon: "Workflow",
      skills: [
        {
          name: "Python Multithreading",
          level: 65,
          details: "Exploring multithreading concepts through a Python storyboard activity."
        },
        {
          name: "Shared Queue Processing",
          level: 65,
          details: "Understanding how threads can coordinate tasks using a shared queue."
        },
        {
          name: "Logical Thinking and Debugging",
          level: 70,
          details: "Practising logical problem-solving and understanding program behaviour."
        }
      ]
    },
    {
      name: "Communication and Collaboration",
      icon: "Users",
      skills: [
        {
          name: "Technical Writing",
          level: 70,
          details: "Explaining Python concepts through a published Medium article."
        },
        {
          name: "Presentation Skills",
          level: 70,
          details: "Presenting project ideas through the InteroperAI-ResQUE team presentation."
        },
        {
          name: "Teamwork",
          level: 75,
          details: "Participating in collaborative course activities and team-based projects."
        }
      ]
    }
  ]
},
 timeline: [
  {
    week: "Course Activity",
    phase: "Python Learning",
    title: "Core Python Concepts and Data Structures",
    desc: "Practised Python fundamentals, lists, sorting, data structures, and shallow and deep copying.",
    tag: "Programming Practice"
  },
  {
    week: "Course Activity",
    phase: "Object-Oriented Programming",
    title: "OOP Questions and Discussion",
    desc: "Explored object-oriented programming concepts and practised OOP questions through the Padlet activity.",
    tag: "OOP Practice"
  },
  {
    week: "Course Activity",
    phase: "Multithreading",
    title: "Python Multithreading and Shared Queue Processing",
    desc: "Created a storyboard to explain multithreading and the workflow of shared queue processing.",
    tag: "Storyboard"
  },
  {
    week: "Course Activity",
    phase: "Peer Learning",
    title: "Python Tutorial Discussion",
    desc: "Participated in a classroom tutorial discussion and shared ideas about Python concepts.",
    tag: "Classroom Activity"
  },
  {
    week: "Course Activity",
    phase: "Project Ideation",
    title: "IoT-Based Assistive System",
    desc: "Proposed an assistive system concept to help people with Cerebral Palsy control household appliances. The project is currently at the ideation and planning stage.",
    tag: "Project Ideation"
  },
  {
    week: "Course Activity",
    phase: "Project Communication",
    title: "InteroperAI-ResQUE Presentation",
    desc: "Contributed to the team's business thesis presentation through an audio recording and presentation deck.",
    tag: "Team Project"
  }
],

 // 10 MANDATORY ACTIVITIES
activities: {
  starsPhoto: {
  id: "stars-photo",
  number: 1,
  title: "Stars Photo",
  subtitle: "A Moment from the Course",
  date: "Advanced Python Programming",
  badge: "Course Memory",
  description: "A memorable photograph from the Advanced Python Programming course, capturing a moment with classmates.",
  reflection: "This activity reminds me that learning is not just about coding. It is also about participating, sharing experiences, and learning together.",
  defaultImage: null,
  caption: "A memorable moment with classmates during the course.",
  participants: [],
  tags: ["Course Experience", "Classmates", "Learning"]
},

    // 2. Storyboard
    storyboard: {
  id: "storyboard",
  number: 2,
  title: "Python Multithreading and Shared Queue Processing",
  subtitle: "Understanding Concurrent Execution",
  date: "Advanced Python Programming",
  badge: "Storyboard",
  description: "A visual explanation of how Python multithreading works and how multiple threads can coordinate tasks using a shared queue.",
  reflection: "Creating this storyboard helped me understand how tasks can be divided between threads and coordinated through a shared queue.",
  defaultImage: null,
  caption: "Storyboard explaining Python multithreading and shared queue processing.",
  participants: [],
  tags: ["Python", "Multithreading", "Shared Queue"]
},

    // 3. Python Tutorial Discussion Photo
    tutorialDiscussion: {
  id: "tutorial-discussion",
  number: 3,
  title: "Python Tutorial Discussion",
  subtitle: "Learning Through Peer Interaction",
  date: "Advanced Python Programming",
  badge: "Classroom Activity",
  description: "A classroom discussion activity where students explored Python concepts, exchanged ideas, and learned from one another.",
  reflection: "This discussion helped me improve my understanding of Python concepts through interaction and collaborative learning.",
  defaultImage: null,
  caption: "A moment from the Python tutorial discussion.",
  participants: [],
  tags: ["Python", "Discussion", "Peer Learning"]
},

    // 4. IoT-Based Assistive System for People with Cerebral Palsy (PLANNING & ARCHITECTURE STAGE)
    iotProject: {
  id: "iot-project",
  number: 4,
  title: "IoT-Based Assistive System for People with Cerebral Palsy",
  subtitle: "An Assistive Approach to Everyday Independence",
  date: "Advanced Python Programming",
  badge: "Project Ideation",
  description: "An IoT-based assistive system concept designed to help people with Cerebral Palsy control essential household appliances such as lights, fans, and televisions through accessible input interfaces.",
  reflection: "This project helped me explore how technology can support accessibility and independence. I worked on the initial concept and system architecture. Hardware selection and implementation are still part of the planned work.",
  defaultImage: null,
  caption: "Proposed system architecture for the IoT-based assistive application.",
  participants: [],
  tags: ["IoT", "Assistive Technology", "Accessibility", "Project Ideation"]
},

    // 5. Class Quiz
    classQuiz: {
  id: "class-quiz",
  number: 5,
  title: "Python Concepts and Data Structures Quiz",
  subtitle: "Team Quiz Competition",
  badge: "Second Place – Team Participation",
  achievement: "Second Place – Team Participation",
  description: "Participated in a classroom quiz covering Python fundamentals, data structures, sorting, and object copying as part of a team.",
  learningExperience: "The quiz gave me an opportunity to test my understanding of Python concepts in a competitive classroom environment. Securing second place with my team was a rewarding experience that encouraged me to participate more actively, collaborate with others, and strengthen my programming knowledge.",
  topicsCovered: [
    "Shallow Copy",
    "Deep Copy",
    "Sorting in Python",
    "Lists",
    "Python Data Structures"
  ],
  keyTakeaways: [
    "Strengthened understanding of Python concepts.",
    "Improved teamwork and coordination.",
    "Gained confidence through team participation.",
    "Learned through interaction with other teams.",
    "Developed greater interest in Python programming."
  ],
  defaultImage: null,
  caption: "Classroom quiz participation and second-place team achievement."
},
    // 6. Medium Blog
    mediumBlog: {
  id: "medium-blog",
  number: 6,
  title: "Medium Blog",
  subtitle: "Technical Article on Python List Copying",
  badge: "Published",
  platform: "Medium",
  author: "Gilledi Santhosh",
  articleTitle: "When a Copy Isn't Really a Copy: The Hidden Behaviour of Python Lists",
  mediumUrl: "https://medium.com/@gilledi.santhosh2023/when-a-copy-isnt-really-a-copy-the-hidden-behaviour-of-python-lists-b4450ec6a4a6",
  description: "Published a technical article on Medium explaining how Python lists behave when copied, with a focus on shallow copying, deep copying, and object references.",
  keyLearningAreas: [
    "Python list behaviour and object references.",
    "Differences between shallow copy and deep copy.",
    "How changes to copied lists can affect original data.",
    "Explaining programming concepts through technical writing."
  ],
  defaultBlogImage: null,
  caption: "Published Medium article by Gilledi Santhosh."
},

    // 7. Audio Recording — Business Thesis
    audioBusinessThesis: {
  id: "audio-business-thesis",
  number: 7,
  title: "InteroperAI-ResQUE – Business Thesis Audio Presentation",
  subtitle: "Presenting Our Disaster Data Integration and Resource Coordination Project",
  badge: "Business Thesis Presentation",

  projectOverview: [
    {
      label: "Disaster Data Integration",
      desc: "Brings together disaster-related datasets from different sources."
    },
    {
      label: "Data Standardization",
      desc: "Maps different dataset formats into a consistent structure."
    },
    {
      label: "Disaster Assessment",
      desc: "Displays disaster-related information through dashboards."
    },
    {
      label: "Resource Coordination",
      desc: "Organises shelter and resource information to support response planning."
    }
  ],

  repoLinks: [
    {
      label: "Member 1 – GitHub Repository",
      url: "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member1"
    },
    {
      label: "Member 2 – GitHub Repository",
      url: "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member2"
    }
  ],

  liveLinks: [
    {
      label: "Member 1 – Live Website",
      url: "https://interoper-ai-res-que-member1-29p4.vercel.app/"
    },
    {
      label: "Member 2 – Live Website",
      url: "https://interoper-ai-res-que-member2.vercel.app/"
    }
  ],

  learningExperience: "This activity helped me understand our project better and communicate its purpose, features, and practical applications. Preparing the audio presentation also improved my confidence in explaining technical ideas, coordinating with teammates, and presenting our work clearly.",

  teamPhotoCaption: "InteroperAI-ResQUE team during the classroom presentation.",

  audioNote: "Audio recording of the team business thesis presentation by Gilledi Santhosh (23MID0233).",

  defaultTeamPhoto: null,
  defaultAudio: null
},

    // 8. Website PPT
    websitePpt: {
  id: "website-ppt",
  number: 8,
  title: "InteroperAI-ResQUE – Website Presentation",
  subtitle: "Presenting the Project Concept, Features, and Workflow",
  badge: "Presentation Deck",

  description: "A presentation deck explaining the InteroperAI-ResQUE project, its objectives, and its main features, including disaster data integration, data standardization, disaster assessment, and resource coordination.",

  reflection: "Preparing this presentation helped me organise the project details, understand the overall workflow, and explain our technical work clearly. It also improved my presentation skills and confidence in communicating project ideas.",

  caption: "Presentation slides explaining the InteroperAI-ResQUE project.",

  defaultImage: null
},
    // 9. Website Demo Video
    websiteDemoVideo: {
  id: "website-demo-video",
  number: 9,
  title: "InteroperAI-ResQUE – Website Demo Video",
  subtitle: "A Walkthrough of Our Disaster Data Integration and Resource Coordination Platform",
  badge: "Website Demo Video",

  description: "A walkthrough of the InteroperAI-ResQUE website demonstrating its main features, including disaster data integration, data standardization, disaster assessment, and resource coordination.",

  repoLinks: [
    {
      label: "Member 1 – GitHub Repository",
      url: "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member1"
    },
    {
      label: "Member 2 – GitHub Repository",
      url: "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member2"
    }
  ],

  liveLinks: [
    {
      label: "Member 1 – Live Website",
      url: "https://interoper-ai-res-que-member1-29p4.vercel.app/"
    },
    {
      label: "Member 2 – Live Website",
      url: "https://interoper-ai-res-que-member2.vercel.app/"
    }
  ],

  reflection: "Creating the website demonstration helped me understand how to present a project's features in a clear sequence. It also improved my confidence in explaining the platform, demonstrating its workflow, and communicating technical ideas through a practical walkthrough.",

  caption: "Website demonstration video showcasing the InteroperAI-ResQUE project.",

  defaultVideo: null
},
    // 10. Padlet Screenshots with Questions
    padletScreenshots: {
  id: "padlet-screenshots",
  number: 10,
  title: "Object-Oriented Python Question Sets – Padlet Discussion",
  subtitle: "Collaborative Student Q&A and Problem-Solving Forum",
  badge: "Padlet Contribution",

  padletUrl: "https://padlet.com/sharmilabanuk/object-oriented-python-question-sets-created-by-students-dmwur6hlhsjj013w",

  contributionUrl: "https://padlet.com/sharmilabanuk/object-oriented-python-question-sets-created-by-students-dmwur6hlhsjj013w/wish/LNV1Q7rnJKK3amq3",

  description: "As part of the Advanced Python Programming course, I participated in a collaborative Padlet activity where students shared question sets related to Object-Oriented Programming in Python.\n\nMy individual contribution is available under the name Gilledi Santhosh. It includes a 19-page document titled LeetCode OOPS Questions Practice, containing questions for practising object-oriented programming concepts.",

  learningOutcomes: [
    "Revisited important Object-Oriented Programming concepts.",
    "Practised applying OOP concepts through programming questions.",
    "Improved problem-solving through question-based practice.",
    "Explored learning resources shared by other students.",
    "Gained experience in contributing to a collaborative learning platform."
  ],

  defaultOverviewImage: null,
  defaultContributionImage: null
},

challenges: [
  {
    title: "Understanding Shallow Copy and Deep Copy",
    category: "Python Lists and Data Structures",
    problem: "I initially found it difficult to understand how changes to nested elements in a copied list could also affect the original list.",
    solution: "I explored shallow copy and deep copy using practical Python examples and compared how each handles nested objects and references.",
    impact: "I developed a clearer understanding of object references and how Python handles copied data."
  },
  {
    title: "Applying Object-Oriented Programming Concepts",
    category: "Object-Oriented Programming",
    problem: "Remembering OOP concepts was not enough; I needed practice applying them to programming questions.",
    solution: "I used the Padlet question-set activity and OOP practice questions to revisit concepts and work through examples.",
    impact: "I gained more confidence in understanding and applying OOP concepts through problem-solving."
  },
  {
    title: "Explaining Programming Workflows",
    category: "Python Multithreading",
    problem: "Understanding and explaining a workflow with multiple threads and shared tasks can be challenging when all the steps are presented together.",
    solution: "I created a storyboard that divided multithreading and shared queue processing into smaller, connected stages.",
    impact: "This helped me understand the sequence of operations and communicate the concept more clearly."
  }
],

takeaways: [
  {
    principle: "1. Understand Python's Data Behaviour",
    desc: "Learning about lists, object references, shallow copy, and deep copy helped me understand how Python handles data."
  },
  {
    principle: "2. Learn OOP Through Practice",
    desc: "Working on OOP question sets helped me revisit programming concepts and apply them to practical questions."
  },
  {
    principle: "3. Visualise Complex Workflows",
    desc: "Creating a multithreading storyboard taught me how to break a programming concept into smaller and easier-to-follow steps."
  },
  {
    principle: "4. Grow Through Collaboration",
    desc: "Classroom discussions, team activities, and project presentations helped me exchange ideas and learn from others."
  },
  {
    principle: "5. Communicate Technical Knowledge",
    desc: "Writing a Medium article gave me an opportunity to explain shallow and deep copying in Python through my own words."
  },
  {
    principle: "6. Think About Real-World Applications",
    desc: "The IoT assistive-system activity encouraged me to explore how technology could support accessibility and everyday independence."
  }
],

finalReflection: {
  title: "A Final Reflection: My Learning Beyond Code",
  date: "October 2026",
  signoff: "Gilledi Santhosh",
  essay: [
    "My journey through Advanced Python Programming has been a valuable learning experience. It gave me opportunities to strengthen my understanding of Python concepts, improve my problem-solving approach, and explore different ways of learning through classroom activities and practical exercises.",
    "Throughout the course, I worked on activities covering Python data structures, shallow and deep copying, Object-Oriented Programming, and multithreading. Participating in the classroom quiz, contributing OOP questions through Padlet, and creating a multithreading storyboard helped me understand concepts through practice and collaboration. Writing a Medium article also encouraged me to communicate technical ideas in a clear and structured way.",
    "Beyond programming concepts, the course activities introduced me to project communication and practical problem identification. Through the InteroperAI-ResQUE team presentation and website demonstration, I gained experience explaining a project's features and workflow. The IoT-based assistive-system activity encouraged me to think about accessibility challenges and plan a possible technology-based solution. This project is currently at the ideation and architecture stage.",
    "Looking back, this portfolio represents more than a collection of assignments. It brings together my learning experiences, teamwork, technical writing, project contributions, and personal reflections. Each activity taught me something different and motivated me to keep practising, improving my skills, and exploring how technology can solve meaningful problems."
  ],
  facultyEndorsements: []
}
}
};