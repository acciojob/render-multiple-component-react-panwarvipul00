import React, {Component, useState} from "react";
import '../styles/App.css';

function App(){
  const dreamProject =[
    {
      name:"Ai personal tutor",
      description : "An intelligent tutor app that helps students learn interactively."
    },
    {
      name :"Virtual Interior deesigner",
      description :"An AR-based tool to help you decorate your home virtually."
    },
    {
      name :"Smart health monitor",
      description:"A wearable device app that predicts health risks in real-time."
    },
  ];
  return(
    <div classname="ns-wrapper">
      {dreamProject.map((project, index)=>(
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
          </div>

      ))}
    </div>
  );

}

export default App;
