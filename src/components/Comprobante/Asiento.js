require('normalize.css/normalize.css');

import React from 'react';
import Fila from './Fila';
import Movimiento from './Movimiento';

class Asiento extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        var that = this;
        if (this.props.movimientos != null) {
            return(
                <div className={this.props.style} id={this.props.identificador}>
                    <Fila
                        item={this.props.item}
                        columns={this.props.columns} />
                    
                    {
                        this.props.movimientos.items.map((movimiento, i) =>
                        <Movimiento
                            key={i+1}
                            movimiento={movimiento}
                            columns={this.props.movimientos.columns}
                            style="registro level-2 level-sin-num"
                            identificador={that.props.identificador + movimiento.Id} />
                        )
                    }
                    
                    <Movimiento
                        key={0}
                        movimiento={this.props.movimientos.default}
                        columns={this.props.movimientos.columns}
                        style="registro level-2 level-sin-num placeholder"
                        identificador={that.props.identificador + String(Math.random()).split('.')[1]} />


                </div>
            )
        }
        else {
            return(
                <div className={this.props.style} id={this.props.identificador}>
                    <Fila
                        item={this.props.item}
                        columns={this.props.columns} />
                </div>
            )
        }
    }
}

Asiento.defaultProps = {
};

export default Asiento;