import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    figma,
    docker,
    github,
    java,
    python,

    capstone,
    plant,
    skill,
    threejs,
    tree1,
    tree2,
    tree3,
    tree4
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "github",
      icon: github,
    },
  ];
  
  const experiences = [
    {
      title: "Year 1",
      icon: tree1,
      iconBg: "#b1f2d3",
      date: "2021",
      points: [
        "Fundamentals of programming",
        "Object-oriented programming",
        "Exception handling",
        "Basic frontend development"
      ],
    },
    {
      title: "Year 2",
      icon: tree2,
      iconBg: "#b1f2d3",
      date: "2022",
      points: [
        "Data structures and algorithms",
        "Discrete structures",
        "Computer architecture",
        "Test driven development",
        "Agile methodologies",
        "Software development lifecycle"
      ],
    },
    {
      title: "Year 3",
      icon: tree3,
      iconBg: "#b1f2d3",
      date: "2023",
      points: [
        "SQL queries and database design",
        "Design and analysis of advanced algorithms",
        "Internet architecture and network protocols",
        "Analysis and visualization of data",
        "Human-computer interaction",
        "Machine learning"
      ],
    },
    {
      title: "Year 4",
      icon: tree4,
      iconBg: "#b1f2d3",
      date: "2024",
      points: [
        "Artificial intelligence",
        "Project management",
        "Design and implementation of parallel programs",
        "Numeric dynamic systems models",
        "Capstone Project"
      ],
    },
  ];
  
  const projects = [
    {
      name: "Gamified Charity Donation App",
      description:
        "A full-stack web app that helps vendors at conventions generate leads by donating to charity when attendees sign up. Live competitions with game sprites, leaderboards, and interactive UI elements drive booth engagement and foot traffic. Vendors can track performance, access attendee data, and send personalized post-event messages. Developed as a capstone project for Kelowna Software, who served as our client. Built with Angular, ASP.NET Core, and SQL Server using clean architecture, the app won 1st place in our capstone showcase.",
      tags: [
        {
          name: "Angular",
          color: "red-text-gradient",
        },
        {
          name: "EF Core",
          color: "green-text-gradient",
        },
        {
          name: ".NET",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: capstone,
      youtubeUrl: "https://youtu.be/cvw6szvee1Q",
    },
    {
      name: "Plant Disease Classification Model",
      description:
        "A deep learning project that classifies plant leaf images into 38 disease categories using a convolutional neural network trained on a Kaggle dataset. The model processes images and outputs the most likely disease class with high accuracy. A lightweight web app built with Streamlit allows users to upload a single image and view the model's prediction along with the input image. This project focuses on image preprocessing, multiclass classification, and integrating a trained TensorFlow model into an interactive interface.",
      tags: [
        {
          name: "Python",
          color: "blue-yellow-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "orange-text-gradient",
        },
      ],
      image: plant,
    },
    {
      name: "Skill Sharing Social Platform",
      description:
        "A full-stack web app for discovering and sharing user-created skills, featuring secure authentication, real-time interactions, and a modular, scalable architecture. Users can post and manage skill entries, comment on others, favorite content, and message each other directly. Admins and supervisors can manage users and moderate content, while a comprehensive analytics dashboard visualizes engagement trends across the platform. Built with PHP, JavaScript, and MySQL, the app emphasizes clean structure, relational data handling, and interactive UX.",
      tags: [
        {
          name: "PHP",
          color: "purple-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
      ],
      image: skill,
    },
  ];
  
  export { technologies, experiences, projects };