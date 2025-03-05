import './Form.css';
// import Name from './Name.js';
import MLexample from './img/logo/MLexample.png'
import TDexample from './img/logo/TDexample.png'

function HelpPage({handleHelpClick}) {

    // do stuff with props

    return (
        <div className="helpContainer">

            <button className="helpButton helpHelpButton"
                onClick={() => {handleHelpClick(false)}}
                >X</button>

            <p className='subtitle'>HOW TO PLAY</p>
            <p>At the beginning of each playoff round, make 3 picks for each game: <br></br> <br></br></p>

            <p>* The <strong>WINNER</strong></p>
            <p>* And two <strong>TOUCHDOWN SCORERS</strong>, <br></br>one from each team<br></br> <br></br><br></br></p>


            
            <p className='subtitle'>POINTS</p>
            <p>Points are weighted by team strength. 
                The favorite will win you less points, while picking the underdog can win you more points.
            </p>
            <img src={MLexample} width="80%"/>
            <br></br>
            <p><br></br>TD Scorer points also vary based on each player's scoring chances.
            </p>
            <img src={TDexample} width="60%"/>
            <p><br></br><strong>TD NOTES * * *</strong></p>
        
            <p><br></br>* Passing TDs do not count, but QBs can still score with Rushing/Receiving TDs. </p>
            <p>* The same player scoring more than one TD does not give you additional points</p>
            <p>* D/ST = Defense/Special Teams, you are awarded points for any Defensive TD or Kick/Punt Return TD</p>
            <br></br>
            <p className='subtitle'>STRATEGY</p>
            <p>Safer options (like Chiefs win or Derrick Henry TD) will receive smaller rewards, but if you are behind in the standings you can catch up by winning longshots (like Steelers win or a backup receiver TD)!
            </p>
            <br></br><br></br><br></br><br></br>

            <button className="helpButton helpHelpButtonBottom"
                onClick={() => {handleHelpClick(false)}}
                >BACK</button>
            <br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br>
        </div>
    );
}
  
export default HelpPage;