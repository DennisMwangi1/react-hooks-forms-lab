import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items,handleAddItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem,setSearchedItem] = useState('')
  

  function handleAddItem(newItem){
    console.log(newItem)
   return <Item key={newItem.id} name={newItem.item} category={newItem.category} />
  }


  function handleSearchedItem(event){
    setSearchedItem(event.target.value)
  }

  const itemsSearched = items.filter((item)=>{
    
    return item.name.match(searchedItem)
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
 
  const display = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
    
  ))
  const searched = itemsSearched.map((item)=>(
    <Item key={item.id} name={item.name} category={item.category} />
  ))
 


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem}/>
      <Filter search={searchedItem} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchedItem}  />
      <ul className="Items">
        {/* {display} */}
        {searched}
        
        
        
      </ul>
    </div>
  );
}

export default ShoppingList;
