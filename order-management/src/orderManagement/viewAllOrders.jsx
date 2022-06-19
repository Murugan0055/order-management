import React, { useState } from "react";
import { defaultHeaderdata, defaultRowData } from "./defaultData";
import { GetContentBasedonMenu } from "./GetContentBasedonMenu";
import "./viewAllOrder.css";
const ViewAllOrder = () => {
  const menu = ["Menu 1", "Menu 2"];
  const [activeIndexMenu, setActiveIndexMenu] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");
  const [rowData, setRowData] = useState(defaultRowData);
  const onsearch = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value?.length === 0) {
      setRowData(defaultRowData);
      return;
    }
    const updatedRow = [...defaultRowData];
    const searchRegex = new RegExp(e.target.value, "i");
    const filteredRowData = updatedRow.filter((row) => {
      if (
        row.id?.toString()?.match(searchRegex) ||
        row.orderDescription?.toString()?.match(searchRegex)
      ) {
        return row;
      }
    });
    setRowData(filteredRowData);
  };
  return (
    <div className="orderWrapper">
      <div className="header">
        <div className="logo">LOGO</div>
        <div className="menuWrapper">
          {menu.map((menuItem, index) => (
            <div
              className="menuItem"
              key={menuItem}
              onClick={() => setActiveIndexMenu(index)}
            >
              {menuItem}
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <div className="subHead w-95 countRow justify-sb">
          <h2>Order Management Screen </h2>
          <input
            className="searchInput"
            type="text"
            placeholder="search by order description"
            value={searchValue}
            onChange={onsearch}
          />
        </div>
        {GetContentBasedonMenu(
          activeIndexMenu,
          defaultHeaderdata,
          rowData,
          setRowData
        )}
        <button className="creatOrderButton countRow">Create New Order</button>
      </div>
    </div>
  );
};

export default ViewAllOrder;
