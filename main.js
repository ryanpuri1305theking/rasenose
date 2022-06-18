function preload() {
rasengan = loadImage(
  "https://i.postimg.cc/zGnsXcxn/rasengan-removebg-preview.png"
);   
}
noseX = 0;
noseY = 0;
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO) 
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose",gotPoses)
}
function draw() {
    image(video, 0, 0, 300, 300) 
    image(rasengan,noseX-27,noseY-30,70,70)
}
function take_snapshot() {
    save("ryan.png")
}
function modelLoaded() {
    console.log("poseNet is initialized")
}
function gotPoses(results) {
if (results.length>0) {
    console.log(results) 
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + results[0].pose.nose.x) 
     console.log("noseY = " + results[0].pose.nose.y);
}
}