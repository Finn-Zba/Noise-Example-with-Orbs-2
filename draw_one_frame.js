/* 
   getNoiseValue arguments:
     x: current grid location across
     y: current grid location down
     loop: can be any value from 0-1 and will loop
     name: the "name" of the lookup table. probably change this each time.
     min/max: the minimum and maximum of the value to return
     smoothness: 1 means elements are not related. larger numbers cause groupings.
*/

function draw_one_frame(cur_frac) {
noStroke()
let backgroundColor = color("#dbbea1")
fill(backgroundColor)
//rect(0,0, width, height)
////////////////////////////////////////////
let mainColor = color("#3F292B") // brown
let backupColor = color("#D34F73") // blush
let DetailColor = color("#DB7F67")


let noiseColor;
let noiseyColor; 
let moveXMap;



let orbSize = width / 5
let spacingSize = width / 19
let numb = ['1','2','3','4','5','6','7','8','9','0'];


//////////////////////////////////////////////
fill(mainColor)

for(let accross = 1; accross < width /spacingSize; accross++ ){
	for(let down = 1; down +1 < height /spacingSize; down++){		
		
	noiseColor = getNoiseValue(spacingSize*accross,spacingSize*down, cur_frac, "noiseColor",0,1, 200 )
	noiseyLerp = lerpColor(mainColor,backupColor,noiseColor)  // https://p5js.org/reference/#/p5/lerpColor
	fill(noiseyLerp)
	//ellipse(spacingSize*accross,spacingSize*down ,orbSize)

		if(cur_frac > 0.3 && noiseColor < 0.3){
			fill(225)
			moveXMap = map(cur_frac,0.3, 1, spacingSize*accross, spacingSize*(accross+1))
			noiseSeed(99);
			//ellipse(moveXMap,spacingSize*down,orbSize/15)
			fill(100,216,107)
			textSize(50);
			text(random(numb), moveXMap,spacingSize*down,orbSize)
			

			
			
			
			function draw_one_frame(cur_frac) {
noStroke()
let backgroundColor = color("#dbbea1")
fill(backgroundColor)
rect(0,0, width, height)
////////////////////////////////////////////
let mainColor = color("#3F292B") // brown
let backupColor = color("#D34F73") // blush
let DetailColor = color("#DB7F67")


let noiseColor;
let noiseyColor; 
let moveXMap;


let orbSize = width / 100
let spacingSize = width / 50


//////////////////////////////////////////////
fill(mainColor)

for(let accross = 1; accross < width /spacingSize; accross++ ){
	for(let down = 1; down +1 < height /spacingSize; down++){		
		
	noiseColor = getNoiseValue(spacingSize*accross,spacingSize*down, cur_frac, "noiseColor",0,1, 200 )
	noiseyLerp = lerpColor(mainColor,backupColor,noiseColor)  // https://p5js.org/reference/#/p5/lerpColor
	fill(noiseyLerp)
	ellipse(spacingSize*accross,spacingSize*down ,orbSize)

		if(cur_frac > 0.3 && noiseColor < 0.3){
			fill(225)
			moveXMap = map(cur_frac,0.3, 100, spacingSize*accross, spacingSize*(accross+1))
			text(random(numb),moveXMap,spacingSize*down,orbSize/100);
			///ellipse(moveXMap,spacingSize*dmoveXMap,orbSize); 
	

		}
	}
}
			}
		}
	}
}

function drawflower(i,k){
	if(i%2==1){
		//rotate(random);
		//fill(255,(k*0.4)%255,30);
		fill(255);
		ellipse(0,0,100,100);
		fill(232, 116, 32);
		stroke(k%249, 252, 43);
		arc(25,0,100+i+200*sin(k*PI/24),100,400,PI / 100);
		fill(249, 252, 43);
		ellipse(0,0,200,200);
	}
	else{
		//fill(k%255,0,255);
		//stroke(0,(k*0.4)%255,255);
		//arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
	}

}



}


