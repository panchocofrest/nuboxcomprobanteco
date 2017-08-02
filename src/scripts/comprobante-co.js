$(document).ready(function () {

  //MODAL COMPROBANTE
//   $("#jqxwindow").jqxWindow({
//     width: 1300,
//     maxWidth: 1300,
//     minWidth: 1300,
//     maxHeight: 660,
//     minHeight: 660,
//     height: 660,
//     autoOpen: true,
//     theme: "nubox",
//     title: "Nuevo Comprobante - Período 05/2017"
//  });

  //COLLAPSAR Y EXPANDIR
  $(".label").click(function(){

    var Label = $(this);
    var IDregistro = $(this).parent().parent()[0].id;

    $('#' + IDregistro).find(".level-2").each(function( index, value ) {

      if($(this).css("height")=='0px')
      {
        $(this).css({ "height":'auto' });
        $('#' + IDregistro).addClass("activo");
        var Label = $(this).parent().find(".label")[0];
        $(Label).removeClass("collapsed");
        $(Label).addClass("expanded");
      }
      else
      {
        $(this).css({ "height":'' });

        $('#' + IDregistro).removeClass("activo");
        var Label = $(this).parent().find(".label")[0];
        $(Label).removeClass("expanded");
        $(Label).addClass("collapsed");
      }

    });

    //console.log(IDsubregistro);
/*
    if($('#' + IDsubregistro).css("height")=='0px')
    {
      $('#' + IDsubregistro).css({
                            "height":'auto'
                        });
      $('#' + IDregistro).addClass("activo");
    }
    else
    {
      $('#' + IDsubregistro).css({
                          "height":''
                        });
          $('#' + IDregistro).removeClass("activo");
    }
    */
  });
});