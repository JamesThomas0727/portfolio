/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component for footer bar.
 */
import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-none pt-4 text-center bg-gray-600 text-white py-6">
            &copy; {new Date().getFullYear()} James Thomas | Back-end Developer
            &nbsp;&nbsp;&nbsp;
            All rights reserved.
        </footer>
    );
};

export default Footer;
