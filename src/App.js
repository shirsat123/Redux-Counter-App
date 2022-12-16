import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import Counter from "./counter";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      {/* <div className="App">App!!!</div> */}
    </Provider>
  );
}
