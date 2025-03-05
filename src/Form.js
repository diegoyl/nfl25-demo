import React, {useState} from 'react';
import './Form.css';
// import Name from './Name.js';
import GameForm from './GameForm.js';
import SubmitForm from './SubmitForm.js';
import Loading from './Loading.js';
import PostSubmit from './PostSubmit.js';
import UserDropdown from './UserDropdown.js';
import HelpPage from './HelpPage.js';
import dbData from './dbData.js';
const defaultSD = dbData["defaultSD"]


function Form({gameDict, formActive, handleFormbackClick}) {
    // var [gameDict, setGameDict] = useState(gameDict)
    var [formPage, setFormPage] = useState(-1)
    var [selectionsDict, setSelectionsDict] = useState(defaultSD)
    var [finish, setFinish] = useState(false)
    var [currentUser, setCurrentUser] = useState("")
    var [flashActive, setFlashActive] = useState([false,""])
    var [loading, setLoading] = useState(false)
    var [doneSubmitting, setDoneSubmitting] = useState(false)
    var [help, setHelp] = useState(false)

    console.log("gD: ",gameDict)
    const lastPageNum = gameDict.length - 1

    function submitForm() {
        // somehow send data to sheets
        setLoading(true)
        sendData()
    }

    function sendData() {
        setLoading(true)

        setTimeout(() => {
            setDoneSubmitting(true)
        }, 2000)


    }
    function sdToPacket(selectionsDict) {
        let new_dict = {
            "user":selectionsDict["user"],
            "games":""
        }
        let games_arr = []
        
        for(let i=0; i < 15; i++){
            let g_idx = "g"+i
            if (selectionsDict[g_idx]) {
                let ml_idx = selectionsDict[g_idx][0]
                let tdh_idx = selectionsDict[g_idx][1]
                let tda_idx = selectionsDict[g_idx][2]
                games_arr.push(ml_idx+","+tdh_idx+","+tda_idx)
            }
        }
        new_dict["games"] = JSON.stringify(games_arr)
        console.log("NEW PACKETED: ",new_dict)
        return new_dict
    }

    function updateUser(user){
        let tempdict = selectionsDict
        tempdict["user"] = user
        setSelectionsDict(tempdict)
        if (user) {
            setFormPage(0)
        }
        setCurrentUser(user)
    }

    function updateSelections(game_id, activeML, activeTDH, activeTDA){
        // update masyer dict
        let tempdict = selectionsDict
        tempdict[game_id][0] = activeML
        tempdict[game_id][1] = activeTDH
        tempdict[game_id][2] = activeTDA
        setSelectionsDict(tempdict)
    }

    function handleNextClick(direction) {
        let newPageNum = formPage + direction
        newPageNum = Math.max(newPageNum, 0)
        newPageNum = Math.min(newPageNum, lastPageNum)

        setFormPage(newPageNum)
        console.log("new page num: ",newPageNum)
        console.log("formPage: ",formPage)
        // console.log("ScTp: ",document.getElementsByClassName("formContainer").scrollTop);
        document.getElementById("formScroller").scroll(0,0)

    }

    function triggerFlash(team_code) {
        //
        console.log("ML clicked => triggering flash")
        console.log("\tflash = activated with team code: ", team_code)
        setFlashActive([true,team_code+"flash"])
        setTimeout(() => {
            setFlashActive([false,""])
            console.log("\tflash = DEactivated")
        },900)
    }

    function handleHelpClick(state) {
        setHelp(state)
    }

    // useEffect(() => {
    // }, [formPage]);
    
    return (
        <div id="formScroller" className="formContainer">

                <button id="formback" class="viewHomeButton" onClick={() => handleFormbackClick()} >
                    HOME
                </button>
            <div id="flash1" 
                className={flashActive[0] ? flashActive[1]+" flashActive flash":"flash"}>
            </div>
            <div id="flash2" 
                className={flashActive[0] ? flashActive[1]+" flashActive2 flash":"flash"}>
            </div>

            <div id="userSelectOverlay">
                <UserDropdown updateUser={updateUser} formActive={formActive}></UserDropdown>
            </div>


            <div className={finish ? "userDrop curUser" : "curUser"}>
                {currentUser}

                <button className="helpButton" 
                    onClick={() => {handleHelpClick(true)}}
                    >?</button>

            </div>

            {help ? ( 
                <HelpPage handleHelpClick={handleHelpClick}></HelpPage>
            ) : (
                <></>
            )}

            {gameDict.map(function(game_data,idx) {
                if (formPage === idx) {
                    return (
                        <GameForm 
                            key={idx} 
                            game_data={game_data}
                            selections={selectionsDict[game_data["game_id"]]}
                            updateSelections={updateSelections}
                            triggerFlash={triggerFlash}
                        ></GameForm>
                    )
                }
            })}
            
            

            <div className="navButtons">

                <div id="leftNav" className="navButtonHalf">
                    {formPage <= 0 ? ( <></> ) : (
                        <button id="prevButton" 
                        onClick={() => {handleNextClick(-1)}}
                        >← PREV  </button>  
                    )}
                </div>
                <div id="rightNav" className="navButtonHalf">
                    {formPage >= 0 && formPage < lastPageNum ? (
                            <button id="nextButton" 
                            onClick={() => {handleNextClick(1)}}
                            >NEXT →</button>
                    ) : ( <></> )}

                    {formPage === lastPageNum ? ( 
                        <button id="finishButton" 
                        onClick={() => {setFinish(true)}}
                        >FINISH!</button>
                    ) : (<></>)}
                </div>

            </div>


            <SubmitForm 
                submitForm={submitForm} 
                setFinish={setFinish} 
                finish={finish} 
                selectionsDict={selectionsDict}
                gameDict={gameDict}
            ></SubmitForm>

            {/* {finish ? ( 
                <SubmitForm submitForm={submitForm} setFinish={setFinish} finish={finish}></SubmitForm>
            ) : (
                <></>
            )} */}


            <Loading loading={loading}></Loading>
            <PostSubmit doneSubmitting={doneSubmitting}></PostSubmit>
            

        </div>
        
    );
}
  
export default Form;