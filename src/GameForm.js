import React, {useState, useEffect} from 'react';
import './Form.css';
import TDRow from './TDRow.js';
import BAL from "./img/logo/BAL.jpg"
import BUF from "./img/logo/BUF.jpg"
import DEN from "./img/logo/DEN.jpg"
import DET from "./img/logo/DET.jpg"
import GB from "./img/logo/GB.jpg"
import HOU from "./img/logo/HOU.jpg"
import KC from "./img/logo/KC.jpg"
import LAC from "./img/logo/LAC.jpg"
import MIN from "./img/logo/MIN.jpg"
import LAR from "./img/logo/LAR.jpg"
import PIT from "./img/logo/PIT.jpg"
import PHI from "./img/logo/PHI.jpg"
import TB from "./img/logo/TB.jpg"
import WAS from "./img/logo/WAS.jpg"
const logos = {
    "BAL":BAL,
    "BUF":BUF,
    "DEN":DEN,
    "DET":DET,
    "GB":GB,
    "HOU":HOU,
    "KC":KC,
    "LAC":LAC,
    "LAR":LAR,
    "MIN":MIN,
    "PHI":PHI,
    "PIT":PIT,
    "TB":TB,
    "WAS":WAS
}

function GameForm({game_data, selections, updateSelections, triggerFlash}) {
    var [activeML, setActiveML] = useState(selections[0])
    var [activeTDH, setActiveTDH] = useState(selections[1])
    var [activeTDA, setActiveTDA] = useState(selections[2])
    const homeLogo = logos[game_data["team_code"]["home"]]
    const awayLogo = logos[game_data["team_code"]["away"]]

    // do stuff with props
    console.log("\nNEW GameForm: ",game_data)
    const td_data = game_data["TD"]

    function handleML(side) {
        if (side === "home") {
            setActiveML(0)
        } else if (side === "away") {
            setActiveML(1)
        }
        triggerFlash(game_data["team_code"][side])

    }
    function handleTD(side,idx) {
        console.log("TD - ",side," - ",idx)
        if (side === "home"){
            setActiveTDH(idx)
        } else if (side === "away"){
            setActiveTDA(idx)
        }
    }

    
    useEffect(() => {
        updateSelections(game_data["game_id"], activeML, activeTDH, activeTDA);
    },[activeML, activeTDH, activeTDA]);


    return (
        <div className="gameContainer">
            
            <div className="instruction">
                Pick the Winner
            </div>

            
            {/* MONEYLINE BUTTONS */}
            <div id="mlContainer">
                <button id="homeML" onClick={() => handleML("home")}
                    className={activeML === 0 ? "mlActive mlButton" : "mlButton"}>
                    
                    <div className="mlLogoContainer">
                        <img src={homeLogo} className="mlLogoImg"/>
                    </div>
                    <div className="mlTextContainer">
                        <div className="mlName mlText">
                            {game_data["team_name"]["home"]}
                        </div>
                        <div className="mlPts mlText">
                            {game_data["ML"]["home"]}+
                        </div>
                    </div>
                </button>

                <button id="awayML" onClick={() => handleML("away")}
                    className={activeML === 1 ? "mlActive mlButton" : "mlButton"}>
                    
                    <div className="mlLogoContainer">
                        <img src={awayLogo} className="mlLogoImg"/>
                    </div>

                    <div className="mlTextContainer">
                        <div className="mlName mlText">
                            {game_data["team_name"]["away"]}
                        </div>
                        <div className="mlPts mlText">
                            {game_data["ML"]["away"]}+
                        </div>
                    </div>

                </button>

            </div>


            <div style={{height:"2em"}}></div>


            <div className="instruction">
                Pick a Touchdown Scorer for each team
            </div>

            <div id="tdContainer">

                <div id="tdHome" className="tdHalf">
                    {td_data["home"].map(function(data,idx) {
                        return (
                            <TDRow
                                key={idx}
                                idx={idx}
                                activeTDidx={activeTDH}
                                data={data}
                                side="home"
                                team={game_data["team_code"]["home"]}
                                handleTD={handleTD}
                            ></TDRow>
                        )
                    })} 
                </div>

                <div id="tdAway" className="tdHalf">
                    {td_data["away"].map(function(data,idx) {
                        return (
                            <TDRow
                                key={idx} 
                                idx={idx}
                                activeTDidx={activeTDA}
                                data={data}
                                side="away"
                                team={game_data["team_code"]["away"]}
                                handleTD={handleTD}
                            ></TDRow>
                        )
                    })} 
                </div>
                
                <div className="tdNotes">
                    <p>
                       <strong>* * * TD Notes * * *</strong>
                    </p>
                    <p>
                        * Passing TDs do not count, but QBs can still score 
                        with Rushing/Receiving TDs.
                    </p>
                    <p>
                        * D/ST = Defense/Special Teams (points are awarded for 
                        Defensive TD or Kick/Punt Return TD)
                    </p>
                    <p>
                        * The same player scoring more than one TD does not give you additional points. Except for options that say "2+", which will award points if the player scores at least 2 TDs in the game
                    </p>
                </div>

            </div>


        </div>
    );
}
  
export default GameForm;