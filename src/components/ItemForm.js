import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (name.trim() === "") return; // Optionally prevent empty name submission

    const newItem = {
      id: Date.now(), // Using Date.now() for a unique id, you might want to use a different method for production
      name,
      category,
      isInCart: false,
    };

    onAddItem(newItem); // Call the onAddItem function passed as a prop to add the new item

    // Reset form fields after submission
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
