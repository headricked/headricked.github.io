var idCounter = 1;

export class Milestone {
    constructor (/*id, */milestone, date, age, location, notes) {
        // this.id = id,
        this.id = idCounter++,
        this.milestone = milestone,
        this.date = date,
        this.age = age,
        this.location = location,
        this.notes = notes
    }
}