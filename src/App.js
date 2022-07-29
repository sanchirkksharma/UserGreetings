import React from 'react';



function App(){
    let currTime= new Date().getHours();
    let greeting='';
    const cssStyle= {};
    
    if(currTime>=1 && currTime<12){
      greeting='Good Morning';
      cssStyle.color='green';
    }else if(currTime>=12 && currTime<19){
      greeting='Good Afternoon';
      cssStyle.color='orange';
    }else{
      greeting='Good Night';
      cssStyle.color='black';
    }
    

    return(
        <> 
        <div style={{width:'100%', height:'100vh', backgroundColor:'aqua'}}>
            <h1 style= {{width:'500px', height:'100px',backgroundColor: 'yellow', margin: '300px 100px 300px 500px',padding:'40px 0px 0px 0px', textAlign:'center', display:'inline-block', borderRadius:'50px'}}> 
            Hello Sir, <span style={cssStyle}>{greeting}</span>
            </h1>
        </div>
        </>
    );
}

export default App;
