// LeftBox.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const itemTypes = {
  INPUT: 'input',
  BUTTON: 'button',
};

const LeftBox = () => {
  const [, dragInput] = useDrag({
    type: itemTypes.INPUT,
    item: { type: itemTypes.INPUT },
  });

  const [, dragButton] = useDrag({
    type: itemTypes.BUTTON,
    item: { type: itemTypes.BUTTON },
  });

  return (
    <div>
      <div ref={dragInput} style={{ padding: '10px', cursor: 'move' }}>
        Drag me to the right box to create an input
      </div>
      <div ref={dragButton} style={{ padding: '10px', cursor: 'move' }}>
        Drag me to the right box to create a button
      </div>
    </div>
  );
};

export { LeftBox };




const RightBox = ({ items, onDrop, moveItem }) => {
  const [, drop] = useDrop({
    accept: [itemTypes.INPUT, itemTypes.BUTTON],
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} style={{ border: '1px solid #ccc', minHeight: '200px', padding: '20px' }}>
      {items.map((item, index) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          {item.type === 'input' ? <input placeholder="Input" /> : <button>Button</button>}
          <span
            style={{ marginLeft: '10px', cursor: 'move' }}
            onClick={(e) => {
              e.stopPropagation();
              // Delete the item when the 'x' button is clicked
              const updatedItems = [...items];
              updatedItems.splice(index, 1);
              moveItem(index, items.length - 1); // Move the dragged item to the end for smooth animation
            }}
          >
            ❌
          </span>
        </div>
      ))}
    </div>
  );
};

export { RightBox };
