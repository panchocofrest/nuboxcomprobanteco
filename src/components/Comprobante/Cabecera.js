require('normalize.css/normalize.css');

import React from 'react';

class Cabecera extends React.Component {

    constructor(props)
    {
        super(props)
    }

    renderCell(column, i) {
        if (column.header.visible === true){
            return(
                <li key={i} className={'header-li ' + column.header.class}>{column.header.label}</li>
            )
        }
    }

    render() {
        return(
            <div className="header-comprobante">
                <ul className="header-ul">
                    {
                        this.props.data.columns.map((column, i) => this.renderCell(column, i))
                    }
                </ul>
            </div>
        );
    }
}

Cabecera.defaultProps = {
};

export default Cabecera;