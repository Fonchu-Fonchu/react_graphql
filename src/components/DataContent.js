import React  from 'react';

function DataContent(props){
    return(
        <>
            <div className='md:flex justify-between mt-8'>
                <div className='w-2/12 border border-black bg-red-100 h-1/12 pt-8 font-bold text-xl'> {props.topic}</div>

                <div className='w-full h-1/12 text-left pl-2 font-bold pt-3 md:w-9/12 border border-black bg-sky-200 mt-5 md:mt-0'> 
                {props.title}
                {props.description}
                {props.title}
                </div>
            </div>
        </>
    )
}

export default DataContent;