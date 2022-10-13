import { observer } from "mobx-react-lite"

const App = observer(({counter}) => {
  return (
    <div>
      <button onClick={()=> counter.increaseCount()}>+</button>
      <p>{counter.count}</p>
      <button onClick={() => counter.decreaseCount()}>-</button>
    </div>
  );
});

export default App;