require('normalize.css/normalize.css');
require('styles/comprobante-co.css');

import React from 'react';
import Cabecera from './Cabecera';

class Grilla extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = { data: { header: [], columns: [], items: [] } }
  }

  loadData(){

    let api =



    $.ajax({
      url: this.props.url,
      data: {},
      dataType: "json",
      success: function (data) {
          this.setState({
              data: data
          });
      }.bind(this),
      error: function (xhr, status, err) {
          console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount(){
    this.loadData();
  }

  render() {
    return (
      <div id="grid" className="modal-body">
        <div className="cnt-comprobante">
          <Cabecera data={this.state.data}/>
        </div>
      </div>
    );
  }
}

Grilla.defaultProps = {
};

export default Grilla;
