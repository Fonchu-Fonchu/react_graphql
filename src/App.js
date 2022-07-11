
import './App.css';
import Home from './components/Home';
// import { useQuery } from '@apollo/client';
// import graphyQL from './db.js'
// import { courses } from "./gql/Query";

// import {useEffect} from 'react'
function App() {
    // useEffect(()=>{
    //   const test = {
    //     query:`
    //     {
    //       allcourses{
    //         title
    //         topic
    //         description
    //         id
    //       }
    //     }
    //   `
    //   };

    //   fetch(graphyQL.baseUrl,{
    //     method: "POST",
    //     headers: graphyQL.headers,
    //     body: JSON.stringify(test)
    //   }).then(res=>res.json())
    //   .then(data=>{
    //     console.log(data.data)
    //   }).catch(err=>{
    //     console.log(err)
    //   })
    // })


    // const {loading, err, data}  = useQuery(courses);
    // console.log(data.allcourses);
  return (
    <>
      <div className="App mx-3 px-2 border-4 border-black sm:mx-20 sm:px-10 pb-5">

      <Home />
      
    </div>
    </>
  );
}

export default App;
