import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import GetWordsForm from "./components/GetWordsForm"

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[Math.floor(Math.random() * MadLibs.length)]
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord(key, value) {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }

  onFormSubmit = (formState) => {
    Object.keys(formState).forEach((key) => {
      const value = formState[key];
      this.updateWord(key, value);
    })
  }


  render() {
    const wordsToFind = this.state.selectedMadLib.words;


    return (
      <section className="App">
      <h1>Welcome to MadLibs!</h1>
      <p>Fill in all of the choices to see your final story.</p>
      <GetWordsForm words={wordsToFind} updatewords={this.onFormSubmit}/>
      <Story
      title={ this.state.selectedMadLib.title }
      text={ this.state.selectedMadLib.getText() }
      />
      </section>
    );
  }
}

export default App;
