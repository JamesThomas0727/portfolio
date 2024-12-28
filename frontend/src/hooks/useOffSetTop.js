/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Hook tracks whether user scrolled on the page
 */
import { useState, useEffect } from 'react'

export default function useOffSetTop(top) {
    const topOffSet = top || 100;

    const [isScrolled, setIsScrolled] = useState(false);

    //similar to scroll event listener
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffSet > topOffSet) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        }
        //similar scroll event handler
        return () => {
            window.onscroll = null; //remove handler
        }
    }, [topOffSet]);

    return isScrolled;
}
