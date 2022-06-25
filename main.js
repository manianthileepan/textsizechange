function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

   canvas=createCanvas(550,500);
   canvas.position(560,150);

   posenet=ml5.poseNet(video,modelloaded);
}
function draw(){
    background('#224290');
}

function  modelloaded(){
    console.log('poseNet is initialized!');
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}