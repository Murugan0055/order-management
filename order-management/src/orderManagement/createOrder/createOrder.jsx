import React from "react";
import { allItems, defaultRowData, itemtypes } from "../defaultData";
import Accordion from "./accordion/accordion";
import "./createOrder.css";
const CreateOrder = () => {
  const [stateItemtypes, setStateItemtypes] = React.useState(itemtypes);
  const [stateAllItems, setStateAllItems] = React.useState(allItems);
  const [payload, setPayload] = React.useState({
    id: defaultRowData.length,
    orderDescription: "",
    countOfItemTypes: { Electronics: 2, Groceries: 2 },
    createdBy: "Ajeet kumar",
    createdAt: new Date().toJSON()
  });
  React.useEffect(() => {
    const updatedStateAllItems = [];
    allItems.map((allItem) => {
      stateItemtypes.map((stateItemtype) => {
        if (stateItemtype.checked && stateItemtype.id === allItem.itemTypeId) {
          updatedStateAllItems.push(allItem);
        }
      });
    });
    setStateAllItems(updatedStateAllItems);
  }, [stateItemtypes]);

  const onCheck = (index) => {
    const updatedStateItemTypes = [...stateItemtypes];
    if (updatedStateItemTypes[index].checked) {
      updatedStateItemTypes[index].checked = false;
    } else {
      updatedStateItemTypes[index].checked = true;
    }
    setStateItemtypes(updatedStateItemTypes);
  };
  return (
    <div className="createOrder">
      <div className="leftWrapper">
        <strong>ITEM TYPE</strong>
        {stateItemtypes.map((item, index) => {
          return (
            <div key={item.itemTypeName} className="row">
              <input
                type="checkbox"
                checked={item.checked ? item.checked : false}
                onChange={() => onCheck(index)}
              />
              <span className="ml-2 mt-2">{item.itemTypeName}</span>
            </div>
          );
        })}
      </div>
      <div className="rightWrapper">
        <h2>Add items to order</h2>
        <input
          className="itemDesc"
          type="text"
          placeholder="Order description"
          value={payload.orderDescription}
          onChange={onCheck}
        />
        {stateAllItems?.map((allItem,index) => {
          return (
            <div key={allItem.id}>
              <Accordion
                item={allItem}
                stateAllItems={stateAllItems}
                setStateAllItems={setStateAllItems}
                index={index}
              />
            </div>
          );
        })}
        {/* {JSON.stringify(stateAllItems, null, 1)} */}
      </div>
    </div>
  );
};

export default CreateOrder;
