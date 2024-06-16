import React, { useEffect, useMemo, useRef } from "react";
import Experience from "../components/expereince";

export default function WorkExperience() {

  const expereinces: number[] = useMemo(()=>[1, 2, 3, 4, 5, 6],[]);

  const workExDivRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const expContainer = workExDivRef.current;

    const handleDragStart = (event : DragEvent) => {
      event.preventDefault();
      
      const draggedItem = event.target as HTMLDivElement;
      const draggedItemId = draggedItem.id;

      event.dataTransfer?.setData('text/plain', draggedItemId);
    };

    const handleDrop = (event: DragEvent) => {
      // logic 
    };

    expContainer?.addEventListener('dragstart', handleDragStart);
    expContainer?.addEventListener('drop', handleDrop);



  },[expereinces]);
  


  return (
    <div ref={workExDivRef}>
      {expereinces.sort().map(e => <Experience sequence={e} />)}
    </div>
  )
}
