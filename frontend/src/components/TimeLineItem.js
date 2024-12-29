/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Timeline components show experience and education history.
 */

import React from "react";

const Item = ({ isLeft, title, location, description, date }) => {
    return (
        <div className={`flex items-center ${isLeft ? "flex-row-reverse" : ""}`}>
            {/* Content Box */}
            <div
                className={`bg-white border rounded-lg p-4 shadow-lg w-64 ${isLeft ? "ml-4" : "mr-4"
                    }`}
            >
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-blue-600">{location}</p>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>

            {/* Timeline Separator */}
            <div className="relative">
                <div className="w-1 h-full bg-blue-500"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>

            {/* Date Box */}
            <div
                className={`bg-blue-500 text-white px-4 py-1 rounded-md shadow-md ${isLeft ? "mr-4" : "ml-4"
                    }`}
            >
                {date}
            </div>
        </div>
    );
};

const TimelineItem = () => {
    const timelineData = [
        {
            title: "Shenzhen University, Computer Science",
            location: "Guangdong Province, China",
            description: "SZU is strong in fields such as engineering and computer science.",
            date: "Jun 2010 - Jun 2014",
        },
        {
            title: "Stanford University, Software Engineering",
            location: "California, USA",
            description: "Focused on AI research and innovative software technologies.",
            date: "Sep 2015 - Jun 2019",
        },
    ];

    return (
        <div className="flex flex-col items-center space-y-12 mt-12">
            {timelineData.map((item, index) => (
                <Item
                    key={index}
                    isLeft={index % 2 === 0}
                    title={item.title}
                    location={item.location}
                    description={item.description}
                    date={item.date}
                />
            ))}
        </div>
    );
};

export default TimelineItem;
