
//Selecting various tags from the document
const marksInput = document.querySelector(".grade");
const Button = document.querySelector(".calcBtn");

//Adding an event listener to the button
Button.addEventListener("click", () => {
  calculateStudentGrade(parseInt(marksInput.value, 10));
});

//Function for calculating the grade based on the marks
const calculateStudentGrade = (grade) => {
  if (!(grade < 0 || grade > 100)) {
    if (grade > 79) {
      alert("A");
    } else if (grade >= 60) {
      alert("B");
    } else if (grade >= 49) {
      alert("C");
    } else if (grade >= 40) {
      alert("D");
    } else if (grade < 40) {
      alert("E");
    }
  } else {
    alert("Invalid Grade. Enter a grade value between 0 and 100");
  }
};