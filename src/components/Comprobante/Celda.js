require('normalize.css/normalize.css');

import React from 'react';

class Celda extends React.Component {

    constructor(props)
    {
        super(props)
    }

    expanded() {
        alert('expanded');
    }

    renderCelda() {
        if(this.props.llave === 'Remove') {
            return(
                <li className={this.props.style}></li>
            )
        }

        if(this.props.llave === 'Tipo') {
            return(
                <li className={this.props.style + ' ' + this.props.value} onClick={this.expanded}></li>
            )
        }

        return(
            <li className={this.props.style} tabIndex=''>{this.props.value}</li>
        )
    }

    render() {
        return(
            this.renderCelda()
        );
    }
}

Celda.defaultProps = {
};

export default Celda;