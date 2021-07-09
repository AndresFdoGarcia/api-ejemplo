const employeeCtrl = {}
const Employee = require('../models/EmpLoyee')

employeeCtrl.getEmployees = async (req,res) => {
    const employess = await Employee.find()
    res.json(employess)     
}
employeeCtrl.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body)

    await newEmployee.save()
    res.send({message: 'Employee created'})
}
employeeCtrl.getEmployee = async (req,res) => {    
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeeCtrl.editEmployee = async (req,res) => {
    await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'employee updated'})
}
employeeCtrl.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee Deleted'})
}


module.exports = employeeCtrl;