difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(500, 550);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotResult);
}

function modelLoaded(){
    console.log("poseNet esta iniciandose!");
}

function gotResult(results){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
         rightWristX = results[0].pose.rightWrist.x;
         difference = floor(leftWristX - rightWristX);
         console.log(difference);
 } 
}

function draw()
{  background('blue');
 document.getElementById("font_size").innerHTML = "tamaño "+ difference;
 textSize(difference);
 fill('red');
 text("Hola", 30, 200);

}