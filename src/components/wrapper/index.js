import ItemsList from "../items-list";
import "./wrapper.css";

const Wrapper = ({ data }) => {
  return (
    <div className="wrapper">
      <ItemsList data={data} />
    </div>
  );
};

export default Wrapper;
