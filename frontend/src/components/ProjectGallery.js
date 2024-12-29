/**
 * Author: James Thomas
 * Date: 2024/12/30
 * Description: Component of project gallery.
 */
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGallery = (props) => {
    const projects = props.projects;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    images={project.avatar}
                    link={project.url}
                />
            ))}
        </div>
    );
};

export default ProjectGallery;
