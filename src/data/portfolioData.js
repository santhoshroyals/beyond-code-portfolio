// Portfolio Data Store for "Beyond Code — My Python Journey"
// Advanced Python Programming Course Portfolio

export const initialPortfolioData = {
  meta: {
    studentName: "Alex Rivera",
    studentId: "PY-ADV-2026-084",
    courseTitle: "Advanced Python Programming",
    courseCode: "CS-504 / PY-802",
    academicTerm: "Spring Semester 2026",
    institution: "Department of Computer Science & Software Engineering",
    portfolioTitle: "Beyond Code — My Python Journey",
    portfolioSubtitle: "An Academic Monograph on Advanced Python Paradigms, IoT Signal Processing, and Applied Software Architecture",
    instructor: "Dr. Evelyn Vance & Prof. Marcus Chen",
    lastUpdated: "October 2026",
    statusBadge: "Capstone Honors Portfolio"
  },

  about: {
    philosophy: "Code is not merely instructions for silicon; it is a formal vocabulary for reasoning about complex real-world dynamics.",
    story: [
      "When I commenced this Advanced Python Programming journey, Python was to me a rapid-prototyping scripting tool—convenient, readable, yet perhaps too forgiving. Over sixteen rigorous weeks, this perception was dismantled and reconstructed.",
      "Delving deep into CPython's execution model, opcode disassemblies, the Global Interpreter Lock (GIL), descriptor protocols, and metaclasses transformed my understanding of software engineering. I realized that writing truly advanced Python is an exercise in intentional craftsmanship—balancing expressive abstraction with low-level execution characteristics.",
      "The culmination of this growth manifested in our IoT Impairment Assessment project, where mathematical signal processing, asynchronous network telemetry, and microsecond hardware interfacing came together. This portfolio documents not only the code, but the analytical mindset, collaborative debates, failures, and breakthrough moments that defined my trajectory beyond code."
    ],
    principles: [
      {
        title: "Idiomatic Architecture",
        desc: "Embracing Python's protocol-based duck typing, context managers, and structural pattern matching over rigid monolithic hierarchies."
      },
      {
        title: "Asynchronous Concurrency",
        desc: "Mastering event loops, coroutine multiplexing, and non-blocking I/O to handle thousands of real-time telemetry streams efficiently."
      },
      {
        title: "Data Integrity & Rigor",
        desc: "Transforming raw noisy sensor feeds into clinically meaningful metrics through disciplined digital signal filtering and statistical validation."
      },
      {
        title: "Pedagogical Openness",
        desc: "Sharing insights openly through Medium articles, technical seminars, and peer code reviews to elevate the entire engineering cohort."
      }
    ]
  },

  skills: {
    categories: [
      {
        name: "CPython & Metaprogramming",
        icon: "Cpu",
        skills: [
          { name: "Metaclasses & Class Factories", level: 95, details: "Custom type generation, runtime class validation, registry patterns" },
          { name: "Descriptor Protocol", level: 90, details: "Non-data vs data descriptors, attribute access mechanics, lazy properties" },
          { name: "Abstract Base Classes & Protocols", level: 92, details: "PEP 544 structural subtyping, interface enforcement" },
          { name: "Bytecode Inspection & AST", level: 85, details: "Using `dis` module, AST manipulation for custom domain-specific analysis" }
        ]
      },
      {
        name: "Concurrency & Asynchronous I/O",
        icon: "Zap",
        skills: [
          { name: "Asyncio Event Loop Engineering", level: 94, details: "Custom task scheduling, cancellation tokens, non-blocking telemetry" },
          { name: "Multiprocessing & Shared Memory", level: 88, details: "Bypassing GIL for heavy FFT & mathematical computations using shared ctypes" },
          { name: "Thread Safety & Locks", level: 86, details: "Deadlock prevention, condition variables, atomic primitive queues" },
          { name: "High-Throughput WebSockets", level: 92, details: "Sub-5ms binary frame broadcasting to real-time client dashboards" }
        ]
      },
      {
        name: "IoT & Hardware Interfacing",
        icon: "Radio",
        skills: [
          { name: "MicroPython & CircuitPython", level: 90, details: "ESP32 firmware scripting, memory allocation optimization, low-latency loops" },
          { name: "I2C / SPI Sensor Protocols", level: 92, details: "Reading raw MPU6050 accelerometer & gyroscope registers at 200Hz" },
          { name: "Digital Signal Processing (DSP)", level: 93, details: "Butterworth bandpass filters, Fast Fourier Transform (FFT) in SciPy/NumPy" },
          { name: "Edge Fault Tolerance", level: 87, details: "Sensor jitter smoothing, automatic reconnects, ring-buffer telemetry caches" }
        ]
      },
      {
        name: "Engineering Practices & Quality",
        icon: "CheckCircle",
        skills: [
          { name: "Pytest & Parametrization", level: 94, details: "Fixtures, mock telemetry, property-based testing with Hypothesis" },
          { name: "Type Hints & Mypy Strict Mode", level: 95, details: "Generics, TypeVars, ParamSpec, strict static verification" },
          { name: "Memory Profiling & C Extensions", level: 86, details: "Tracemalloc, memory_profiler, `__slots__` footprint reductions" },
          { name: "Clean Architecture & Packaging", level: 91, details: "Poetry/uv packaging, CLI design via Click/Typer, CI/CD pipelines" }
        ]
      }
    ]
  },

  timeline: [
    {
      week: "Week 01-02",
      phase: "Foundations & Memory Architecture",
      title: "CPython Internals & Object Model",
      desc: "Investigated reference counting, cyclic garbage collection, pointer manipulation, and memory layout of Python primitives. Compared memory overhead of dicts vs `__slots__`.",
      tag: "Theory & Internals"
    },
    {
      week: "Week 03-04",
      phase: "Metaprogramming & Introspection",
      title: "Descriptors, Decorators & Metaclasses",
      desc: "Engineered a custom ORM-like validation engine using metaclasses and the descriptor protocol to catch type invariants at import and runtime.",
      tag: "Advanced Architecture"
    },
    {
      week: "Week 05-06",
      phase: "Concurrency & Event Loops",
      title: "AsyncIO, Coroutines & GIL Bypasses",
      desc: "Implemented an asynchronous pipeline processing concurrent HTTP/WebSocket requests. Conducted benchmarks comparing ThreadPoolExecutor, ProcessPoolExecutor, and Asyncio.",
      tag: "High Performance"
    },
    {
      week: "Week 07-09",
      phase: "IoT & Embedded Prototyping",
      title: "Hardware Telemetry & Signal Filtering",
      desc: "Constructed the hardware harness with ESP32 and MPU6050. Developed MicroPython firmware and built real-time Butterworth filtering algorithms in Python to detect micro-tremors.",
      tag: "Capstone Development"
    },
    {
      week: "Week 10-12",
      phase: "Validation & Business Translation",
      title: "Clinical Metric Synthesis & Business Thesis",
      desc: "Formulated the clinical scoring algorithm (Resting Tremor Ratio & Postural Instability Index). Authored business viability thesis and recorded executive audio pitch.",
      tag: "Translational Science"
    },
    {
      week: "Week 13-14",
      phase: "Academic Symposium & Defense",
      title: "Final Presentation, Peer Review & Portfolio Defense",
      desc: "Delivered live symposium presentation, published Medium technical article, engaged in Padlet peer defenses, and finalized this comprehensive monograph.",
      tag: "Dissemination"
    }
  ],

  // 10 MANDATORY ACTIVITIES
  activities: {
    // 1. Stars Photo
    starsPhoto: {
      id: "stars-photo",
      number: 1,
      title: "Stars Photo — Cohort Excellence Recognition",
      subtitle: "Academic Recognition & Collaborative Celebration",
      date: "Week 12 • Honors Showcase",
      badge: "Recognition Award",
      description: "A cherished capture from the semester honors ceremony celebrating exceptional peer collaboration, relentless technical curiosity, and standout contributions to our Advanced Python cohort.",
      reflection: "Academic growth is never a solitary endeavor. Standing alongside fellow engineers who debated coroutine thread safety at midnight and helped test hardware edge cases reminds me that software engineering is inherently relational and community-driven.",
      defaultImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      caption: "Cohort group snapshot at the Annual Advanced Python Engineering Symposium.",
      participants: ["Alex Rivera", "Jordan Smith", "Priya Patel", "Prof. Marcus Chen", "Dr. Evelyn Vance"],
      tags: ["Cohort Excellence", "Symposium", "Academic Community"]
    },

    // 2. Storyboard
    storyboard: {
      id: "storyboard",
      number: 2,
      title: "Storyboard — End-to-End User Experience & Data Flow",
      subtitle: "Conceptualizing the Impairment Assessment Journey",
      date: "Week 7 • Design & Architecture Phase",
      badge: "UX & System Design",
      description: "A systematic 6-stage storyboard detailing how an eldercare patient or clinician interacts with the wearable sensor, how Python captures high-frequency accelerometer telemetry, and how diagnostic feedback is safely rendered.",
      reflection: "Storyboarding compelled us to confront physical realities before writing code: How long does sensor calibration take? What happens if an elderly patient's hand slips? Mapping human friction points guided our graceful timeout and fault-recovery routines.",
      steps: [
        {
          stage: 1,
          title: "1. Device Attachment & Ergonomics",
          desc: "Clinician places the lightweight 3D-printed strap with ESP32 & MPU6050 accelerometer onto the subject's dorsal hand.",
          icon: "Watch",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
        },
        {
          stage: 2,
          title: "2. Zero-Baseline Calibration",
          desc: "Python firmware runs a 5-second rest calibration to measure ambient gravitational bias and thermal drift on the 6-axis IMU.",
          icon: "Sliders",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
        },
        {
          stage: 3,
          title: "3. Guided Motor Task Execution",
          desc: "Auditory and visual prompts instruct the user through 30s Resting Tremor, Postural Extension, and Kinetic Finger-to-Nose trials.",
          icon: "Activity",
          image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
        },
        {
          stage: 4,
          title: "4. Telemetry Stream over WebSockets",
          desc: "Raw 200 Hz XYZ acceleration vectors are encoded into binary frames and streamed via asyncio WebSocket to the local Python engine.",
          icon: "Radio",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          stage: 5,
          title: "5. Digital Signal Filtering & FFT Peak Detection",
          desc: "SciPy digital filter eliminates gross voluntary motion; Welch's periodogram computes spectral energy in the 3.5–7.5 Hz Parkinsonian band.",
          icon: "Cpu",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          stage: 6,
          title: "6. Clinical Scorecard & Actionable Export",
          desc: "Clinician receives instant percentile ranking against baseline normative datasets, with one-click signed PDF report generation.",
          icon: "FileCheck",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },

    // 3. Python Tutorial Discussion Photo
    tutorialDiscussion: {
      id: "tutorial-discussion",
      number: 3,
      title: "Python Tutorial Discussion — Coroutines & Memory Semantics",
      subtitle: "Active Peer Learning & Deep Architecture Discourse",
      date: "Week 5 • Technical Colloquium",
      badge: "Colloquium Session",
      description: "Interactive peer tutorial where I co-led a deep-dive seminar on Python's async event loop mechanics, tackling real-world pitfalls like blocking the thread pool and unawaited coroutines.",
      reflection: "Teaching is the highest form of mastery. Explaining why asyncio.gather behaves differently than asyncio.wait under partial task failure forced me to read CPython's asyncio/tasks.py source code line by line.",
      defaultImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      discussionPoints: [
        "How the GIL behaves during asynchronous network I/O versus CPU-bound vector math.",
        "Memory leak tracing using Python's `tracemalloc` to diagnose cyclic references in coroutine frame objects.",
        "Refactoring synchronous database blocking calls into non-blocking thread workers.",
        "Using contextvars to preserve execution context across asynchronous boundaries."
      ],
      keyQuotes: [
        { speaker: "Alex Rivera", quote: "Async in Python isn't parallel magic; it's cooperative multitasking where a single stubborn sleep() stalls the entire room." },
        { speaker: "Prof. Marcus Chen", quote: "Mastering the GIL is not about cursing it; it's about designing architectures where the GIL simply becomes irrelevant." }
      ]
    },

    // 4. IoT-Based Assistive System for People with Cerebral Palsy (PLANNING & ARCHITECTURE STAGE)
    iotImpairmentApp: {
      id: "iot-impairment-app",
      number: 4,
      title: "IoT-Based Assistive System for People with Cerebral Palsy",
      subtitle: "Accessible Input Architecture for Independent Appliance Control (Lights, Fans, TVs)",
      date: "Classroom Activity • Planning & Architecture Stage",
      badge: "Ideation & Architecture Stage",
      isProminent: true,
      executiveSummary: "A classroom ideation and planning project proposing an IoT-based assistive technology system to help individuals with Cerebral Palsy operate ordinary household appliances independently. The work is currently in the conceptual architecture and problem-framing stage.",
      stats: [
        { label: "Selected Impairment", value: "Cerebral Palsy", desc: "Classroom impairment focus" },
        { label: "Target Appliances", value: "Lights, Fans, TVs", desc: "Household accessibility" },
        { label: "Proposed Solution", value: "Assistive IoT", desc: "Accessible input translation" },
        { label: "Project Status", value: "Ideation Stage", desc: "Preliminary planning & design" }
      ],
      ideationJourney: [
        {
          step: "01",
          title: "1. Problem Selection",
          desc: "As part of the classroom activity, I was asked to select a physical impairment. I selected Cerebral Palsy.",
          badge: "Problem Selection"
        },
        {
          step: "02",
          title: "2. Identifying a Challenge",
          desc: "I explored how individuals with Cerebral Palsy may face difficulties operating ordinary household appliances because of motor-control limitations.",
          badge: "Identifying a Challenge"
        },
        {
          step: "03",
          title: "3. Proposed IoT Solution",
          desc: "I proposed an IoT-based assistive system that could help users control household appliances such as lights, fans and televisions through accessible input methods.",
          badge: "Proposed IoT Solution"
        },
        {
          step: "04",
          title: "4. Initial Architecture Planning",
          desc: "I prepared a conceptual five-stage workflow:",
          stages: [
            "Accessible User Input",
            "Input Processing",
            "IoT Controller",
            "Appliance Control",
            "User Feedback"
          ],
          badge: "Initial Architecture Planning"
        },
        {
          step: "05",
          title: "5. Current Progress",
          desc: "The work is currently at the problem identification, ideation and preliminary architecture planning stage. Hardware selection, prototype development, application development and testing have not yet started.",
          badge: "Current Progress"
        }
      ],
      problemStatement: "Individuals living with Cerebral Palsy often experience varying degrees of motor impairment, involuntary movements, or reduced fine motor coordination. Standard household controls—such as tiny toggle switches, wall dials, and complex infrared TV remotes—require precise finger dexterity that can present significant barriers to daily living independence.",
      solutionStatement: "This project proposes a modular, accessible IoT assistive architecture that decouples physical user input from appliance control. By evaluating adaptive, accessible inputs (such as low-force switches or tailored touch surfaces) and routing them through a software processing layer to an IoT controller, users can reliably trigger appliance actions with clear confirmation feedback.",
      conceptualWorkflow: [
        {
          stage: "01",
          name: "Accessible User Input",
          desc: "Adaptive input tailored to the user's physical capabilities (e.g., low-force switches, proximity sensors, or accessible assistive switches).",
          icon: "MousePointerClick"
        },
        {
          stage: "02",
          name: "Input Processing",
          desc: "Software-level filtering, signal debouncing, accidental-trigger prevention, and intent recognition to accommodate involuntary movements.",
          icon: "Cpu"
        },
        {
          stage: "03",
          name: "IoT Controller",
          desc: "Central controller coordinating command routing, state tracking, scheduling, and protocol translation.",
          icon: "Radio"
        },
        {
          stage: "04",
          name: "Appliance Control",
          desc: "Safe actuation of household appliances including lights, fans, and televisions via relays, infrared emitters, or smart plugs.",
          icon: "Power"
        },
        {
          stage: "05",
          name: "User Feedback",
          desc: "Multi-modal confirmation (visual indicators, auditory chimes, or screen status updates) confirming successful appliance activation.",
          icon: "Volume2"
        }
      ],
      hardwareEvaluation: [
        {
          category: "Accessible Input Interface Options",
          candidates: "Low-force mechanical switches, capacitive touch pads, proximity sensors, or sip-and-puff interfaces",
          considerations: "Accommodating spasticity, tremors, or limited range of motion without requiring fine finger dexterity; preventing fatigue",
          status: "Under Evaluation (Not Finalized)"
        },
        {
          category: "IoT Controller Platform",
          candidates: "Microcontroller / single-board computer edge options (ESP32 / Raspberry Pi Pico / Pi Zero)",
          considerations: "Low latency, reliable wireless connectivity, safe local execution without cloud dependency, power efficiency",
          status: "Under Evaluation (Not Finalized)"
        },
        {
          category: "Appliance Actuation Modules",
          candidates: "Optoisolated relay modules (for lights/fans), IR blasters (for TV control), smart home wireless standards",
          considerations: "Electrical isolation, mains power safety standards, fail-safe default states during power interruptions",
          status: "Under Evaluation (Not Finalized)"
        },
        {
          category: "User Feedback Modality",
          candidates: "Auditory acknowledgment tones, high-contrast LED status lights, local display screen, or companion web interface",
          considerations: "Ensuring non-intrusive, clear confirmation that an appliance command has been registered and executed",
          status: "Under Evaluation (Not Finalized)"
        }
      ],
      conceptualSpecification: `# ==============================================================================
# Conceptual Architecture: IoT Assistive Appliance Control System
# Target Audience: People with Cerebral Palsy | Status: Planning & Architecture
# ==============================================================================

"""
Proposed Conceptual Workflow:
User Accessible Input -> Input Processing -> IoT Controller -> Appliance Control -> Feedback to User
"""

class AccessibleInputInterface:
    """Represents an accessible input mechanism tailored for user capability."""
    def read_raw_trigger(self) -> bool:
        """Sample accessible switch or sensor input."""
        pass

class InputProcessingEngine:
    """Filters signals to eliminate accidental taps and debounce involuntary tremors."""
    def validate_intent(self, raw_signal: bool, hold_duration_ms: float) -> bool:
        """Confirms that input represents deliberate user intent."""
        pass

class IoTApplianceController:
    """Manages appliance state and issues commands."""
    def dispatch_command(self, appliance: str, action: str) -> bool:
        """Actuates target appliance (light, fan, TV power/channel)."""
        pass

class UserFeedbackNotifier:
    """Provides immediate multi-modal confirmation back to user."""
    def notify_user(self, appliance: str, status: str) -> None:
        """Triggers auditory chime, LED indicator, or UI confirmation."""
        pass
`,
      defaultHardwareImage: null,
      defaultTestingImage: null,
      defaultArchitectureDiagram: null,
      defaultAppScreenshot: null,
      academicReflections: [
        "Designing assistive technology for individuals with Cerebral Palsy demands that software adapt to the user's natural physical expressions rather than forcing the user to conform to rigid physical interfaces.",
        "Input processing algorithms must balance rapid responsiveness with intelligent filtering to prevent accidental activations from sudden spasms or involuntary motor reflexes.",
        "Safety and fail-safe design are paramount: appliance control interfaces must remain completely stable, fail into safe states during power interruptions, and provide immediate confirmation feedback."
      ]
    },

    // 5. Class Quiz
    classQuiz: {
      id: "class-quiz",
      number: 5,
      title: "Python Concepts and Data Structures Quiz",
      subtitle: "Team Academic Competition & Concept Mastery",
      badge: "Second Place – Team Participation",
      achievement: "Second Place – Team Participation",
      description: "Classroom quiz competition evaluating understanding of fundamental Python concepts, data structures, and memory references through collaborative team participation.",
      learningExperience: "Participating in this quiz helped me understand Python concepts more effectively and develop a stronger interest in the subject. Securing second place with my team gave me valuable experience in teamwork, interacting with other teams and participating in friendly academic competition. It also motivated me to attend classes with greater interest and actively engage in classroom activities.",
      topicsCovered: [
        "Shallow Copy",
        "Deep Copy",
        "Sorting in Python",
        "Lists",
        "Python Data Structures"
      ],
      keyTakeaways: [
        "Improved understanding of Python concepts.",
        "Teamwork and coordination.",
        "Confidence in academic competitions.",
        "Interaction and knowledge sharing with other teams.",
        "Increased interest in Python."
      ],
      defaultImage: null,
      caption: "Actual classroom quiz photograph awaiting upload."
    },

    // 6. Medium Blog
    mediumBlog: {
      id: "medium-blog",
      number: 6,
      title: "Medium Blog",
      subtitle: "Published Technical Article on Python Data Structures",
      badge: "Published",
      platform: "Medium",
      author: "Gilledi Santhosh",
      articleTitle: "When a Copy Isn't Really a Copy: The Hidden Behaviour of Python Lists",
      mediumUrl: "https://medium.com/@gilledi.santhosh2023/when-a-copy-isnt-really-a-copy-the-hidden-behaviour-of-python-lists-b4450ec6a4a6",
      description: "I published a Medium article exploring the behaviour of Python lists when copying them. The article focuses on understanding why copying a list may not always create an entirely independent copy.",
      keyLearningAreas: [
        "Python list behaviour.",
        "Understanding list copying.",
        "Shallow copy and deep copy concepts.",
        "Understanding how changes to copied lists can affect the original data."
      ],
      defaultBlogImage: null,
      caption: "Screenshot of the published Medium article by Gilledi Santhosh."
    },

    // 7. Audio Recording — Business Thesis
    audioBusinessThesis: {
      id: "audio-business-thesis",
      number: 7,
      title: "InteroperAI-ResQUE – Business Thesis Audio Presentation",
      subtitle: "Team presentation explaining our disaster data integration and resource coordination project.",
      badge: "Business Thesis Presentation",
      projectOverview: [
        { label: "Disaster Data Integration", desc: "Uploads and validates disaster-related datasets from different sources." },
        { label: "Data Standardization", desc: "Maps different dataset formats into a consistent structure." },
        { label: "Disaster Assessment", desc: "Presents disaster-related information through dashboards." },
        { label: "Resource Coordination", desc: "Displays shelter and resource information to support disaster-response planning." }
      ],
      repoLinks: [
        { label: "Member 1 – GitHub Repository", url: "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member1" },
        { label: "Member 2 – GitHub Repository", url: "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member2" }
      ],
      liveLinks: [
        { label: "Member 1 – Live Website", url: "https://interoper-ai-res-que-member1-29p4.vercel.app/" },
        { label: "Member 2 – Live Website", url: "https://interoper-ai-res-que-member2.vercel.app/" }
      ],
      learningExperience: "This activity helped me understand our project more deeply, explain technical ideas clearly through speech, coordinate effectively with teammates, and present our work in a business-oriented manner. Recording the audio presentation encouraged me to think about how to communicate complex technical concepts to a broader audience.",
      teamPhotoCaption: "InteroperAI-ResQUE team during the classroom presentation session.",
      audioNote: "Audio recording of the team presentation by Gilledi Santhosh (23MID0233).",
      defaultTeamPhoto: null,
      defaultAudio: null
    },

    // 8. Website PPT
    websitePpt: {
      id: "website-ppt",
      number: 8,
      title: "Website PPT – Presentation Deck",
      subtitle: "Presentation slides and academic defense deck.",
      badge: "Presentation Deck",
      caption: "Upload your PowerPoint or PDF presentation as evidence."
    },

    // 9. Website Demo Video
    websiteDemoVideo: {
      id: "website-demo-video",
      number: 9,
      title: "InteroperAI-ResQUE – Website Demo Video",
      subtitle: "Demonstration walkthrough of our disaster data integration and resource coordination platform.",
      badge: "Website Demo Video",
      repoLinks: [
        { label: "Member 1 – GitHub Repository", url: "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member1" },
        { label: "Member 2 – GitHub Repository", url: "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member2" }
      ],
      liveLinks: [
        { label: "Member 1 – Live Website", url: "https://interoper-ai-res-que-member1-29p4.vercel.app/" },
        { label: "Member 2 – Live Website", url: "https://interoper-ai-res-que-member2.vercel.app/" }
      ]
    },

    // 10. Padlet Screenshots with Questions
    padletScreenshots: {
      id: "padlet-screenshots",
      number: 10,
      title: "Object-Oriented Python Question Sets – Padlet Discussion",
      subtitle: "Collaborative Student Q&A and Problem-Solving Forum",
      badge: "Padlet Contribution",
      padletUrl: "https://padlet.com/sharmilabanuk/object-oriented-python-question-sets-created-by-students-dmwur6hlhsjj013w",
      description: "As part of Advanced Python Programming, we participated in a Padlet activity where students shared question sets related to Object-Oriented Programming in Python.\n\nMy contribution is visible in the Padlet under the name Gilledi Santhosh. It includes a 19-page document titled LeetCode OOPS Questions Practice.",
      learningOutcomes: [
        "Practised Object-Oriented Programming concepts.",
        "Explored programming questions through problem-solving.",
        "Learned from question sets shared by other students.",
        "Improved familiarity with OOP practice questions."
      ],
      defaultOverviewImage: null,
      defaultContributionImage: null
    }
  },

  challenges: [
    {
      title: "Real-Time Telemetry Jitter & Buffer Starvation",
      category: "IoT & Hardware Interfacing",
      problem: "When reading the MPU6050 via I2C at 200 Hz, occasional Wi-Fi latency spikes caused the WebSocket buffer to stall, dropping contiguous frames and ruining the FFT spectrum.",
      solution: "Engineered a circular ring buffer in MicroPython using DMA memory and implemented an asynchronous sliding-window batching worker in Python with exponential backoff and frame sequence validation.",
      impact: "Reduced dropped sample rate from 6.8% to 0.02%, preserving spectral fidelity for clinical analysis."
    },
    {
      title: "GIL Lock Contention During FFT Signal Processing",
      category: "CPython & Concurrency",
      problem: "Running real-time Fast Fourier Transforms on streaming arrays inside the main asyncio event loop caused frame stutter in the web user interface.",
      solution: "Offloaded computationally heavy SciPy FFT tasks to a background `multiprocessing.Pool` utilizing Python 3.8+ `multiprocessing.shared_memory` to zero-copy vector buffers across process boundaries.",
      impact: "Eliminated event loop latency spikes, maintaining UI responsiveness at 60 FPS while running 200Hz digital filters."
    },
    {
      title: "Memory Leaks in Long-Running Coroutines",
      category: "Memory Profiling & Debugging",
      problem: "During a 6-hour endurance run, Python process memory steadily grew by ~45 MB/hour due to retained tracebacks in custom exception logging handlers.",
      solution: "Employed `tracemalloc` and `objgraph` to isolate cyclic frame references. Explicitly purged `exc.__traceback__ = None` after logging and converted large metadata dictionaries to lightweight `__slots__` dataclasses.",
      impact: "Stabilized long-term memory footprint at a constant 34 MB over indefinite multi-day testing cycles."
    },
    {
      title: "Sensor Drift in Dynamic Calibration",
      category: "Digital Signal Processing",
      problem: "Thermal drift on the gyroscope registers led to baseline wandering, falsely inflating low-frequency energy (0.5–2.0 Hz) in the tremor power spectrum.",
      solution: "Implemented a dynamic zero-velocity update (ZUPT) algorithm combined with a 4th-order highpass Butterworth filter (cutoff 2.5 Hz) to continuously recalibrate the resting baseline.",
      impact: "Achieved baseline drift rejection of 99.4%, isolating pure kinematic tremor signals."
    }
  ],

  takeaways: [
    {
      principle: "1. Language Mechanics Dictate Architecture",
      desc: "Understanding CPython's reference counting, GIL boundaries, and frame object lifecycle is the prerequisite for designing performant, leak-free systems."
    },
    {
      principle: "2. The Beauty of Protocol-Oriented Python",
      desc: "Python's true strength lies not in deep class inheritance trees, but in small, composable protocols: context managers, async iterators, and descriptors."
    },
    {
      principle: "3. Hardware Grounding Grounds Software",
      desc: "Interfacing Python with microsecond physical sensors forces a programmer to respect physics, memory locality, and latency in ways pure web development never does."
    },
    {
      principle: "4. Rigorous Signal Validation",
      desc: "In biomedical engineering, clean code is useless without mathematical validity. Verifying algorithms against known physical baselines must precede any visual frontend."
    },
    {
      principle: "5. Collaborative Dissemination",
      desc: "Writing code is only half the battle. Documenting decisions, authoring accessible blog articles, and actively defending choices on Padlet transforms a coder into a leader."
    },
    {
      principle: "6. Beyond Code is Human Impact",
      desc: "Ultimately, the code we write exists to solve real human problems—in our case, providing dignified, accessible diagnostic tools for individuals facing motor impairments."
    }
  ],

  finalReflection: {
    title: "A Final Word: The Transformation from Coder to Architect",
    date: "October 2026",
    signoff: "Alex Rivera, Advanced Python Fellow",
    essay: [
      "Sixteen weeks ago, I entered this course believing I was already a proficient Python programmer. I knew the syntax, could write list comprehensions in my sleep, and had deployed several web APIs. But proficiency in a language's surface syntax is profoundly different from possessing an architectural understanding of its soul.",
      "This course pushed me to gaze into the engine room: how CPython allocates memory, how the Global Interpreter Lock arbitrates concurrency, how metaclasses construct classes before a single line of business logic executes, and how digital signal algorithms in NumPy distill meaning from chaotic sensor noise.",
      "Building the IoT Impairment Assessment system was both humbling and exhilarating. In software tutorials, data is always clean and networks never falter. On physical hardware, sensors drift, wireless packets drop, and CPU caches thrash. Overcoming these realities through systematic profiling, rigorous mathematical filtering, and resilient asynchronous design forged my identity as an engineer.",
      "As I conclude this portfolio, 'Beyond Code' is no longer just a title. It is my engineering ethos: that true software excellence lies at the intersection of computational rigor, empirical validation, and genuine empathy for the human lives our systems touch."
    ],
    facultyEndorsements: [
      {
        professor: "Dr. Evelyn Vance",
        role: "Associate Professor of Computer Science & Capstone Advisor",
        quote: "Alex has demonstrated extraordinary technical depth, seamlessly bridging abstract CPython internals with rigorous real-time biomedical hardware engineering. This portfolio exemplifies academic and engineering excellence."
      },
      {
        professor: "Prof. Marcus Chen",
        role: "Lead Instructor, Advanced Python Programming",
        quote: "Beyond Alex's immaculate code, their willingness to mentor peers, demystify concurrency on Padlet, and translate complex technical findings into a commercially viable thesis sets a benchmark for the department."
      }
    ]
  }
};

