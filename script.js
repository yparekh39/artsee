var behance_api_key = "kVdG80vj5LranYUY2MzSu5cge0GTLsR7";
var image;
var rand_int = (Math.floor(Math.random()*66)+1);


be(behance_api_key).fields(function success(results){
	console.log(rand_int);
	console.log(results.fields[rand_int]);
	console.log(results.fields[rand_int]);
	var firstField = results.fields[rand_int];
	console.log(escape(firstField.name.toLowerCase()).replace(/%20/g, '%2B'));
	
	be(behance_api_key).project.search(field=escape(firstField.name.toLowerCase().replace(/%20/g, '%2B')), function success(results2){
		console.log(results2);
		
		be(behance_api_key).project(results2.projects[0].id, function success(results3){
			console.log(results3);
			image = results3.project.modules[0].src;
			console.log(image);
			var DOM_img = document.createElement("img");
			DOM_img.src = image;
			DOM_img.className = "Image"
			document.body.appendChild(DOM_img);
		});
	});
	
	
});








