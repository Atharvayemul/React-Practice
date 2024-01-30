import logo from './logo.svg';
import './App.css';


let name = "Athara";

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>Abot</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis velit accusamus fuga, voluptate laborum unde commodi molestias ad modi quibusdam minus porro nostrum doloribus! Ducimus suscipit odio quasi cupiditate officia? Odio quaerat ipsum atque!</p>
    </div>
   </>
  );
}

export default App;
