import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UIfx from 'uifx';
import Tick1 from '../../effects/tick1.mp3';
import './Join.css';
const beep=new UIfx({asset:Tick1});


const SignIn=()=> {
  
  
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const gotoa=(e)=>{
    beep.play();
    setName(e.target.value);
    console.log('hello');

  
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">CHAT</h1>
        <div>
          <input placeholder="Your Name" className="joinInput" type="text" onChange={gotoa} />
        </div>
        <div>
          <input placeholder="Room Name" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Go</button>
        </Link>
      </div>
    </div>
  );
}
export default SignIn;
