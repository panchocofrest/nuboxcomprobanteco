require('normalize.css/normalize.css');
import React from 'react';
//import ReactDOM from 'react-dom';
import $ from 'jquery';
import JqxInput from '../../public/js/jqwidgets-react/react_jqxinput.js';

class Celda extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {flagImput: true, valorImput : ''}
        this.expanded.bind(this)
        this.cargaImput = this.cargaImput.bind(this)
        this.renderCelda = this.renderCelda.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.changeImputVal = this.changeImputVal.bind(this)
    }


    componentDidMount ()
    {
        if(!this.state.flagImput)
        {
            //console.log(this.state.flagImput)
            this.refs.algo.val('New Value');
        }
    }

    inputChange()
    {
        //console.log('paso')
    }

    expanded(event) {
        debugger
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

    changeImputVal(valor){
        this.setState(() => {
            return {valorImput: valor,flagImput: true};
        });
    }
    
    cargaImput(){
  
     this.setState(() => {
         //console.log('cambia de estado')
        if(!this.state.flagImput)
        {
            //console.log(this.state.flagImput)
            this.refs.algo.on('change', (event) =>
            {
                //console.log(event.target.value)
                this.changeImputVal(event.target.value)
            });
        }
        return {flagImput: false};
        });

    }

    renderCelda() {
        if(this.props.llave === 'Remove') {
            return(
                <li className={this.props.style}></li>
            )
        }

        if(this.props.llave === 'Tipo') {
            debugger
            let style = (this.props.value === 'ban' || this.props.value === 'aux') ? 'label collapsed' : 'label-noexpand'
            let css = 'nivel-li ' + this.props.value + ' ' + style
            return(
                <li className={css.trim()} onClick={this.expanded}></li>
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
                            <JqxInput ref="algo" width={150} height={50} value="" onClick={this.inputChange.bind(this)}   />
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