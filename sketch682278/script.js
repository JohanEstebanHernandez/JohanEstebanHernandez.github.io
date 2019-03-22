var cruzList= [ ];

function setup() {
	createCanvas(windowWidth,windowHeight);
  background(0);
 for (var i = 0; i < 12; i++){
    var cruzTemp = new Cruz(i*25, i*100);
    cruzList.push( cruzTemp );
  }
}
  
function draw() {  
 background(0);
  for (var j = 0; j < cruzList.length; j++)
  {
    var cruzTemp = cruzList[ j ];
    cruzTemp.display();
    cruzTemp.move();
      for (var i = 0; i < cruzList.length; i++) {
      if (dist(cruzList[ i ].xpos, cruzList[ i ].ypos, cruzList[ i ].xpos, cruzList[ i ].ypos) > -1) {
        stroke(random(128), random(87), random(255));
        line(cruzList[ j ].xpos, cruzList[ j ].ypos, cruzList[ i ].xpos, cruzList[ i ].ypos);
      }
    }
  }
	botones();
}
	
function botones() {	
  fill(255,255,255,30);                       //BOTONES
	//noStroke();
	rectMode(CENTER);
	textAlign(CENTER);
	textSize(30);
	textStyle(BOLDITALIC);
	
	rect(width/5,height/2+200,350,75);
	fill(255);
	text("OpenProcessing",width/5,height/2+210)
	fill(255,255,255,30);
	
	rect(width/2,height/2+200,350,75);
	fill(255);
	text("Youtube",width/2,height/2+210);
	fill(255,255,255,30)
	
	rect(width/1.25,height/2+200,350,75);
	fill(255);
	text("Github",width/1.25,height/2+210);
	
}

	function mousePressed() {
	
	 if(mouseX > (width/2) && mouseX < (width/2) && mouseY > (height/2 + 210) && mouseY < (height/2 + 210)) {
	 window.open('https://www.youtube.com/');
	 }
	 if(mouseX > (width/5) && mouseX < (width/5) && mouseY > (height/2 + 210) && mouseY < (height/2 - 210)) {
	    window.open('https://www.openprocessing.org/user/121736/#sketches');
	 }
   if(mouseX > (1024) && mouseX < (1024) && mouseY > (height/2 + 210) && mouseY < (height/2 - 210)) {
	    window.open('https://github.com/JohanEstebanHernandez/JohanEstebanHernandez.github.io');
	 }
	}
	