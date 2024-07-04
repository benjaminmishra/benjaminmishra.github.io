import React from "react";

interface DragDropProps {
    sequence: number
}

const Experience= ({ sequence } : DragDropProps) => {
    return (
        <div id={`exp_${sequence}`} draggable>
            This is an expereince with sequence number {sequence}
        </div>
    );
}


export default Experience;