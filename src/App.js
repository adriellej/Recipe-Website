import Navbar from "./components/Navbar";
import YourRecipes from "./components/YourRecipes";

import img2 from "./img/img2.jpeg";

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
       {/* <img src={img2} className="header_img" alt="header_img" /> */}
        
      </header>

      <main>
        <YourRecipes />
      </main>
    </div>
  );
}

export default App;
