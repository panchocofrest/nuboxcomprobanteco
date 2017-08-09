require('normalize.css/normalize.css');

import React from 'react';
import $ from 'jquery';
import Asiento from './Asiento';

class Cuerpo extends React.Component {

    constructor(props) {
        super(props)
        this.agregarNuevoItem = this.agregarNuevoItem.bind(this)
        this.agregarNuevoMovimiento = this.agregarNuevoMovimiento.bind(this)
    }

    agregarNuevoItem(nuevoItem) {
        var arr = this.props.data
        var item = JSON.parse(JSON.stringify({}));
        $.extend(item, nuevoItem);
        item.Num = arr.items.length + 1
        arr.items.push(item)
        this.props.reloadData(arr)
    }

    agregarNuevoMovimiento(nuevoMov, idItem) {
        var arr = this.props.data
        arr.items.forEach(function (element) {
            if (element.Id === idItem) {
                element.Movimientos.items.push(nuevoMov)
            }
        }, this);
        this.props.reloadData(arr)
    }

    render() {
        let incremental = this.props.data.items.length + 1
        return (
            <div className='body-comprobante'>
                <div className='cnt-body-comprobante'>
                    {
                        this.props.data.items.map((item, i) => {
                            i++
                            debugger
                            let movimiento = this.props.source.movimientos[item.Tipo]
                            let movimiento_columns = (movimiento === undefined) ? null : movimiento.columns
                            let movimiento_default = (movimiento === undefined) ? null : movimiento.default
                            return (
                                <Asiento
                                    key={i}
                                    item={item}
                                    item_columns={this.props.source.columns}
                                    movimientos={item.Movimientos}
                                    movimientos_columns={movimiento_columns}
                                    movimientos_default={movimiento_default}
                                    agregarNuevoMovimiento={this.agregarNuevoMovimiento}
                                    style='registro level-1'
                                    identificador={'registro_' + i} />
                            );
                        })
                    }

                    <Asiento
                        key={incremental}
                        item={this.props.source.default}
                        item_columns={this.props.source.columns}
                        movimientos={null}
                        movimientos_columns={null}
                        movimientos_default={null}
                        agregarNuevoItem={this.agregarNuevoItem}
                        style='registro level-1 placeholder'
                        identificador={'registro_' + (incremental)} />

                </div>
            </div>
        );
    }
}

Cuerpo.defaultProps = {
};

export default Cuerpo;