import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([
    { id: 1, name: "Yogurt", category: "Dairy", isInCart: false },
    { id: 2, name: "Pomegranate", category: "Produce", isInCart: false },
    { id: 3, name: "Lettuce", category: "Produce", isInCart: false },
    { id: 4, name: "String Cheese", category: "Dairy", isInCart: false },
    { id: 5, name: "Swiss Cheese", category: "Dairy", isInCart: false },
    { id: 6, name: "Cookies", category: "Dessert", isInCart: false },
  ]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }
  

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onAddItem={handleAddItem} />
      <Filter category={selectedCategory} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id} role="listitem">
            <Item item={item} />
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
