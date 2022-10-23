import "./App.css";
import Wrapper from "./components/wrapper";

function App() {
  const data = [
    {
      id: "1",
      title:
        "АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate magni ad placeat, repudiandae qui quam exercitationem nemo repellat quod perferendis! Hic provident neque voluptatem perferendis saepe repudiandae tempora distinctio.",
      img: "assets/img/sankt-peterburg-piter-st-3495.png",
      mark: ["mark", "НОВИНКА"],
      duration: "2 часа",
      shema: [
        "Билет на целый день",
        "Неограниченное число катаний",
        "6 остановок у главных достопримечательностей",
        "Ближайший рейс сегодня",
      ],
      times: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
      prices: {
        internet: "900",
        berth: "1200",
      },
    },
    {
      id: "2",
      title:
        "АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate magni ad placeat, repudiandae qui quam exercitationem nemo repellat quod perferendis! Hic provident neque voluptatem perferendis saepe repudiandae tempora distinctio.",
      img: "assets/img/95_image_big.jpg",
      mark: ["mark", "НОВИНКА"],
      duration: "2 часа",
      shema: [
        "Билет на целый день",
        "Неограниченное число катаний",
        "6 остановок у главных достопримечательностей",
        "Ближайший рейс сегодня",
      ],
      times: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
      prices: {
        internet: "900",
        berth: "1200",
      },
    },
    {
      id: "3",
      title:
        "АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate magni ad placeat, repudiandae qui quam exercitationem nemo repellat quod perferendis! Hic provident neque voluptatem perferendis saepe repudiandae tempora distinctio.",
      img: "assets/img/sankt-peterburg-piter-st-3495.png",
      mark: ["mark", "НОВИНКА"],
      duration: "2 часа",
      shema: [
        "Билет на целый день",
        "Неограниченное число катаний",
        "6 остановок у главных достопримечательностей",
        "Ближайший рейс сегодня",
      ],
      times: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
      prices: {
        internet: "900",
        berth: "1200",
      },
    },
    {
      id: "4",
      title:
        "АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate magni ad placeat, repudiandae qui quam exercitationem nemo repellat quod perferendis! Hic provident neque voluptatem perferendis saepe repudiandae tempora distinctio.",
      img: "assets/img/95_image_big.jpg",
      mark: ["mark mark-2", "НОВИНКА"],
      duration: "2 часа",
      shema: [
        "Билет на целый день",
        "Неограниченное число катаний",
        "6 остановок у главных достопримечательностей",
        "Ближайший рейс сегодня",
      ],
      times: ["10:00", "11:00", "12:00", "13:00"],
      prices: {
        internet: "900",
        berth: "",
      },
    },
  ];

  return (
    <div className="App">
      <Wrapper data={data} />
    </div>
  );
}

export default App;
