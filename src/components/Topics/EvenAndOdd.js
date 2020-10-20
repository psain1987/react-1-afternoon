import React, {Component} from 'react'

class EvenAndOdd extends Component{
    render(){
        return(
            <div className='PuzzleBox evenAndOddPB'> 
                <input className='inputLine'/> 
                <button className='confirmationBox'></button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
                <h4> Evens and Odds </h4>
            </div>
        )
    }
}
export default EvenAndOdd;