import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RightBox,LeftBox } from '../components/FeatureBox';

const NewFeature = () => {
  const [rightBoxItems, setRightBoxItems] = useState([]);

  const handleDrop = (item) => {
    // Check if the item is already in the right box
    if (!rightBoxItems.some((rightItem) => rightItem.id === item.id)) {
      setRightBoxItems([...rightBoxItems, { ...item, type: 'input' }]);
    }
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = rightBoxItems[dragIndex];
    setRightBoxItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(dragIndex, 1);
      updatedItems.splice(hoverIndex, 0, draggedItem);
      return updatedItems;
    });
  };

  return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <LeftBox />
        <RightBox items={rightBoxItems} onDrop={handleDrop} moveItem={moveItem} />
      </div>
  );
};

export default NewFeature;
