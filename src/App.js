import "./App.css";
import CatNav from "./Components/CatNav";
import MainComponent from "./Components/MainComponent";
//import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;
