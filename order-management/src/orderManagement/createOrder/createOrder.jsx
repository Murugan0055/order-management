import React from "react";
import { allItems, defaultRowData, itemtypes } from "../defaultData";
import Accordion from "./accordion/accordion";
import "./createOrder.css";

const CreateOrder = (props) => {
  const { iscreateMode, setIscreateMode, setRowData, rowData } = props;
  const [stateItemtypes, setStateItemtypes] = React.useState(itemtypes);
  const [stateAllItems, setStateAllItems] = React.useState(allItems);
  const [payload, setPayload] = React.useState({
    id: rowData.length + 1,
    orderDescription: "",
    countOfItemTypes: { Electronics: 2, Groceries: 2 },
    createdBy: "Ajeet kumar",
    createdAt: new Date().toJSON()
  });
  React.useEffect(() => {
    const updatedStateAllItems = [];
    const updatedPayload = { ...payload };
    updatedPayload.countOfItemTypes.Electronics = 0;
    updatedPayload.countOfItemTypes.Groceries = 0;
    allItems.map((allItem) => {
      stateItemtypes.map((stateItemtype) => {
        if (stateItemtype.checked && stateItemtype.id === allItem.itemTypeId) {
          if (stateItemtype.itemTypeName?.toLowerCase() === "electronics") {
            updatedPayload.countOfItemTypes.Electronics += 1;
          } else if (
            stateItemtype.itemTypeName?.toLowerCase() === "groceries"
          ) {
            updatedPayload.countOfItemTypes.Groceries += 1;
          }
          updatedStateAllItems.push(allItem);
        }
        return 0;
      });
      return 0;
    });
    setStateAllItems(updatedStateAllItems);
    setPayload(updatedPayload);
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

  const onUpdatePayload = (key, value) => {
    const updatedPayload = { ...payload };
    updatedPayload[key] = value;
    setPayload(updatedPayload);
  };
  const getAccordionDetails = (allItem, index) => {
    const onClickYesOrNoclor = () => {
      const updatedAllItem = [...stateAllItems];
      updatedAllItem[index].itemSpecifications.colorChoice =
        !updatedAllItem[index].itemSpecifications.colorChoice;
      setStateAllItems(updatedAllItem);
    };
    const onColorChange = (e) => {
      const updatedAllItem = [...stateAllItems];
      if (updatedAllItem[index].itemSpecifications.colorChoice) {
        updatedAllItem[index].itemSpecifications.color = e.target.innerText;
        setStateAllItems(updatedAllItem);
      }
    };
    const onAddOrSubtract = (action) => {
      const updatedAllItem = [...stateAllItems];
      if (action === "add") {
        updatedAllItem[index].itemSpecifications.sizeInKG =
          updatedAllItem[index].itemSpecifications.sizeInKG + 1;
      } else if (action === "minus") {
        if (!updatedAllItem[index].itemSpecifications.sizeInKG) {
          return;
        }
        updatedAllItem[index].itemSpecifications.sizeInKG =
          updatedAllItem[index].itemSpecifications.sizeInKG - 1;
      }
      setStateAllItems(updatedAllItem);
    };
    switch (allItem.id) {
      case 1:
        return (
          <div>
            <br />
            <div className="row">
              <div className="selectSlidder">Please select memory</div>
              <input
                className="range"
                type="range"
                min="128"
                max="1024"
                value={allItem.itemSpecifications.memory?.split(" ")[0]}
                step={"1"}
                onChange={(e) => {
                  const updatedAllItem = [...stateAllItems];
                  updatedAllItem[
                    index
                  ].itemSpecifications.memory = `${e.target.value} GB`;
                  setStateAllItems(updatedAllItem);
                }}
              />
            </div>
            <br />
            <div className="row">
              <div className="selectSlidder">Do you want to choose color?</div>
              <div className="yesOrNo">
                <div
                  className={
                    allItem.itemSpecifications.colorChoice ? "yes" : "no"
                  }
                  onClick={onClickYesOrNoclor}
                >
                  Y
                </div>
                <div
                  className={
                    allItem.itemSpecifications.colorChoice ? "no" : "yes"
                  }
                  onClick={onClickYesOrNoclor}
                >
                  N
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="selectSlidder">Please choose color</div>
              <div className="row">
                <button
                  onClick={onColorChange}
                  className={`normalButton ${
                    allItem.itemSpecifications.color === "GREEN"
                      ? "selected"
                      : ""
                  }`}
                >
                  GREEN
                </button>
                <button
                  onClick={onColorChange}
                  className={`normalButton ${
                    allItem.itemSpecifications.color === "RED" ? "selected" : ""
                  }`}
                >
                  RED
                </button>
                <button
                  onClick={onColorChange}
                  className={`normalButton ${
                    allItem.itemSpecifications.color === "BLUE"
                      ? "selected"
                      : ""
                  }`}
                >
                  BLUE
                </button>
              </div>
            </div>
            <br />
          </div>
        );
      case 2:
        return (
          <div>
            <br />
            <div className="row">
              <div className="selectSlidder">Please select memory</div>
              <input
                className="range"
                type="range"
                min="128"
                max="1024"
                value={allItem.itemSpecifications.memory?.split(" ")[0]}
                step={"1"}
                onChange={(e) => {
                  const updatedAllItem = [...stateAllItems];
                  updatedAllItem[
                    index
                  ].itemSpecifications.memory = `${e.target.value} GB`;
                  setStateAllItems(updatedAllItem);
                }}
              />
            </div>
            <br />
          </div>
        );
      case 4:
        return (
          <div>
            <br />
            <div className="row">
              <div className="selectSlidder">Select the pack size in KG</div>
              <div className="row">
                <div onClick={() => onAddOrSubtract("minus")} className="minus">
                  -
                </div>
                <div className="kgvalue">
                  {allItem.itemSpecifications.sizeInKG}
                </div>
                <div onClick={() => onAddOrSubtract("add")} className="plus">
                  +
                </div>
                <div className="kgtext">KG</div>
              </div>
            </div>
            <br />
          </div>
        );
      default:
        <div></div>;
    }
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
          onChange={(e) => onUpdatePayload("orderDescription", e.target.value)}
        />
        {stateAllItems?.map((allItem, index) => {
          return (
            <div key={allItem.id}>
              <Accordion
                item={allItem}
                stateAllItems={stateAllItems}
                setStateAllItems={setStateAllItems}
                index={index}
                accordionDetails={getAccordionDetails}
              />
            </div>
          );
        })}
        <div className="buttonsWr">
          <button
            onClick={() => {
              setIscreateMode(!iscreateMode);
            }}
            className="cancel"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (!payload.orderDescription) {
                return;
              }
              const updatedRow = [...rowData];
              payload.id = updatedRow.length + 1;
              updatedRow.push(payload);
              setRowData(updatedRow);
              setIscreateMode(!iscreateMode);
            }}
            className="bookOrder"
          >
            Book Order
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default CreateOrder;
