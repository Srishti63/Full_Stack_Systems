class Student {
    constructor(name, scores) {
        this.name = name,
            this.scores = scores
    }

    getTotal() {
        // let total = 0
        // for (let score of this.scores) {
        //     total = score + total
        // }
        // return  total

        const total = this.scores.reduce((sum, score) => sum + score, 0)
        return total

    }

    getAvg() {
        return this.getTotal() / this.scores.length
    }

    getGrade(score) {
        if (score >= 90) return "A*"
        else if (score >= 80) return "A"
        else if (score >= 70) return "B+"
        else if (score >= 65) return "B"
        else if (score >= 60) return "C+"
        else if (score >= 50) return "C"
        else if (score >= 40) return "D+"
        else return "Fail"
    }

    getRemark(grade) {
        switch (grade) {
            case "A*": return "Exceptional!"
            case "A": return "Excellent!"
            case "B+": return "Very Good!"
            case "B": return "Good!"
            case "C+": return "Above Average"
            case "C": return "Average"
            case "D+": return "Below Average"
            default: return "Failed"
        }
    }

    summary() {
        let highest = this.scores[0]
        let lowest = this.scores[0]
        for (let i = 0; i < this.scores.length; i++) {
            if (this.scores[i] > highest) {
                highest = this.scores[i]
            } if (this.scores[i] < lowest) {
                lowest = this.scores[i]
            }
        }
        return { highest, lowest }
    }
}

const name = process.argv[2]
const scores = process.argv.slice(3).map(Number)

if (scores.length < 3) {
    console.log("Please enter at least 3 subjects marks")
    process.exit(1)
}

const student = new Student(name, scores)


console.log("=======================================================")

console.log("**REPORT CARD**")

console.log(`Student : ${student.name} `)

const [score1 ,score2 , ...remaining] = scores

console.log(score1)
console.log(score2)
remaining.forEach(score => console.log(score))

console.log(`Total Marks:, ${student.getTotal()} `)
console.log(`Average: ${student.getAvg().toFixed(1)} `)
console.log(`Grade: ${student.getGrade(student.getAvg(scores))} `)

const grade = student.getGrade(student.getAvg())
const result = student.getAvg() >= 60 ? "PASS" : "FAIL"

console.log(`Remark : ${student.getRemark(grade)}`)
console.log(`Result : ${result}`)

const {highest,lowest} = student.summary()

console.log(`Maximum marks otained: ${highest} and Minimum marks obtained ${lowest} `)


console.log("=========================================================")


