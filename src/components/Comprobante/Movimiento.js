require('normalize.css/normalize.css');

import React from 'react';
import Celda from './Celda';

class Movimiento extends React.Component {

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
                                style={column.class}
                                value={that.props.movimiento[column.key]} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

Movimiento.defaultProps = {
};

export default Movimiento;