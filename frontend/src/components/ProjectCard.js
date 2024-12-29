/**
 * Author: James Thomas
 * Date: 2024/12/30
 * Description: Component of project card.
 */
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, images, link }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        // <motion.div
        //     whileHover={{ scale: 1.05 }}
        //     initial={{ opacity: 0, y: 20 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 0.5 }}
        //     className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center"
        // >
        <div>
            <Box
                sx={{
                    width: '100%',
                    height: 200,
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    position: 'relative',
                }}
            >
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8 }}
                    />
                </AnimatePresence>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                >
                    &#8592;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                >
                    &#8594;
                </button>
            </Box>
            <div className="flex space-x-2 mt-2">
                {images.map((index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <Typography variant="h6" className="mt-4">
                {title}
            </Typography>
            <Typography variant="body2" className="text-gray-600 text-center mt-2 mb-4">
                {description}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    margin: '20px',
                    textTransform: 'none',
                }}
                onClick={() => { alert('Sorry, coming soon!') }}
            >
                View
            </Button>
            {/* // </motion.div> */}
        </div >
    );
};

export default ProjectCard;
