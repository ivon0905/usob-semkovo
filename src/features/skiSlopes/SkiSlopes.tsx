import { FC, useEffect, useState } from "react";
import "./skiSlopes.css";
import services from '../../calls/services';
import SkiSlope from "../../models/ski/SkiSlope";

const SkiSlopes: FC = () => {
    const [skiSlopes, setSkiSlopes] = useState<SkiSlope[]>([]);

    useEffect(() => {
        retrieveSkiSlopes();
    }, []);

    const retrieveSkiSlopes = () => {
        services.getSkiSlopes()
        .then((response: any) => {
            setSkiSlopes(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        })
    };

    return (
        <div>
            <div className="skiSlopeMapBorder">
                <img width='100%' src={require(`../../images/ski_slopes.jpg`)}/>
            </div>

        <div className="title">
          <h2>Информация за ски писти Семково</h2>
          <div className="underline" />
        </div>

        <div className="underlineHeader"></div>
            <div className="skiSlopesWorkTime">
                <div>Работно време:</div>     
                <div>от 09:00 - 12:30 до 14:00 - 17:00</div> 
            </div>
        <div className="underlineHeader"></div>

        <div className="skiSlopeTable">
            <table className="table table-hover table-sm">
                <thead className="skiSlopeTableHeader">
                    <th>№</th>
                    <th>Наименование</th>
                    <th>Маркировка</th>
                    <th>Дължина (м.)</th>
                    <th>Лифт</th>
                    <th>Статус</th> 
                </thead>
                <tbody>
                {skiSlopes.map((skiSlope: SkiSlope) =>
                    <tr className="skiSlopeTableRow">
                        <td>{skiSlope.skiSlopeId}</td>
                        <td>{skiSlope.name}</td>
                        <td>
                            <img className="skiSlopeDiffImage" src={require(`../../images/slop_difficulty/${skiSlope.difficultyId}.png`)}/>
                        </td>
                        <td>{skiSlope.length}</td>
                        <td>
                        <img className="skiSlopeImage" src={
                            skiSlope.skiLiftId === 1 ?
                            require(`../../images//panichka.jpg`) :
                            require(`../../images//rakohvatka.png`)
                            }/>    
                        </td>
                        <td>
                        <img className="skiSlopeImage" src={
                            skiSlope.status ?
                            require(`../../images/slope_opened.png`) :
                            require(`../../images/slope_closed.png`)
                            }/>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default SkiSlopes;