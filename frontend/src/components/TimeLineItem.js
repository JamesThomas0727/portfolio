/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Timeline components show experience and education history.
 */

import React from "react";

const Item = ({ isLeft, title, location, description, from, to }) => {
    return (
        <div className={`flex items-center ${isLeft ? "flex-row-reverse" : ""}`}>
            <div
                className={`bg-white border rounded-lg p-4 shadow-lg w-64 ${isLeft ? "ml-4" : "mr-4"
                    }`}
            >
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-blue-600">{location}</p>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
            <div className="relative">
                <div className="w-1 h-full bg-blue-500"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
            <div
                className={`bg-blue-500 text-white px-4 py-1 rounded-md shadow-md ${isLeft ? "mr-4" : "ml-4"
                    }`}
            >
                {from} ~ {to}
            </div>
        </div>
    );
};

const TimelineItem = (props) => {
    const timelineData = props.data;
    // if(timelineData.length !== 0){
    //     for (let key in timelineData[0]){
    //         title = 
    //     }
    // }

    return (
        <div className="flex flex-col items-center space-y-12 mt-12">
            {timelineData.map((item, index) => (
                <Item
                    key={index}
                    isLeft={index % 2 === 0}
                    title={item.what}
                    location={Array.isArray(item.where) ?
                        item.where.join(', ') :
                        (item.where.name) ? item.where.name :
                            item.where}
                    description={(item.description) ? item.description : ""}
                    from={(item.from) ? item.from : "Unknown"}
                    to={(item.to) ? item.to : 'Now'}
                />
            ))}
        </div>
    );
};

export default TimelineItem;
