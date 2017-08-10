import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Grilla from './components/Comprobante/Grilla';

var source = {
    columns: [
        { key: 'Num', position: 0, start: false, header: { visible: true, label: null, class: 'numeracion', width: null }, row: { class: 'numeracion', align: null, width: null, type: null } },
        { key: 'Remove', position: 1, start: false, header: { visible: false, label: null, class: null, width: null }, row: { class: null, align: null, width: null, type: null } },
        { key: 'Cuenta', tipoControl: 'Autocomplete', position: 2, start: true, header: { visible: true, label: 'Cuenta', class: 'num-label-del', width: 100 }, row: { class: 'num-label-del normal no-border', align: 'left', width: 100, type: 'String' }, source:'clientes' },
        { key: 'Tipo', position: 3, start: false, header: { visible: false, label: null, class: null, width: null }, row: { class: 'label collapsed', align: null, width: null, type: null } },
        { key: 'Glosa', tipoControl: 'Input', position: 4, start: false, header: { visible: true, label: 'Glosa', class: null, width: 15 }, row: { class: 'normal', align: 'left', width: 15, type: 'String' } },
        { key: 'CentroCostos', tipoControl: 'Dropdown', position: 5, start: false, header: { visible: true, label: 'Centro de Costos', class: null, width: 20 }, row: { class: 'normal', align: 'left', width: 20, type: 'String' }, source:'centrocosto' },
        { key: 'Sucursal', tipoControl: 'Dropdown', position: 6, start: false, header: { visible: true, label: 'Sucursal', class: null, width: 10 }, row: { class: 'normal', align: 'left', width: 10, type: 'String' }, source:'sucursales' },
        { key: 'Debe', position: 7, start: false, header: { visible: true, label: '$ Debe', class: null, width: 10 }, row: { class: 'normal', align: 'right', width: 10, type: 'Int' } },
        { key: 'Haber', position: 8, start: false, header: { visible: true, label: '$ Haber', class: null, width: 10 }, row: { class: 'normal', align: 'right', width: 10, type: 'Int' } }
    ],
    default: { Id: 0, Num: 0, Remove: null, Cuenta: 'Cuenta', Tipo: { Label: 'vacia', LabelClass: 'nivel-li label collapsed' }, Glosa: 'Glosa', CentroCostos: 'Centro de costo', Sucursal: 'Sucursal', Debe: '$ Debe', Haber: '$ Haber', Movimientos: null },
    movimientos: {
        aux: {
            columns: [
                { key: 'Remove', position: 0, start: false, row: { class: 'borrar', align: null, width: null, type: null } },
                { key: 'Cliente', tipoControl: 'Autocomplete', position: 1, start: true, row: { class: 'num-del normal', align: 'left', width: 100, type: null }, source:'clientes'},
                { key: 'Documento', tipoControl: 'Dropdown', position: 2, start: false, row: { class: 'normal', align: 'left', width: 10, type: null }, source:'tipoDocumento' },
                { key: 'Numero', position: 3, start: false, row: { class: 'normal', align: 'left', width: 5, type: null } },
                { key: 'Fecha', tipoControl: 'DateTimeInput', position: 4, start: false, row: { class: 'normal', align: 'center', width: 15, type: null } },
                { key: 'FechaInicio', tipoControl: 'DateTimeInput', position: 5, start: false, row: { class: 'normal', align: 'center', width: 15, type: null } },
                { key: 'Debe', position: 6, start: false, row: { class: 'normal', align: 'right', width: 10, type: null } },
                { key: 'Haber', position: 7, start: false, row: { class: 'normal', align: 'right', width: 10, type: null } },
                { key: 'Saldo', position: 8, start: false, row: { class: 'normal', align: 'right', width: 10, type: null } }
            ],
            default: { Id: 0, Remove: null, Cliente: 'Cliente', Documento: 'Tipo Documento', Numero: 0, Fecha: 'Fecha de vencimiento', FechaInicio: 'Fecha Inicio', Debe: '$ Debe', Haber: '$ Haber', Saldo: '$ Saldo' }
        },
        ban: {
            columns: [
                { key: 'Remove', position: 0, start: false, row: { class: 'borrar', align: null, width: null, type: null } },
                { key: 'Cliente', tipoControl: 'Autocomplete', position: 1, start: true, row: { class: 'num-del normal', align: 'left', width: 100, type: null } },
                { key: 'Documento', tipoControl: 'Dropdown', position: 2, start: false, row: { class: 'normal', align: 'left', width: 20, type: null }, source:'tipoDocumento' },
                { key: 'Numero', position: 3, start: false, row: { class: 'normal', align: 'left', width: 5, type: null } },
                { key: 'Fecha', tipoControl: 'DateTimeInput', position: 4, start: false, row: { class: 'normal', align: 'center', width: 15, type: null } },
                { key: 'Debe', position: 5, start: false, row: { class: 'normal', align: 'right', width: 10, type: null } },
                { key: 'Haber', position: 6, start: false, row: { class: 'normal', align: 'right', width: 10, type: null } }
            ],
            default: { Id: 0, Remove: null, Cliente: 'Cliente', Documento: 'Tipo Documento', Numero: 0, Fecha: 'Fecha de vencimiento', Debe: '$ Debe', Haber: '$ Haber' }
        },
    }
}

// Render the main component into the dom
ReactDOM.render(
    <Grilla url='http://localhost:8000/dataGrid.json' source={source} />,
    document.getElementById('app'));
