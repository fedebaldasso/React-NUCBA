import React from 'react';
import { render } from 'react-dom';
import Counter from "./Counter";

const App =  () => {
    //JSX
    // return React.createElement('h1', {}, 'Holaaaaaaaaaaaaa');
    return <Counter></Counter>; //Es equivalente a la linea anterior


};

render(React.createElement(App), document.getElementById('root'));
