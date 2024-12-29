/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component of landing page.
 */
import React, { useState, useEffect } from 'react'

import LoadingPanel from '../components/LoadingPanel';
import { LandingLayout } from '../layouts';
import axios from 'axios';

//==================================================================

export default function LandingPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [skills, setSkills] = useState(["daf", "dasfdas"]);
    const [projects, setProjects] = useState(["daf", "dasfdas"]);
    const [experiences, setExperiences] = useState(["daf", "dasfdas"]);
    const [educations, setEducation] = useState(["daf", "dasfdas"]);
    const [contacts, setContacts] = useState(["daf", "dasfdas"]);

    useEffect(() => {
        axios.get('http://localhost:5000/educations')
            .then(response => {
                // setEducation(response.data);
                setIsLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 3000);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            {isLoading ? (
                <LoadingPanel />
            ) : (
                <LandingLayout
                    skills={skills}
                    projects={projects}
                    contacts={contacts}
                    educations={educations}
                    experiences={experiences}
                />
            )
            }
        </>
    )
}

// const AboutPage = () => {
//     return (
//         <div className="bg-gradient-to-r from-teal-400 to-purple-600 text-white min-h-screen flex flex-col justify-center items-center">
//             {/* Navigation Bar */}
//             <nav className="w-full bg-gray-900 px-6 py-4 fixed top-0 flex justify-between items-center">
//                 <h1 className="text-2xl font-bold">My Portfolio</h1>
//                 <ul className="flex space-x-6">
//                     <li>
//                         <a href="#home" className="hover:text-teal-400">
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#about" className="hover:text-teal-400">
//                             About Me
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#projects" className="hover:text-teal-400">
//                             Projects
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#contact" className="hover:text-teal-400">
//                             Contact
//                         </a>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Hero Section */}
//             <section id="home" className="mt-20 text-center">
//                 <h1 className="text-5xl md:text-6xl font-bold">Quentin Berthet</h1>
//                 <h2 className="text-2xl md:text-3xl mt-4">Web / Application Developer</h2>
//                 <p className="text-gray-200 mt-6 max-w-2xl mx-auto">
//                     Passionate about creating modern and interactive websites. Explore my portfolio to discover my projects, experience, and background.
//                 </p>
//                 <div className="mt-8 flex justify-center space-x-4">
//                     <a
//                         href="#projects"
//                         className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg"
//                     >
//                         My Projects
//                     </a>
//                     <a
//                         href="#about"
//                         className="border-2 border-teal-500 hover:bg-teal-500 hover:text-white text-teal-500 font-semibold px-6 py-3 rounded-lg"
//                     >
//                         About Me
//                     </a>
//                 </div>
//             </section>
//         </div>
//     );
// };

//==================================================================