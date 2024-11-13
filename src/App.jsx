import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./components/Counter";
import SearchPokemon from "./components/SearchPokemon";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-3xl font-bold mb-8">Parcial 3</h1>
        <h2 className="text-2xl font-bold mb-6">Karen Gisel López Ordoñez</h2>
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-start">
              <SearchPokemon />
            </div>
            <div className="col-6 d-flex justify-content-end">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
