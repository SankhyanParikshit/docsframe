import React from 'react';
import Background from './component/Background';
import './App.css';
import Foreground from './component/foreground/Foreground';

function App() {

  return (
    <div className="relative w-full h-screen bg-zinc-800">
     <Background/>
     <Foreground/>
    </div>

  )
}

export default App
