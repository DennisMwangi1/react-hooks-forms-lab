import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
const[item,setItem] = useState('')
const[category,setCategory] = useState('produce')

const newItem = {
  id: uuid(),
  item,
  category,
};


function handleSetItem(event){
  setItem(event.target.value)
}

function handleSetCategory(event){
  setCategory(event.target.value)
}

function handleSubmit(event){
  event.preventDefault()
  onItemFormSubmit({newItem})
}
    
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={item} onChange={handleSetItem}  />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleSetCategory}>
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

