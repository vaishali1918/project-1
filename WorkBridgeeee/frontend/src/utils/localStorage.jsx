const employees = [
  {
    "id": "E001",
    "email": "naman@gmail.com",
    "password": "123",
    "firstname": "Naman",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop Login Feature",
        "taskDescription": "Build the login functionality for the website, enabling users to securely authenticate using their credentials, with proper error handling and validation.",
        "taskDate": "2025-02-07",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Bug in Dashboard",
        "taskDescription": "Resolve the bug affecting the dashboard UI where certain elements were not displaying correctly on different screen sizes, ensuring compatibility across devices.",
        "taskDate": "2025-02-01",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Database Schema",
        "taskDescription": "Modify the existing database schema to incorporate new fields for upcoming features, ensuring smooth data handling and compatibility with the current structure.",
        "taskDate": "2025-02-05",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Admin Panel",
        "taskDescription": "Design and develop an admin panel to allow administrators to manage users, view analytics, and monitor system activity through an intuitive interface.",
        "taskDate": "2025-02-07",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Security Vulnerabilities",
        "taskDescription": "Identify and patch any potential security holes in the system, including SQL injection risks, cross-site scripting, and improper data encryption to ensure a safe user experience.",
        "taskDate": "2025-02-03",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Refactor Code for User Login",
        "taskDescription": "Refactor the existing code that handles user login to improve performance, reduce redundant code, and make it more maintainable for future updates.",
        "taskDate": "2025-02-02",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design Database for Reports",
        "taskDescription": "Create a new database schema specifically designed for generating and storing reports, ensuring that data retrieval is efficient and accurate for various reporting needs.",
        "taskDate": "2025-02-01",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "User Authentication Enhancement",
        "taskDescription": "Enhance the user authentication process by introducing multi-factor authentication (MFA), improving security measures and providing better user experience during login.",
        "taskDate": "2025-02-04",
        "category": "Security"
      }
    ],
    "taskCount": {
      "active": 5,
      "completed": 2,
      "failed": 1,
      "newTask": 0
    }
  },
  {
    "id": "E002",
    "email": "vihaan@gmail.com",
    "password": "123",
    "firstname": "Vihaan",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement REST API",
        "taskDescription": "Design and implement a robust REST API for user authentication, including endpoints for login, registration, and password recovery, ensuring compliance with best practices for security and scalability.",
        "taskDate": "2025-02-07",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "UI Optimization",
        "taskDescription": "Optimize the user interface for better performance across different devices, improving load times and ensuring seamless interactions for a smooth user experience.",
        "taskDate": "2025-02-02",
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend the meeting with the client to present project updates, discuss any concerns, and gather feedback for future development tasks and priorities.",
        "taskDate": "2025-02-01",
        "category": "Meetings"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Bug Fix for Search Feature",
        "taskDescription": "Identify and resolve the bug in the search feature where incorrect results were being displayed, affecting user search accuracy and experience.",
        "taskDate": "2025-02-03",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix UI Bug in Dashboard",
        "taskDescription": "Fix the bug in the dashboard UI where certain widgets were not being displayed correctly on mobile, improving the responsiveness of the layout.",
        "taskDate": "2025-02-04",
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Add User Profile Feature",
        "taskDescription": "Implement a user profile page that allows users to update their personal details, change passwords, and manage account settings from within the app.",
        "taskDate": "2025-02-06",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Documentation for API",
        "taskDescription": "Update and enhance the documentation for the REST API, ensuring it is clear, accurate, and includes all necessary details for developers to integrate it into their applications.",
        "taskDate": "2025-02-05",
        "category": "Documentation"
      }
    ],
    "taskCount": {
      "active": 4,
      "completed": 3,
      "failed": 1,
      "newTask": 2
    }
  },
  {
    "id": "E003",
    "email": "ishaan@gmail.com",
    "password": "123",
    "firstname": "Ishaan",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Database Models",
        "taskDescription": "Design and implement the models required for the new database structure, ensuring all entities and their relationships are well defined for efficient data retrieval.",
        "taskDate": "2025-02-07",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Write unit tests for the user registration functionality to ensure all edge cases and potential issues are covered and that the feature works as intended.",
        "taskDate": "2025-02-03",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Documentation",
        "taskDescription": "Prepare the documentation for the new API endpoints, describing their usage, parameters, and expected responses to help developers integrate with the API smoothly.",
        "taskDate": "2025-02-05",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Bug in API",
        "taskDescription": "Resolve the bug causing issues with the user login API where users were unable to log in due to a session handling problem.",
        "taskDate": "2025-02-02",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Payment Gateway",
        "taskDescription": "Integrate a third-party payment gateway to handle secure transactions and enable users to make payments directly through the app.",
        "taskDate": "2025-02-06",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Database Schema for Payments",
        "taskDescription": "Modify the existing database schema to accommodate payment transaction data and ensure that payments can be tracked and processed accurately.",
        "taskDate": "2025-02-01",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "UI Enhancements for Mobile App",
        "taskDescription": "Enhance the user interface of the mobile app, making it more visually appealing and easier to use on smaller screen sizes while maintaining functionality.",
        "taskDate": "2025-02-04",
        "category": "UI/UX"
      }
    ],
    "taskCount": {
      "active": 4,
      "completed": 3,
      "failed": 1,
      "newTask": 2
    }
  },
  {
    "id": "E004",
    "email": "arjun@gmail.com",
    "password": "123",
    "firstname": "Arjun",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Refactor Codebase",
        "taskDescription": "Refactor the entire codebase to improve efficiency, reduce redundancy, and ensure adherence to industry best practices, enhancing overall maintainability and scalability.",
        "taskDate": "2025-02-07",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Create User Profile Page",
        "taskDescription": "Design and implement a user profile page where users can view and update their personal details, change profile pictures, and manage account settings.",
        "taskDate": "2025-02-04",
        "category": "UI/UX"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Retrospective",
        "taskDescription": "Participate in the team retrospective meeting to review the past sprint, discuss what went well, identify areas of improvement, and plan actions for the upcoming sprint.",
        "taskDate": "2025-02-01",
        "category": "Meetings"
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    }
  },
  {
    "id": "E005",
    "email": "rhea@gmail.com",
    "password": "123",
    "firstname": "Rhea",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design New UI Theme",
        "taskDescription": "Design a fresh and modern user interface theme for the app, including color schemes, typography, and visual elements, to enhance the user experience and align with the brand's identity.",
        "taskDate": "2025-02-07",
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Fix for Search Feature",
        "taskDescription": "Fix the issue with the search feature that was returning inaccurate results, ensuring it works correctly and efficiently for users.",
        "taskDate": "2025-02-02",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Product Page",
        "taskDescription": "Redesign and update the product page to match the new user interface theme, improving product descriptions, images, and layout for better customer experience.",
        "taskDate": "2025-02-05",
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Improve Mobile Performance",
        "taskDescription": "Optimize the performance of the app on mobile devices, improving load times, responsiveness, and stability across a range of mobile platforms.",
        "taskDate": "2025-02-03",
        "category": "Performance"
      }
    ],
    "taskCount": {
      "active": 3,
      "completed": 1,
      "failed": 2,
      "newTask": 1
    }
  },
    {
      "id": "E006",
      "email": "vikram@gmail.com",
      "password": "123",
      "firstname": "Vikram",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Implement User Roles",
          "taskDescription": "Develop and integrate user role functionality where users can have different access levels (Admin, Editor, User), controlling their access to certain features of the application.",
          "taskDate": "2025-02-08",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Optimize Database Queries",
          "taskDescription": "Analyze and optimize the database queries to reduce latency and improve data retrieval speed, especially for complex searches and reporting features.",
          "taskDate": "2025-02-06",
          "category": "Performance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Design User Dashboard",
          "taskDescription": "Create an intuitive and user-friendly dashboard to display user-specific information, statistics, and recent activities, making it easy for users to navigate the platform.",
          "taskDate": "2025-02-05",
          "category": "UI/UX"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Session Timeout Bug",
          "taskDescription": "Resolve the issue with session timeouts where users were logged out unexpectedly, by improving session management and extending session lifetimes for active users.",
          "taskDate": "2025-02-03",
          "category": "Bug Fix"
        }
      ],
      "taskCount": {
        "active": 3,
        "completed": 2,
        "failed": 1,
        "newTask": 1
      }
    },
    {
      "id": "E007",
      "email": "neha@gmail.com",
      "password": "123",
      "firstname": "Neha",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create API Documentation",
          "taskDescription": "Create detailed documentation for the existing REST API endpoints, including endpoint descriptions, usage examples, and authentication requirements to make it easy for developers to integrate.",
          "taskDate": "2025-02-08",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Design Blog Page UI",
          "taskDescription": "Redesign the user interface for the blog page to make it more visually appealing and user-friendly, ensuring the layout is clean and the content is easy to read across devices.",
          "taskDate": "2025-02-04",
          "category": "UI/UX"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Set Up User Authentication Flow",
          "taskDescription": "Develop the authentication flow for users, implementing login, registration, and password recovery features with proper validation and secure session management.",
          "taskDate": "2025-02-06",
          "category": "Development"
        }
      ],
      "taskCount": {
        "active": 2,
        "completed": 1,
        "failed": 0,
        "newTask": 1
      }
    },
    {
      "id": "E008",
      "email": "radhika@gmail.com",
      "password": "123",
      "firstname": "Radhika",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Broken Links",
          "taskDescription": "Identify and fix broken links across the website to improve user navigation and SEO performance, ensuring all URLs are correct and accessible.",
          "taskDate": "2025-02-07",
          "category": "Bug Fix"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update Terms and Conditions",
          "taskDescription": "Revise and update the website's terms and conditions to reflect recent legal changes and align with company policies, ensuring all necessary disclaimers are included.",
          "taskDate": "2025-02-02",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Implement Chat Support Feature",
          "taskDescription": "Design and implement a live chat support feature, allowing users to communicate with customer service agents in real-time for issue resolution and assistance.",
          "taskDate": "2025-02-03",
          "category": "Development"
        }
      ],
      "taskCount": {
        "active": 3,
        "completed": 1,
        "failed": 1,
        "newTask": 1
      }
    },
    {
      "id": "E009",
      "email": "shreya@gmail.com",
      "password": "123",
      "firstname": "Shreya",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Implement Pagination for Product List",
          "taskDescription": "Develop and implement a pagination system for the product list on the website, ensuring efficient loading of large amounts of products without affecting the site's performance.",
          "taskDate": "2025-02-07",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Footer Design Issue",
          "taskDescription": "Fix the issue with the footer design, where certain elements were not aligned correctly across different screen sizes, improving the overall look and consistency.",
          "taskDate": "2025-02-06",
          "category": "UI/UX"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Integrate Analytics Tracking",
          "taskDescription": "Integrate analytics tracking into the website, enabling the team to gather data on user behavior, traffic patterns, and engagement metrics for future optimization.",
          "taskDate": "2025-02-04",
          "category": "Development"
        }
      ],
      "taskCount": {
        "active": 3,
        "completed": 1,
        "failed": 0,
        "newTask": 1
      }
    },
    {
      "id": "E010",
      "email": "manoj@gmail.com",
      "password": "123",
      "firstname": "Manoj",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create User Onboarding Flow",
          "taskDescription": "Develop an onboarding flow for new users, guiding them through the platform's features with tooltips and tutorials to ensure they understand how to navigate and use the application.",
          "taskDate": "2025-02-08",
          "category": "UI/UX"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Add Search Filter to Dashboard",
          "taskDescription": "Implement search filters in the dashboard to allow users to easily sort and find specific data, improving the efficiency of data analysis and decision-making.",
          "taskDate": "2025-02-05",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Form Submission Bug",
          "taskDescription": "Resolve the issue with form submissions not being properly saved or sent to the backend, affecting user registration and data collection processes.",
          "taskDate": "2025-02-03",
          "category": "Bug Fix"
        }
      ],
      "taskCount": {
        "active": 3,
        "completed": 1,
        "failed": 0,
        "newTask": 1
      }
    },
      {
        "id": "E011",
        "email": "priya@gmail.com",
        "password": "123",
        "firstname": "Priya",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Optimize Image Compression",
            "taskDescription": "Optimize the image compression process to reduce file sizes without losing quality, ensuring faster page load times and better user experience on the website.",
            "taskDate": "2025-02-08",
            "category": "Performance"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Design Login Screen UI",
            "taskDescription": "Create a modern and user-friendly login screen interface that provides clear input fields, error handling, and an easy login process.",
            "taskDate": "2025-02-07",
            "category": "UI/UX"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Improve Website Accessibility",
            "taskDescription": "Improve the accessibility features of the website by implementing proper semantic HTML, keyboard navigation support, and text-to-speech functionality for visually impaired users.",
            "taskDate": "2025-02-06",
            "category": "UI/UX"
          }
        ],
        "taskCount": {
          "active": 2,
          "completed": 1,
          "failed": 0,
          "newTask": 1
        }
      },
      {
        "id": "E012",
        "email": "sandeep@gmail.com",
        "password": "123",
        "firstname": "Sandeep",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Build User Feedback System",
            "taskDescription": "Create a feedback system that allows users to submit suggestions, report bugs, and rate features, helping the team gather insights and improve the platform.",
            "taskDate": "2025-02-08",
            "category": "Development"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Integrate Payment Gateway",
            "taskDescription": "Integrate a secure and reliable payment gateway into the website, allowing users to make payments for subscriptions and services directly through the platform.",
            "taskDate": "2025-02-06",
            "category": "Development"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Fix Data Sync Issue",
            "taskDescription": "Fix an issue where user data was not syncing properly across multiple devices, causing inconsistencies in the user experience.",
            "taskDate": "2025-02-05",
            "category": "Bug Fix"
          }
        ],
        "taskCount": {
          "active": 2,
          "completed": 1,
          "failed": 0,
          "newTask": 1
        }
      },
      {
        "id": "E013",
        "email": "kiran@gmail.com",
        "password": "123",
        "firstname": "Kiran",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Implement Search Functionality",
            "taskDescription": "Develop the search functionality for the website, enabling users to search for products, articles, or services efficiently using various filters and keywords.",
            "taskDate": "2025-02-08",
            "category": "Development"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Update User Profile UI",
            "taskDescription": "Revamp the user profile page layout, adding features like profile picture, social media links, and display preferences to improve user engagement and personalization.",
            "taskDate": "2025-02-06",
            "category": "UI/UX"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Fix Cross-browser Compatibility Issues",
            "taskDescription": "Ensure that the website's design and functionality work seamlessly across all major browsers, fixing issues related to layout inconsistencies, broken features, or UI glitches.",
            "taskDate": "2025-02-04",
            "category": "Bug Fix"
          }
        ],
        "taskCount": {
          "active": 2,
          "completed": 1,
          "failed": 0,
          "newTask": 1
        }
      },
      {
        "id": "E015",
        "email": "sonal@gmail.com",
        "password": "123",
        "firstname": "Sonal",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Build Blog Feature",
            "taskDescription": "Develop a blog feature for the website, allowing the team to post articles, updates, and news for users, with categories, tags, and search functionality.",
            "taskDate": "2025-02-08",
            "category": "Development"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Implement User Notification System",
            "taskDescription": "Design and implement a notification system for users, allowing them to receive updates, alerts, and important messages about their activities and interactions on the platform.",
            "taskDate": "2025-02-06",
            "category": "Development"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Fix Video Streaming Bug",
            "taskDescription": "Resolve the issue where videos would not load or buffer correctly on certain devices or browsers, ensuring smooth video streaming for all users.",
            "taskDate": "2025-02-04",
            "category": "Bug Fix"
          }
        ],
        "taskCount": {
          "active": 2,
          "completed": 1,
          "failed": 1,
          "newTask": 1
        }
      }    ,
      {
        "id": "E014",
        "email": "deepak@gmail.com",
        "password": "123",
        "firstname": "Deepak",
        "tasks": [
        ],
        "taskCount": {
          "active": 0,
          "completed": 0,
          "failed": 0,
          "newTask": 0
        }
      }
];

const admin = [{
    "id": "1",
    "email": "admin@gmail.com",
    "password": "123",
    "firstname": "Manish",
    "taskCount": {
      "active": 0,
      "completed": 0,
      "failed": 0,
      "newTask": 0
    }
  }]
  

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
}
