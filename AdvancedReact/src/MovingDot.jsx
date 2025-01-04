import { useState } from 'react';
// Modified from https://react.dev/learn/updating-objects-in-state#treat-state-as-read-only

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  
  /**
   * Updates the position state based on the pointer event.
   * @param {PointerEvent} evt - The pointer event.
  */
  function updatePosition(evt) {
    const DomRect = evt.currentTarget.getBoundingClientRect();
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    setPosition({
      // clientX/Y The X/Y coordinate of the mouse pointer in viewport coordinates.
      // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent inherited by PointerEvent
      x: evt.clientX - DomRect.left,
      y: evt.clientY - DomRect.top
    });
  }

  return (
    <div
      onPointerMove={updatePosition}
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        border: '1px solid black',
        margin: '0 auto',
        overflow: 'hidden'
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        left: position.x - 10,
        top: position.y - 10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}