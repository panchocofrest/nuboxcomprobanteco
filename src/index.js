import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Grilla from './components/Comprobante/Grilla';

// Render the main component into the dom
ReactDOM.render(<Grilla url="http://192.168.56.101/comprobante_co/js/dataGrid.json" />, document.getElementById('app'));
