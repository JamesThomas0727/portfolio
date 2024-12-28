/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component of landing page.
 */
import React, { useState, useEffect } from 'react'

import LoadingPage from './LoadingPage';
import { LandingLayout } from '../layouts';
//==================================================================

export default function LandingPage() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <LandingLayout>
                    <></>
                </LandingLayout>
            )
            }
        </>
    )
}

//==================================================================