import Bench from "./components/Bench/bench.js";
import Curls from "./components/Curls/curls.js";
import Name from "./components/Name/name.js";
import Pushups from "./components/Pushups/pushups.js";
import Squats from "./components/Squats/squats.js"
import Custom from "./components/Custom/custom.js"

function App() {
  return (
    <div className="App">
    <Name/>
    <Bench/>
    <Curls/>
    <Pushups/>
    <Squats/>
    <Custom/>
    </div>
  );
}

export default App;
