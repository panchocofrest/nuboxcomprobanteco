require('normalize.css/normalize.css');

import React from 'react';
import Cabecera from './Cabecera';
import Cuerpo from './Cuerpo';

class Grilla extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      data: {
        items: []
      }
    }
  }

  componentWillMount(){
    let api = this.props.url
    fetch(api)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data }, function() { /*console.log(data)*/ })
      })
  }

  render() {
    if (this.state.data.items.length > 0) {
      return (
        <div id='grid' className='modal-body'>
          <div className='cnt-comprobante'>

            <Cabecera
              columns={this.props.source.columns} />

            <Cuerpo
              source={this.props.source}
              data={this.state.data} />

          </div>
        </div>
      )
    }
    else {
      return (
        <div id='grid' className='modal-body'>
          <div className='cnt-comprobante'>

            <Cabecera
              columns={this.props.source.columns} />

          </div>
        </div>
      )
    }
  }
}

Grilla.defaultProps = {
};

export default Grilla;
