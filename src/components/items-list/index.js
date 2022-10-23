import Item from "../item";
import "./items-list.css";

const ItemsList = ({ data }) => {
  return (
    <div className="items_list">
      {data.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemsList;
