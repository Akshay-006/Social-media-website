import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AlternateCreate() {

    const [value,setvalue]=useState({
        name:'',
        email:''
    })
    
    const handlesubmit= async (e)=>{
        e.preventDefault()
        
        console.log(value)
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label >name</label>
            <input type="text" 
            onChange={(e)=>setvalue({...value,name:e.target.value})}
            required

             />
             <label >email</label>
            <input type="email" 
            onChange={(e)=>setvalue({...value,email:e.target.value})}
            required/>
             <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AlternateCreate