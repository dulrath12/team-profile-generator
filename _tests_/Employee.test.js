const Employee = require('../lib/Employee')

test('creates and employee object', () => {
    const employee = new Employee('Kollen', 41, 'kollen@gmail.com')

    expect(employee.name).toEqual(String)
    expect(employee.id).toEqual(Number)
    expect(employee.email).toEqual(String)

})