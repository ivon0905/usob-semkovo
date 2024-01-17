import { FC } from "react";
import saunaImage from "../../images/sauna.jpg";
import "./sauna.css";

const Sauna: FC = () => {
  return (
    <div>
      <div className="title">
        <h2>Сауна</h2>
        <div className="underline" />
      </div>

      <div className="underlineHeader"></div>
      <div className="skiSlopesWorkTime">
        <div>Работно време: 10:00 - 22:00</div>
        <div>
          Цената на сауната е 40 лв на час, а максималният капацитет е 8 души
        </div>
      </div>
      <div className="underlineHeader"></div>

      <div className="splitScreen">
        <div className="topPane">
          <img src={saunaImage} className="saunaImage" />
        </div>
        <div className="bottomPane">
          <div className="saunaReservation">08.01.2024</div>
          <div className="container">
            <button className="btn-slot">10:00</button>
            <button className="btn-slot">11:00</button>
            <button className="btn-slot">12:00</button>
            <button className="btn-slot">13:00</button>
            <button className="btn-slot">14:00</button>
            <button className="btn-slot">15:00</button>
            <button className="btn-slot">16:00</button>
            <button className="btn-slot">17:00</button>
            <button className="btn-slot">18:00</button>
            <button className="btn-slot">19:00</button>
            <button className="btn-slot">20:00</button>
            <button className="btn-slot">21:00</button>
          </div>

          <div className="saunaReservation">09.01.2024</div>
          <div className="container">
            <button className="btn-slot">10:00</button>
            <button className="btn-slot btn-selected">11:00</button>
            <button className="btn-slot">12:00</button>
            <button className="btn-slot">13:00</button>
            <button className="btn-slot">14:00</button>
            <button className="btn-slot btn-reserved">15:00</button>
            <button className="btn-slot btn-reserved">16:00</button>
            <button className="btn-slot btn-reserved">17:00</button>
            <button className="btn-slot">18:00</button>
            <button className="btn-slot">19:00</button>
            <button className="btn-slot btn-reserved">20:00</button>
            <button className="btn-slot">21:00</button>

            <button className="btn-save">
                Запази час
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sauna;
