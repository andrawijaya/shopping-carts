import "./App.css";
import { Header } from "./components";
import { ProductList } from "./pages";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
    </Provider>
  );
}

export default App;
