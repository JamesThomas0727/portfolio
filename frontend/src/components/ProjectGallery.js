import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A scalable e-commerce platform with modern UI/UX.',
        images: [
            'assets/images/projects/thesnuslife/1.png',
            'assets/images/projects/thesnuslife/2.png',
            'assets/images/projects/thesnuslife/3.png',
        ],
        link: 'https://example.com',
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website with animations.',
        images: [
            'assets/images/projects/thesnuslife/4.png',
            'assets/images/projects/thesnuslife/5.png',
            'assets/images/projects/thesnuslife/6.png',
        ],
        link: 'https://example.com',
    },
    {
        title: 'Social Media Dashboard',
        description: 'A dashboard for tracking social media analytics.',
        images: [
            'assets/images/projects/thesnuslife/3.png',
            'assets/images/projects/thesnuslife/2.png',
            'assets/images/projects/thesnuslife/5.png',
        ],
        link: 'https://example.com',
    },
];

const ProjectGallery = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    images={project.images}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default ProjectGallery;
