const express = require('express');
const router = express();
const Employee = require('../models/employee.model');

//Request URL http://localhost:3000/employees
router.get('/', (req, res) => {
    Employee.find((err, employees) => {
        if (err) throw err;
        res.render('employee/employee', { employees });       
    })
});

//Request URL http://localhost:3000/employees/employee-add
router.get('/employee-add', (req, res) => {
    res.render('employee/employee-add'); 
});
 
//Request URL http://localhost:3000/employees-update/61b6f77f2032617122abe42c
router.get("/employee-update/:id", (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        res.render('employee/employee-update', { employee: employee });        
    })
});

//Request URL http://localhost:3000/employees/61b6f77f2032617122abe42c
router.get("/:id", (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        res.render('employee/employee-detail', { employee: employee });        
    })
});

//Request URL Post http://localhost:3000/employees
router.post('/', (req, res) => {
    var employee = new Employee(req.body);
    Employee.create(employee, (err, employee) => {
        if (err) throw err;
        Employee.find((err, employee) => {
            res.render
        })
        res.render('employee/employee-detail', { employee: employee }); 
    })
});

//Request URL Put http://localhost:3000/employees
//we are using post in place of put method
router.post('/employee-update/:id', (req, res) => {
    var employee = new Employee(req.body);
    Employee.findByIdAndUpdate(req.params.id, employee, (err, employee) => {
        if (err) throw err;
        res.redirect("/employees");
    })
});

//Request URL Delete http://localhost:3000/employees/61b6fc4cffa1e1568830c8bc
//Note Delete ==> Post
router.post('/employee-delete/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err, employee) => {
        if (err) throw err;
        res.redirect("/employees");
        //res.send(employee);
    })
});

module.exports = router;