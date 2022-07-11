import React from 'react';

function FilterButton(props){
    return(
        <>
            <button className='w-full text-xl md:text-3xl py-3 border border-black mt-8 sm:w-2/5 sm:ml-2  md:w-2/12 md:ml-0' >{props.data}</button>
        </>
    )
}

export default FilterButton;