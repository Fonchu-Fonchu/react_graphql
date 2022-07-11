import React from "react";
import DataContent from "./DataContent";
import DateComponent from "./DateComponent";
import FilterButton from "./FilterButton";
import SearchBox from "./SearchBox";
import {useEffect, useState} from 'react';
import graphyQL from '../db.js'

export default function Home() {
    const [datData, setDateData] = useState([]);
    const [datData2, setDateData2] = useState([]);

    const dates2 = []
    useEffect(()=>{
        const test = {
          query:`
          {
            courses(date:"12/02/2022"){
              title
              topic
              description
              id
              date
            }
          }
        `
        };

        const test2 = {
            query:`
            {
              courses(date:"19/02/2022"){
                title
                topic
                description
                id
                date
              }
            }
          `
          };
  
        fetch(graphyQL.baseUrl,{
          method: "POST",
          headers: graphyQL.headers,
          body: JSON.stringify(test)
        }).then(res=>res.json())
        .then(data=>{
          setDateData(data.data.courses)
        }).catch(err=>{
          console.log(err)
        })

        fetch(graphyQL.baseUrl,{
            method: "POST",
            headers: graphyQL.headers,
            body: JSON.stringify(test2)
          }).then(res=>res.json())
          .then(data=>{
            setDateData2(data.data.courses)
          }).catch(err=>{
            console.log(err)
          })
      }, [])


     const list = [];
        for(var i=0;i<4;i++){
            list.push(<FilterButton data="Filter"/>)
        }             
          datData.map((data)=><>{dates2.push(data.date)}</>)
      
    return (
        <>
            <div className="">
                <SearchBox/>
                <div className="w-full md:flex md:justify-between sm:block sm:justify-between">
                    {
                       list
                    }
                </div>
                <DateComponent date={'12/02/2022'}/>
                    {
                        
                        datData.map((data)=><><DataContent {...data}/>{dates2.push(data.date)}</>)
                    }
                {/* <DateComponent/> */}

                {/* <DataContent /> */}
                <DateComponent date={'19/02/2022'}/>
                {
                        
                        datData2.map((data)=><><DataContent {...data}/></>)
                    }

                    {
                      console.log(dates2)
                    }

            </div>
        </>
    )
}