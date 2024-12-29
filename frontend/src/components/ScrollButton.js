/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Component of scroll to top button.
 */
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-5 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <Button
                variant="contained"
                color="primary"
                onClick={scrollToTop}
                className="shadow-lg"
                sx={{
                    textTransform: 'none',
                    justifyContent: 'center',
                    minWidth: '50px',
                    minHeight: '50px',
                    borderRadius: '50%',
                    padding: '1px',

                }}
            >
                <ArrowUpwardIcon />
            </Button>
        </div>
    );
};

export default ScrollToTopButton;
