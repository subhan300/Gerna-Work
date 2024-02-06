// import React, { useRef } from "react";
// import "./ItemBox.css";
// import { useDrag, useDrop } from "react-dnd";

// export const Card=({ item, moveImage, index })=>{
//   const ref = useRef(null);
//   const [{ handlerId }, drop] = useDrop({
//     accept: "ITEM",
//     hover(item, monitor) {
//       if (!ref.current) {
//         return;
//       }
//       const dragIndex = item.index;
//       const hoverIndex = index;
//       // Don't replace items with themselves
//       if (dragIndex === hoverIndex) {
//         return;
//       }
//       // Determine rectangle on screen
//       const hoverBoundingRect = ref.current?.getBoundingClientRect();
//       // Get vertical middle
//       const hoverMiddleY =
//         (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//       // Determine mouse position
//       const clientOffset = monitor.getClientOffset();
//       // Get pixels to the top
//       const hoverClientY = clientOffset.y - hoverBoundingRect.top;
//       // Only perform the move when the mouse has crossed half of the items height
//       // When dragging downwards, only move when the cursor is below 50%
//       // When dragging upwards, only move when the cursor is above 50%
//       // Dragging downwards
//       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//         return;
//       }
//       // Dragging upwards
//       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//         return;
//       }
//       // Time to actually perform the action
//       moveImage(dragIndex, hoverIndex);
//       // Note: we're mutating the monitor item here!
//       // Generally it's better to avoid mutations,
//       // but it's good here for the sake of performance
//       // to avoid expensive index searches.
//       item.index = hoverIndex;
//     },
//     collect(monitor) {
//       return { handlerId: monitor.getHandlerId() };
//     },
//   });
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "ITEM",
//     item: { id: item.field, index },
//     collect: (monitor) => {
//       return {
//         isDragging: monitor.isDragging(),
//       };
//     },
//   }));
//   drop(drag(ref));
//   return (
//     <div
//       ref={ref}
//       style={{ opacity: isDragging ? 0 : 1 }}
//       data-handler-id={handlerId}
//       className="item"
//     >
//       {item.field}
//     </div>
//   );
// }


import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}
export const Card = ({ id, text, index, moveCard ,type}) => {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: 'CARD',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: () => {
      return { id, index ,text}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      {text}
    </div>
  )
}