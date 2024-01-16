 //student grading function
 function gradeStudent(marks){
    if(marks > 79 && marks <= 100){
        return "A";
    }
    else if(marks <= 79 && marks >= 60){
        return "B";
    }
    else if(marks <= 59 && marks >= 49){
        return "c";
    }
    else if(marks <= 48 && marks >= 40){
        return "D";
    }
    else if(marks < 40){
        return "E";
    }
    else {
        return "Invalid grade input"
    }
}


//prompt user to enter grade
let score= prompt("Enter your marks: ")
// calling the function
console.log(gradeStudent(score))