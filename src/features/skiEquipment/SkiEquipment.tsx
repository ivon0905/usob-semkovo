import { FC, useEffect, useState } from "react";
import services from "../../calls/services";
import "../skiSlopes/skiSlopes.css";
import SkiEqipmentPrice from "../../models/ski/SkiEquipmentPrice";

const SkiEquipment: FC = () => {
  const [skiEquipmentPrice, setSkiEquipmentPrice] = useState<
    SkiEqipmentPrice[]
  >([]);

  useEffect(() => {
    retrieveSkiEquipmentPrice();
  }, []);

  const retrieveSkiEquipmentPrice = () => {
    services
      .getSkiEquipmentPrices()
      .then((response: any) => {
        setSkiEquipmentPrice(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="title">
        <h2>Цени за ски екипировка</h2>
        <div className="underline" />
      </div>

      <div className="skiSlopeTable">
        <table className="table table-hover table-sm table-bordered">
          <thead className="skiSlopePricesTableHeader">
            <tr>
              <th rowSpan={2}>Период</th>
              <th colSpan={3} align="center">Възрастни</th>
              <th colSpan={3}>Деца до 14 г.</th>
            </tr>
            <tr>
              <th>Екип</th>
              <th>Обувки</th>
              <th>Ски с щеки</th>
              <th>Екип</th>
              <th>Обувки</th>
              <th>Ски с щеки</th>
            </tr>
          </thead>
          <tbody>
            {skiEquipmentPrice.map((skiEquipment: SkiEqipmentPrice) => (
              <tr className="skiCardPricesRow">
                <td>{skiEquipment.period + " дни"}</td>
                <td>{skiEquipment.complectAdultPrice.toFixed(2) + " лв."}</td>
                <td>{skiEquipment.shoesAdultPrice.toFixed(2) + " лв."}</td>
                <td>{skiEquipment.skiAdultPrice.toFixed(2) + " лв."}</td>
                <td>{skiEquipment.complectChildPrice.toFixed(2) + " лв."}</td>
                <td>{skiEquipment.skiChildPrice.toFixed(2) + " лв."}</td>
                <td>{skiEquipment.skiChildPrice.toFixed(2) + " лв."}</td>
              </tr>
            ))}
            <tr className="skiSlopePricesTableHeader">
              <th colSpan={7}>
                При използване само на щеки се заплаща 5.00 лв. на ден.
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkiEquipment;
