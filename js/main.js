var firebaseConfig = {
    apiKey: "AIzaSyBZ0L24_TqZo6qt51Yp3zPcrf6lvUJVQak",
    authDomain: "fir-webapp-d8673.firebaseapp.com",
    databaseURL: "https://fir-webapp-d8673.firebaseio.com",
    projectId: "fir-webapp-d8673",
    storageBucket: "fir-webapp-d8673.appspot.com",
    messagingSenderId: "657421348475",
    appId: "1:657421348475:web:460d08b09d278f468afcde",
    measurementId: "G-QQ5JB518C2"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef = firebase.database().ref('contactformmessages');

  $('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});