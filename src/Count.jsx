import { useState } from "react"

export default function Count(){
 
    const [team, setTeam]=useState(11);
    const handleAdd = ()=>{
        const newTeam = team+1;
        setTeam(newTeam);
    }

    function handleRemove() {
        const remove = team-1;
        setTeam(remove);
    }

  
  const TeamStyle ={
    border :'2px solid black ',
    margin:'15px',
    borderRadius:'10px',
    padding:'15px'
  }

   return(
    <div style={TeamStyle}>
        <h3>Players:{team}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
   )
}