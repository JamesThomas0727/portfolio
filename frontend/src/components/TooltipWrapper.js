import React from "react";
import Tooltip from "@mui/material/Tooltip";

const TooltipWrapper = ({ tooltipText, children, placement = "top" }) => {
    return (
        <div className="flex justify-center items-center">
            <Tooltip
                title={tooltipText}
                arrow
                placement={placement}
                classes={{ tooltip: "!bg-gray-700 !text-white !text-sm" }}
            >
                {children}
            </Tooltip>
        </div>
    );
};

export default TooltipWrapper;
