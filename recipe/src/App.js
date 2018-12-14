import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import Recipes from "./Components/Recipes";

const API_KEY = "c3602cda508dae96179391463237b3ca";
//https://www.food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    //get the value of the input
    const recipeName = e.target.elements.recipeName.value;
    //prevent browser form refreshing the page
    e.preventDefault();
    //making asynchronus API Call
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=12`
    );
    // results of the API Call will be store in this Data variable as JSON
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recipe App</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
