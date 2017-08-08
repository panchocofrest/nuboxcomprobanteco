require('normalize.css/normalize.css');

import React from 'react';
import $ from 'jquery';
import Asiento from './Asiento';

class Cuerpo extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = { items: this.props.data.items }
        this.addItemDefault = this.addItemDefault.bind(this)
    }

    addItemDefault(nuevoItem, i) {
        var arr = this.state.items
        var item = JSON.parse(JSON.stringify({}));
        $.extend(item, nuevoItem);
        item.Num = i
        arr.push(item)
        this.setState({ items: arr }, function(){ console.log(this.state.items) })
    }
    
    render() {
        let incremental = 0
        return(
            <div className='body-comprobante'>
                <div className='cnt-body-comprobante'>
                    {
                        this.state.items.map((item, i) => {
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
                                    style='registro level-1'
                                    identificador={'registro_' + incremental} />
                            );
                        })
                    }

                    <Asiento
                        key={incremental+1}
                        index={incremental+1}
                        item={this.props.source.default}
                        item_columns={this.props.source.columns}
                        movimientos={null}
                        movimientos_columns={null}
                        movimientos_default={null}
                        addItemDefault={this.addItemDefault}
                        style='registro level-1 placeholder'
                        identificador={'registro_' + (incremental+1)} />

                </div>
            </div>
        );
    }
}

Cuerpo.defaultProps = {
};

export default Cuerpo;