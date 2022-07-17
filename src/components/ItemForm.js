import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {






function handleSubmit(event){
  event.preventDefault()
  const newItem = {
    id: uuid(),
    name:event.target[0].value,
    category:event.target[1].value,
  };
  onItemFormSubmit(newItem)
}
    
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
 
}



export default ItemForm;

