song1 = "" ;
song2 = "" ; 


function preload() { 

song1 = loadSound("music.mp3")
song2 = loadSound("music2.mp3")
} 


function setup() { 

canvas = createCanvas(600 , 500) ; 
canvas.center() ;  
 
video = createCapture(VIDEO) ; 
video.hide() ; 
} 

function draw() { 

image(video , 0 , 0 , 600 , 500) ; 

} 

scorerightWrist = 0 ;
scoreleftWrist = 0 ; 

rightWristX = 0 ; 
rightWirstY = 0 ; 

leftWristX = 0 ;
leftWristY = 0 ;


function gotposses(result) { 
     
    if(Results.length>0) { 

        console.log() 

        scoreleftWrist = results[0].pose.keypoint[9].score ; 
        scorerightWrist = results[0].pose.keypoint[9].score ; 

        rightWristX = results[0].pose.rightWristX ;
        rightWristY = results[0].pose.rightWristY  ; 
        console.log("rightWristX = " + rightWirstX + "rightWristY = " + rightWirstY) ; 

        leftWristX = results[0].pose.leftWristX ;  
        leftWristY = results[0].pose.leftWristY  ; 
        console.log("leftWristX = " + leftWirstX + "leftWristY = " + leftWirstY) ;  
    } 

function play() { 

song.play() 
song.setVolume(1) ;
song.rate(1) ;
}
} 