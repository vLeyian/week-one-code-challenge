//Getting drivers speed
let speed = prompt("enter speed: ")

//Calculating demerit point and determining the output message.
 
function speedMessage(driverSpeed){
   //Defining speed limit 
    let speedLimit = 70 ;
    
    let oneDemeritPoint =5;

    // Calculating demerit points
    if(driverSpeed>speedLimit){

        //Calculation of speed above the speedlimit
        speedDifference = driverSpeed - speedLimit

        //calculation of demerit points.
        demeritPoints= speedDifference / oneDemeritPoint
    }
    else {
        demeritPoints= 0
    }

    //Determining the output message according to the demerit points
    if(demeritPoints>0.9 && demeritPoints<=11){
        message =`Points: ${demeritPoints} `;
    }

    else if(demeritPoints>11){
        message = "Lisence suspended";
    }

    else{
        message= `Ok`;
    }

    return message;
}

//calling the function
console.log(speedMessage(speed))