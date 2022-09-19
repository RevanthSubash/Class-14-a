var student = {
  name:"Revanth",
  grade: 6,
  favSubject: "Math",
  marks: [100, 97, 99, 95, 100]


}

console.log (student.name)
console.log (student.grade)
console.log (student.favSubject)
student.favSubject = "Science"
console.log (student.favSubject)

console.log (student.marks)
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}