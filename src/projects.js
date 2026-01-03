export const projects = [
  {
    id: 1,
    title: "Biometric Attendance & Shift Management System",
    shortDescription:
      "A desktop-based system for managing staff attendance and shifts using biometric verification.",
    fullDescription: `
This project was developed as part of my Object-Oriented Programming coursework.
The system is designed to automate attendance tracking and shift allocation for university support staff,
reducing manual record keeping and errors.
    `,
    problemSolved: `
Manual attendance systems are prone to errors, impersonation, and poor record keeping.
Supervisors also struggle to track staff shifts across departments.
This project addresses these issues by centralizing attendance records
and introducing role-based access for staff, supervisors, and administrators.
    `,
    whatILearned: `
I learned how to design a multi-layered system using Java,
connect a desktop application to a database,
and manage user roles and sessions.
This project strengthened my understanding of OOP principles,
database integration, and real-world software constraints.
    `,
    techStack: ["Java", "Swing", "MySQL", "OOP"],
    image: "/images/biometric-system.png",
    link: "https://github.com/yourusername/biometric-attendance",
    category: "Desktop Application",
  },

  {
  id: 2,
  title: "Cafeteria Ordering & Management System",
  shortDescription:
    "A simple application for managing cafeteria food orders and basic sales records.",
  fullDescription: `
This project was built to simulate a small cafeteria system
where users can view available food items and place orders.
The system focuses on simplifying order handling
and improving the organization of daily cafeteria operations.
  `,
  problemSolved: `
Manual food ordering in small cafeterias can be slow and disorganized,
leading to mistakes in orders and poor record keeping.
This project provides a structured way to manage food items and orders
in a single application.
  `,
  whatILearned: `
I learned how to model real-world scenarios into application logic,
handle user input effectively,
and structure a simple system with multiple features.
This project also helped me improve my problem-solving skills
and attention to detail in application design.
  `,
  techStack: ["Java", "Swing", "MySQL"],
  image: "/images/cafeteria-app.png",
  link: "",
  category: "Desktop Application",
},


  {
    id: 3,
    title: "Personal Portfolio Website",
    shortDescription:
      "A responsive personal portfolio built with React to showcase my projects and skills.",
    fullDescription: `
This portfolio website was built to present my work
in a structured and professional manner.
It demonstrates my understanding of React components,
routing, and responsive design.
    `,
    problemSolved: `
Many beginner portfolios lack clear navigation
and detailed project explanations.
This project solves that by introducing dedicated project pages
and clean content organization.
    `,
    whatILearned: `
I learned how to use React Router for dynamic routing,
structure reusable components,
and deploy a frontend application.
This project improved my confidence in building production-ready UIs.
    `,
    techStack: ["React", "React Router", "Tailwind CSS"],
    image: "/images/portfolio.png",
    link: "https://your-live-site.netlify.app",
    category: "Frontend Project",
  },

  {
  id: 4,
  title: "Food Ordering and Rating System",
  shortDescription:
    "A database-focused food ordering system built to demonstrate relational design, SQL queries, and role-based access.",
  fullDescription: `
This project was developed as part of my Database Management Systems (DBMS) coursework.
It focuses on designing and implementing a relational database to support a food ordering workflow.
A simple web interface was built using Streamlit to demonstrate how users interact with the database.
  `,
  problemSolved: `
Food ordering systems require well-structured databases to manage users, orders, and menu items efficiently.
This project addresses the challenge of maintaining data integrity and supporting multiple user roles
by applying proper database normalization, constraints, and relational design.
  `,
  whatILearned: `
I learned how to design relational database schemas,
write efficient SQL queries for CRUD operations,
and enforce data integrity using constraints and relationships.
This project also strengthened my understanding of how backend database logic
connects to a simple frontend interface.
  `,
  techStack: ["PostgreSQL", "SQL", "Python", "Streamlit"],
  image: "/images/dbms-food-ordering.png",
  link: "",
  category: "Database Management Project",
},

];
