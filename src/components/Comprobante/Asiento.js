require('normalize.css/normalize.css');

import React from 'react';
import $ from 'jquery';
import Fila from './Fila';
import Movimiento from './Movimiento';

class Asiento extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = { style: this.props.style } 
        this.enableRow = this.enableRow.bind(this)
        this.addMovDefault = this.addMovDefault.bind(this)
    }
    
    enableRow(event) {
        if (!$(event.currentTarget).hasClass('placeholder'))
            return false
            
        this.setState(() => {
            return {
                 style: 'registro level-1'
            }
        });        
        this.props.addItemDefault(this.props.item, this.props.index)
    }

    addMovDefault(nuevoMov) {
        var item = JSON.parse(JSON.stringify({}));
        $.extend(item, nuevoMov)
        this.props.addNuevoMov(item, this.props.item.Id)
    }
    
    validarCss(key) {
        var Label = $('#' + key)
        if (Label.hasClass('activo')){
            $(Label).find('.level-2').each(function(index, value) {
                if($(value).css('height')=='0px') {
                    $(value).css({ 'height':'auto' });
                }
            })
        }
    }
    
    render() {
        var that = this;
        if (this.props.movimientos != null) {
            return(
                <div className={this.state.style} id={this.props.identificador}>
                    <Fila
                        item={this.props.item}
                        columns={this.props.item_columns} />

                    {
                        this.props.movimientos.items.map((movimiento, i) => {
                            return(
                                <Movimiento
                                    key={i+1}
                                    movimiento={movimiento}
                                    columns={this.props.movimientos_columns}
                                    style='registro level-2 level-sin-num'
                                    identificador={that.props.identificador + movimiento.Id} />
                            )
                        })
                    }

                    {this.validarCss(this.props.identificador)}
                    
                    <Movimiento
                        key={0}
                        movimiento={this.props.movimientos_default}
                        columns={this.props.movimientos_columns}
                        Tipo={this.props.item['Tipo']}
                        addMovDefault={this.addMovDefault}
                        style='registro level-2 level-sin-num placeholder'
                        identificador={that.props.identificador + String(Math.random()).split('.')[1]} />

                </div>
            )
        }
        else {
            return(
                <div className={this.state.style} id={this.props.identificador} onDoubleClick={this.enableRow}>
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