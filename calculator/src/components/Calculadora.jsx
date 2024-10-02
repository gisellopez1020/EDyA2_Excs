import React, { useState } from 'react';

const Calculadora = () => {
    
    const [input, setInput] = useState('');
    
    const [resultado, setResultado] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const calcularResultado = () => {
        try {
            setResultado(eval(input));  
        } catch (error) {
            setResultado('Error');  
        }
    };

    const limpiarInput = () => {
        setInput('');
        setResultado('');
    };

    return (
        <div className="calculadora">
            <div className="display">
            
                <input type="text" value={input} readOnly />
                <div className="resultado">{resultado}</div>
            </div>
            <div className="buttons">
                
                <button onClick={limpiarInput}>C</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={calcularResultado}>=</button>
                
            </div>
        </div>
    );
};

export default Calculadora;