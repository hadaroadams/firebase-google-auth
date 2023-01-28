import './App.css';
import { signInWithGoogle } from './firebase';
function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>sign in with google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem('profilepic')} alt=''/>
    </div>
  );
}

export default App;
