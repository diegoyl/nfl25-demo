import './Review.css';
import './Form.css';
// import Name from './Name.js';


function ReviewRow2({game_picks}) {
    console.log("PRE Game Picks: ",game_picks)
    game_picks = game_picks[1]
    console.log("Game Picks: ",game_picks)
    // arr = [ 
    //   ["BUF","Buffalo",48,true] , 
    //   ["J.Allen",19,true] , 
    //   ["B.Nix",67,false] 
    // ]
    // game_picks = [
    //   ["BUF","BUFFALO",48,"incorP"] , 
    //   ["J.Allen",19,"incorP"] , 
    //   ["B.Nix",67,"corP"] 
    // ]
    let mlCodeClass = game_picks[0][0]
    let mlName = game_picks[0][1]
    let mlPts = game_picks[0][2]
    let mlCorrect = game_picks[0][3]

    let tdhName = game_picks[1][0]
    let tdhPts = game_picks[1][1]
    let tdhCorrect = game_picks[1][2]

    let tdaName = game_picks[2][0]
    let tdaPts = game_picks[2][1]
    let tdaCorrect = game_picks[2][2]


    // console.log("Game Data: ",game_data)

    return (
        <div className="rrcView reviewRowContainer">
            <div className={mlCodeClass+' reviewColumn fullCol'}>
                <p className="colName topText">
                    {mlName}
                </p>
                <p className={mlCorrect+" colPts topText"}>
                    +{mlPts}
                </p>
            </div>
            <div className='botCol botL reviewColumn'>
                <p className="colName botText">
                    {tdhName}
                </p>
                <p className={tdhCorrect+" colPts botText"}>
                    {tdhPts}+
                </p>
            </div>
            <div className='botCol botR reviewColumn'>
            <p className="colName botText">
                    {tdaName}
                </p>
                <p className={tdaCorrect+" colPts botText"}>
                    {tdaPts}+
                </p>
            </div>
        </div>
    );
}
  
export default ReviewRow2;