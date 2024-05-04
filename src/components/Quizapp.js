import React, { useState } from 'react';
import { Data } from '../data/Datas';
import Result from './Result';
function Quizapp()
{
    const[currentquestion,setCurrentquestion]=useState(0);
    const[score,setScore]=useState(0);
    const[clickoption,setClickoption]=useState(0);
    const[showresult,setShowresult]=useState(false);

    function changequestion()
    {
        update();
   if(currentquestion<Data.length-1)
   {
        setCurrentquestion(currentquestion+1);
   }
   else
   {
setShowresult(true);
   }
   function update()
   {
    if(clickoption===Data[currentquestion].answer && score<4)
    {
        setScore(score+1);
    }
   }
    }
   
    return(
<>
{
showresult?(

<Result score={score} totalScore={Data.length}/>
):(
<div>
    {currentquestion+1}.
    {
          Data[currentquestion].question
    }
    <h2>Options</h2>
    {
    Data[currentquestion].options.map((options,i)=>{
            return(
    <button key={i} onClick={()=>setClickoption(i+1)}>{options}</button>
    )
    })}
    </div>
)
}
<div>
    <input type="submit" value='Next' onClick={changequestion}/>
   
    </div>
/</>  )
} 
export default Quizapp;