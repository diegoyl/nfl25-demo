import './Standings.css';
// import Name from './Name.js';


function Standings({standingsArr}) {

    return (
        <div className="">
            
            <div className="standingsTableContainer">
                <div id="sRowHeader" className='sRow'>
                    <p className='sCol sColName'>
                        STANDINGS
                    </p>
                    <p className='sCol sColPts'>
                        PTS
                    </p>
                    <p className='sCol sColWin'>
                        WIN
                    </p>
                    <p className='sCol sColTd'>
                        TD
                    </p>
                </div>

                <div id="sRow1" className='sRow'>
                    <p className='sCol sColName'>
                        {standingsArr[0]["name"]}
                    </p>
                    <p className='sCol sColPts'>
                        {standingsArr[0]["pts"]}
                    </p>
                    <p className='sCol sColWin'>
                        {standingsArr[0]["win"]}
                    </p>
                    <p className='sCol sColTd'>
                        {standingsArr[0]["td"]}
                    </p>
                </div>

                <div id="sRow2" className='sRow'>
                    <p className='sCol sColName'>
                        {standingsArr[1]["name"]}
                    </p>
                    <p className='sCol sColPts'>
                        {standingsArr[1]["pts"]}
                    </p>
                    <p className='sCol sColWin'>
                        {standingsArr[1]["win"]}
                    </p>
                    <p className='sCol sColTd'>
                        {standingsArr[1]["td"]}
                    </p>
                </div>


                <div id="sRow3" className='sRow'>
                    <p className='sCol sColName'>
                        {standingsArr[2]["name"]}
                    </p>
                    <p className='sCol sColPts'>
                        {standingsArr[2]["pts"]}
                    </p>
                    <p className='sCol sColWin'>
                        {standingsArr[2]["win"]}
                    </p>
                    <p className='sCol sColTd'>
                        {standingsArr[2]["td"]}
                    </p>
                </div>



                <div id="sRow4" className='sRow'>
                    <p className='sCol sColName'>
                        {standingsArr[3]["name"]}
                    </p>
                    <p className='sCol sColPts'>
                        {standingsArr[3]["pts"]}
                    </p>
                    <p className='sCol sColWin'>
                        {standingsArr[3]["win"]}
                    </p>
                    <p className='sCol sColTd'>
                        {standingsArr[3]["td"]}
                    </p>
                </div>



                <div id="sRow5" className='sRow'>
                    <p className='sCol sColName'>
                        {standingsArr[4]["name"]}
                    </p>
                    <p className='sCol sColPts'>
                        {standingsArr[4]["pts"]}
                    </p>
                    <p className='sCol sColWin'>
                        {standingsArr[4]["win"]}
                    </p>
                    <p className='sCol sColTd'>
                        {standingsArr[4]["td"]}
                    </p>
                </div>



                <div id="sRow6" className='sRow'>
                    <p className='sCol sColName'>
                        {standingsArr[5]["name"]}
                    </p>
                    <p className='sCol sColPts'>
                        {standingsArr[5]["pts"]}
                    </p>
                    <p className='sCol sColWin'>
                        {standingsArr[5]["win"]}
                    </p>
                    <p className='sCol sColTd'>
                        {standingsArr[5]["td"]}
                    </p>
                </div>

            </div>

        </div>
    );
}
  
export default Standings;