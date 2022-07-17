import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items,handleAddItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem,setSearchedItem] = useState('')
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchedItem(event){
    setSearchedItem(event.target.value)
  }

  const itemsSearched = items.filter((item)=>{
    
    return item.name.toLowerCase().includes(searchedItem.toLowerCase())
  })



  const itemsToDisplay = itemsSearched.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
 

 
 


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem}/>
      <Filter 
 onCategoryChange={handleCategoryChange} 
onSearchChange={handleSearchedItem}  />
      <ul className="Items">
       { itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
    
  ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;


