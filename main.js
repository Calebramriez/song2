song="";
song1="";
function preload(){
song=loadSound("music.mp3");
song1=loadSound("music.mp3");
}


rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";
scoreLeftWrist=0;
scoreRightWrist=0;

function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,600,500);
fill("red");
stroke("red");
if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,20);

song.stop();
song1.play();

}
if(scoreRightWrist>0.2){
    circle(rightWristX,rightWristY,20);
   
    song1.stop();
    song.play();
  
    }
}

function modelLoaded(){
console.log("modelLoaded");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftwristX="+leftWristX+"leftWristY="+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightwristX="+rightWristX+"rightWristY="+rightWristY);
scoreLeftWrist=results[0].pose.keypoints[9].score;
scoreRightWrist=results[0].pose.keypoints[10].score;
console.log("scoreLeftWrist="+scoreLeftWrist);
}
}