require('normalize.css/normalize.css');

import React from 'react';
import Celda from './Celda';

class Fila extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        var that = this;
        return(
            <div className={this.props.style} id={this.props.identificador}>
                <ul className="nivel-ul">
                    {
                        this.props.columns.map((column, i) =>

                            <Celda
                                key={i}
                                llave={column.key}
                                style={'nivel-li ' + column.class}
                                value={that.props.item[column.key]} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

Fila.defaultProps = {
};

export default Fila;