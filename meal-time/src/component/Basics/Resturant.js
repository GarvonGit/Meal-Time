import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  //we used useState() hook which takes initialState and finalState as parameter  
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    //if you want to show case all food items then category should be equal to ALL then you will showcase all food items in menu
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
  
    //else if you select a particular category like breakfast, lunch or dinner then filter the menuItems by there categort
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };
//this will filter menu items according to there category like breakfast lunch and dinner
  return (
    <> 
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
