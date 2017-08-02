import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Grilla from './components/Comprobante/Grilla';

// Render the main component into the dom
ReactDOM.render(<Grilla url="http://localhost:8000/dataGrid.json" />, document.getElementById('app'));
