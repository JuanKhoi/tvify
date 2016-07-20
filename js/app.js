$(function(){
	/*
	* Submit de Search-Form
	*/
	$('#app-body')
	.find('form')
	.submit(function(ev){
		ev.preventDefault()//Quita el comportamiento de un Submit por defecto(Abre recarga páginas).
		var query  = $(this)
		.find('input[type="text"]')//Seleecionando el input
		.val()
		alert(query)
	})
	/*
	*Template para articulo
	*/
	var template = '<article class="tv-show">'+ 				
				'<div class="left img-container">' +
 				'<img src=":img:" alt="img alt">' +
 				'</div>' +
 				'<div class="right info">' +
 				'<h1><strong>Name:</strong> :name:</h1>' +
 				'<h4><strong>Genres:<strong/> :genres:</h4>'+
 				'<h4><strong>Language:<strong/> :language:</h4>'+
 				'<p>:summary:</p>' +
 				'</div>' +
 			'</article>'

 	/*
    *Petición AJAX de todos los shows
 	*/

 	 $.ajax({
 	 	url: 'http://api.tvmaze.com/shows',
 	 	success: function(shows){
 	 		shows.forEach(function(show){//forEach ejecuta una función para cada elemento de un array
 	 			var article = template
 	 			.replace(':name:', show.name)
 	 			.replace(':genres:', show.genres)
 	 			.replace(':language:', show.language)
 	 			.replace(':img:', show.image.medium)
 	 			.replace(':summary:', show.summary)
 	 			.replace(':img alt:', show.name+"Logo")
 	 			
 	 			$('#app-body')
 	 			.find('.tv-shows').append($(article))// Esto se realiza en cada iteración
 	 	})
 	 	}
 	 })


})
