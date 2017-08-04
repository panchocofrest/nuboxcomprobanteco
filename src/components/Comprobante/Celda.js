require('normalize.css/normalize.css');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import JqxInput from '../../public/js/jqwidgets-react/react_jqxinput.js';
import JqxCalendar from '../../public/js/jqwidgets-react/react_jqxcalendar.js';

class Celda extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {flagImput: true, flagCalendar: true, valorImput : "", valorCalendar: ""}
        this.expanded.bind(this)
        this.cargaImput = this.cargaImput.bind(this)
        this.cargaCalendar = this.cargaCalendar.bind(this)
        this.renderCelda = this.renderCelda.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.changeImputVal = this.changeImputVal.bind(this)
        this.changeCalendarVal = this.changeCalendarVal.bind(this)
    }


    componentDidMount () 
    {
       //console.log(this.props)
     if(this.props.llave === 'Glosa') {
            this.setState(() => {
                return {valorImput: this.props.value};
            });   
         }
      if(this.props.llave === 'Fecha') {
            this.setState(() => {
                return {valorCalendar: this.props.value};
            });   
         }
    }

    inputChange()
    {
        console.log('paso')
    }

    expanded(event) {
       
        var Label = $(event.currentTarget);

        if (Label.hasClass("label-noexpand"))
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

    changeImputVal(valor){

          this.setState(() => {
               return {valorImput: valor,flagImput: true};
        });    
    }

     changeCalendarVal(valor){

          this.setState(() => {
               return {valorCalendar: valor,flagCalendar: true};
        });    
    }
    
    cargaImput(){
  
     this.setState(() => {
        

          if(!this.state.flagImput)
        {
           

            this.refs.imputJqxWidget.on('change', (event) =>
            {
                console.log(event.target.value)
                this.changeImputVal(event.target.value)
            });
        }
        return {flagImput: false};
        });

    }

      cargaCalendar(){
  
     this.setState(() => {
         console.log(this.state.flagCalendar)

          if(!this.state.flagCalendar)
        {
            console.log(this.state.flagCalendar)

            this.refs.calendarJqxWidget.on('change', (event) =>
            {
                console.log(event.target.value)
                this.changeCalendarVal(event.target.value)
            });
        }
        return {flagCalendar: false};
        });

    }

    renderCelda() {
        if(this.props.llave === 'Remove') {
            return(
                <li className={this.props.style}></li>
            )
        }

        if(this.props.llave === 'Tipo') {
            return(
                <li className={this.props.value.LabelClass + ' ' + this.props.value.Label} onClick={this.expanded}></li>
            )
        }

         if(this.props.llave === 'Glosa') {

                if(this.state.flagImput) {
                    return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaImput.bind(this)}>{this.state.valorImput}</li>
                        )
                }else{
                  return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaImput.bind(this)}>
                            <JqxInput ref="imputJqxWidget" width={150} height={50} value="" onClick={this.inputChange.bind(this)}   />
                        </li>
                        )
                }
        }

          if(this.props.llave === 'Fecha') {

              if(this.state.flagCalendar) {
                    return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaCalendar.bind(this)}>{this.state.valorCalendar}</li>
                        //<li className={this.props.style} tabIndex=''>{this.props.value}</li>
                        )
                }else{
                  return(
                        <li className={this.props.style} tabIndex='' onClick={this.cargaCalendar.bind(this)}>
                            <JqxCalendar ref='calendarJqxWidget' width={220} height={220} culture= 'de-DE'/>
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