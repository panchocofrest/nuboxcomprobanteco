require('normalize.css/normalize.css');

import React from 'react';
import $ from 'jquery';

class Celda extends React.Component {

    constructor(props)
    {
        super(props)
    }

    expanded(event) {
        debugger
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