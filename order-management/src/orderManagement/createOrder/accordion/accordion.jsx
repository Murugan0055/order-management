import { allItems } from "../../defaultData";
import "./accordion.css";
const Accordion = (props) => {
  const { item, stateAllItems, setStateAllItems, index ,accordionDetails} = props;
  const onOpenOrClose = () => {
    if (typeof(item.isOpen) === "boolean") {
      const updated = [...stateAllItems];
      updated[index].isOpen = !updated[index].isOpen;
      setStateAllItems(updated);
    }
  };
  return (
    <div className="accordion">
      <div className="acc-top" onClick={onOpenOrClose}>
        <div className="acc-header">
          <div>{item.itemName}</div>
          {typeof(item.isOpen) === "boolean" ? (
            <div className={item.isOpen ? "open" : "close"}>^</div>
          ) : (
            ""
          )}
        </div>
        <div className="acc-header">
          <div className="acc-subheader">{item.temDescription}</div>
          <div className="yesOrNo">
            <div className={"yes"}>Y</div>
            <div className={"no"}>N</div>
          </div>
        </div>
      </div>
      {item.isOpen ? <div className="acc-bottom">{accordionDetails(item,index)}</div> : ""}
    </div>
  );
};

export default Accordion;
