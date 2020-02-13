var dates_keys,classes,course_keys,Id_keys,courseName;
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDeUQZmPYeJQd8RnPx5teL_bEXlJClKmBU",
    authDomain: "cteattendance-61992.firebaseapp.com",
    databaseURL: "https://cteattendance-61992.firebaseio.com",
    projectId: "cteattendance-61992",
    storageBucket: "cteattendance-61992.appspot.com",
    messagingSenderId: "256228557223",
    appId: "1:256228557223:web:de55b04e67ae2f8b5bf682"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

//   console.log(database);
  // Getting data from classes
  
  var leadsRef = database.ref('classes');
  leadsRef.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          console.log(Object.keys(childData));
          childSnapshot.forEach(function(grandChildSanpshot){
            var grandChildData = grandChildSanpshot.val();
            console.log(Object.keys(grandChildData));
          })
          // var lastName = childSnapshot.child();
          // var id = Object.keys(lastName);
          // console.log(id)
      });
  });

  var leadsRef = database.ref('studentList');
leadsRef.on('value', function(snapshot) {
    console.log(Object.keys(snapshot.val()));
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(Object.keys(childData));
    });
});



