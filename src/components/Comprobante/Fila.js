require('normalize.css/normalize.css');

import React from 'react';
import Celda from './Celda';

class Fila extends React.Component {

    constructor(props) {
        super(props)
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
                value={this.props.item[column.key]} />
        )
    }

    render() {
        return (
            <ul className="nivel-ul">
                {this.props.columns.map((column, i) => this.renderCelda(column, i))}
            </ul>
        );
    }
}

Fila.defaultProps = {
};

export default Fila;