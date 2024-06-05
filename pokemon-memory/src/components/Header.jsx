import { useState } from "react";


function Header(props) {

  
  const [highscore, setHighscore]=useState(0);
  if(props.score>highscore){
    setHighscore(props.score);
  }

  return (
    
    <>
    <header>
      <div className="heading">
        <h1>Pokemon Memory</h1>
        <h3>Click an image only once to get points!</h3>
      </div>
      <div>
      <h3>Your Score: {props.score}</h3>
      <h3>High Score: {highscore}</h3>
      </div>
    
    </header>
      
    
    
    </>
  )
}

export default Header;
