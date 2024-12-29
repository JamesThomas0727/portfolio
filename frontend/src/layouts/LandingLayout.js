/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Layout component to manage landing page.
 */
import React, { useState, useEffect } from 'react'

import { Dashboard, Footer, NavBar, EmailBox, TimeLine, ProjectCard } from '../components'
import { Box } from '@mui/material';
import fetchData from '../utils/FetchData';
import Timeline from '../components/TimeLine';

export default function LandingLayout() {

  const [education, setEducation] = useState(["daf", "dasfdas"]);
  useEffect(() => {
    // const data = fetchData('localhost:5000/projects');
    // console.log(data);
    // setEducation(data);
  }, []);

  return (
    <div className='static'>
      <NavBar id="navbar" />
      <div style={{ flex: 1 }}>
        <Dashboard id="dashboard" />
      </div>
      {/* ======================================= */}
      <Box>
        {education.map((item) => {
          return (
            <Timeline
              key={item}
              education={item} />
          )
        })}
      </Box>
      {/* ======================================= */}
      <Box>
        <TimeLine />
      </Box>
      {/* ======================================= */}

      <EmailBox id="contact" />
      <Footer id="footer" />
    </div>
  )
}
