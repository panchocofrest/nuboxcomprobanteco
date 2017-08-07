require('normalize.css/normalize.css');

import React from 'react';
import Asiento from './Asiento';

class Cuerpo extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        let incremental = 0
        return(
            <div className="body-comprobante">
                <div className="cnt-body-comprobante">
                    {
                        this.props.data.items.map((item, i) => {
                            i++
                            incremental=i
                            let movimiento = (item['Tipo'] == 'aux') ? this.props.source.movimientos.auxiliar : this.props.source.movimientos.bancario
                            return(
                                <Asiento
                                    key={incremental}
                                    item={item}
                                    item_columns={this.props.source.columns}
                                    movimientos={item.Movimientos}
                                    movimientos_columns={movimiento.columns}
                                    movimientos_default={movimiento.default}
                                    style="registro level-1"
                                    identificador={'registro_' + incremental} />
                            );
                        })
                    }

                    <Asiento
                        key={incremental+1}
                        item={this.props.source.default}
                        item_columns={this.props.source.columns}
                        movimientos={null}
                        movimientos_columns={null}
                        movimientos_default={null}
                        style="registro level-1 placeholder"
                        identificador={'registro_' + (incremental+1)} />

                </div>
            </div>
        );
    }
}

Cuerpo.defaultProps = {
};

export default Cuerpo;