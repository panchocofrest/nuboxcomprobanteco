require('normalize.css/normalize.css');

import React from 'react';
import Asiento from './Asiento';

class Cuerpo extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        var incremental = 0
        return(
            <div className="body-comprobante">
                <div className="cnt-body-comprobante">
                    {
                        this.props.data.items.map((item, i) => {
                            i++
                            incremental=i
                            return(
                                <Asiento
                                    key={incremental}
                                    item={item}
                                    columns={this.props.data.columns}
                                    movimientos={item.Movimientos}
                                    style="registro level-1"
                                    identificador={'registro_' + incremental} />
                            );
                        })
                    }

                    <Asiento
                        key={incremental+1}
                        item={this.props.data.default}
                        columns={this.props.data.columns}
                        movimientos={null}
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