function Developer(name){
    this.name=name;
    this.type="Developer"
   
}
class Tester{
    constructor(name){
        this.name=name;
        this.type="Tester";
    }
}

class EmployeeFactory{
    createEmployee(name,type){
        switch(type){
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
        }
    }
    
}
let presentation =(list)=>{
    console.log("My name is "+ list.name + " and I am a "+list.type)
}
let employeeList=[];
let employee=new EmployeeFactory();
employeeList.push(employee.createEmployee("Dude",1)) 
employeeList.push(employee.createEmployee("Another Dude",2))

for (employee of employeeList){
    presentation(employee);

}
