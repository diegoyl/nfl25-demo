import React, {useState} from 'react';            
import './Form.css';
import ReviewRow from './ReviewRow.js';


function SubmitForm({submitForm, setFinish, finish, selectionsDict, gameDict}) {

    // do stuff with props
    console.log("\n\n========\nSD in submit: ",selectionsDict)

    let missingPicks = false;

    const sdArray = Object.entries(selectionsDict)
    for (let i=0; i < sdArray.length; i++) {

        if (sdArray[i][0] != "user") {
            let gp = sdArray[i][1]
            if (gp.includes(null)){
                // setMissingPicks(true)
                missingPicks = true;
            }
        }
    }


    return (
        <div id="submitContainer" className={finish ? "submitFormActive submitFormInactive": "submitFormInactive"}>
            <div className="reviewInstructions">
                {missingPicks ? (
                    <p>Uh Oh... You Are Missing Picks!</p>
                ) : (
                    <div>
                        <p>Review Your Picks</p>
                    </div>
                )}


                {Object.entries(selectionsDict).map(function(game_picks,idx) {
                    if (game_picks[0] != "user"){
                        return (
                            <ReviewRow 
                                key={idx} 
                                game_picks={game_picks}
                                gameDict={gameDict}
                            ></ReviewRow>
                    )}
                })}


                {/* <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br> */}

            </div>





            <div 
                // className="navButtons navSubmit"
                className={finish ? "navSubmitActive navButtons navSubmit": "navButtons navSubmit"}
            >
                <div id="leftNav" className="navButtonHalf">
                        <button id="returnButton" 
                            onClick={() => {setFinish(false)}}
                            >CHANGE<br></br>PICKS</button>
                </div>
                <div id="rightNav" className="navButtonHalf">
                        <button id="submitButton" 
                            onClick={() => {submitForm()}}
                            >SUBMIT<br></br>PICKS</button>
                </div>

            </div>
        </div>
    );
}
  
export default SubmitForm;