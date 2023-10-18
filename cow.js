let cowInitialPosition = [30, 372];
let yCow = cowInitialPosition[1], xCow = cowInitialPosition[0];
// xCow = constrain(xCow, 0, xLim);
// yCow = constrain(yCow, 0, yLim);



function showCow(){
    image(cow, xCow, yCow, 27, 27);
}

function moveCow (){
    if(keyIsDown(UP_ARROW)){
        if (yCow > 3){
            yCow -= 3;
        }
    }    
    if(keyIsDown(DOWN_ARROW)){
        if (yCow < 400 - 30){            // trocar por xLim
            yCow += 3;
        }
    }
    if(keyIsDown(39)){  // to the right
        if (xCow < 470){        // trocar por yLim
            xCow += 3;
        }
        
    }
    if(keyIsDown(37)){  // to the left
        if (xCow > 3){
            xCow -= 3;
        }
    }
    
}

