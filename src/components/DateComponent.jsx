import React, {useEffect, useState} from 'react';
import graphyQL from '../db.js'


function DateComponent (props){
    
      console.log(props)
    return(
        <>
        <div className='w-3/12 mt-10 mb-4 text-2xl border-2 border-black'>
            {props.date}
            </div>
        </>
    )
}

export default DateComponent;