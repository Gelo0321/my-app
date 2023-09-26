import './App.css';

function MyButton({label, onClick}) {
  return (
    <button className="CalcButton" onClick ={onClick}>
      {label}
    </button>
  );
}

function Display({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    console.log(value);
    alert(value);

  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    console.log(value);
    alert(value);

  }

  const equalClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    console.log(value);
    alert(value);

  }

  const clearClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    console.log(value);
    alert(value);

  }


  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <Display display={0} />
      <div className="ButtonContainer">
        <MyButton label={7} onClick={numberClickHandler}/>
        <MyButton label={8} onClick={numberClickHandler}/>
        <MyButton label={9} onClick={numberClickHandler}/>
        <MyButton label={"+"} onClick={operatorClickHandler}/>
        <MyButton label={4} onClick={numberClickHandler}/>
        <MyButton label={5} onClick={numberClickHandler}/>
        <MyButton label={6} onClick={numberClickHandler}/>
        <MyButton label={"-"} onClick={operatorClickHandler}/>
        <MyButton label={1} onClick={numberClickHandler}/>
        <MyButton label={2} onClick={numberClickHandler}/>
        <MyButton label={3} onClick={numberClickHandler}/>
        <MyButton label={"*"} onClick={operatorClickHandler}/>
        <MyButton label={"C"} onClick={clearClickHandler}/>
        <MyButton label={0} onClick={numberClickHandler}/>
        <MyButton label={"="} onClick={equalClickHandler}/>
        <MyButton label={"÷"} onClick={operatorClickHandler}/>
      </div>
    </div>
  );
}