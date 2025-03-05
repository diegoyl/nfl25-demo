import React, {useState, useEffect} from 'react';
import './App.css';
import CurrentGameTable from './CurrentGameTable.js';
import Standings from './Standings.js';
import Form from './Form.js';
import ViewPicks from './ViewPicks.js';
import dbData from './dbData.js';
// console.log("var1: ",dbData["var1"])

function App() {
  var [formLoading, setFormLoading] = useState(false)
  var [formActive, setFormActive] = useState(false)
  var [viewActive, setViewActive] = useState(false)

  useEffect(() => {
    console.log('1. UseEffect Initializing...')

  }, []);

  function handlePredsClick() {
    setFormLoading(true)
    setTimeout(() => {
      setFormActive(true)
    },350)
  }
  function handleVPClick(state) {
    setViewActive(state)
  }
  function handleFormbackClick() {
    setFormActive(false)
  }
  

  const gameDict = dbData["gameDict"]
  const picksOpen = dbData["picksOpen"]
  const standingsArr = dbData["standingsArr"]
  const picksArchiveDict = dbData["picksArchiveDict"]
  const curGameIdx = dbData["curGameIdx"]
  const curGameIdxRound = dbData["curGameIdxRound"]
  
  


////////////////////////////////////////////////////////////

  return (
    <div className="App">
      
      <p id="title">
        PLAYOFFS '25
      </p>

      <div id="loadFormFlash" 
        className={formLoading ? "loadFlashActive loadFormFlash":"loadFormFlash"}>
      </div>

      {/* <div style={{height:".1em"}}></div> */}

      {picksOpen ? (
          <button className="mainButton makeButton" 
          onClick={() => handlePredsClick()}
          >Make Picks</button>      
      ) : ( <></>)}


      <button className="mainButton viewButton"
          onClick={() => handleVPClick(true)}
          >View Picks</button>    

      {viewActive ? (
          <ViewPicks picksArchiveDict={picksArchiveDict} handleVPClick={handleVPClick}></ViewPicks>    
      ) : ( <></>)}

      <div style={{height:"1.5em"}}></div>

      <Standings standingsArr={standingsArr}></Standings>

      <CurrentGameTable cur_game_data={gameDict[curGameIdxRound]} curGameIdx={curGameIdx} picksArchiveDict={picksArchiveDict}></CurrentGameTable>


      


      
      {formActive ? (
        <Form gameDict={gameDict} handleFormbackClick={handleFormbackClick}></Form>
      ) : (
        <></>
      )}

        <div>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          hola :D
          <br></br><br></br><br></br><br></br><br></br>
        </div>

    </div>
  );
}

export default App;
