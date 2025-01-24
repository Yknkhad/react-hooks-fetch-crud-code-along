import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import classNames from "classnames";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={classNames("App", { dark: isDarkMode, light: !isDarkMode })}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList key={isDarkMode ? "dark" : "light"} /> {/* Optional: Set key to force rerender */}
    </div>
  );
}

export default App;
