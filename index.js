import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("WELCOME");
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.Select == "staff") {
            console.log("You have reached the staff room. You can ask any question!");
        }
        else if (ans.Select == "student") {
            const studentAns = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name you wish to contact with:"
            });
            const student = persons.students.find(val => val.name == studentAns.student);
            if (!student) {
                const newStudent = new Student(studentAns.student);
                persons.addStudent(newStudent);
                console.log(`Hello, I am ${newStudent.name}. Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello, I am ${student.name}. Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.Select == "exit") {
            console.log("Exiting program...");
            break;
        }
    } while (true);
};
programStart(persons);
