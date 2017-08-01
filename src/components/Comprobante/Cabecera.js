require('normalize.css/normalize.css');
require('styles/comprobante-co.css');

import React from 'react';

class Cabecera extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return(
            <div className="header-comprobante">
                <ul className="header-ul">
                    <li></li>
                </ul>
            </div>
        );
    }
}

Cabecera.defaultProps = {
};

export default Cabecera;