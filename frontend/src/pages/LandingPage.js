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

    const [isLoading, setIsLoading] = useState(true);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        axios.get('http://localhost:5000/skills')
            .then(response => {
                setSkills(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
        axios.get('http://localhost:5000/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
        axios.get('http://localhost:5000/experiences')
            .then(response => {
                setExperiences(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
        axios.get('http://localhost:5000/educations')
            .then(response => {
                setEducations(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
        axios.get('http://localhost:5000/contacts')
            .then(response => {
                setContacts(response.data);
                setIsLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));

        return () => clearTimeout(timer);
    }, []);

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
