import React from 'react'
import './Home.css'
function Home({id,title,para,read}){
  return (
     <div className="my-service">
        <div className="div-id">
          <h1>{id}</h1>
        </div>
        <div className='div-title'>
          <h1>{title}</h1>
        </div>
        <div className='div-para'>
          <p>{para}</p>
        </div>
        <div className='div-read'>
          <h2>{read}</h2>
        </div>
    </div>
  );
}
export default Home
