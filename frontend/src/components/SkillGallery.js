/**
 * Author: James Thomas
 * Date: 2024/12/30
 * Description: Component of skill card gallery.
 */
import React from 'react';
import SkillCard from './SkillCard';

const skills = [
    {
        logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
        skillName: 'HTML',
        level: 90,
    },
    {
        logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        skillName: 'CSS',
        level: 85,
    },
    {
        logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        skillName: 'JavaScript',
        level: 80,
    },
    {
        logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
        skillName: 'React',
        level: 75,
    },
];

const SkillGallery = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-6 p-6 bg-gray-100">
            {skills.map((skill, index) => (
                <SkillCard
                    key={index}
                    logo={skill.logo}
                    skillName={skill.skillName}
                    level={skill.level}
                />
            ))}
        </div>
    );
};

export default SkillGallery;
