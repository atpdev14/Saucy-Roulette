import React, { Component } from 'react';
import './App.css';
import Photo from "./components/Photodisplay.js";
import sauces from "./data.json";
import Wrapper from "./components/Wrapper";
import shuffle from "shuffle-array";

class App extends Component {
  state = {
    data: sauces,
    points: 0,
    clicked: []
  }

  pointCounter = (id) => {
    const clickedArray = this.state.clicked;
    let points = this.state.points;
    if(clickedArray.indexOf(id) > -1){
      alert("WRONG!  Start Over!")
      this.setState({points: 0, clicked: []});
    
    } else { 
      this.state.clicked.push(id);
      points = points + 1;
      this.setState({points: points});

      if(points === 8){
        alert("YOU WON!")
        this.setState({points: 0, clicked: []});
      }
    }
    const shuffleArrayHolder = this.state.data;
    this.setState({data: shuffle(shuffleArrayHolder)});
  }

  render() {
    return (
      <div className="App">
      <h3 id="pointsDisplay">Points: {this.state.points}</h3>
        <Wrapper>
           {this.state.data.map(photo => {
              return (
                <Photo
                  id = {photo.id}
                  key = {photo.image} 
                  image = {photo.image}
                  alt = {photo.name}
                  pointCounter = {this.pointCounter}
                />
                );
            })}
        </Wrapper>
      </div>
    );
  }
}

export default App; 


// -create a wrapper component to wrap all list items in
// -create a function to map all json data to a new array
//   -and returns each item as an instance of <Photo/> component