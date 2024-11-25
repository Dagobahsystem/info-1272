var studentGrade = parseInt(prompt("Let's get your letter grade.  Please enter a number grade between 0 and 100."));

// Checks results to ensure the value is between 0 - 100
if ( studentGrade >= 0 && studentGrade <= 100) {
} else if ( studentGrade < 0 || studentGrade > 100 ) {
    studentGrade = parseInt(prompt("The number was not between 0 and 100. Please enter a number grade between 0 and 100.")); 
} else {
    prompt("Unfortunately, you have entered an incorrect value.  We cannot display the results. Have a nice day.");
}

// Letter grade results prompt based on studentGrade value

if (studentGrade >= 90 && studentGrade <= 100) {
    alert("Your score is " + studentGrade +". Your letter grade is an A+.")
} else if (studentGrade >= 80 && studentGrade <= 89) {
    alert("Your score is " + studentGrade +". Your letter grade is an A.")
} else if (studentGrade >= 75 && studentGrade <= 79) {
    alert("Your score is " + studentGrade +". Your letter grade is an B+.") 
} else if (studentGrade >= 70 && studentGrade <= 74) {
    alert("Your score is " + studentGrade +". Your letter grade is an B.")
} else if (studentGrade >= 65 && studentGrade <= 69) {
    alert("Your score is " + studentGrade +". Your letter grade is an C+.")
} else if (studentGrade >= 60 && studentGrade <= 64) {
    alert("Your score is " + studentGrade +". Your letter grade is an C.")
} else if (studentGrade >= 55 && studentGrade <= 59) {
    alert("Your score is " + studentGrade +". Your letter grade is an D+.")
} else if (studentGrade >= 50 && studentGrade <= 54) {
    alert("Your score is " + studentGrade +". Your letter grade is an D.")
} else if (studentGrade <= 49) {
    alert("Your score is " + studentGrade +". Your letter grade is an F.")
} 




