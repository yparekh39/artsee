Parse.initialize("JKQCC3NxhfPOR6f43hZFlc5fcHkqdoWY98H9cfTo", "qYSzrmcDWVADqc4N5UuiOPCxseBEVaVFF0JJL9yq");
function whichField(callback){
	var Field = Parse.Object.extend("Fields");
	var query = new Parse.Query(Field);
	var returnVal;
	var choice;
	query.get("quMP49JkBm", {
	  success: function(field) {
	  	//var total = field.get("architecture")+field.get("branding")+field.get("fashion")+field.get("illustration")+field.get("photography")+field.get("artDirection")+field.get("graphicDesign")+field.get("industrialDesign")+field.get("interactionDesign")+field.get("motionGraphics")+field.get("webDesign");
	  	//var numChoice = Math.floor(Math.random()*total);
	 	
	  	
	  	var rand = function(min, max) {
	    	return Math.random() * (max - min) + min;
		};
	  	var getRandomItem = function(list, weight) {
		    var total_weight = weight.reduce(function (prev, cur, i, arr) {
		        return prev + cur;
		    });
		     
		    var random_num = rand(0, total_weight);
		    var weight_sum = 0;
		    //console.log(random_num)
		     
		    for (var i = 0; i < list.length; i++) {
		        weight_sum += weight[i];
		        weight_sum = +weight_sum.toFixed(2);
		         
		        if (random_num <= weight_sum) {
		            return list[i];
		        }
	    }    
	    // end of function
		};
		var list = ["architecture", "branding", "fashion", "illustration", "photography", "art+direction", "graphic+design", "industrial+design", "interaction+design", "motion+graphics", "web+design"];
	  	var weight = [field.get("architecture"), field.get("branding"), field.get("fashion"), field.get("illustration"), field.get("photography"), field.get("artDirection"), field.get("graphicDesign"), field.get("industrialDesign"), field.get("interactionDesign"), field.get("motionGraphics"), field.get("webDesign")];
	  	choice = getRandomItem(list, weight);
	  	console.log(choice);
	  	callback(choice);
	    // The object was retrieved successfully.
	  }
	});
}

function like(fieldName){
	var name;
	switch(fieldName){
		case "art+direction":
			name = "artDirection";
			break;
		case "graphic+design":
			name = "graphicDesign";
			break;
		case "industrial+design":
			name = "industrialDesign";
			break;
		case "interaction+design":
			name = "interactionDesign";
			break;
		case "motion+graphics":
			name = "motionGraphics";
			break;
		case "web+design":
			name = "webDesign";
			break;
		default:
			name = fieldName;
			break;
	}
	var Field = Parse.Object.extend("Fields");
	var query = new Parse.Query(Field);
	query.get("quMP49JkBm", {
		success: function(field){
			field.increment(name);
			field.save();
		}
	});
}

function dislike(fieldName){
	var name;
	switch(fieldName){
		case "art+direction":
			name = "artDirection";
			break;
		case "graphic+design":
			name = "graphicDesign";
			break;
		case "industrial+design":
			name = "industrialDesign";
			break;
		case "interaction+design":
			name = "interactionDesign";
			break;
		case "motion+graphics":
			name = "motionGraphics";
			break;
		case "web+design":
			name = "webDesign";
			break;
		default:
			name = fieldName;
			break;
	}
	var Field = Parse.Object.extend("Fields");
	var query = new Parse.Query(Field);
	query.get("quMP49JkBm", {
		success: function(field){
			field.increment(name, -1);
			field.save();
		}
	});

}
/*var user = new Parse.User();
user.set("username", "yash");
user.set("password", "pass");
user.set("email", "yparekh39@gmail.com");

/*user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    console.log("Signed Up bro");
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});*/

/*Parse.User.logIn("yash", "pass", {
  success: function(user) {
    // Do stuff after successful login.
    console.log("Logged in bro");
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});*/