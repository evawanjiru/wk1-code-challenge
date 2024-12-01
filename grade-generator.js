function gradeGrenerator(grade) {
  if(isNaN(grade)||grade < 0 || grade > 100) {
   return "Inavalid score. Please enter a number between 0 and 100"
  }
   switch (true) {
      case grade > 79:
         return "A"
      case grade >= 60 && grade <= 79:
         return "B"
      case grade >= 49 && grade <= 59:
         return "C"
      case grade >= 40 && grade <= 48:
         return "D"
      case grade < 40:
         return "E"
      default: 
      console.log("Invalid number")

   }
}
console.log(gradeGrenerator(90))
console.log(gradeGrenerator(69))
console.log(gradeGrenerator(55))
console.log(gradeGrenerator(40))
console.log(gradeGrenerator(55))
console.log(gradeGrenerator(15))
console.log(gradeGrenerator(300))






