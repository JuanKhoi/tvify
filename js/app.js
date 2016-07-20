$(function(){
	/*
	* Submit de Search-Form
	*/
	$('#app-body')
	.find('form')
	.submit(function(ev){
		ev.preventDefault();//Quita el comportamiento de un Submit por defecto(Abre recarga páginas).
		var query  = $(this)
		.find('input[type="text"]')//Seleecionando el input
		.val()
		alert(query)
	})
})
