//code started
//x and y cordintes var
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
//two variable to hold two music files
//var1
var music1 = "";
//var2
var music2 = "";
//function preload
function preload(){
//preloading music files
    music1 = loadSound("music1.mp3");
    music2 = loadSound("music2.mp3");
}

//function setup
function setup(){
    //adding cavas
    canvas = createCanvas(400, 400);
    canvas.position(440, 160);
    //ading video
    video = createCapture(VIDEO);
    //hiding extra compnent
    video.hide();
    //intializing posenet
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

//function model loaded
function modelLoaded(){
    console.log("posenet intialized");
}

//fuction draw
function draw(){
    //addig video in canvas
    image(video, 0, 0, 400, 400)
}

//got poses
function gotPoses(results){
    //consoling reults
    console.log(results);
    //assinging and consoling left wrist values
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left wrist x "+leftWristX+" leftWristY "+leftWristY);

    //assinging and consoling right wrist values
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right wrist x "+rightWristX+" rightWristY "+rightWristY);
}