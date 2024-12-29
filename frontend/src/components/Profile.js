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
        <div className="static flex flex-col items-center p-6 bg-gray-100 min-h-screen w-full">
            <Typography
                variant="h4"
                sx={{
                    margin: '20px',
                }}
                className="text-red-500 text-sm md:text-base max-w-2xl my-5 py-5"
            >
                About me
            </Typography>
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
                <img
                    src="assets/images/avatars/avatar1.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </Box>
            <Typography variant="h4" component="h1" className="mb-2 my-5 text-gray-800">
                James Thomas
            </Typography>
            <Typography variant="h5" className="text-gray-600 mb-4">
                <div className="bg-gray-100 min-h-screen flex  py-10">
                    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
                        <header className="border-b pb-4 mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">Full-Stack Developer</h1>
                            <p className="text-lg text-gray-600 mt-2">James Thomas</p>
                            <div className="mt-4 space-y-2">
                                <p>
                                    <span className="font-bold">Phone:</span> +14195531739
                                </p>
                                <p>
                                    <span className="font-bold">Email:</span>{" "}
                                    <a
                                        href="mailto:jamesthomasdev2001@gmail.com"
                                        className="text-blue-600 hover:underline"
                                    >
                                        jamesthomasdev2001@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <span className="font-bold">GitHub:</span>{" "}
                                    <a
                                        href="http://github.com/JamesThomas0727/"
                                        className="text-blue-600 hover:underline"
                                    >
                                        http://github.com/JamesThomas0727/
                                    </a>
                                </p>
                                <p>
                                    <span className="font-bold">Portfolio:</span> Coming Soon
                                </p>
                            </div>
                        </header>

                        <section className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Professional Summary</h2>
                            <p className="text-gray-700">
                                Results-driven Full-Stack Developer with over 6 years of experience designing, developing, and
                                implementing scalable, high-quality web applications. Proficient in a wide array of technologies and
                                frameworks across front-end and back-end development. Adept at collaborating with cross-functional teams to
                                deliver robust and user-friendly solutions. Passionate about continuous learning and leveraging innovative
                                technologies to solve complex problems.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold">Front-End Technologies:</h3>
                                    <p className="text-gray-700">
                                        HTML, CSS, JavaScript (ES6+), TypeScript, React, Angular, Vue.js, SASS, LESS, Bootstrap, Tailwind CSS
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Back-End Technologies:</h3>
                                    <p className="text-gray-700">
                                        Node.js, Express.js, Django, Ruby on Rails, Spring Boot, MongoDB, PostgreSQL, MySQL, Firebase
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">DevOps and Tools:</h3>
                                    <p className="text-gray-700">
                                        Git, GitHub, GitLab, Jenkins, GitHub Actions, CircleCI, Docker, Kubernetes, AWS, Azure, GCP
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Other Skills:</h3>
                                    <p className="text-gray-700">
                                        Jest, Mocha, Cypress, Agile Methodologies (Scrum, Kanban), Strong problem-solving, communication, and
                                        teamwork abilities
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Professional Experience</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold">Senior Full-Stack Developer</h3>
                                    <p className="text-gray-700 font-light">James Co. Ltd</p>
                                    <ul className="list-disc ml-6 text-gray-700">
                                        <li>Led the design and development of scalable web applications, improving performance by 30%.</li>
                                        <li>Designed and implemented RESTful APIs and microservices architecture to enhance system modularity.</li>
                                        <li>Enhanced front-end performance by optimizing React components and implementing server-side rendering (SSR).</li>
                                        <li>Collaborated with UI/UX designers to create intuitive and accessible user interfaces.</li>
                                        <li>Mentored junior developers, fostering a culture of knowledge sharing and continuous learning.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
                                    <ul className="list-disc ml-6 text-gray-700">
                                        <li>Built and maintained responsive web applications using Angular and Node.js.</li>
                                        <li>Integrated third-party APIs and ensured secure handling of sensitive data.</li>
                                        <li>Implemented authentication and authorization mechanisms using OAuth and JWT.</li>
                                        <li>Conducted code reviews and wrote comprehensive documentation for project deliverables.</li>
                                        <li>Worked closely with stakeholders to gather requirements and ensure alignment with business goals.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Education</h2>
                            <p className="text-gray-700">
                                <span className="font-bold">Bachelor of Science in Computer Science</span>, [University Name], [Location] -
                                [Graduation Year]
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Certifications</h2>
                            <ul className="list-disc ml-6 text-gray-700">
                                <li>[Certification Name] – [Issuing Organization], [Year]</li>
                                <li>[Certification Name] – [Issuing Organization], [Year]</li>
                            </ul>
                        </section>
                    </div>
                </div>
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
