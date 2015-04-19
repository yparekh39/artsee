$(function() {

  alert("Hello");
  
  Parse.$ = jQuery;

   Parse.initialize("mP9fATtA72KmHiH67v94mBbHgbZNI1VykBjUE6Jq", 
    "ezIPQKtoRxGgeW773TPkYdPmLwF37qrr1Yu2QqcO");

   Parse.FacebookUtils.logIn(null, {
    success: function(user) {
      if (!user.existed()) {
        alert("User signed up and logged in through Facebook!");
      } 
      else {
        alert("User logged in through Facebook!");
      }
    },
    error: function(user, error) {
      alert("User cancelled the Facebook login or did not fully authorize.");
    }
   });
});
