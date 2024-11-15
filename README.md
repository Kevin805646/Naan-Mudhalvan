Contributors :

1. Abdul Salam N       -   abumuna7586@gmail.com

2. Abubuckar Siddiq    -   siddiqabubucker92@gmail.com

3. Jagan S             -   jaganjaga7929@gmail.com

4. Kevin Harris D      -   kevinharris1124@gmail.com

PROJECT TITLE :

SRM: Online Learning Platform
SRM is a user-friendly online learning platform designed to help beginners learn programming languages like Python and Java and essential software skills such as MS Office. Built with the MERN stack, SRM offers interactive lessons, progress tracking, and a secure learning experience, making education accessible and engaging.

Features :

1 .Secure Authentication: Login and signup with JWT-based security to protect user data.

2 .Comprehensive Course Catalog: A variety of beginner-focused programming and software courses.

3 .Interactive Learning: Step-by-step lessons and quizzes to enhance understanding.

4 .Progress Tracking: Visual progress bars, milestones, and goal tracking to keep learners motivated.

5 .Responsive Design: Works seamlessly across devices, thanks to Tailwind CSS.

Tech Stack :

Frontend

1 .React: For building dynamic and responsive user interfaces.

2 .Redux Toolkit: Manages application state effectively.

3 .React Router DOM: Enables seamless navigation across the platform.

4 .Tailwind CSS: Ensures modern and responsive styling.

Backend

1 .Node.js: Handles server-side logic.

2 .Express.js: Manages APIs and backend routing.

3 .JWT (JSON Web Tokens): Secures user authentication.

Database

MongoDB: Stores user profiles, course details, and progress data.


Installation

Prerequisites :
1 .Node.js (v14+ recommended)

2 .MongoDB (local or cloud instance)

3 .Git


Steps :

1. Clone the repository:
    #bash
    git clone <repository_url>
    cd <project_directory>

2. Install dependencies for backend and frontend:
    #bash
    cd backend
    npm install
    cd ../frontend
    npm install

3. Set up environment variables:
    #makefile
    Create a .env file in the backend directory with the following:

    #makefile
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>

4. Start the servers:

    Backend:

    #bash
    cd backend
    npm start

    Frontend:

    #bash
    cd frontend
    npm run dev

5. Open your browser and navigate to http://localhost:3000 (or the specified port).


Usage :
1 .Sign up: Create an account on the signup page.
2 .Log in: Access your dashboard securely.
3 .Browse Courses: Select from a variety of beginner-friendly topics.
4 .Track Progress: View milestones and completion status to stay on track.

Future Enhancements :
1 .Mobile App: Develop a mobile-friendly version for greater accessibility.
2 .Discussion Forums: Foster community-based collaborative learning.
3 .Advanced Courses: Add intermediate and advanced lessons to expand offerings.
