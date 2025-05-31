import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

function App() {
  let boxes: number[] = [1, 2, 3, 4, 5, 5, 6, 7, 8];
  let mappedBoxes: number[] = boxes.map((value: number) => value * 2);

  return (
    <div className="bg-secondary min-h-screen">
      <NavigationBar />
      <Home array={mappedBoxes} />
    </div>
  );
}

export default App;
