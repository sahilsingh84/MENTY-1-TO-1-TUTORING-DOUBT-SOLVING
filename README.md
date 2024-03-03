# MENTY-1-TO-1-TUTORING-DOUBT-SOLVING


This project is a one-on-one tutoring platform that connects students with tutors for personalized learning experiences. It is built using React for the frontend and Node.js for the backend, with Cloudinary as the cloud database.

## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Tutor Matching**: Students can search for tutors based on subjects, availability, and ratings.
- **Scheduling**: Students can schedule tutoring sessions with tutors.
- **View Previous Sessions**: Users can view their previous tutoring sessions.
- **Online Courses**: Users can access online courses for self-paced learning.
- **ML-based Sentiment Analysis**: Uses machine learning for sentiment analysis to protect tutors and provide feedback.
- **Canvas Board**: Interactive canvas board for live sessions between students and tutors.
- **Messaging**: In-app messaging system for communication between students and tutors.
- **Feedback System**: Students can provide feedback and ratings for tutors.

## Technologies Used

- **Frontend**: React, React Router, Material-UI
- **Backend**: Node.js, Express
- **Database**: Cloudinary
- **Authentication**: JWT (JSON Web Tokens)
- **ML**: TensorFlow.js for sentiment analysis
- **Canvas**: Fabric.js for canvas board

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/one-on-one-tutoring.git
   ```
2. Install dependencies for the frontend and backend:
   ```bash
   cd one-on-one-tutoring
   cd frontend
   npm install
   cd ..
   cd backend
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your Cloudinary credentials and JWT secret:
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   JWT_SECRET=your_jwt_secret
   ```
4. Run the frontend and backend servers:
   ```bash
   cd menty
   npm install
   npm start
   cd ..
   cd server
   npm install
   npm start
   ```

## Usage

- Visit `http://localhost:3000` in your browser to access the frontend.
- Visit `http://localhost:4000` in your browser to access the backend.
- Use the platform to sign up, search for tutors, schedule sessions, access online courses, use the canvas board, and provide feedback.

## Preview
![eb88b480-d523-4bfa-bbed-f02dc6e852c0](https://github.com/sahilsingh84/MENTY-1-TO-1-TUTORING-DOUBT-SOLVING/assets/123955234/c73c1bb0-814a-41c5-8681-c9ad34934eac)
![2a200fa8-4aef-4f9d-a2b6-569b09d24c05](https://github.com/sahilsingh84/MENTY-1-TO-1-TUTORING-DOUBT-SOLVING/assets/123955234/bddc4e7d-3cbd-4c30-b9a1-feb9d268e41b)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


---

Feel free to customize this template to fit the specifics of your project!
