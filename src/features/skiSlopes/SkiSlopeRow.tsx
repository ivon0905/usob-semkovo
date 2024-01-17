import { FC } from "react";
import "./skiSlopes.css";
import SkiSlope from "../../models/ski/SkiSlope";

interface SkiSlopeRowProps {
    skiSlope: SkiSlope[]
}

const SkiSlopeRow: FC<SkiSlopeRowProps> = ({skiSlope}) => {
    return (
        <>
        {skiSlope.map((skiSlope: SkiSlope) => 
    <div className="skiSlopesRow">
        <div className="skiSlopeId">{skiSlope.skiSlopeId}</div>
        <div className="skiSlopeName">{skiSlope.name}</div>
        <div className="skiSlopeImageContent">
        <img className="skiSlopeDiffImage" src={require(`../../images/slop_difficulty/${skiSlope.difficultyId}.png`)}/>
        </div>
        <div className="skiSlopesLength">{skiSlope.length}</div>
        <div className="skiSlopeImageContent">
        <img className="skiSlopeImage" src={
            skiSlope.skiLiftId === 1 ?
            require(`../../images//panichka.jpg`) :
            require(`../../images//rakohvatka.png`)
            }/>
            </div>
            <div className="skiSlopeStatusImageContent">
        <img className="skiSlopeImage" src={
            skiSlope.status ?
            require(`../../images/slope_opened.png`) :
            require(`../../images/slope_closed.png`)
            }/>
            </div>
    </div>
    )}
    </>
    );
}

export default SkiSlopeRow;