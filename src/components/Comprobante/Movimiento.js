require('normalize.css/normalize.css');

import React from 'react';
import $ from 'jquery';
import Celda from './Celda';

class Movimiento extends React.Component {

    constructor(props) {
        super(props)
        this.habilitarFilaMovimiento = this.habilitarFilaMovimiento.bind(this)
    }

    habilitarFilaMovimiento(event) {
        if (!$(event.currentTarget).hasClass('placeholder'))
            return false

        this.props.habilitarNuevoMovimiento(this.props.movimiento)
    }

    renderCelda(column, i) {
        let style = (column.row.class !== null) ? column.row.class : ''
        let width = (column.row.width !== null) ? 'width-' + column.row.width : ''
        let align = (column.row.align !== null) ? column.row.align : ''

        let css = (column.start === true) ? width + '-' + style : style + ' ' + width
        let classname = 'nivel-li ' + css + ' ' + align
        return (
            <Celda
                key={i}
                llave={column.key}
                tipoControl={column.tipoControl}
                style={classname.trim()}
                value={this.props.movimiento[column.key]} />
        )
    }

    render() {
        return (
            <div className={this.props.style} id={this.props.identificador} onDoubleClick={this.habilitarFilaMovimiento}>
                <ul className="nivel-ul">
                    {this.props.columns.map((column, i) => this.renderCelda(column, i))}
                </ul>
            </div>
        );
    }
}

Movimiento.defaultProps = {
};

export default Movimiento;