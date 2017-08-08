require('normalize.css/normalize.css');
import React from 'react';
//import ReactDOM from 'react-dom';
import $ from 'jquery';
import JqxInput from '../../public/js/jqwidgets-react/react_jqxinput.js';
import JqxCalendar from '../../public/js/jqwidgets-react/react_jqxcalendar.js';

class Celda extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {flagControl: true,  valor : ""}
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
        

          if(!this.state.flagControl)
        {
           

            this.refs.controlJqxWidget.on('change', (event) =>
            {
                console.log(event.target.value)
                this.changeControlVal(event.target.value)
            });
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
                            <JqxInput ref="controlJqxWidget" width={150} height={50} value="" onClick={this.inputChange.bind(this)}   />
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
                            <JqxCalendar ref='controlJqxWidget' width={220} height={220} culture= 'de-DE' />
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