require('normalize.css/normalize.css');

import React from 'react';
import Asiento from './Asiento';

class Cuerpo extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return(
            <div className="body-comprobante">
                <div className="cnt-body-comprobante">
                    {
                        this.props.data.items.map((item, i) =>
                        <Asiento
                            key={i}
                            item={item}
                            columns={this.props.data.columns}
                            movimientos={item.Movimientos}
                            style="registro level-1"
                            identificador={'registro_' + i} />
                        )
                    }
                </div>
            </div>
        );
    }
}

Cuerpo.defaultProps = {
};

export default Cuerpo;