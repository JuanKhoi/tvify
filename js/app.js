$(function(){
	$tvShowContainer = $('#app-body').find('.tv-shows')
	function renderShows(shows){
		$tvShowContainer.find('.loader').remove()//Quitar el Spinner
		shows.forEach(function(show){//forEach ejecuta una función para cada elemento de un array
 	 			var article = template
 	 			.replace(':name:', show.name)
 	 			.replace(':genres:', show.genres)
 	 			.replace(':language:', show.language)
 	 			.replace(':img:', show.image ? show.image.medium : '')
 	 			.replace(':summary:', show.summary)
 	 			.replace(':img alt:', show.name+"Logo")
 	 			var $article = $(article)
 	 			$tvShowContainer.append($article)// Esto se realiza en cada iteración
 	 			$article.hide()
 	 			$article.show('slow')
 	 	})

	}





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
     	$tvShowContainer.find('.tv-show').remove()//Quitamos los shows de la lista
	    var $loader = $('<div class=loader></div>')
	    $loader.appendTo($tvShowContainer)
        $.ajax({
        	url: 'http://api.tvmaze.com/search/shows',
        	data: {
        		q: query
        	}

        })
        .then(function(response, textStatus, xhr){
        	$loader.remove()
        		var shows = response.map(function(elemento){
        		return elemento.show
        	})
        		renderShows(shows)
        })
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

 	if(!localStorage.show){
 		$.ajax({
 	 	url: 'http://api.tvmaze.com/shows'})
 	 .then(function(shows, textStatus, xhr){
 	 	
 	 		localStorage.shows = JSON.stringify(shows)
 	 		renderShows(shows)
 	 })
 	}else{
 		renderShows(JSON.parse(localStorage.shows))
 	}

 	 
})

