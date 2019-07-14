import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class  App extends Component {
  state={
    persons:[
      { name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Aananda',age:19}
    ]

  };

  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
        { name:newName,age:28},
        {name:'Manu',age:29},
        {name:'Aananda',age:18}
      ]
    });
  };

  nameChangedHandler=(event)=>{
    this.setState({
      persons:[
        { name:"Max",age:28},
        {name:event.target.value,age:29},
        {name:'Aananda',age:18}
      ]
    });


  }




  render(){
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'

    };
    return (
      <div className="App">
      <h1>hey react</h1>
      <h2>hey again</h2>
      <button  style={style} onClick={()=>this.switchNameHandler("Maximilian!!!")}>Switch Name</button>
      <Person
      name={this.state.persons[0].name}
      age={this.state.persons[0].age}/>
      <Person
      name= {this.state.persons[1].name}
      age={this.state.persons[1].age}
      changed={this.nameChangedHandler}
      click={this.switchNameHandler.bind(this,"Max!!!")}>My Hobbies :Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

  }










}

export default App;
