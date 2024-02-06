// import React, { useCallback, useState } from "react";
// import "./blog.css";
// import {Card} from "../components/ItemBox";
// import update from "immutability-helper";

// function Blog() {
//   const [itemList, setItemList] = useState([
//     { field: "input", id: 1 },
//     { field: "textArea", id: 2 },
//   ]);
//   // const moveImage = (dragIndex, hoverIndex) => {
//   //   const draggedImage = itemList[dragIndex];

//   //   setItemList(
//   //     update(itemList, {
//   //       $splice: [
//   //         [dragIndex, 1],
//   //         [hoverIndex, 0, draggedImage],
//   //       ],
//   //     })
//   //   );
//   // };
//   const moveImage = useCallback((dragIndex, hoverIndex) => {
//     setItemList((prevCards) =>
//       update(prevCards, {
//         $splice: [
//           [dragIndex, 1],
//           [hoverIndex, 0, prevCards[dragIndex]],
//         ],
//       })
//     );
//   }, []);
//   const renderImage = (val, i) => {
//     return val ? (
//       <Card moveImage={moveImage} index={i} key={val.id} item={val} />
//     ) : null;
//   };
//   return (
//     <div className="blog">
//       <h1>Drag and Drop</h1>
//       <div className="content">
//         <div className="left_side">
//           {/* {[
//             { field: "input", id: 1 },
//             { field: "textArea", id: 2 },
//           ].map((val,i) => (
//             <ItemBox moveImage={moveImage} index={i} key={val.id} item={val} />
//           ))} */}
//           {itemList.map((val, i) => renderImage(val, i))}
//         </div>
//         <div className="right_side">
//           <h5>Drop Items</h5>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;

import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from '../components/ItemBox'
import "./blog.css"
import Dustbin from '../components/DropArea'
const style = {
  width: 400,
}
const Container = () => {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'input',
      },
      {
        id: 2,
        text: 'textArea',
      },
      {
        id: 3,
        text: 'video box',
      },
      // {
      //   id: 4,
      //   text: 'Create some examples',
      // },
      // {
      //   id: 5,
      //   text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      // },
      // {
      //   id: 6,
      //   text: '???',
      // },
      // {
      //   id: 7,
      //   text: 'PROFIT',
      // },
    ])
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
          type="CARD"
        />
      )
    }, [])
    return (
      <div className='content'>
        <div className='left_side' style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        {/* <div className='right_side'> */}
          <Dustbin />
        {/* </div> */}
      </div>
    )
}

export default Container