require('normalize.css/normalize.css');
import React from 'react';
//import ReactDOM from 'react-dom';

import JqxInput from '../../public/js/jqwidgets-react/react_jqxinput.js';
import JqxButton from '../../public/js/jqwidgets-react/react_jqxbuttons.js';
import JqxCalendar from '../../public/js/jqwidgets-react/react_jqxcalendar.js';
import JqxPanel from '../../public/js/jqwidgets-react/react_jqxpanel.js';
import JqxDropDownList from '../../public/js/jqwidgets-react/react_jqxdropdownlist.js';
import JqxDateTimeInput from '../../public/js/jqwidgets-react/react_jqxdatetimeinput.js';
import ControlJqx from './ControlJqx'

class Celda extends React.Component {

    constructor(props) {
        super(props)
        this.state = { flagControl: true, valor: '', clientes: [], centrocosto: [], tipoDocumento: [] ,controlTemp: false}
        this.expanded.bind(this)
        this.cargaControl = this.cargaControl.bind(this)
        this.renderCelda = this.renderCelda.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.changeControlVal = this.changeControlVal.bind(this)
        this.eventSet = this.eventSet.bind(this)
    }

   
    componentDidMount() {

        this.setState(() => {
            return { valor: this.props.value };
        });

        this.setState(() => {
            return {
                clientes: [
                    '20.671.784-k Constructora Cali',
                    '24.612.605-4 Albania SA',
                    '7.301.358-5 Algeria SPA',
                    '24.138.968-5 Baldor'
                ],
                centrocosto: [
                    'Centro de costo 1',
                    'Centro de costo 2',
                    'Centro de costo 3'
                ],
                sucursales: [
                    'Cali',
                    'Medellin',
                    'Bogota'
                ],
                tipoDocumento: [
                    'Factura',
                    'Nota de debito',
                    'Nota de crédito'
                ]
            };
        });

       
    }

    componentWillMount(){
         
    }

    expanded(event) {
        var Label = $(event.currentTarget);

        if (Label.hasClass('label-noexpand'))
            return false

        var IDregistro = Label.parent().parent()[0].id;

        $('#' + IDregistro).find('.level-2').each(function (index, value) {

            if ($(value).css('height') == '0px') {
                $(value).css({ 'height': 'auto' });
                $('#' + IDregistro).addClass('activo');
                var LabelDiv = $(value).parent().find('.label')[0];
                $(LabelDiv).removeClass('collapsed');
                $(LabelDiv).addClass('expanded');
            }
            else {
                $(value).css({ 'height': '' });

                $('#' + IDregistro).removeClass('activo');
                var LabelDiv = $(value).parent().find('.label')[0];
                $(LabelDiv).removeClass('expanded');
                $(LabelDiv).addClass('collapsed');
            }

        });
    }

     eventSet(event){
            console.log('eventSet')
            let controlTemp = this.refs.ControlJqx.refs.controlJqxWidget;
            console.log (controlTemp)
           if (!this.state.flagControl) {

                    if (this.props.tipoControl == "Input") {
                        controlTemp.focus()
                        controlTemp.on('change', (event) =>

                            this.changeControlVal(event.target.value)
                        );

                    }

                    if (this.props.tipoControl == "Autocomplete") {
                        controlTemp.focus()
                        controlTemp.on('change', (event) =>

                            this.changeControlVal(event.target.value)
                        );
                    }

                    if (this.props.tipoControl == "Dropdown") {
                        controlTemp.on('select', (event) => {

                            let args = event.args;
                            let item = controlTemp.getItem(args.index);

                            if (item != null) {
                                this.changeControlVal(item.label)

                            }
                        });

                    }

                    if (this.props.tipoControl == "DateTimeInput") {
                        controlTemp.open()
                        controlTemp.on('close', (event) => {
                            var date = controlTemp.val();

                            this.changeControlVal(date)
                        });

                    }

                    if (this.props.tipoControl === undefined) {
                        controlTemp.focus()
                        controlTemp.on('change', (event) =>
                            this.changeControlVal(event.target.value)
                        );

                    }
                }


    }


    changeControlVal(valor) {

        this.setState(() => {
            return { valor: valor, flagControl: true };
        });
    }

    cargaControl(event) {
        console.log('cargaControl')
        if (!$(event.currentTarget).parent().parent().hasClass('placeholder')) {
            
          
            this.setState({flagControl:false},function(){
                this.setState({controlTemp:true},function(){
                    this.eventSet()
                })
            })
           
        }
    }

    renderCelda() {
       
        if (this.props.llave === 'Remove') {
            return (
                <li className={this.props.style}></li>
            )
        }

        if (this.props.llave === 'Tipo') {
            let style = (this.props.value === 'ban' || this.props.value === 'aux') ? 'label collapsed' : 'label-noexpand'
            let css = 'nivel-li ' + this.props.value + ' ' + style
            return (
                <li className={css.trim()} onClick={this.expanded}></li>
            )
        }
      
    
        if (this.state.flagControl) {
            return (
                <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
            )
        } else {
            return (
                <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                   <ControlJqx ref='ControlJqx' tipoControl={this.props.tipoControl} valor={this.state.valor} source={this.state[this.props.source]}/>
                </li>
            )
        }
        //)
    }

    render() {
        return (
            this.renderCelda()
        );
    }
}

Celda.defaultProps = {
};

export default Celda;