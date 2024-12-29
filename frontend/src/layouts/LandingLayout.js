/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Layout component to manage landing page.
 */
import React from 'react'

import { Dashboard, Footer, NavBar, EmailBox, ProjectCard, TimeLineItem } from '../components'
import { Box } from '@mui/material';

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

      <div id="skills">
        <Box>
          {skills.map((item) => {
            return (
              <div key={item}>sdflkasdfaldjfasdjfklasd</div>
            )
          })}
        </Box>
      </div>

      <div id='projects'>
        <Box>
          {projects.map((item) => {
            return (
              <ProjectCard
                project={item}
                key={item}
              />
            )
          })}
        </Box>
      </div>

      {/* <div id="experience">
        <Box>
          <TimeLineItem
            experiences={experiences}
          />
        </Box>
      </div>

      <div id='education'>
        <Box>
          <TimeLineItem
            educations={educations}
          />
        </Box>
      </div> */}

      <div id="contact" >
        <EmailBox />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}
