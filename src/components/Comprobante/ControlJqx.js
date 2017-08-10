require('normalize.css/normalize.css');

import React from 'react';
import JqxInput from '../../public/js/jqwidgets-react/react_jqxinput.js';
import JqxButton from '../../public/js/jqwidgets-react/react_jqxbuttons.js';
import JqxCalendar from '../../public/js/jqwidgets-react/react_jqxcalendar.js';
import JqxPanel from '../../public/js/jqwidgets-react/react_jqxpanel.js';
import JqxDropDownList from '../../public/js/jqwidgets-react/react_jqxdropdownlist.js';
import JqxDateTimeInput from '../../public/js/jqwidgets-react/react_jqxdatetimeinput.js';

class ControlJqx extends React.Component {

    constructor(props) {
        super(props)
    }

   

    render() {
    


      if (this.props.tipoControl === "Input") {
            return (
               <JqxInput ref='controlJqxWidget' width={150} height={'28px'} value='' theme={'nubox'} />
            )
        } 

       if (this.props.tipoControl === "Autocomplete") {
            return (
               <JqxInput ref='controlJqxWidget' width={150} height={'28px'} value='' source={this.props.source} theme={'nubox'} />
            )
        }
         if (this.props.tipoControl === "Dropdown") {
            return (
                <JqxDropDownList ref='controlJqxWidget' width={150} height={'28px'} source={this.props.source} placeHolder={"Seleccione:"} theme={'nubox'} />
            )
        }

         if (this.props.tipoControl === "DateTimeInput") {
              let fecha = this.props.valor.split('-')
                  let date = new Date()
                  if(fecha.length > 1){
                   date = new Date(fecha[2], fecha[1] - 1, fecha[0]);
                  }
            return (
               <JqxDateTimeInput ref='controlJqxWidget' style={{ marginTop: 3 }}
                           width={140} height={30} theme={'nubox'} placeHolder={"Seleccione:"}
                          culture={'es-CL'} animationType={'fade'} formatString={'d'} titleHeight={40} value={date}
                           />
            )
        }

        if (this.props.tipoControl === undefined) {
            return (
               <JqxInput ref='controlJqxWidget' width={150} height={'28px'} value='' theme={'nubox'} />
            )
        } 
    }
}

ControlJqx.defaultProps = {
};

export default ControlJqx;