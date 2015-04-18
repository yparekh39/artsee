var behance_api_key = "kVdG80vj5LranYUY2MzSu5cge0GTLsR7";
var image;
be(behance_api_key).project('4889175', function success(results){
	image = results.project.modules[0].src;
	//console.log(image);
	console.log(image);
	var DOM_img = document.createElement("img");
	DOM_img.src = image;
	DOM_img.className = "Image"
	document.body.appendChild(DOM_img);
	//results.project.covers.202
});
