/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Component for profile page (about me)
 */

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import ResumeDownload from './ResumeDownload';
const Profile = (props) => {
    const skills = props.skills;
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <Box
                sx={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: 3,
                    margin: '20px',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        margin: '20px',
                    }}
                    className="text-red-500 text-sm md:text-base max-w-2xl my-5 py-5"
                >
                    About
                </Typography>
                <img
                    src="assets/images/avatars/avatar1.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </Box>
            <Typography variant="h4" component="h1" className="mb-2 my-5 text-gray-800">
                James Thomas
            </Typography>
            <Typography variant="h5" className="text-gray-600 text-center mb-4">
                {`Full-stack Developer

Thomas James
Phone: 
Email: jamesthomasdev2001@gmail.com
GitHub: http://github.com/JamesThomas0727/
Portfolio: 

Professional Summary

Results-driven Full-Stack Developer with over 6 years of experience designing, developing, and implementing scalable, high-quality web applications. Proficient in a wide array of technologies and frameworks across front-end and back-end development. Adept at collaborating with cross-functional teams to deliver robust and user-friendly solutions. Passionate about continuous learning and leveraging innovative technologies to solve complex problems.

Skills

Front-End Technologies:

- HTML, CSS, JavaScript (ES6+), TypeScript
- Frameworks/Libraries: React, Angular, Vue.js
- CSS Preprocessors: SASS, LESS
- Responsive Design: Bootstrap, Tailwind CSS

Back-End Technologies:

- Node.js, Express.js, Django, Ruby on Rails, Spring Boot
- RESTful and GraphQL API design and implementation
- Database Management: MongoDB, PostgreSQL, MySQL, Firebase

DevOps and Tools:

- Version Control: Git, GitHub, GitLab
- CI/CD: Jenkins, GitHub Actions, CircleCI
- Containerization: Docker, Kubernetes
- Cloud Services: AWS (S3, EC2, Lambda), Azure, GCP

Other Skills:

- Unit and Integration Testing: Jest, Mocha, Cypress
- Agile Methodologies: Scrum, Kanban
- Soft Skills: Strong problem-solving, communication, and teamwork abilities


Professional Experience

Senior Full-Stack Developer

James Co.Ltd, 

- Led the design and development of scalable web applications, improving performance by 30%.
- Designed and implemented RESTful APIs and microservices architecture to enhance system modularity.
- Enhanced front-end performance by optimizing React components and implementing server-side rendering (SSR).
- Collaborated with UI/UX designers to create intuitive and accessible user interfaces.
- Mentored junior developers, fostering a culture of knowledge sharing and continuous learning.

Full-Stack Developer

- Built and maintained responsive web applications using Angular and Node.js.
- Integrated third-party APIs and ensured secure handling of sensitive data.
- Implemented authentication and authorization mechanisms using OAuth and JWT.
- Conducted code reviews and wrote comprehensive documentation for project deliverables.
- Worked closely with stakeholders to gather requirements and ensure alignment with business goals.

---

### **Education**

**Bachelor of Science in Computer Science**\
[University Name], [Location]\
[Graduation Year]

---

### **Certifications**

- [Certification Name] – [Issuing Organization], [Year]
- [Certification Name] – [Issuing Organization], [Year]

---

### **Projects**

#### **Project Name**

- Description: [Brief overview of the project and your role in it.]
- Technologies: [List of technologies used.]
- Outcome: [Quantifiable results, e.g., increased efficiency by X%, user base growth, etc.]

#### **Project Name**

- Description: [Brief overview of the project and your role in it.]
- Technologies: [List of technologies used.]
- Outcome: [Quantifiable results, e.g., increased efficiency by X%, user base growth, etc.]


Interest

- Open-source contributions
- Exploring emerging web technologies
- Building and optimizing side projects

I would like to collaborate with more and more persons.

`}
            </Typography>
            <ResumeDownload />
            {/* Skills
            <div className="flex flex-wrap justify-center gap-2">
                {skills.map((item, index) => (
                    <Chip
                        key={index}
                        label={item.skill}
                        color="primary"
                        variant="outlined"
                        className="text-sm"
                    />
                ))}
            </div> */}
        </div>
    );
};

export default Profile;
