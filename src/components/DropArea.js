import { useCallback, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import update from 'immutability-helper'
import { Card } from "./ItemBox";
const Dustbin = () => {
  const [list, setList] = useState([{id:16,text:"slamna"},{id:17,text:"subhan"}]);
  const ref=useRef(null)
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setList((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])
  const [{ handlerId, canDrop, isOver }, drop] = useDrop(() => ({
    accept: "CARD",
    drop: (item,i) => {
      console.log("item===",item,"ooo",i)
      // debugger
        setList((prev) => [...prev,{...item,type:"dropC"}]);
      return { name: "CARD" };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  // const [{ isDragging }, drag] = useDrag({
  //   type: "BOX",
  //   item: () => {
  //     return {type:"BOX"}
  //   },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // })
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  console.log("list",list)
  console.log("drop====", canDrop);

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
        type="BOX"
      />
    )
  }, [])
  // drag(drop(ref))
  return (
    <div ref={drop} style={{ backgroundColor:"lightgray" ,width:"60%",border:"1px solid red",padding:"2rem"}} data-testid={handlerId}>
      {isActive ? "Release to drop" : "Drag a box here"}
      <div style={{border:"1px solid blue",padding:"3rem"}} >
      {list.map((card, i) => renderCard(card, i))}
      </div>
    </div>
  );
};

export default Dustbin;
