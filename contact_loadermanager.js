$('body').append(`<div id="alert_div"></div>
  <div id="success_div"></div>
  <div id="loaderDiv" style="display:none;"><img src="olivrlib/loader/images/loader.gif" /></div>`);


function alertMsg(msg,time){
    $("#alert_div").html(msg);
    $("#alert_div").show();
    setTimeout(function(){ 
      $("#alert_div").hide();
    }, time);
}
