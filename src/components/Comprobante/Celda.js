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
          
       
        this.state = {flagControl: true,  valor : '', countries: [],dropdown : []}
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
               return { countries: new Array('Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea- Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'),
             dropdown :  [
            'Affogato',
            'Americano',
            'Bicerin',
            'Breve',
            'Café Bombón',
            'Café au lait',
            'Caffé Corretto',
            'Café Crema',
            'Caffé Latte',
            'Caffé macchiato',
            'Café mélange',
            'Coffee milk',
            'Cafe mocha',
            'Cappuccino',
            'Carajillo',
            'Cortado',
            'Cuban espresso',
            'Espresso',
            'Eiskaffee',
            'The Flat White',
            'Frappuccino',
            'Galao',
            'Greek frappé coffee',
            'Iced Coffee﻿',
            'Indian filter coffee',
            'Instant coffee',
            'Irish coffee',
            'Liqueur coffee'
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
        
       if(!this.state.flagControl)
        {
           
            this.refs.controlJqxWidget.on('change', (event) =>
            {
            if(this.props.llave != "CentroCostos"){
                    this.changeControlVal(event.target.value)
               }
            });

            if(this.props.llave == "CentroCostos"){
                this.refs.controlJqxWidget.on('select', (event) => {
                    let args = event.args;
                    let item = this.refs.controlJqxWidget.getItem(args.index);
                    debugger
                   
                    if (item != null) {
                    
                    }
                    this.changeControlVal(item.label)
                    
                });
            }

               if(this.props.llave == "Fecha"){

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
                        <JqxInput ref='controlJqxWidget' width={150} height={'28px'}  source={this.state.countries} theme={'nubox'} />
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
                          <JqxDropDownList ref='controlJqxWidget'  width={150} height={'28px'} source={this.state.dropdown}  selectedIndex={1} theme={'nubox'}  />
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