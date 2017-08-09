require('normalize.css/normalize.css');
import React from 'react';
//import ReactDOM from 'react-dom';

import JqxInput from '../../public/js/jqwidgets-react/react_jqxinput.js';
import JqxButton from '../../public/js/jqwidgets-react/react_jqxbuttons.js';
import JqxCalendar from '../../public/js/jqwidgets-react/react_jqxcalendar.js';
import JqxPanel from '../../public/js/jqwidgets-react/react_jqxpanel.js';
import JqxDropDownList from '../../public/js/jqwidgets-react/react_jqxdropdownlist.js';
import JqxDateTimeInput from '../../public/js/jqwidgets-react/react_jqxdatetimeinput.js';

class Celda extends React.Component {

    constructor(props) {
        super(props)
        this.state = { flagControl: true, valor: '', clientes: [], centrocosto: [], tipoDocumento: [] }
        this.expanded.bind(this)
        this.cargaControl = this.cargaControl.bind(this)
        this.renderCelda = this.renderCelda.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.changeControlVal = this.changeControlVal.bind(this)
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

    changeControlVal(valor) {

        this.setState(() => {
            return { valor: valor, flagControl: true };
        });
    }

    cargaControl(event) {
        if (!$(event.currentTarget).parent().parent().hasClass('placeholder')) {
            this.setState(() => {

                if (!this.state.flagControl) {

                    if (this.props.tipoControl == "Input") {
                        this.refs.controlJqxWidget.on('change', (event) =>

                            this.changeControlVal(event.target.value)
                        );

                    }

                    if (this.props.tipoControl == "Autocomplete") {
                        this.refs.controlJqxWidget.on('change', (event) =>

                            this.changeControlVal(event.target.value)
                        );
                    }

                    if (this.props.tipoControl == "Dropdown") {
                        this.refs.controlJqxWidget.on('select', (event) => {

                            let args = event.args;
                            let item = this.refs.controlJqxWidget.getItem(args.index);

                            if (item != null) {
                                this.changeControlVal(item.label)

                            }
                        });

                    }

                    if (this.props.tipoControl == "DateTimeInput") {

                        this.refs.controlJqxWidget.on('close', (event) => {
                            var date = this.refs.controlJqxWidget.val();

                            this.changeControlVal(date)
                        });

                    }

                    if (this.props.tipoControl === undefined) {
                        this.refs.controlJqxWidget.on('change', (event) =>
                            this.changeControlVal(event.target.value)
                        );

                    }
                }
                return { flagControl: false };
            });
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

        /*if (this.props.llave === 'Glosa') {

            if (this.state.flagControl) {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                )
            } else {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                        <JqxInput ref='controlJqxWidget' width={150} height={'28px'} value='' theme={'nubox'} />
                    </li>
                )
            }
        }*/

        if (this.props.llave === 'Cliente') {

            if (this.state.flagControl) {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                )
            } else {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                        <JqxInput ref='controlJqxWidget' width={150} height={'28px'} source={this.state.clientes} theme={'nubox'} />
                    </li>
                )
            }
        }

        if (this.props.llave === 'Documento') {

            if (this.state.flagControl) {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                )
            } else {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                        <JqxDropDownList ref='controlJqxWidget' width={150} height={'28px'} source={this.state.tipoDocumento} placeHolder={"Seleccione:"} theme={'nubox'} />
                    </li>
                )
            }
        }

        if (this.props.llave === 'Fecha') {

            if (this.state.flagControl) {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                    //<li className={this.props.style} tabIndex=''>{this.props.value}</li>
                )
            } else {
                 let fecha = this.state.valor.split('-')
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                        <JqxDateTimeInput ref='controlJqxWidget' style={{ marginTop: 3 }}
                            width={140} height={30} theme={'nubox'} placeHolder={"Seleccione:"}
                            culture={'es-CL'} animationType={'fade'} formatString={'d'} titleHeight={40}  value={new Date(fecha[2], fecha[1] - 1, fecha[0])}
                        />
                    </li>
                )
            }
        }

        if (this.props.llave === 'FechaInicio') {

            if (this.state.flagControl) {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                    //<li className={this.props.style} tabIndex=''>{this.props.value}</li>
                )
            } else {
                 let fecha = this.state.valor.split('-')
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                        <JqxDateTimeInput ref='controlJqxWidget' style={{ marginTop: 3 }}
                            width={140} height={30} theme={'nubox'} placeHolder={"Seleccione:"}
                            culture={'es-CL'} animationType={'fade'} formatString={'d'} titleHeight={40} value={new Date(fecha[2], fecha[1] - 1, fecha[0])}
                        />
                    </li>
                )
            }
        }

        if (this.props.llave === 'CentroCostos') {

            if (this.state.flagControl) {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                )
            } else {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                        <JqxDropDownList ref='controlJqxWidget' width={150} height={'28px'} source={this.state.centrocosto} placeHolder={"Seleccione:"} theme={'nubox'} />
                    </li>
                )
            }
        }

        if (this.props.llave === 'Sucursal') {

            if (this.state.flagControl) {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                )
            } else {
                return (
                    <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                        <JqxDropDownList ref='controlJqxWidget' width={150} height={'28px'} source={this.state.sucursales} placeHolder={"Seleccione:"} theme={'nubox'} />
                    </li>
                )
            }
        }

        //return (
        //<li className={this.props.style} tabIndex=''>{this.props.value}</li>

        if (this.state.flagControl) {
            return (
                <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
            )
        } else {
            return (
                <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                    <JqxInput ref='controlJqxWidget' width={150} height={'28px'} value='' theme={'nubox'} />
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