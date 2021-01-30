import React from 'react';

function SupermarketListElement(props) {
  return (
  <div>
   <p>{props.item.index}-{props.item.name}</p>
   <button onClick={() => props.handleDeleteItem(props.item)}>eliminar</button>
  </div>
  )
  }

export default SupermarketListElement;