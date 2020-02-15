var data=[];
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
    // console.log(snapshot)
      var dates = Object.keys(snapshot.val());//dates
      var i=0;var arr=[];
      snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          var coursesDates = [];
          var courseName = Object.keys(childData);
          // console.log(courseName);// number of classes that day
          var nameit = Object.entries(childData) ;
          var arr1 = [];
          for(var x=0;x<nameit.length;x++){
            var id = Object.keys(nameit[x][1]);
            arr1.push([nameit[x][0],id]);
          }
            arr.push([dates[i],arr1]);
            i++;
      });
          // console.log(arr);

          var leadsRef1 = database.ref('studentList');
          leadsRef1.on('value', function(snapshot) {
          var course_ = Object.keys(snapshot.val());
          var y=0;var arr2=[];var arr_name=[];
          snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          var studentsRegisterd = Object.keys(childData);
          arr2.push([course_[y],studentsRegisterd])
          var sregName = Object.entries(childData);
          y++;
          arr_name.push(sregName);
          
        });
        // console.log(arr_name)
          // console.log(arr2); // arr2 conatains registered students.
            for(var a=0;a<arr.length;a++){
              for(var b=0;b<arr[a][1].length;b++){

                for(var b1=0;b1<arr2.length;b1++){
                  if(arr[a][1][b][0] === arr2[b1][0]){
                    for(var c=0;c<arr[a][1][b][1].length;c++){
                      for(var c1=0;c1<arr2[b1][1].length;c1++){
                        if(arr2[b1][1][c1] === arr[a][1][b][1][c]){
                            console.log(arr[a][1][b][1][c]); // Id of that person
                          if(arr2[b1][1][c1] === arr_name[b1][c1][0]){
                            console.log(arr_name[b1][c1][1]); // name of that person
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
      });
  });
