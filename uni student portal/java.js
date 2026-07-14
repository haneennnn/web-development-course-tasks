let studentname = prompt("Enter student name:");
let attendance = Number(prompt("Enter attendance percentage:"));
let midterm = Number(prompt("Enter midterm score:"));
let finalexam = Number(prompt("Enter final exam score:"));
let assignment = Number(prompt("Enter assignment score:"));
let tuition = prompt("Is tuition paid? (Yes/No)");

if (tuition === "No") {
    console.log("Results cannot be viewed because tuition is unpaid.");
} else if (attendance < 75) {
    console.log("Student: " + studentname);
    console.log("Status: Fail (Low Attendance)");
} else {
    let total = midterm + finalexam + assignment;
    let grade = "";

    if (total >= 90) {
        grade = "A";
    } else if (total >= 80) {
        grade = "B";
    } else if (total >= 70) {
        grade = "C";
    } else if (total >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status;
    if (grade === "F") {
        status = "Fail";
    } else {
        status = "Pass";
    }

    console.log("Student: " + studentname);
    console.log("Total Score: " + total);
    console.log("Grade: " + grade);
    console.log("Academic Status: " + status);

    if (grade === "A+" || grade === "A") {
        console.log("Congratulations! You are eligible for a scholarship.");
    }
}