require('normalize.css/normalize.css');

import React from 'react';
import $ from 'jquery';
import Fila from './Fila';
import Movimiento from './Movimiento';

class Asiento extends React.Component {

    constructor(props) {
        super(props)
        this.state = { style: this.props.style }
        this.habilitarFilaItem = this.habilitarFilaItem.bind(this)
        this.habilitarNuevoMovimiento = this.habilitarNuevoMovimiento.bind(this)
        this.actualizarCssMovimientos = this.actualizarCssMovimientos.bind(this)
    }

    componentDidUpdate() {
        this.actualizarCssMovimientos(this.props.identificador)
    }

    habilitarFilaItem(event) {
        if (!$(event.currentTarget).hasClass('placeholder'))
            return false

        this.props.agregarNuevoItem(this.props.item)
    }

    habilitarNuevoMovimiento(nuevoMov) {
        var item = JSON.parse(JSON.stringify({}));
        $.extend(item, nuevoMov)
        this.props.agregarNuevoMovimiento(item, this.props.item.Id)
    }

    actualizarCssMovimientos(key) {
        var Label = $('#' + key)
        if (Label.hasClass('activo')) {
            $(Label).find('.level-2').each(function (index, value) {
                if ($(value).css('height') == '0px') {
                    $(value).css({ 'height': 'auto' });
                }
            })
        }
    }

    mostrarFilaMovimientoPlaceholder() {
        let id = String(Math.random()).split('.')[1]
        if (!(this.props.movimientos_default === null) && !(this.props.movimientos_columns === null))
            return (
                <Movimiento
                    key={id}
                    movimiento={this.props.movimientos_default}
                    columns={this.props.movimientos_columns}
                    habilitarNuevoMovimiento={this.habilitarNuevoMovimiento}
                    style='registro level-2 level-sin-num placeholder'
                    identificador={this.props.identificador + id} />
            )
    }

    render() {
        var that = this;
        if (this.props.movimientos != null) {
            return (
                <div className={this.state.style} id={this.props.identificador}>
                    <Fila
                        item={this.props.item}
                        columns={this.props.item_columns} />

                    {
                        this.props.movimientos.items.map((movimiento, i) => {
                            i++
                            return (
                                <Movimiento
                                    key={i}
                                    movimiento={movimiento}
                                    columns={this.props.movimientos_columns}
                                    style='registro level-2 level-sin-num'
                                    identificador={that.props.identificador + movimiento.Id} />
                            )
                        })
                    }

                    {
                        this.mostrarFilaMovimientoPlaceholder()
                    }
                </div>
            )
        }
        else {
            return (
                <div className={this.state.style} id={this.props.identificador} onDoubleClick={this.habilitarFilaItem}>
                    <Fila
                        item={this.props.item}
                        columns={this.props.item_columns} />
                </div>
            )
        }
    }
}

Asiento.defaultProps = {
};

export default Asiento;