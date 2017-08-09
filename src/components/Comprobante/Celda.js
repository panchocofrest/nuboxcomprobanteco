require('normalize.css/normalize.css');
import React from 'react';
//import ReactDOM from 'react-dom';

import JqxInput from '../../public/js/jqwidgets-react/react_jqxinput.js';
import JqxButton from '../../public/js/jqwidgets-react/react_jqxbuttons.js';
import JqxCalendar from '../../public/js/jqwidgets-react/react_jqxcalendar.js';
import JqxPanel from '../../public/js/jqwidgets-react/react_jqxpanel.js';
import JqxDropDownList from '../../public/js/jqwidgets-react/react_jqxdropdownlist.js'; 

 class Celda extends React.Component {

   
  

    constructor(props)
    {
        super(props)
          
       
        this.state = {flagControl: true,  valor : '', clientes: [],centrocosto : []}
        this.expanded.bind(this)
        this.cargaControl = this.cargaControl.bind(this)
        this.renderCelda = this.renderCelda.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.changeControlVal = this.changeControlVal.bind(this)
        
        
    }


   

    componentDidMount ()
    {
        this.setState(() => {
            return {valor: this.props.value};
        });

        this.setState(() => {
               return { clientes: new Array('Constructora Cali', 'Albania SA', 'Algeria SPA', 'Baldor' ),
             centrocosto :  [
            'Centro de costo 1',
            'Centro de costo 2',
            'Centro de costo 3'
            ],
          sucursales :  [
            'Cali',
            'Medellin',
            'Bogota'
            ] };
        });
    }

    inputChange()
    {
    }

   
    expanded(event) {
        var Label = $(event.currentTarget);

        if (Label.hasClass('label-noexpand'))
            return false

        var IDregistro = Label.parent().parent()[0].id;

        $('#' + IDregistro).find('.level-2').each(function(index, value) {

            if($(value).css('height')=='0px')
            {
                $(value).css({ 'height':'auto' });
                $('#' + IDregistro).addClass('activo');
                var LabelDiv = $(value).parent().find('.label')[0];
                $(LabelDiv).removeClass('collapsed');
                $(LabelDiv).addClass('expanded');
            }
            else
            {
                $(value).css({ 'height':'' });

                $('#' + IDregistro).removeClass('activo');
                var LabelDiv = $(value).parent().find('.label')[0];
                $(LabelDiv).removeClass('expanded');
                $(LabelDiv).addClass('collapsed');
            }

        });
    }

    changeControlVal(valor){

          this.setState(() => {
               return {valor: valor,flagControl: true};
        });    
    }

    
    
    cargaControl(){
  
     this.setState(() => {
        
 console.log(this.state.flagControl)
  console.log(this.props)

       if(!this.state.flagControl)
        {
           
           if(this.props.tipoControl == "Input"){
                this.refs.controlJqxWidget.on('change', (event) =>

                 this.changeControlVal(event.target.value)
                );
           }

            if( this.props.tipoControl == "Autocomplete"){
                this.refs.controlJqxWidget.on('change', (event) =>

                 this.changeControlVal(event.target.value)
                );
           }


            if(this.props.tipoControl == "Dropdown"){
                this.refs.controlJqxWidget.on('select', (event) => {
                    let args = event.args;
                    let item = this.refs.controlJqxWidget.getItem(args.index);
                   
                    if (item != null) {
                    
                    }
                    this.changeControlVal(item.label)
                    
                });
            }

               if(this.props.tipoControl == "Calendar"){
               
                   this.refs.controlJqxWidget.on('click', (event) =>
                    {
                       
                       console.log(event)
                        var date = new Date(event.timeStamp*1000);
                        console.log(date.getDate() + '/' + date.getMonth()  + '/' + date.getMonth() )
                        this.changeControlVal(date.getDate() + '/' + date.getMonth()  + '/' + date.getMonth() )
                    });

                 

               }
         }
        return {flagControl: false};
        });

    }

    renderCelda() {
        if(this.props.llave === 'Remove') {
            return(
                <li className={this.props.style}></li>
            )
        }

        if(this.props.llave === 'Tipo') {
            let style = (this.props.value === 'ban' || this.props.value === 'aux') ? 'label collapsed' : 'label-noexpand'
            let css = 'nivel-li ' + this.props.value + ' ' + style
            return(
                <li className={css.trim()} onClick={this.expanded}></li>
            )
        }

         if(this.props.llave === 'Glosa') {

                if(this.state.flagControl) {
                    return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                        )
                }else{
                  return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                            <JqxInput ref='controlJqxWidget' width={150} height={'28px'} value='' onClick={this.inputChange.bind(this)} theme={'nubox'}   />
                        </li>
                        )
                }
        }


        if(this.props.llave === 'Cliente') {

                if(this.state.flagControl) {
                    return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                        )
                }else{
                  return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                        <JqxInput ref='controlJqxWidget' width={150} height={'28px'}  source={this.state.clientes} theme={'nubox'} />
                        </li>
                        )
                }
        }

          if(this.props.llave === 'Fecha') {

              if(this.state.flagControl) {
                    return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                        //<li className={this.props.style} tabIndex=''>{this.props.value}</li>
                        )
                }else{
                  return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                            <JqxCalendar ref='controlJqxWidget' style={{ marginTop: 3 }}
                                width={220} height={220} theme={'nubox'}
                            />
                        </li>
                        )
                }
             }

               if(this.props.llave === 'CentroCostos') {

                if(this.state.flagControl) {
                    return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                        )
                }else{
                  return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                          <JqxDropDownList ref='controlJqxWidget'  width={150} height={'28px'} source={this.state.centrocosto}  selectedIndex={1} theme={'nubox'}  />
                        </li>
                        )
                }
             }

              if(this.props.llave === 'Sucursal') {

                if(this.state.flagControl) {
                    return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>{this.state.valor}</li>
                        )
                }else{
                  return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaControl.bind(this)}>
                          <JqxDropDownList ref='controlJqxWidget'  width={150} height={'28px'} source={this.state.sucursales}  selectedIndex={1} theme={'nubox'}  />
                        </li>
                        )
                }
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