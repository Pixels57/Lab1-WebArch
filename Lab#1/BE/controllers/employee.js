const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  try
  {
    const empId = req.params.id;
    const index = employee.findIndex(emp => emp.id == empId);
    if (index !== -1)
    {
      const deletedEmp = employee.splice(index, 1)[0];
      res.json({message: 'Employee Deleted Successfully', deletedEmp});
    } 
    else
    {
      res.status(404).json({error: 'Employee Not Found'});
    }
  }
  catch (error)
  {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'})
  }
};

// TODO
exports.createEmployee = async (req, res, next) => {
    try {
    const { name, id } = req.body;

    const newEmployee = {id, name};
    employee.push(newEmployee);
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error'});
  }
};
