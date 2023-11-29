import React from 'react';
import '../App.css';
import '../static/css/VennSection.css';
import {Button} from './Button';

function VennSection() {
  return (
    <div className='vennsection-container'>
        <h1> Problem Statement <br/> Generator</h1>
        <div className='psinstruction-container'> 
        <p>Specify first the number of Venn Diagram and Input the scopes of your problem statement you want to be generated</p>
        </div>
        
        <div className="generate-button">
            <Button className='btns' buttonStyle= 'btn--outline' 
            buttonSize= 'btn--large'> Generate</Button>

        </div>
        <div className='venndiagrams'>
          <img src='../images/venndiagram.png' alt='3 circle venn diagram' />
        </div>


    </div>
  )
}

export default VennSection