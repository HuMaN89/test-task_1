import React from "react";
import "./item.css";

const Item = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const ti = (times) => {
    return times.map((item, idx) => {
      if (open) {
        return (
          <li className="times_item" key={idx}>
            {item}
          </li>
        );
      }

      if (idx < 3 && !open) {
        return (
          <li className="times_item" key={idx}>
            {item}
          </li>
        );
      }
      if (idx === 3 && !open) {
        return (
          <button
            className="more-times"
            key={idx}
            onClick={() => setOpen(!open)}
          >
            more
          </button>
        );
      }
    });
  };
  return (
    <div className="item">
      <div className="image">
        <span className={data.mark[0]}>{data.mark[1]}</span>
        <img src={`../${data.img}`} alt="img" className="item_img" />
      </div>
      <div className="container">
        <div className="duration">{data.duration}</div>
        <div className="title">{data.title}</div>
        <ul className="shema">
          {data.shema.map((item, idx) => (
            <li className="shema_item" key={idx}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="times">{ti(data.times)}</ul>
        <div className="other">
          <div className="price">
            <span className="price_internet"> {data.prices.internet} ₽ </span>

            {data.prices.berth && (
              <span className="price_berth">
                {data.prices.berth} р на причале
              </span>
            )}
          </div>
          <button className="more">Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
