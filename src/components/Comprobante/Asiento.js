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
        return(
            <div className={this.props.style} id={this.props.identificador}>
                <Fila
                    item={this.props.item}
                    columns={this.props.columns} />
                
                {
                    this.props.movimientos.items.map((movimiento, i) =>
                    <Movimiento
                        key={i}
                        movimiento={movimiento}
                        columns={this.props.movimientos.columns}
                        style="registro level-2 level-sin-num"
                        identificador={that.props.identificador + movimiento.Id}
                    />
                    )
                }


            </div>
        );
    }
}

Asiento.defaultProps = {
};

export default Asiento;