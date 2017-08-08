require('normalize.css/normalize.css');

import React from 'react';
import $ from 'jquery';
import Celda from './Celda';

class Movimiento extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = { style: this.props.style }
        this.enableRowMov = this.enableRowMov.bind(this)
    }

    componentWillMount() {
        //console.log(this.props)
    }

    enableRowMov(event) {
        if (!$(event.currentTarget).hasClass('placeholder'))
            return false
            
        // this.setState(() => {
        //     return {
        //         style: 'registro level-2 level-sin-num'
        //     }
        // });

        this.props.addMovDefault(this.props.movimiento)
    }

    renderCelda(column, i) {
        let style = (column.row.class !== null) ? column.row.class : ''
        let width = (column.row.width !== null) ? 'width-' + column.row.width : ''
        let align = (column.row.align !== null) ? column.row.align : ''
        
        let css = (column.start === true) ? width + '-' + style : style + ' ' + width
        let classname = 'nivel-li ' + css + ' ' + align
        return(
            <Celda
                key={i}
                llave={column.key}
                style={classname.trim()}
                value={this.props.movimiento[column.key]} />
        )
    }

    render() {
        return(
            <div className={this.state.style} id={this.props.identificador} onDoubleClick={this.enableRowMov}>
                <ul className="nivel-ul">
                    { this.props.columns.map((column, i) => this.renderCelda(column, i)) }
                </ul>
            </div>
        );
    }
}

Movimiento.defaultProps = {
};

export default Movimiento;