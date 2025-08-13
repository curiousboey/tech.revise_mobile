// Web Development Quiz Questions
const webAppDevQuestions = [
    {
        question: "Which stage of web/app development involves creating wireframes and mockups before coding begins?",
        options: ["Backend Development", "UI/UX Design", "Database Optimization", "Deployment"],
        answer: 1,
        hint: "It's about designing how the application will look and feel.",
        detailedExplanation: "UI/UX design focuses on the visual structure and user interaction of an app, often done using wireframes and mockups before coding."
    },
    {
        question: "In frontend development, what is the primary role of CSS?",
        options: ["Structure content", "Style content", "Handle database queries", "Manage server requests"],
        answer: 1,
        hint: "Think colors, fonts, and layout.",
        detailedExplanation: "CSS (Cascading Style Sheets) defines the look and layout of HTML elements, controlling colors, fonts, spacing, and positioning."
    },
    {
        question: "What does JWT stand for in web security?",
        options: ["Java Web Tools", "JSON Web Token", "JavaScript Workflow Template", "JSON Web Transfer"],
        answer: 1,
        hint: "It is used for securely transmitting information between parties as a JSON object.",
        detailedExplanation: "JWT stands for JSON Web Token, a compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication."
    },
    {
        question: "Which HTML5 element is used to create semantic navigation?",
        options: ["<div>", "<nav>", "<section>", "<header>"],
        answer: 1,
        hint: "Think about the semantic meaning of navigation.",
        detailedExplanation: "The <nav> element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents."
    },
    {
        question: "What is the purpose of responsive web design?",
        options: ["To make websites load faster", "To ensure websites work on different screen sizes", "To improve SEO rankings", "To add animations"],
        answer: 1,
        hint: "Think about mobile devices and tablets.",
        detailedExplanation: "Responsive web design ensures that web applications look and function well on a variety of devices and screen sizes, from desktop computers to mobile phones."
    },
    {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        options: ["append()", "push()", "add()", "insert()"],
        answer: 1,
        hint: "Think about 'pushing' something onto a stack.",
        detailedExplanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
        question: "What does API stand for in web development?",
        options: ["Application Programming Interface", "Automated Program Integration", "Advanced Programming Instructions", "Application Process Integration"],
        answer: 0,
        hint: "It's about how different software components communicate.",
        detailedExplanation: "API stands for Application Programming Interface, which defines the methods of communication between various software components."
    },
    {
        question: "Which HTTP method is typically used to update existing data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: 2,
        hint: "Think about 'putting' updated information.",
        detailedExplanation: "PUT is used to update existing resources on the server. It replaces the entire resource with the new data provided."
    },
    {
        question: "What is the purpose of a CDN in web development?",
        options: ["Content Delivery Network", "Code Development Network", "Central Database Network", "Customer Data Network"],
        answer: 0,
        hint: "It's about delivering content faster to users.",
        detailedExplanation: "A Content Delivery Network (CDN) is a system of distributed servers that deliver web content to users based on their geographic location, improving load times."
    },
    {
        question: "Which CSS property is used to create flexible layouts?",
        options: ["display: block", "display: flex", "display: inline", "display: none"],
        answer: 1,
        hint: "Think about 'flexible' layouts.",
        detailedExplanation: "The display: flex property creates a flexible container that can easily arrange and distribute space among items in a layout."
    },
    {
        question: "What is the purpose of version control in software development?",
        options: ["To speed up code execution", "To track changes and collaborate", "To minify code", "To compile code"],
        answer: 1,
        hint: "Think about tracking changes over time.",
        detailedExplanation: "Version control systems like Git track changes to code over time, allowing developers to collaborate, revert changes, and maintain a history of modifications."
    },
    {
        question: "Which database type is commonly used with Node.js applications?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "All of the above"],
        answer: 3,
        hint: "Node.js is flexible with database choices.",
        detailedExplanation: "Node.js can work with various databases including SQL databases like MySQL and PostgreSQL, as well as NoSQL databases like MongoDB."
    },
    {
        question: "What does SPA stand for in web development?",
        options: ["Single Page Application", "Secure Page Access", "Simple Page Architecture", "Structured Page Application"],
        answer: 0,
        hint: "Think about applications that don't reload the entire page.",
        detailedExplanation: "A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates content as the user interacts with the app."
    },
    {
        question: "Which tool is commonly used for task automation in web development?",
        options: ["Webpack", "Gulp", "Grunt", "All of the above"],
        answer: 3,
        hint: "There are multiple tools for automation.",
        detailedExplanation: "Webpack, Gulp, and Grunt are all popular build tools used for automating tasks like minification, compilation, and optimization in web development."
    },
    {
        question: "What is the purpose of SASS/SCSS in web development?",
        options: ["To replace HTML", "To extend CSS with variables and functions", "To handle JavaScript events", "To manage databases"],
        answer: 1,
        hint: "It's a CSS preprocessor.",
        detailedExplanation: "SASS/SCSS is a CSS preprocessor that extends CSS with features like variables, nesting, mixins, and functions, making CSS more maintainable."
    },
    {
        question: "Which framework is known for its 'Virtual DOM' concept?",
        options: ["Angular", "Vue.js", "React", "Svelte"],
        answer: 2,
        hint: "This framework was created by Facebook.",
        detailedExplanation: "React uses a Virtual DOM, which is a JavaScript representation of the real DOM that allows for efficient updates and rendering."
    },
    {
        question: "What is the purpose of middleware in Express.js?",
        options: ["To handle database connections", "To process requests between client and server", "To compile TypeScript", "To minify CSS"],
        answer: 1,
        hint: "It sits in the 'middle' of the request-response cycle.",
        detailedExplanation: "Middleware functions in Express.js execute during the request-response cycle and can modify request/response objects, end the cycle, or call the next middleware."
    },
    {
        question: "Which HTTP status code indicates a successful request?",
        options: ["404", "500", "200", "302"],
        answer: 2,
        hint: "Think of a 'perfect' number for success.",
        detailedExplanation: "HTTP status code 200 indicates that the request was successful and the server returned the requested resource."
    },
    {
        question: "What is the purpose of CORS in web development?",
        options: ["Cross-Origin Resource Sharing", "Code Optimization and Rendering System", "Central Object Reference System", "Client-Origin Request Security"],
        answer: 0,
        hint: "It's about sharing resources across different origins.",
        detailedExplanation: "CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain."
    },
    {
        question: "Which testing framework is popular for JavaScript applications?",
        options: ["Jest", "Mocha", "Jasmine", "All of the above"],
        answer: 3,
        hint: "There are several popular options.",
        detailedExplanation: "Jest, Mocha, and Jasmine are all popular testing frameworks for JavaScript applications, each with their own features and advantages."
    },
    {
        question: "What is the purpose of npm in Node.js development?",
        options: ["Node Package Manager", "Network Protocol Manager", "New Project Manager", "Node Performance Monitor"],
        answer: 0,
        hint: "It manages packages for Node.js.",
        detailedExplanation: "npm (Node Package Manager) is the default package manager for Node.js, allowing developers to install and manage dependencies."
    },
    {
        question: "Which CSS framework is known for its utility-first approach?",
        options: ["Bootstrap", "Foundation", "Tailwind CSS", "Bulma"],
        answer: 2,
        hint: "It focuses on utility classes rather than components.",
        detailedExplanation: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS."
    },
    {
        question: "What is the purpose of WebPack in modern web development?",
        options: ["Module bundling", "Database management", "Server hosting", "Image editing"],
        answer: 0,
        hint: "It bundles modules together.",
        detailedExplanation: "Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules."
    },
    {
        question: "Which method is used to make HTTP requests in modern JavaScript?",
        options: ["XMLHttpRequest", "fetch()", "Both A and B", "jQuery.ajax()"],
        answer: 2,
        hint: "Both old and new methods are still used.",
        detailedExplanation: "Both XMLHttpRequest (older method) and fetch() (modern method) can be used to make HTTP requests in JavaScript, with fetch() being preferred for new projects."
    },
    {
        question: "What is Progressive Web App (PWA)?",
        options: ["A web app that works offline", "A web app that can be installed", "A web app with native-like features", "All of the above"],
        answer: 3,
        hint: "PWAs combine the best of web and mobile apps.",
        detailedExplanation: "Progressive Web Apps (PWAs) are web applications that provide a native app-like experience, including offline functionality, installability, and push notifications."
    },
    {
        question: "Which JavaScript feature allows asynchronous programming?",
        options: ["Callbacks", "Promises", "async/await", "All of the above"],
        answer: 3,
        hint: "There are multiple ways to handle asynchronous operations.",
        detailedExplanation: "JavaScript supports asynchronous programming through callbacks, Promises, and async/await syntax, with each building upon the previous methods."
    },
    {
        question: "What is the purpose of a linter in web development?",
        options: ["To compress files", "To check code quality and style", "To compile code", "To run tests"],
        answer: 1,
        hint: "It helps maintain code quality.",
        detailedExplanation: "A linter is a tool that analyzes code to flag programming errors, bugs, stylistic errors, and suspicious constructs, helping maintain code quality."
    },
    {
        question: "Which CSS methodology promotes component-based styling?",
        options: ["BEM", "OOCSS", "SMACSS", "All of the above"],
        answer: 3,
        hint: "There are several methodologies for organizing CSS.",
        detailedExplanation: "BEM (Block Element Modifier), OOCSS (Object-Oriented CSS), and SMACSS (Scalable and Modular Architecture for CSS) all promote organized, component-based styling approaches."
    },
    {
        question: "What is TypeScript in relation to JavaScript?",
        options: ["A replacement for JavaScript", "A superset of JavaScript with static typing", "A different programming language", "A JavaScript framework"],
        answer: 1,
        hint: "It adds features to JavaScript.",
        detailedExplanation: "TypeScript is a superset of JavaScript that adds static type definitions, providing better tooling and error catching during development."
    },
    {
        question: "Which tool is commonly used for code formatting?",
        options: ["Prettier", "ESLint", "Both A and B", "Webpack"],
        answer: 2,
        hint: "Some tools can both format and lint code.",
        detailedExplanation: "Prettier is primarily used for code formatting, while ESLint can handle both linting and some formatting. They're often used together for comprehensive code quality."
    },
    {
        question: "What is the purpose of lazy loading in web development?",
        options: ["To load all content at once", "To defer loading of non-critical resources", "To speed up server response", "To compress images"],
        answer: 1,
        hint: "It's about loading content when needed.",
        detailedExplanation: "Lazy loading is a technique that defers the loading of non-critical resources until they're needed, improving initial page load performance."
    },
    {
        question: "Which state management library is popular with React?",
        options: ["Redux", "MobX", "Zustand", "All of the above"],
        answer: 3,
        hint: "React has multiple state management solutions.",
        detailedExplanation: "Redux, MobX, and Zustand are all popular state management libraries that can be used with React applications, each with different approaches and use cases."
    },
    {
        question: "What is the purpose of Docker in web development?",
        options: ["Containerization", "Code compilation", "Image editing", "Database management"],
        answer: 0,
        hint: "It packages applications in containers.",
        detailedExplanation: "Docker is a containerization platform that packages applications and their dependencies into lightweight, portable containers that can run consistently across different environments."
    },
    {
        question: "Which CSS feature allows for dynamic styling based on user preferences?",
        options: ["CSS Variables", "Media Queries", "Flexbox", "Grid"],
        answer: 1,
        hint: "It responds to different device characteristics.",
        detailedExplanation: "Media queries allow CSS to apply different styles based on device characteristics like screen size, orientation, and user preferences such as dark mode."
    },
    {
        question: "What is the purpose of a service worker in web development?",
        options: ["Handle background tasks", "Cache resources for offline use", "Enable push notifications", "All of the above"],
        answer: 3,
        hint: "Service workers enable many PWA features.",
        detailedExplanation: "Service workers are scripts that run in the background and enable features like offline caching, background sync, and push notifications for Progressive Web Apps."
    },
    {
        question: "Which database query language is used with GraphQL?",
        options: ["SQL", "NoSQL", "GraphQL Query Language", "MongoDB Query Language"],
        answer: 2,
        hint: "GraphQL has its own query language.",
        detailedExplanation: "GraphQL uses its own query language that allows clients to request exactly the data they need, making APIs more efficient and flexible."
    },
    {
        question: "What is the purpose of code splitting in web applications?",
        options: ["To break code into smaller chunks", "To improve loading performance", "To enable lazy loading", "All of the above"],
        answer: 3,
        hint: "It's about optimizing how code is loaded.",
        detailedExplanation: "Code splitting breaks application code into smaller chunks that can be loaded on demand, improving initial load performance and enabling lazy loading of features."
    },
    {
        question: "Which CSS property is used for creating animations?",
        options: ["transition", "animation", "transform", "All of the above"],
        answer: 3,
        hint: "There are multiple properties for creating motion.",
        detailedExplanation: "CSS animations can be created using transition for simple state changes, animation for keyframe-based animations, and transform for geometric transformations."
    },
    {
        question: "What is Server-Side Rendering (SSR)?",
        options: ["Rendering pages on the server before sending to client", "Rendering images on the server", "Server-side data processing", "Server configuration management"],
        answer: 0,
        hint: "It's about where the HTML is generated.",
        detailedExplanation: "Server-Side Rendering (SSR) is the process of rendering web pages on the server before sending them to the client, improving SEO and initial load performance."
    },
    {
        question: "Which tool is commonly used for API testing?",
        options: ["Postman", "Insomnia", "Thunder Client", "All of the above"],
        answer: 3,
        hint: "There are several tools for testing APIs.",
        detailedExplanation: "Postman, Insomnia, and Thunder Client are all popular tools for testing APIs, allowing developers to send requests and examine responses."
    },
    {
        question: "What is the purpose of minification in web development?",
        options: ["To reduce file size", "To remove unnecessary characters", "To improve loading speed", "All of the above"],
        answer: 3,
        hint: "It's about making files smaller.",
        detailedExplanation: "Minification removes unnecessary characters like whitespace and comments from code files, reducing file size and improving loading speed."
    },
    {
        question: "Which CSS preprocessor feature allows code reuse?",
        options: ["Variables", "Mixins", "Functions", "All of the above"],
        answer: 3,
        hint: "Preprocessors add many reusable features to CSS.",
        detailedExplanation: "CSS preprocessors like SASS/SCSS provide variables for storing values, mixins for reusing code blocks, and functions for calculations, all promoting code reuse."
    },
    {
        question: "What is the purpose of a build process in web development?",
        options: ["Compile code", "Optimize assets", "Bundle modules", "All of the above"],
        answer: 3,
        hint: "Build processes do many optimization tasks.",
        detailedExplanation: "A build process typically includes compiling source code, optimizing assets like images and CSS, bundling modules, and preparing code for production deployment."
    },
    {
        question: "Which JavaScript framework uses a component-based architecture?",
        options: ["React", "Vue.js", "Angular", "All of the above"],
        answer: 3,
        hint: "Modern frameworks embrace component-based design.",
        detailedExplanation: "React, Vue.js, and Angular all use component-based architectures, allowing developers to build UIs as a tree of reusable components."
    },
    {
        question: "What is the purpose of environment variables in web development?",
        options: ["Store configuration values", "Keep sensitive data secure", "Enable different environments", "All of the above"],
        answer: 3,
        hint: "They help manage application configuration.",
        detailedExplanation: "Environment variables store configuration values outside of code, helping keep sensitive data secure and enabling different settings for development, staging, and production environments."
    },
    {
        question: "Which HTTP header is used for authentication?",
        options: ["Content-Type", "Authorization", "Accept", "User-Agent"],
        answer: 1,
        hint: "It carries authentication credentials.",
        detailedExplanation: "The Authorization header is used to pass authentication credentials, such as tokens or basic auth information, to the server."
    },
    {
        question: "What is the purpose of a reverse proxy in web architecture?",
        options: ["Load balancing", "SSL termination", "Caching", "All of the above"],
        answer: 3,
        hint: "Reverse proxies serve multiple purposes.",
        detailedExplanation: "A reverse proxy can handle load balancing across multiple servers, SSL termination for encryption, caching for performance, and other traffic management tasks."
    },
    {
        question: "Which technique is used to prevent Cross-Site Scripting (XSS) attacks?",
        options: ["Input validation", "Output encoding", "Content Security Policy", "All of the above"],
        answer: 3,
        hint: "Multiple layers of defense are needed.",
        detailedExplanation: "Preventing XSS attacks requires multiple techniques including input validation, proper output encoding, and implementing Content Security Policy (CSP) headers."
    },
    {
        question: "What is the purpose of database indexing in web applications?",
        options: ["Improve query performance", "Organize data structure", "Speed up data retrieval", "All of the above"],
        answer: 3,
        hint: "Indexes help with database performance.",
        detailedExplanation: "Database indexing creates data structures that improve query performance by organizing data for faster retrieval, especially important for web applications with large datasets."
    },
    {
        question: "Which deployment strategy minimizes downtime?",
        options: ["Blue-Green deployment", "Rolling deployment", "Canary deployment", "All of the above"],
        answer: 3,
        hint: "There are several strategies for zero-downtime deployment.",
        detailedExplanation: "Blue-Green, Rolling, and Canary deployments are all strategies that can minimize or eliminate downtime during application updates by carefully managing the transition between versions."
    }
];
