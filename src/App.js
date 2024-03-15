import Navbar from "./components/Navbar";
import YourRecipes from "./components/YourRecipes";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <YourRecipes />
      </main>
    </div>
  );
}

export default App;
