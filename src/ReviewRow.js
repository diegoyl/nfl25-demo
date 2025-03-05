import './Review.css';
import './Form.css';
// import Name from './Name.js';


function ReviewRow({game_picks, gameDict}) {
    // console.log("Game Picks: ",game_picks)
    const game_id = game_picks[0]

    const mlPick = game_picks[1][0]
    let mlSide = null 
    if (mlPick === 0) {
        mlSide = "home"
    } else if  (mlPick === 1) {
        mlSide = "away"
    } 
    const tdhPick = game_picks[1][1]
    const tdaPick = game_picks[1][2]

    let mlName = false
    let mlCodeClass = "noPickColor"
    let mlPts = false
    let tdhName = false
    let tdhPts = false
    let tdaName = false
    let tdaPts = false
    const emptyMessage = "No Pick"
    
    let game_data = null;
    for (let i=0; i < gameDict.length; i++) {
        let curID = gameDict[i]["game_id"]
        if (curID === game_id) {
            game_data = gameDict[i]

            if (mlSide){
                mlName = game_data["team_name"][mlSide]
                mlPts = game_data["ML"][mlSide]
                mlCodeClass = game_data["team_code"][mlSide]
            }
            if (tdhPick != null){
                tdhName = game_data["TD"]["home"][tdhPick][1]
                tdhPts = game_data["TD"]["home"][tdhPick][2]
            }
            if (tdaPick != null){
                tdaName = game_data["TD"]["away"][tdaPick][1]
                tdaPts = game_data["TD"]["away"][tdaPick][2]
            }
        }
    }
    // console.log("Game Data: ",game_data)

    return (
        <div className="reviewRowContainer">
            <div className={mlCodeClass+' reviewColumn fullCol'}>
                <p className={mlName ? "colName topText" : "colName topText noSelection"}>
                    {mlName ? mlName : emptyMessage}
                </p>
                <p className={mlPts ? "colPts topText" : "colPts topText noSelection"}>
                    +{mlPts ? mlPts : 0}
                </p>
            </div>
            <div className='botCol botL reviewColumn'>
                <p className={tdhName ? "colName botText" : "colName botText noSelection"}>
                    {tdhName ? tdhName : emptyMessage}
                </p>
                <p className={tdhPts ? "colPts botText" : "colPts botText noSelection"}>
                    {tdhPts ? tdhPts : 0}+
                </p>
            </div>
            <div className='botCol botR reviewColumn'>
            <p className={tdaName ? "colName botText" : "colName botText noSelection"}>
                    {tdaName ? tdaName : emptyMessage}
                </p>
                <p className={tdaPts ? "colPts botText" : "colPts botText noSelection"}>
                    {tdaPts ? tdaPts : 0}+
                </p>
            </div>
        </div>
    );
}
  
export default ReviewRow;