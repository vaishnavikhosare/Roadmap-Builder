document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");

function toggleSearchBar(show) {
  if (show) {
    searchForm.classList.remove("hidden");
  } else {
    searchForm.classList.add("hidden");
  }
}

// Initially hide search bar (Landing Page)
toggleSearchBar(false);

  const landingPage = document.getElementById("landingPage");
  const signupPage = document.getElementById("signupPage");
  const homePage = document.getElementById("home");
  const navbar = document.getElementById("navbar");

  const aboutSection = document.getElementById("aboutSection");
  const contactSection = document.getElementById("contactSection");
  const feedbackSection = document.getElementById("feedbackSection");

  const pages = [homePage, aboutSection, contactSection, feedbackSection];

  // Handle Navbar Page Navigation
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetPage = link.getAttribute("data-page");

    // Hide all content pages
    document.querySelectorAll("#home, #aboutPage, #contactPage, #feedbackPage").forEach(page => {
      page.classList.add("hidden");
    });

    // Show the selected page
    if (targetPage === "home") {
      document.getElementById("home").classList.remove("hidden");
      toggleSearchBar(true);
    } else if (targetPage === "about") {
      document.getElementById("aboutPage").classList.remove("hidden");
      toggleSearchBar(false);
    } else if (targetPage === "contact") {
      document.getElementById("contactPage").classList.remove("hidden");
      toggleSearchBar(false);
    } else if (targetPage === "feedback") {
      document.getElementById("feedbackPage").classList.remove("hidden");
      toggleSearchBar(false);
    }
  });
});


  // Landing -> Signup
  document.getElementById("getStartedBtn").addEventListener("click", () => {
    landingPage.classList.add("hidden");
    signupPage.classList.remove("hidden");
    toggleSearchBar(false); // Hide on signup

  });

  // Signup -> Home
  document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  signupPage.classList.add("hidden");
  navbar.classList.remove("hidden");
  homePage.classList.remove("hidden");
  toggleSearchBar(true); // Show search bar on home

  // Handle Navbar Page Navigation
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("data-page");

    // Hide all main sections
    document.getElementById("home").classList.add("hidden");
    document.getElementById("aboutPage").classList.add("hidden");
    document.getElementById("contactPage").classList.add("hidden");
    document.getElementById("feedbackPage").classList.add("hidden");

    // Show selected page
    if (target === "home") {
      document.getElementById("home").classList.remove("hidden");
      toggleSearchBar(true);
    } 
    else if (target === "about") {
      document.getElementById("aboutPage").classList.remove("hidden");
      toggleSearchBar(false);
    } 
    else if (target === "contact") {
      document.getElementById("contactPage").classList.remove("hidden");
      toggleSearchBar(false);
    } 
    else if (target === "feedback") {
      document.getElementById("feedbackPage").classList.remove("hidden");
      toggleSearchBar(false);
    }
  });
});

});


  // Navbar page switching
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");

      // Hide all pages
      pages.forEach((p) => p.classList.add("hidden"));

      // Show selected
      if (page === "home") homePage.classList.remove("hidden");
      if (page === "about") aboutSection.classList.remove("hidden");
      if (page === "contact") contactSection.classList.remove("hidden");
      if (page === "feedback") feedbackSection.classList.remove("hidden");
    });
  });

  // FEEDBACK FORM SUBMIT
const feedbackForm = document.getElementById("feedbackForm");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh
    alert("Your feedback has been sent successfully!"); // Show success message
    feedbackForm.reset(); // Clear the textarea
  });
}

})

// ====================== CATEGORY DEFINITIONS =========================
const categories = {
  frontend: {
    label: "Frontend Development",
    technologies: [
      { id: "html", label: "HTML" },
      { id: "css", label: "CSS" },
      { id: "javascript", label: "JavaScript" },
      { id: "react", label: "React" },
      { id: "nextjs", label: "Next.js" },
    ],
  },
  backend: {
    label: "Backend Development",
    technologies: [
      { id: "nodejs", label: "Node.js" },
      { id: "python", label: "Python" },
      { id: "django", label: "Django" },
      { id: "express", label: "Express" },
      { id: "spring", label: "Spring Boot" },
    ],
  },
  dataScience: {
    label: "Data Science",
    technologies: [
      { id: "pythonDS", label: "Python" },
      { id: "r", label: "R" },
      { id: "ml", label: "Machine Learning" },
      { id: "dataViz", label: "Data Visualization" },
    ],
  },
  cybersecurity: {
    label: "Cybersecurity",
    technologies: [
      { id: "networkSec", label: "Network Security" },
      { id: "appSec", label: "Application Security" },
      { id: "crypto", label: "Cryptography" },
    ],
  },
  cloud: {
    label: "Cloud Computing",
    technologies: [
      { id: "aws", label: "AWS" },
      { id: "azure", label: "Azure" },
      { id: "gcp", label: "Google Cloud Platform" },
      { id: "docker", label: "Docker" },
      { id: "kubernetes", label: "Kubernetes" },
    ],
  },
  projectManagement: {
    label: "Project Management",
    technologies: [
      { id: "agile", label: "Agile" },
      { id: "scrum", label: "Scrum" },
      { id: "waterfall", label: "Waterfall" },
    ],
  },
};

// ========================= ROADMAP DATA =============================
const roadmaps = {
html:[
  {
    step: 1,
    title: "HTML Basics & Page Structure",
    description:
      "Understand HTML syntax, document structure, and essential tags like &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, &lt;h1&gt;-&lt;h6&gt;, &lt;p&gt;, &lt;a&gt;, &lt;img&gt;, &lt;div&gt;, &lt;br&gt;, and comments (&lt;!-- --&gt;).",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Working with Text & Links",
    description:
      "Learn text formatting tags (&lt;strong&gt;, &lt;b&gt;, &lt;em&gt;, &lt;u&gt;, &lt;sub&gt;, &lt;sup&gt;) and <i>how to create internal and external links using &lt;a&gt;</i>.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Lists and Grouping Elements",
    description:
      "Create ordered (&lt;ol&gt;), unordered (&lt;ul&gt;), and nested lists using &lt;li&gt;. Use &lt;div&gt; and &lt;span&gt; for grouping and layout.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Media Integration",
    description:
      "Add images with &lt;img&gt; (src, alt, width, height). Embed audio/video using &lt;audio&gt; and &lt;video&gt; with controls, autoplay, and loop.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Creating Forms & Validation",
    description:
      "Build forms using &lt;form&gt;, &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, &lt;option&gt;, &lt;button&gt; and apply basic client-side validation.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Working with Tables",
    description:
      "Create tables using &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; to display tabular data in structured format.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Using Common Attributes",
    description:
      "Understand attributes like <code>id</code>, <code>class</code>, and <code>style</code> to customize HTML elements and apply CSS.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Semantic HTML Elements",
    description:
      "Use semantic tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt; to enhance content structure and accessibility.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Web Accessibility",
    description:
      "Improve accessibility using <code>alt</code> for images, proper heading levels (&lt;h1&gt;–&lt;h6&gt;), and ARIA attributes for assistive technologies.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Advanced HTML Concepts",
    description:
      "Learn &lt;meta&gt; tags, &lt;iframe&gt; for embedding content, and explore HTML5 APIs like Geolocation for real-world functionality.",
    duration: "1 week",
  },
],


 css : [
  {
    step: 1,
    title: "CSS Syntax and Selectors",
    description: "Learn basic selectors (element, class, id), combinators, pseudo-classes, and pseudo-elements to select and style HTML elements effectively.",
    duration: "1 week"
  },
  {
    step: 2,
    title: "Box Model",
    description: "Understand the box model components: content, padding, border, margin, and the impact of box-sizing on layout.",
    duration: "1 week"
  },
  {
    step: 3,
    title: "Flexbox and Grid",
    description: "Master Flexbox properties (flex container and flex items) and CSS Grid layout (grid containers, rows, columns) to create flexible and complex responsive layouts.",
    duration: "2 weeks"
  },
  {
    step: 4,
    title: "Responsive Design",
    description: "Implement mobile-first design principles using media queries and responsive units (%, vw, vh, em, rem) for adaptable web pages.",
    duration: "2 weeks"
  },
  {
    step: 5,
    title: "CSS Animations",
    description: "Add interactivity with CSS transitions, keyframe animations, and hover effects to enhance user experience.",
    duration: "1 week"
  },
  {
    step: 6,
    title: "Advanced CSS Features",
    description: "Explore CSS variables (custom properties), calc(), advanced selectors, and feature queries (@supports) for dynamic styling.",
    duration: "1 week"
  },
  {
    step: 7,
    title: "CSS Architecture & Preprocessors",
    description: "Organize CSS using methodologies like BEM and explore preprocessors such as Sass and LESS for variables, nesting, and mixins.",
    duration: "1 week"
  },
  {
    step: 8,
    title: "Debugging and Optimization",
    description: "Use browser DevTools, CSS linters, and best practices to debug and optimize CSS performance, minimizing repaint and reflow.",
    duration: "1 week"
  },
  {
    step: 9,
    title: "Accessibility & Best Practices",
    description: "Ensure CSS supports web accessibility by using relative units, clear focus styles, and combining semantic HTML with CSS.",
    duration: "1 week"
  },
  {
    step: 10,
    title: "Upcoming CSS Features",
    description: "Stay updated with new CSS capabilities like Subgrid, Container Queries, Houdini APIs, and progressive enhancement techniques.",
    duration: "1 week"
  },
],




  javascript : [
  {
    step: 1,
    title: "JavaScript Basics",
    description: "Learn variables, data types, operators, basic functions, and control flow (if, for, while).",
    duration: "1 week"
  },
  {
    step: 2,
    title: "Functions and Scope",
    description: "Understand function declarations, expressions, arrow functions, and scope (global, local, block).",
    duration: "1 week"
  },
  {
    step: 3,
    title: "DOM Manipulation",
    description: "Learn how to select, modify, and create HTML elements dynamically using the DOM API.",
    duration: "1 week"
  },
  {
    step: 4,
    title: "Events and Event Handling",
    description: "Handle user events like clicks, keypresses, and form submissions with event listeners.",
    duration: "1 week"
  },
  {
    step: 5,
    title: "Arrays and Objects",
    description: "Work with arrays and objects, methods, iteration, and manipulation.",
    duration: "1 week"
  },
  {
    step: 6,
    title: "ES6+ Features",
    description: "Learn let/const, template literals, destructuring, spread/rest, modules, promises, async/await.",
    duration: "2 weeks"
  },
  {
    step: 7,
    title: "Asynchronous JavaScript",
    description: "Understand callbacks, promises, async/await, and AJAX/fetch API for HTTP requests.",
    duration: "2 weeks"
  },
  {
    step: 8,
    title: "Error Handling and Debugging",
    description: "Learn try/catch, throw errors, and use browser DevTools for debugging.",
    duration: "1 week"
  },
  {
    step: 9,
    title: "JavaScript Patterns and Best Practices",
    description: "Explore module pattern, IIFE, closures, and coding best practices.",
    duration: "1 week"
  },
  {
    step: 10,
    title: "Introduction to Frameworks and Libraries",
    description: "Get a basic overview of popular libraries and frameworks like React, Vue, or Angular.",
    duration: "1 week"
  },
],

 react : [
  {
    step: 1,
    title: "React Basics",
    description: "Learn JSX syntax, components (functional & class), props, and rendering elements.",
    duration: "1 week"
  },
  {
    step: 2,
    title: "State and Lifecycle",
    description: "Understand component state, setState, lifecycle methods (componentDidMount, etc.)",
    duration: "1 week"
  },
  {
    step: 3,
    title: "Event Handling & Forms",
    description: "Handle user input, events, and manage form elements in React.",
    duration: "1 week"
  },
  {
    step: 4,
    title: "Conditional Rendering & Lists",
    description: "Render components conditionally and render lists using map() and keys.",
    duration: "1 week"
  },
  {
    step: 5,
    title: "Hooks",
    description: "Learn useState, useEffect, and other basic React hooks for state and side effects.",
    duration: "2 weeks"
  },
  {
    step: 6,
    title: "Context API & Prop Drilling",
    description: "Manage state globally with Context API to avoid prop drilling.",
    duration: "1 week"
  },
  {
    step: 7,
    title: "React Router",
    description: "Implement client-side routing using React Router.",
    duration: "1 week"
  },
  {
    step: 8,
    title: "Advanced Hooks & Performance Optimization",
    description: "Use useMemo, useCallback, useRef, and optimize rendering.",
    duration: "1 week"
  },
  {
    step: 9,
    title: "Testing React Components",
    description: "Write unit and integration tests using Jest and React Testing Library.",
    duration: "1 week"
  },
  {
    step: 10,
    title: "State Management Libraries",
    description: "Learn Redux or alternatives like Zustand, Recoil for complex state management.",
    duration: "2 weeks"
  },
],

 nextjs : [
  {
    step: 1,
    title: "Next.js Basics",
    description: "Understand file-based routing, pages, and static site generation (SSG).",
    duration: "1 week"
  },
  {
    step: 2,
    title: "Server-Side Rendering (SSR)",
    description: "Learn how to render pages server-side with getServerSideProps.",
    duration: "1 week"
  },
  {
    step: 3,
    title: "API Routes",
    description: "Create backend API endpoints inside Next.js with API routes.",
    duration: "1 week"
  },
  {
    step: 4,
    title: "Dynamic Routes and Catch-All Routes",
    description: "Build dynamic pages and catch-all routes for flexible routing.",
    duration: "1 week"
  },
  {
    step: 5,
    title: "Data Fetching Strategies",
    description: "Explore getStaticProps, getServerSideProps, getStaticPaths for data fetching.",
    duration: "1 week"
  },
  {
    step: 6,
    title: "Middleware and Custom Server",
    description: "Use middleware for request handling and create custom servers if needed.",
    duration: "1 week"
  },
  {
    step: 7,
    title: "Image Optimization and Internationalization",
    description: "Use built-in Image component and set up i18n for multi-language apps.",
    duration: "1 week"
  },
  {
    step: 8,
    title: "Authentication and Authorization",
    description: "Implement authentication flows with NextAuth.js or custom solutions.",
    duration: "1 week"
  },
  {
    step: 9,
    title: "Deployment & Performance",
    description: "Deploy Next.js apps on platforms like Vercel; optimize performance and SEO.",
    duration: "1 week"
  },
  {
    step: 10,
    title: "Advanced Features & API Integrations",
    description: "Explore incremental static regeneration (ISR), middleware, and third-party APIs.",
    duration: "1 week"
  },
],

 nodejs : [
  {
    step: 1,
    title: "Node.js Basics",
    description: "Learn Node environment, modules, npm, and basic JavaScript in Node.",
    duration: "1 week"
  },
  {
    step: 2,
    title: "File System and Path Modules",
    description: "Read/write files and understand path manipulations with fs and path modules.",
    duration: "1 week"
  },
  {
    step: 3,
    title: "Events and Streams",
    description: "Work with event emitters and streams for efficient data handling.",
    duration: "1 week"
  },
  {
    step: 4,
    title: "Building HTTP Servers",
    description: "Create servers with http module and understand request-response lifecycle.",
    duration: "1 week"
  },
  {
    step: 5,
    title: "Express.js Framework",
    description: "Use Express for routing, middleware, and handling REST APIs.",
    duration: "2 weeks"
  },
  {
    step: 6,
    title: "Databases Integration",
    description: "Connect Node with databases like MongoDB, PostgreSQL using ORMs or drivers.",
    duration: "2 weeks"
  },
  {
    step: 7,
    title: "Authentication & Authorization",
    description: "Implement JWT, OAuth, sessions, and security best practices.",
    duration: "1 week"
  },
  {
    step: 8,
    title: "Testing Node.js Applications",
    description: "Write tests using Mocha, Jest, or other testing frameworks.",
    duration: "1 week"
  },
  {
    step: 9,
    title: "Asynchronous Programming & Error Handling",
    description: "Master async/await, promises, error handling, and event loop concepts.",
    duration: "1 week"
  },
  {
    step: 10,
    title: "Deployment & Scaling",
    description: "Deploy Node apps on cloud providers, use PM2, load balancing, and monitoring.",
    duration: "1 week"
  },
],

 python : [
  {
    step: 1,
    title: "Python Basics",
    description: "Learn syntax, variables, data types, operators, and basic I/O.",
    duration: "1 week"
  },
  {
    step: 2,
    title: "Control Structures & Functions",
    description: "Master if-else, loops, functions, and error handling.",
    duration: "1 week"
  },
  {
    step: 3,
    title: "Data Structures",
    description: "Understand lists, tuples, sets, dictionaries, and their methods.",
    duration: "1 week"
  },
  {
    step: 4,
    title: "Object-Oriented Programming",
    description: "Learn classes, objects, inheritance, and encapsulation.",
    duration: "1 week"
  },
  {
    step: 5,
    title: "Modules and Packages",
    description: "Import and create modules, use pip to install packages.",
    duration: "1 week"
  },
  {
    step: 6,
    title: "File Handling",
    description: "Read/write files, work with file paths and context managers.",
    duration: "1 week"
  },
  {
    step: 7,
    title: "Web Development Frameworks",
    description: "Learn Flask or Django basics for building web applications.",
    duration: "2 weeks"
  },
  {
    step: 8,
    title: "Data Science and Libraries",
    description: "Explore NumPy, pandas, Matplotlib, and basic data analysis.",
    duration: "2 weeks"
  },
  {
    step: 9,
    title: "Testing and Debugging",
    description: "Write tests using unittest or pytest; learn debugging techniques.",
    duration: "1 week"
  },
  {
    step: 10,
    title: "Deployment and Best Practices",
    description: "Deploy Python applications, virtual environments, and code organization.",
    duration: "1 week"
  },
],

django: [
  {
    step: 1,
    title: "Django Basics",
    description: "Learn Django installation, project setup, and basic directory structure.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Models and Migrations",
    description: "Understand models, fields, migrations, and database integration.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Django Admin",
    description: "Use Django admin panel for managing application data.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Views and Templates",
    description: "Create dynamic pages using views and template rendering.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "URL Routing",
    description: "Map URLs to views with Django’s powerful URL dispatcher.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Forms and User Input",
    description: "Build forms, handle POST data, and add validations.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Authentication System",
    description: "Implement user login, registration, and permissions.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "REST API with DRF",
    description: "Build APIs using Django REST Framework for front-backend communication.",
    duration: "2 weeks",
  },
  {
    step: 9,
    title: "Deployment",
    description: "Deploy Django apps on Heroku, AWS, or other servers.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Advanced Topics",
    description: "Learn caching, Celery, signals, and scaling Django apps.",
    duration: "1 week",
  },
],

express: [
  {
    step: 1,
    title: "Express Setup",
    description: "Install Express and create a basic server.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Routing",
    description: "Handle GET, POST, PUT, and DELETE routes.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Middleware",
    description: "Use built-in and custom middleware for request handling.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Template Engines",
    description: "Render dynamic pages using EJS, Pug, or Handlebars.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "REST API",
    description: "Build a RESTful API using Express routes.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Database Integration",
    description: "Integrate with MongoDB or MySQL.",
    duration: "2 weeks",
  },
  {
    step: 7,
    title: "Authentication",
    description: "Use Passport.js or JWT for authentication.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Error Handling",
    description: "Implement error-handling middleware.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Testing",
    description: "Test Express apps with Mocha or Jest.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Deployment",
    description: "Deploy Express apps on platforms like Vercel or Render.",
    duration: "1 week",
  },
],

spring: [
  {
    step: 1,
    title: "Spring Boot Basics",
    description: "Learn project setup, structure, and starters.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Dependency Injection",
    description: "Understand IoC, beans, and autowiring.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "REST Controllers",
    description: "Build REST APIs using Spring Boot controllers.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Spring Data JPA",
    description: "Integrate databases with JPA and Hibernate.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Validation",
    description: "Apply data validation using annotations.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Security",
    description: "Secure APIs with Spring Security and JWT.",
    duration: "2 weeks",
  },
  {
    step: 7,
    title: "Error Handling",
    description: "Use @ControllerAdvice and custom exceptions.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Testing",
    description: "Write unit and integration tests.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Microservices",
    description: "Learn Spring Cloud for microservice architecture.",
    duration: "2 weeks",
  },
  {
    step: 10,
    title: "Deployment",
    description: "Deploy Spring Boot apps on AWS, Docker, or Kubernetes.",
    duration: "1 week",
  },
],

aws: [
  {
    step: 1,
    title: "AWS Fundamentals",
    description: "Learn AWS global infrastructure, regions, and availability zones.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "IAM (Identity and Access Management)",
    description: "Manage users, roles, and policies securely.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "EC2",
    description: "Launch and manage virtual servers on AWS EC2.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "S3",
    description: "Store and manage data with S3 buckets.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "RDS",
    description: "Use AWS RDS for relational databases like MySQL or PostgreSQL.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Networking (VPC)",
    description: "Understand VPC, subnets, routing tables, and gateways.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "CloudFront & CDN",
    description: "Distribute content with AWS CloudFront.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Security & Monitoring",
    description: "Use AWS CloudWatch, GuardDuty, and security best practices.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Serverless (Lambda)",
    description: "Create serverless functions with AWS Lambda.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Deployment",
    description: "Deploy full applications using Elastic Beanstalk or ECS.",
    duration: "1 week",
  },
],

azure: [
  {
    step: 1,
    title: "Azure Basics",
    description: "Learn Azure portal, resource groups, and core services.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Compute Services",
    description: "Understand Virtual Machines, App Services, and Azure Functions.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Storage Services",
    description: "Work with Blob Storage, Table Storage, and File Storage.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Networking",
    description: "Learn Virtual Networks, subnets, and load balancers.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Databases",
    description: "Use Azure SQL Database, Cosmos DB, and PostgreSQL.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Security and IAM",
    description: "Manage access with Azure Active Directory and Role-Based Access Control (RBAC).",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Serverless",
    description: "Implement serverless apps using Azure Functions and Logic Apps.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Monitoring & Logging",
    description: "Use Azure Monitor and Application Insights.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "DevOps Integration",
    description: "Set up CI/CD pipelines using Azure DevOps.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Deployment",
    description: "Deploy scalable apps on Azure App Services or AKS.",
    duration: "1 week",
  },
],

gcp: [
  {
    step: 1,
    title: "GCP Overview",
    description: "Understand GCP structure, projects, and billing accounts.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Compute Engine",
    description: "Launch virtual machines and configure instances.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Cloud Storage",
    description: "Store and manage files using GCP Cloud Storage.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Databases",
    description: "Learn about Cloud SQL, Firestore, and BigQuery.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Networking",
    description: "Understand VPC, subnets, and firewall rules.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Serverless Options",
    description: "Use Cloud Functions and Cloud Run for serverless apps.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "IAM and Security",
    description: "Manage roles, service accounts, and permissions.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Monitoring",
    description: "Monitor resources using Stackdriver and logs.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Data & ML Tools",
    description: "Explore AI/ML APIs, AutoML, and Vertex AI.",
    duration: "2 weeks",
  },
  {
    step: 10,
    title: "Deployment",
    description: "Deploy apps on GCP App Engine or Kubernetes Engine.",
    duration: "1 week",
  },
],

docker: [
  {
    step: 1,
    title: "Introduction to Docker",
    description: "Understand containerization vs. virtualization.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Docker Installation",
    description: "Install Docker and set up environment.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Docker Images and Containers",
    description: "Build and run containers using Docker CLI.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Dockerfile",
    description: "Write Dockerfiles to create custom images.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Docker Compose",
    description: "Manage multi-container apps using docker-compose.yml.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Volumes and Networks",
    description: "Handle persistent data and container networking.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Image Optimization",
    description: "Optimize images for performance and size.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Docker Registry",
    description: "Push and pull images from Docker Hub or private registry.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Security Best Practices",
    description: "Learn container security and scanning.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Docker in Production",
    description: "Deploy Docker containers with CI/CD pipelines.",
    duration: "1 week",
  },
],

kubernetes: [
  {
    step: 1,
    title: "Kubernetes Basics",
    description: "Learn what Kubernetes is and why it is used.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Cluster Architecture",
    description: "Understand nodes, pods, and the control plane.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "kubectl Commands",
    description: "Use kubectl to manage clusters and pods.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Deployments",
    description: "Create and manage deployments and replicas.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Services and Networking",
    description: "Expose pods using ClusterIP, NodePort, and LoadBalancer.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "ConfigMaps and Secrets",
    description: "Store and manage configuration data securely.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Volumes and Storage",
    description: "Attach persistent storage to pods.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Scaling and Autoscaling",
    description: "Scale applications horizontally using HPA.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Monitoring and Logging",
    description: "Use Prometheus, Grafana, and kubectl logs.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Advanced Kubernetes",
    description: "Learn Helm charts, operators, and production-grade deployments.",
    duration: "2 weeks",
  },
],

agile: [
  {
    step: 1,
    title: "Introduction to Agile",
    description: "Understand Agile principles and manifesto.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Agile Frameworks",
    description: "Learn Scrum, Kanban, and Lean frameworks.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Agile Roles",
    description: "Understand roles like Product Owner, Scrum Master, and Development Team.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Agile Ceremonies",
    description: "Learn daily stand-ups, sprint planning, reviews, and retrospectives.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Agile Artifacts",
    description: "Understand product backlog, sprint backlog, and increments.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "User Stories",
    description: "Write effective user stories with acceptance criteria.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Agile Tools",
    description: "Use tools like Jira, Trello, and Azure Boards.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Agile Estimation",
    description: "Practice story points, planning poker, and velocity.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Agile Metrics",
    description: "Track progress using burndown charts and cycle time.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Scaling Agile",
    description: "Learn SAFe and other scaled agile frameworks.",
    duration: "1 week",
  },
],

scrum: [
  {
    step: 1,
    title: "Scrum Basics",
    description: "Understand the Scrum framework and principles.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Scrum Roles",
    description: "Learn roles of Scrum Master, Product Owner, and Developers.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Scrum Events",
    description: "Daily Scrum, Sprint Planning, Sprint Review, and Retrospectives.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Scrum Artifacts",
    description: "Explore product backlog, sprint backlog, and increment.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Sprint Execution",
    description: "Plan, execute, and monitor sprint tasks.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Product Backlog Refinement",
    description: "Learn how to prioritize and refine backlog items.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Definition of Done",
    description: "Establish clear completion criteria for tasks.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Scrum Metrics",
    description: "Track progress with velocity and burndown charts.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Scrum Tools",
    description: "Use Jira, Trello, or Monday.com for managing Scrum teams.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Advanced Scrum",
    description: "Learn scaling Scrum and integrating with Agile.",
    duration: "1 week",
  },
],

waterfall: [
  {
    step: 1,
    title: "Introduction to Waterfall Model",
    description: "Understand the basics of Waterfall development methodology.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Requirement Analysis",
    description: "Gather and document software requirements.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "System Design",
    description: "Plan architecture, modules, and data flow.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Implementation",
    description: "Code and develop the system according to design.",
    duration: "2 weeks",
  },
  {
    step: 5,
    title: "Integration and Testing",
    description: "Test the software for bugs and integration issues.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Deployment",
    description: "Release the software to production.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Maintenance",
    description: "Handle software updates, bug fixes, and support.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Documentation",
    description: "Prepare detailed documentation for the system.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Project Closure",
    description: "Review project success and close officially.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Waterfall vs Agile",
    description: "Understand when to use Waterfall vs Agile methodologies.",
    duration: "1 week",
  },
],

// ================= DATA SCIENCE =================
pythonDS: [
  {
    step: 1,
    title: "Python for Data Science",
    description: "Learn Python basics, libraries, and syntax tailored for data analysis.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "NumPy & Pandas",
    description: "Work with arrays, dataframes, and data manipulation using NumPy and Pandas.",
    duration: "2 weeks",
  },
  {
    step: 3,
    title: "Data Cleaning & Preparation",
    description: "Handle missing data, outliers, and data transformations.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Data Visualization Basics",
    description: "Create plots using Matplotlib, Seaborn, and Plotly.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Exploratory Data Analysis (EDA)",
    description: "Analyze datasets to find patterns, trends, and correlations.",
    duration: "2 weeks",
  },
  {
    step: 6,
    title: "Introduction to Statistics",
    description: "Understand mean, median, mode, probability, and hypothesis testing.",
    duration: "2 weeks",
  },
  {
    step: 7,
    title: "Introduction to Machine Learning",
    description: "Learn basics of supervised and unsupervised learning.",
    duration: "2 weeks",
  },
  {
    step: 8,
    title: "Model Evaluation",
    description: "Use metrics like accuracy, precision, recall, F1 score, and ROC curves.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Working with Real Datasets",
    description: "Practice data analysis with real-world datasets like Kaggle.",
    duration: "2 weeks",
  },
  {
    step: 10,
    title: "Capstone Project",
    description: "Build a complete data analysis project with EDA and ML models.",
    duration: "2 weeks",
  },
],

r: [
  {
    step: 1,
    title: "R Basics",
    description: "Learn syntax, data types, and basic operators in R.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Data Structures in R",
    description: "Work with vectors, matrices, lists, and data frames.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Data Import & Cleaning",
    description: "Import CSV, Excel files, and clean datasets.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Data Visualization",
    description: "Use ggplot2 and base R plotting for visualizing data.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Statistical Analysis",
    description: "Perform hypothesis testing, correlation, and regression.",
    duration: "2 weeks",
  },
  {
    step: 6,
    title: "R for Machine Learning",
    description: "Use caret package for ML algorithms.",
    duration: "2 weeks",
  },
  {
    step: 7,
    title: "Time Series Analysis",
    description: "Analyze and forecast time series data.",
    duration: "2 weeks",
  },
  {
    step: 8,
    title: "Shiny Apps",
    description: "Create interactive dashboards using Shiny.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Big Data with R",
    description: "Learn packages like data.table for handling large datasets.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Project",
    description: "Complete a data science project using R.",
    duration: "2 weeks",
  },
],

ml: [
  {
    step: 1,
    title: "ML Basics",
    description: "Understand what machine learning is and its types.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Data Preprocessing",
    description: "Clean, scale, and encode data for ML algorithms.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "Supervised Learning",
    description: "Learn algorithms like Linear Regression, Decision Trees, and SVM.",
    duration: "2 weeks",
  },
  {
    step: 4,
    title: "Unsupervised Learning",
    description: "Understand clustering (K-means, Hierarchical) and PCA.",
    duration: "2 weeks",
  },
  {
    step: 5,
    title: "Model Evaluation",
    description: "Evaluate models with metrics like confusion matrix and cross-validation.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Feature Engineering",
    description: "Perform feature selection and extraction.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Ensemble Techniques",
    description: "Learn Random Forest, XGBoost, and Gradient Boosting.",
    duration: "2 weeks",
  },
  {
    step: 8,
    title: "Deep Learning Intro",
    description: "Get started with Neural Networks using TensorFlow/Keras.",
    duration: "2 weeks",
  },
  {
    step: 9,
    title: "Model Deployment",
    description: "Deploy ML models using Flask or FastAPI.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Capstone Project",
    description: "Build an end-to-end ML project.",
    duration: "2 weeks",
  },
],

dataViz: [
  {
    step: 1,
    title: "Data Visualization Basics",
    description: "Learn the importance of data visualization and tools available.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Visualization in Python",
    description: "Use Matplotlib, Seaborn, and Plotly for charts.",
    duration: "2 weeks",
  },
  {
    step: 3,
    title: "Visualization in R",
    description: "Use ggplot2 and plotly for advanced data visualization.",
    duration: "2 weeks",
  },
  {
    step: 4,
    title: "Dashboards",
    description: "Create dashboards using Tableau or Power BI.",
    duration: "2 weeks",
  },
  {
    step: 5,
    title: "Interactive Visualizations",
    description: "Learn Bokeh and D3.js for interactive charts.",
    duration: "2 weeks",
  },
  {
    step: 6,
    title: "Geospatial Visualization",
    description: "Visualize maps using Folium and GeoPandas.",
    duration: "2 weeks",
  },
  {
    step: 7,
    title: "Data Storytelling",
    description: "Learn to present data insights effectively.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Advanced Chart Types",
    description: "Create heatmaps, 3D plots, and network graphs.",
    duration: "2 weeks",
  },
  {
    step: 9,
    title: "Data Presentation",
    description: "Prepare interactive reports using Jupyter and Tableau.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Final Visualization Project",
    description: "Build a complete interactive dashboard.",
    duration: "2 weeks",
  },
],

// ================= CYBER SECURITY =================
networkSec: [
  {
    step: 1,
    title: "Network Security Basics",
    description: "Learn OSI model, TCP/IP, and common network protocols.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Firewalls & IDS/IPS",
    description: "Understand firewalls, intrusion detection, and prevention systems.",
    duration: "1 week",
  },
  {
    step: 3,
    title: "VPN and Secure Communication",
    description: "Learn about VPNs, SSL/TLS, and encryption for network security.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Wi-Fi Security",
    description: "Understand WPA2, WPA3, and securing wireless networks.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Network Scanning",
    description: "Use tools like Nmap and Wireshark for network analysis.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "DDoS and Attacks",
    description: "Learn about denial-of-service attacks and mitigation.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "VPN Setup",
    description: "Configure and secure VPNs in networks.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Network Hardening",
    description: "Implement security measures for routers and servers.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Security Policies",
    description: "Develop and enforce network security policies.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Final Project",
    description: "Set up a secure lab network with firewalls and VPNs.",
    duration: "2 weeks",
  },
],

appSec: [
  {
    step: 1,
    title: "Application Security Basics",
    description: "Understand the importance of application security.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "OWASP Top 10",
    description: "Learn the top 10 security risks for web apps.",
    duration: "2 weeks",
  },
  {
    step: 3,
    title: "Authentication & Authorization",
    description: "Secure login, session management, and RBAC.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Input Validation",
    description: "Prevent attacks like XSS, SQL Injection, and CSRF.",
    duration: "2 weeks",
  },
  {
    step: 5,
    title: "Secure APIs",
    description: "Secure REST and GraphQL APIs with tokens and rate limits.",
    duration: "2 weeks",
  },
  {
    step: 6,
    title: "Static & Dynamic Analysis",
    description: "Use SAST and DAST tools for vulnerability detection.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Logging & Monitoring",
    description: "Implement logging for security audits.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Secure Code Review",
    description: "Review code for security flaws and best practices.",
    duration: "1 week",
  },
  {
    step: 9,
    title: "Penetration Testing",
    description: "Perform app penetration testing with tools like Burp Suite.",
    duration: "2 weeks",
  },
  {
    step: 10,
    title: "Final AppSec Project",
    description: "Build and secure a sample web application.",
    duration: "2 weeks",
  },
],

crypto: [
  {
    step: 1,
    title: "Introduction to Cryptography",
    description: "Understand symmetric vs asymmetric cryptography.",
    duration: "1 week",
  },
  {
    step: 2,
    title: "Encryption Algorithms",
    description: "Learn AES, DES, RSA, and ECC algorithms.",
    duration: "2 weeks",
  },
  {
    step: 3,
    title: "Hashing",
    description: "Use MD5, SHA-256, and bcrypt for secure hashing.",
    duration: "1 week",
  },
  {
    step: 4,
    title: "Key Management",
    description: "Handle keys securely with PKI and key exchanges.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Digital Signatures",
    description: "Implement digital signatures for authentication.",
    duration: "1 week",
  },
  {
    step: 6,
    title: "Certificates and SSL/TLS",
    description: "Understand HTTPS, SSL certificates, and certificate authorities.",
    duration: "1 week",
  },
  {
    step: 7,
    title: "Cryptanalysis Basics",
    description: "Learn basic cryptographic attacks and defenses.",
    duration: "1 week",
  },
  {
    step: 8,
    title: "Blockchain Cryptography",
    description: "Understand hashing and digital signatures in blockchain.",
    duration: "2 weeks",
  },
  {
    step: 9,
    title: "Implementing Cryptography in Code",
    description: "Use libraries like CryptoJS or Python's cryptography.",
    duration: "1 week",
  },
  {
    step: 10,
    title: "Final Crypto Project",
    description: "Build an encryption/decryption tool.",
    duration: "2 weeks",
  },
],


  // Add more: django, express, spring, aws, ml, etc.
};

// ===================== DOM ELEMENTS ==========================
const homePage = document.getElementById("home");
const selectTechPage = document.getElementById("selectTech");
const roadmapPage = document.getElementById("roadmapPage");

const techOptionsContainer = document.getElementById("techOptions");
const techCategoryTitle = document.getElementById("techCategoryTitle");
const roadmapTitle = document.getElementById("roadmapTitle");
const timelineContainer = document.getElementById("timeline");

const backToHomeBtn = document.getElementById("backToHome");
const backToTechBtn = document.getElementById("backToTech");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

let currentCategory = null;

// ===================== UI FUNCTIONS ==========================
function showPage(page) {
  [homePage, selectTechPage, roadmapPage].forEach((p) =>
    p.classList.add("hidden")
  );
  page.classList.remove("hidden");
}

function showTechOptions(categoryKey) {
  currentCategory = categoryKey;
  techCategoryTitle.textContent = categories[categoryKey].label;
  techOptionsContainer.innerHTML = "";

  categories[categoryKey].technologies.forEach(({ id, label }) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.dataset.techId = id;
    btn.onclick = () => showRoadmap(id, label);
    techOptionsContainer.appendChild(btn);
  });

  showPage(selectTechPage);
}

function showRoadmap(techId, techLabel) {
  roadmapTitle.textContent = `${techLabel} Roadmap`;
  timelineContainer.innerHTML = "";

  if (!roadmaps[techId]) {
    timelineContainer.innerHTML = "<p>No roadmap available yet.</p>";
    return;
  }

  roadmaps[techId].forEach(({ step, title, description, duration }) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("data-step", step);
    item.innerHTML = `
      <h3>${title}</h3>
           <p>${description}</p>
      <div class="duration">Duration: ${duration}</div>
    `;
    timelineContainer.appendChild(item);
  });

  showPage(roadmapPage);
}

// ===================== EVENT LISTENERS ==========================

// Category card clicks
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    const categoryKey = card.dataset.category;
    if (categories[categoryKey]) {
      showTechOptions(categoryKey);
    }
  });
});

// Back buttons
backToHomeBtn.addEventListener("click", () => {
  showPage(homePage);
});

backToTechBtn.addEventListener("click", () => {
  showTechOptions(currentCategory);
});

// Search functionality
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  // Check category
  let matchedCategory = Object.entries(categories).find(([_, value]) =>
    value.label.toLowerCase().includes(query)
  );

  if (matchedCategory) {
    showTechOptions(matchedCategory[0]);
    return;
  }

  // Check technology
  for (const catKey in categories) {
    const tech = categories[catKey].technologies.find((t) =>
      t.label.toLowerCase().includes(query)
    );
    if (tech) {
      showRoadmap(tech.id, tech.label);
      return;
    }
  }

  alert("No matching roadmap found.");
});

// ================== PROGRESS BAR FUNCTIONALITY ==================
const progressBarContainer = document.getElementById("progressBarContainer");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");

function enableProgressTracking() {
  const steps = document.querySelectorAll(".timeline-item");
  progressBarContainer.classList.remove("hidden");
  let completedSteps = 0;

  steps.forEach((step) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    step.insertBefore(checkbox, step.firstChild);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        step.classList.add("completed");
        completedSteps++;
      } else {
        step.classList.remove("completed");
        completedSteps--;
      }
      const progressPercentValue = Math.round(
        (completedSteps / steps.length) * 100
      );
      progressBar.style.width = `${progressPercentValue}%`;
      progressPercent.textContent = `${progressPercentValue}%`;
    });
  });

  // Reset progress when new roadmap loads
  progressBar.style.width = "0%";
  progressPercent.textContent = "0%";
}

// Override showRoadmap to enable progress tracking
const originalShowRoadmap = showRoadmap;
showRoadmap = function (techId, techLabel) {
  originalShowRoadmap(techId, techLabel);
  enableProgressTracking();
};

