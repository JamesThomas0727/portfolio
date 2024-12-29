/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Project card components show more details for project.
 */
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ProjectCard = (props) => {
    const project = props.project;
    return (
        <Card className="max-w-sm mx-auto border rounded-lg shadow-lg overflow-hidden">
            {/* Top Section */}
            <div className="bg-blue-500 text-center py-4">
                <img
                    src="project.avatar"
                    alt="The Snus Life"
                    className="mx-auto"
                />
            </div>

            {/* Content Section */}
            <CardContent>
                <Typography variant="h6" className="font-bold text-center">
                    The Snus Life
                </Typography>
                <Typography
                    variant="body2"
                    className="text-gray-600 text-center mt-1"
                >
                    Free UK Delivery on ALL Orders
                </Typography>
                <ul className="text-sm mt-4 text-gray-700">
                    <li className="mb-2">• Order before 1pm for same day dispatch</li>
                    <li>• 5 Pot Pick 'n' Mix for Just £19.95</li>
                </ul>
                <div className="flex justify-center mt-4">
                    <Button
                        variant="outlined"
                        className="text-gray-700 border-gray-700 hover:bg-gray-100"
                    >
                        GitHub
                    </Button>
                </div>
            </CardContent>

            {/* Footer Section */}
            <div className="bg-gray-100 py-2 px-4 flex justify-center space-x-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                    React
                </span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                    Tailwind CSS
                </span>
            </div>
        </Card>
    );
};

export default ProjectCard;

