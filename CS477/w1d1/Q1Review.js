let db = [
    {id:1, fname: 'John', lname: 'Smith'},
    {id:2, fname: 'Lucy', lname: 'Jark'},
    {id:3, fname: 'Edward', lname: 'Capton'}
];

class Student {
    constructor(id, firstname, lastname){
        this.id = id;
        this.fname = firstname;
        this.lname = lastname;
    };

    save(){
        let stu= db.find(student => student.id==this.id)
        if (stu){
            throw new Error ("Student already exists")
        } 
        else{
        db.push(this);
        }
    };

    edit(){
        let obj= db.find(elem => elem.id==this.id)
        if(obj.id<0){
            throw new Error ("Student doesn't exists")
        }
        else{
        obj.fname= this.fname;   // db[obj.id]= this;
        obj.lname= this.lname;
        console.log("EDIT: ", db,"\n")
        }
    };

    getById(id){
        let student= db.find(stud => stud.id==id)
        return student;
    };

    static getAll(){
        return db;
    };

    static deleteById(id){
        let index= db.indexOf(db.find(stud => stud.id==id));
        db.splice(index,1);
        return index+1;
    };
};

new Student(4, 'Paval', 'HAHA').save(); //save to db
new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4
let paval= new Student();
console.log("Student ", paval.deleteById(2), " removed! \n"); //remove studentId=4 from db
console.log("All students: ", paval.getAll(), "\n"); //return db;
console.log("Student with ID 1: ", paval.getById(1)); //return {id:1, fname: 'John', lname: 'Smith'}