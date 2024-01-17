import { FC, useEffect, useState } from "react";
import "./skiSlopes.css";
import services from '../../calls/services';
import SkiCardsPrice from "../../models/ski/SkiCardsPrice";

const SkiSlopesPrices: FC = () => { 
    const [skiCardsPrices, setSkiCardsPrices] = useState<SkiCardsPrice[]>([]);

    useEffect(() => {
        retrieveSkiCardsPrices();
    }, []);

    const retrieveSkiCardsPrices = () => {
        services.getSkiCardsPrices()
        .then((response: any) => {
            setSkiCardsPrices(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        })
    };

    return (
        <div>
            <div className="title">
                <h2>Цени за ски влекове</h2>
                <div className="underline" />
            </div>

            <div className="skiSlopeTable">
                <table className="table table-hover table-sm table-bordered">
                    <thead className="skiSlopePricesTableHeader">
                        <tr>
                            <th rowSpan={2}>Период</th>
                            <th colSpan={2} align="center">Служители</th>
                            <th colSpan={2}>Външни на ТУ и външни почиващи</th>
                        </tr>
                        <tr>
                            <th>Възрастни</th>
                            <th>Деца до 14 г.</th>
                            <th>Възрастни</th>
                            <th>Деца до 14 г.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {skiCardsPrices.map((skiCard: SkiCardsPrice) => 
                            <tr className="skiCardPricesRow">
                                <td>{skiCard.period + " дни"}</td>
                                <td>{skiCard.priceInternalAdult.toFixed(2) + " лв."}</td>
                                <td>{skiCard.priceInternalChild.toFixed(2) + " лв."}</td>
                                <td>{skiCard.priceExternalAdult.toFixed(2) + " лв."}</td>
                                <td>{skiCard.priceExternalChild.toFixed(2) + " лв."}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
 }

export default SkiSlopesPrices; 