/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Layout component to manage landing page.
 */
import React from 'react'

import { Dashboard, Footer, NavBar, EmailBox, ProjectGallery, TimeLineItem, Profile, SkillGallery } from '../components'
import { Box, Typography } from '@mui/material';

export default function LandingLayout(props) {

  const skills = props.skills;
  const projects = props.projects;
  const contacts = props.contacts;
  const educations = props.educations;
  const experiences = props.experiences;

  return (
    <div className='static'>
      <div id="navbar">
        <NavBar id="navbar" />
      </div>
      <div id="home">
        <Dashboard contacts={contacts} />
      </div>
      <div id="about" className='flex flex-col items-center justify-center text-center'>
        <Profile skills={skills} />
      </div>

      <div id="skills" className='flex flex-col items-center justify-center text-center my-5 py-5'>
        <SkillGallery />
      </div>

      <div id='projects' className='flex flex-col items-center justify-center text-center my-5 py-5'>
        <ProjectGallery projects={projects} />
      </div>

      <div id="experience" className='flex flex-col items-center justify-center text-center my-5 py-5'>
        <Box>
          <Typography
            variant="h4"
            sx={{
              marginTop: '20px',
            }}
            className="text-red-500 text-sm md:text-base max-w-2xl my-5 py-5"
          >
            Experience
          </Typography>
          <TimeLineItem
            data={experiences}
          />
        </Box>
      </div>

      <div id='education' className='flex flex-col items-center justify-center text-center my-5 py-5'>
        <Box>
          <Typography
            variant="h4"
            sx={{
              marginTop: '20px',
            }}
            className="text-blue-500 text-sm md:text-base max-w-2xl my-5 py-5"
          >
            Education
          </Typography>
          <TimeLineItem
            data={educations}
          />
        </Box>
      </div>

      <div id="contact" >
        <EmailBox />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}
