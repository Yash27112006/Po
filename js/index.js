
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzwO7oMHN4KMpWIDU0FUUZu7OCEjb7ekI",
    authDomain: "wanted-24a64.firebaseapp.com",
    databaseURL: "https://wanted-24a64.firebaseio.com",
    projectId: "wanted-24a64",
    storageBucket: "wanted-24a64.appspot.com",
    messagingSenderId: "56215061520",
    appId: "1:56215061520:web:793d1f5e8dd89dbb1d7695"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();

      if(email !== null && password !== null){
         var result = firebase.auth().signInWithEmailAndPassword(email, password);

         result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
         });
      }
      else{
          window.alert("Please fill out all fields. ")
      }
      if(email === "wantedchorpolice@gmail.com" && password === "wantedPolice"){
        window.location.href = "index4.html";
      }
  }
  );


  $("#btn-signup").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();


    if(email !== null && password !== null && cPassword !== null){
       if(password === cPassword){
        var result = firebase.auth().createUserWithEmailAndPassword(email, password);

        result.catch(function(error){
           var errorCode = error.code;
           var errorMessage = error.message;
 
           console.log(errorCode);
           console.log(errorMessage);
 
           window.alert("Message : " + errorMessage);
        });
    }
        else{
            window.alert("Password do not match with the Confirm Password")
        }
    }
    else{
        window.alert("Please fill out all fields. ")
    }
}
);



$("#btn-update").click(function(){
    var phone = $("#phone").val();
    var address = $("#address").val();
    var fName = $("#firstName").val();
    var sName = $("#secondName").val();
    var gender = $("#gender").val();

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if(phone !== null && address !== null && fName !== null && gender !== null && sName !== null){
          var userData = {
             "phone":phone,
             "address":address,
             "gender":gender,
             "firstName":fName,
             "secondName":sName
          };

           usersRef.set(userData, function(error){
              if(error){
                var errorCode = error.code;
                var errorMessage = error.message;
      
                console.log(errorCode);
                console.log(errorMessage);
      
                window.alert("Message : " + errorMessage);
              }
              else{
                 window.location.href = "home.html";
              }
           });

    }
    else{
        window.alert("Please fill out all fields.")
    }
});    
    
$("#btn-resetPassword").click(function(){
    var auth = firebase.auth();
    var email = $("#email").val();

    if(email !== ""){
        auth.sendPasswordResetEmail(email).then(function(){
            window.alert("Email has been sent to you, Please check and verify.");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
  
            console.log(errorCode);
            console.log(errorMessage);
  
            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("Please enter your email first.")
    }


});    
   