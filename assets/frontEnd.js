$(document).ready(function(){

		console.log("JS is linked and ready!");
	//on click of get data button, populate our tables with our DB data.
	// $('#getDataBtn').on('click',function(){
		//AJAX our DB with a GET request to a route we've set up.
		$.ajax({
			url:'/reservationsAPI',
			method:'GET'
		}).done(function(res){
			//with the received response, do the following.

			//always check your data so you can parse through it.
			console.log(res);

			//delete old data from the table to avoid a long list of duplicates on your webpage.
			$('#dataTable').html('');
			$('#waitTable').html('');

			//placeholder value to hold our upcoming table data.
			let dataToInsert = "";
			let waitToInsert = "";
			if(res.length > 4){
				//loop through returned results of our ajax call and create table rows.
				for(let i=0; i<5; i++){
					dataToInsert += "<div class='dataWell'>" + res[i].id +  ".  Party name: " + res[i].name + "  Reveration date: " + res[i].startTime + "  Party size: " + res[i].partySize +"</div>";
				};//end loop.

				//wait list divs
				for(let i= 5; i < res.length; i++){
					waitToInsert += "<div class='dataWell'>" + res[i].id +  ".  Party name: " + res[i].name + "  Reveration date: " + res[i].startTime + "  Party size: " + res[i].partySize +"</div>";
				};//end loop.

				//once loop is finished, shove all that data onto the page.
				$('#dataTable').html(dataToInsert);
				$('#waitTable').html(waitToInsert);
			} else{
				//reservation list divs
				for(let i=0; i < res.length; i++){
					dataToInsert += "<div class='dataWell'>" + res[i].id +  ".  Party name: " + res[i].name + "  Reveration date: " + res[i].startTime + "  Party size: " + res[i].partySize +"</div>";
				};//end loop.
				//once loop is finished, shove all that data onto the page.
				$('#dataTable').html(dataToInsert);
			}

		});//end .done
	// });//end click


});