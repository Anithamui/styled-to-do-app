import logo from './logo.svg';
import './App.css';
import ToDoApp from './ToDoApp'

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <ul>
          <li>Convert this TODO application from a class component into a function component using es6 and react hooks.</li>
          <li>Use <a href="https://styled-components.com/" target="_blank">styled components</a> for all styles</li>
          <li>Create a way to delete multiple selected items</li>
          <li>Create a way to save, delete and view your created lists in an organized way of your choosing.</li>
          <li>Bonus put your own design flair on this application!</li>
          <li>Have fun!</li>
        </ul>
      </div>
      <ToDoApp/>
    </div>
  );
}

export default App;
