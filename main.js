function preload(){
    img = loadImage('https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg');
}

function setup(){
    canvas = createCanvas(650,500);
    canvas.position(300,350);
}

function draw(){
    image(img, 200, 150, 200, 150);

    fill(0,128,0);
    circle(100,120,50);

    fill(0,128,0);
    circle(100,350,50);

    fill(0,128,0);
    circle(500,120,50);
    
    fill(0,128,0);
    circle(500,350,50);

    fill(150,0,0);
    rect(120,120,360,5);

    fill(150,0,0);
    rect(120,350,360,5);

    fill(150,0,0);
    rect(100,130,5,200);

    rect(500,130,5,200);
}