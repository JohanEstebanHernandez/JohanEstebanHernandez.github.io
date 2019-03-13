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
}
