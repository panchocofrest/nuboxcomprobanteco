require('normalize.css/normalize.css');

import React from 'react';
import Fila from './Fila';
import Movimiento from './Movimiento';

class Cuerpo extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return(
            <div className="body-comprobante">
                <div className="cnt-body-comprobante">
                    {
                        this.props.data.items.map((item, i) => {
                           return(
                               <div>
                                   <Fila
                                        key={i}
                                        item={item}
                                        columns={this.props.data.columns}
                                        style="registro level-1"
                                        identificador={'registro_' + i} />

                                        {
                                            item.Movimientos.items.map((movimiento, i) =>
                                                <Movimiento
                                                    key={'MOV'+i}
                                                    movimiento={movimiento}
                                                    columns={item.Movimientos.columns}
                                                    style="registro level-2 level-sin-num"
                                                    identificador={'rregistro_' + i} />
                                            )
                                        }
                                </div>
                           )
                        })
                    }
                </div>
            </div>
        );
    }
}

Cuerpo.defaultProps = {
};

export default Cuerpo;