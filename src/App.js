import React, { useState, useEffect } from "react";
import dataset from "./dataset";
import "./App.css";
import Accordion from "./Accordion";

//discard empty objects, or objects with empty 'type' property
const newData = dataset.filter((app) => typeof app.type === "string");

//get all unique 'type'
const uniqueTypes = newData.reduce(function (a, curr) {
  if (a.indexOf(curr.type) === -1) {
    a.push(curr.type);
  }
  return a;
}, []);

//get first object's 'type' as the default categories
const defaultCategory = newData[0].type;

function App() {
  const [appList, setAppList] = useState([]);
  const [activeTab, setActiveTab] = useState(defaultCategory);

  useEffect(() => {
    //get items from the default category
    setAppList(newData.filter((app) => app.type === defaultCategory));
  }, []);

  function tabClickHandler(e, type) {
    //get items from selected category
    setAppList(newData.filter((app) => app.type === e.target.innerHTML));

    //add 'active' class to selected category
    setActiveTab(type);
  }

  return (
    <div className="App">
      <nav className="tabs">
        {uniqueTypes.map((type) => (
          <span
            key={type}
            className={activeTab === type ? "active" : null}
            onClick={(e) => tabClickHandler(e, type)}
          >
            {type}
          </span>
        ))}
      </nav>
      <Accordion appList={appList} />
    </div>
  );
}

export default App;
