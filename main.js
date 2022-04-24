 Webcam.set({
    width : 400,
    height : 300,
    image_format : 'png',
    png_quality : 90
 }) 

 camera = document.getElementById("camera");

 Webcam.attach('#camera');

 function take_snapshot() {
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '" + data_uri + "'/>";
     })
 }

 console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Qu6pGh7sL/model.json');

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    document.getElementById("result_gesture_name").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        
        
    }
}
