import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const SkillCard = ({ logo, skillName, level }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 shadow-lg rounded-lg"
        >
            <Box className="flex flex-col items-center">
                {/* Logo */}
                <img src={logo} alt={skillName} className="w-16 h-16 mb-4 object-contain" />

                {/* Skill Name */}
                <Typography variant="h6" className="mb-2">
                    {skillName}
                </Typography>

                {/* Skill Level */}
                <Box sx={{ width: '100%', mt: 2 }}>
                    <LinearProgress
                        variant="determinate"
                        value={level}
                        sx={{
                            height: 8,
                            borderRadius: 5,
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: 'primary.main',
                            },
                        }}
                    />
                </Box>
                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    {level}% Skilled
                </Typography>
            </Box>
        </motion.div>
    );
};

export default SkillCard;
