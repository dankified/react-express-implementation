import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	async componentDidMount() {
		let {data} = await axios.get('/api/questions').catch(e => console.log(e));
		data.results.forEach((question) => {
			question.correctAnswer = question.correct_answer;
			question.incorrectAnswers = question.incorrect_answers;
			delete question.correct_answer;
			delete question.incorrect_answers;
		})
	
		console.log(data.results);
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
