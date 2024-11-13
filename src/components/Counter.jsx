import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setText, reset, reset2 } from "../features/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count, text } = useSelector((state) => state.counter);
  const [savedText, setSavedText] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text.trim()) {
      setSavedText(text);
      dispatch(setText(""));
    }
  };

  const clearSavedText = () => {
    setSavedText("");
  };

  return (
    <div className="container p-4 bg-light shadow rounded">
      <h2 className="text-center mb-4">Contador</h2>

      {/* Contador */}
      <div className="d-flex justify-content-center align-items-center mb-3">
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-danger mx-2"
        >
          -
        </button>
        <span className="fs-4">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-success mx-2"
        >
          +
        </button>
      </div>

      <div className="text-center mb-3">
        <button
          onClick={() => dispatch(reset())}
          className="btn btn-secondary"
        >
          Reiniciar contador
        </button>
      </div>

      {/* Campo de texto */}
      <div className="mb-3">
        <input
          type="text"
          value={text}
          onChange={(e) => dispatch(setText(e.target.value))}
          onKeyPress={handleKeyPress}
          className="form-control"
          placeholder="Ingresa un texto y presiona Enter"
        />
      </div>

      <div className="text-center mb-3">
        <button
          onClick={() => dispatch(reset2())}
          className="btn btn-primary w-100"
        >
          Borrar texto
        </button>
      </div>

      {/* Texto Guardado */}
      <div className="p-3 bg-white rounded border">
        <h3 className="fs-5 mb-2">Texto Guardado:</h3>
        <p className="text-muted">{savedText || "Aún no hay textos guardados."}</p>
        <div className="text-center">
          <button
            onClick={clearSavedText}
            className="btn btn-warning"
          >
            Limpiar textos guardados
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
