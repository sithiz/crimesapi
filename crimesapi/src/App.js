import React, { Component } from 'react';
import './App.css';
import Crimes from './crimesList/crimes'

class App extends Component {
    state = {
      crimes : []
    }
  getCrimes = async () => {
      try {
        const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json');
        const crimesJson = await crimes.json();
        this.setState({crimes: crimesJson});
      } catch (err) {
        console.log(err, 'error in catch block')
        return err
      }


  }
  componentDidMount(){
    this.getCrimes()
      .then((data)=>{
        console.log(data, ' from famous quotes')     
         })
  }
  deleteItem = (index,event) => {
    this.setState((previousState) => (
      {crimes: previousState.crimes.filter((crime, i) => i !== index )
    }));
  }
  render(){

    
    return ( 
          <div>
            <h1>Hello CrimeLords</h1>
                <Crimes crimes={this.state.crimes} deleteItem={this.deleteItem}/>
          </div>
    );
  }
}

export default App;
