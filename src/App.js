import './App.css';
import {Intro} from './components/Intro';
function App() {
  return (
    <div className="App">
      <Intro style = {style} />
    </div>
  );
}
const style = {
  textColor: "#b34b29",
  overlayColor: "#ebcac0",
  bootstrapMargin : "m-2"
}
export default App;
