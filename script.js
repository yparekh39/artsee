var behance_api_key = "kVdG80vj5LranYUY2MzSu5cge0GTLsR7";
var image;
var query;
function getImage(){

	var rand_int = (Math.floor(Math.random()*10)+1);
	whichField(function(choice) {
		query = {
				field: choice,
				//field: "fine+arts",
				page: rand_int
			}
			console.log(query.field);
		var rand2 = (Math.floor(Math.random()*12)+1);
		be(behance_api_key).project.search(query, function success(results2){
			be(behance_api_key).project(results2.projects[rand2].id, function success(results3){
				console.log(results3);
				var i = 0;
				while(results3.project.modules[i].type != "image"){i++;}
				/*if(document.getElementById("removeImg") != null || document.getElementById("removeBox") != null){
					document.body.removeChild(box);
					document.body.removeChild(DOM_img);
				}*/
				image = results3.project.modules[i].src;
				//console.log(image);			
				var DOM_img = document.createElement("img");
				DOM_img.src = image;
				DOM_img.className = "Image";
				//DOM_img.id = "removeImg";
				document.body.appendChild(DOM_img);
				var box = document.createElement("p");
				//box.id = "removeBox";
				var header = document.createElement("h1");
				var link = document.createElement("a");
				link.href=results3.project.url;
				var title = document.createTextNode(results3.project.name);
				header.appendChild(link);
				link.appendChild(title);
				box.appendChild(header);
				box.className = "Box";
				var header2 = document.createElement("h2");
				for(var i = 0; i < results3.project.owners.length; ++i){
					var text = results3.project.owners[i].first_name + results3.project.owners[i].last_name;
					text += "\n";
					var author = document.createTextNode(text);
					header2.appendChild(author);
				}
				box.appendChild(header2);
				
				var authors = document.createElement("ul");
				authors.className="Authors";
				
				for (var j = 0; j < results3.project.owners.length; ++j){
					var pro_pic = document.createElement("img");
					pro_pic.src = results3.project.owners[j].images[50];
					authors.appendChild(pro_pic);
				}
				box.appendChild(authors);
				
				document.body.appendChild(box);
			});
		});
	});
};

var scriptLike = function(){
	console.log(query.field);
	//alert(query.field);
	like(query.field);
	$(".Box").remove();
	$(".Image").remove();
	getImage();
	};

var scriptDislike = function(){
	console.log(query.field);
	dislike(query.field);
	$(".Box").remove();
	$(".Image").remove();
	getImage();
	};



$(function() {

	$('form').on('submit', function(e) {
		e.preventDefault();
		return false;
	});

});

