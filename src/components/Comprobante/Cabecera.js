require('normalize.css/normalize.css');

import React from 'react';

class Cabecera extends React.Component {

    constructor(props) {
        super(props)
    }

    renderCell(column, i) {
        if (column.header.visible === true) {

            let style = (column.header.class !== null) ? column.header.class : '';
            let width = (column.header.width !== null) ? 'width-' + column.header.width : '';
            let css = (column.start === true) ? width + '-' + style : style + ' ' + width;
            let classname = 'header-li ' + css;

            return (
                <li key={i} className={classname.trim()}>{column.header.label}</li>
            )
        }
    }

    render() {
        //debugger
        return (
            <div className="header-comprobante">
                <ul className="header-ul">
                    {
                        this.props.columns.map((column, i) => this.renderCell(column, i))
                    }
                </ul>
            </div>
        );
    }
}

Cabecera.defaultProps = {
};

export default Cabecera;