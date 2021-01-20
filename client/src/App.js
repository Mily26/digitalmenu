import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [business, setBusiness] = useState();
  const [menu, setMenu] = useState();

  useEffect( () => {
    async function loadData() {
      const businessResponse = await fetch("http://localhost:3001/api/business/frontend");
    const business = await businessResponse.json();
    setBusiness(business);

    const menuResponse = await fetch('http://localhost:3001/api/menu/frontend');
    const menu = await menuResponse.json();
    setMenu(menu);
    }
    loadData();
  }, []);

  const menuComponents = menu == null ? "" : menu.categories.map(category => {
    return <section key={category.name}>
      <h2>{category.name}</h2>
      <ul>
        {category.items.map(item => {
          return <li key={item.name}>{item.name} - {item.description} - ${item.price}</li>
        })}
      </ul>

    </section>
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Carta</h1>
        {business != null ? (
          <ul>
            <li>{business.title}</li>
            <li>{business.address}</li>
            <li>{business.city}</li>
            <li>{business.state}</li>
            <li>{business.country}</li>
            <li>{business.mail}</li>
            <li>{business.phone}</li>
          </ul>
        ) : (
          ""
        )}
        {menuComponents}
      </header>
    </div>
  );
}

export default App;
