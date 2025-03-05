import './Review.css';
import './Form.css';
import ReviewRow2 from './ReviewRow2.js';

function CurrentGameTable({cur_game_data, curGameIdx, picksArchiveDict}) {

    // do stuff with props
    console.log("1. cur_game_data: ", cur_game_data)



    const homeCode = cur_game_data["team_code"]["home"]
    const homeName = cur_game_data["team_name"]["home"]
    const awayCode = cur_game_data["team_code"]["away"]
    const awayName = cur_game_data["team_name"]["away"]


    return (
        <div className="curPicksContainer">
            <p className='roundTitle'>NEXT GAME</p>
            <div className='curMatchup'>
                <div className={homeCode+' matchupHalf matchupLeft'}>
                    <p>{homeName}</p>
                </div>
                <div className={awayCode+' matchupHalf matchupRight'}>
                    <p>{awayName}</p>
                </div>

            </div>



            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>P1</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["PLAYER1"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>P2</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["PLAYER2"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>P3</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["PLAYER3"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>P4</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["PLAYER4"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>P5</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["PLAYER5"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>P6</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["PLAYER6"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>



        </div>
    );
}
  
export default CurrentGameTable;