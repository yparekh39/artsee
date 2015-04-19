var behance_api_key = "kVdG80vj5LranYUY2MzSu5cge0GTLsR7";
var image;
var rand_int = (Math.floor(Math.random()*10)+1);


	var query =
		{
			field: whichField(),
			//field: "fine+arts",
			page: rand_int
		}
	be(behance_api_key).project.search(query, function success(results2){
		be(behance_api_key).project(results2.projects[0].id, function success(results3){
			//console.log(results3);
			var i = 0;
			while(results3.project.modules[i].type != "image"){i++;}
			image = results3.project.modules[i].src;
			//console.log(image);
			var DOM_img = document.createElement("img");
			DOM_img.src = image;
			DOM_img.className = "Image"
			document.body.appendChild(DOM_img);
		});
	});
	








