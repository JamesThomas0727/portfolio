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
  const educations = props.educations;
  const experiences = props.experiences;
  const projects = props.projects;
  const contacts = props.contacts;

  return (
    <div className='static'>
      <div id="navbar">
        <NavBar id="navbar" />
      </div>
      <div id="home">
        <Dashboard contacts={contacts} />
      </div>
      {/* ======================================= */}
      <div id="skills">
        <Box>
          {skills.map((item) => {
            return (
              <div key={item}>sdflkasdfaldjfasdjfklasd</div>
            )
          })}
        </Box>
      </div>
      {/* ======================================= */}
      <div id='projects'>
        <Box>
          {projects.map((item) => {
            return (
              <ProjectCard
                key={item}
              />
            )
          })}
        </Box>
      </div>
      {/* ======================================= */}
      <div id="experience">
        <Box>
          {experiences.map((item) => {
            return (
              <TimeLineItem
                key={item}
                education={item} />
            )
          })}
        </Box>
      </div>
      {/* ======================================= */}
      <div id='education'>
        <Box>
          {educations.map((item) => {
            return (
              <TimeLineItem
                key={item}
                education={item} />
            )
          })}
        </Box>
      </div>

      {/* ======================================= */}
      <div id="contact" >
        <EmailBox />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}
