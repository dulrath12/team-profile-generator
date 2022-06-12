const Employee = require('../lib/Employee')

test('creates and employee object', () => {
    const employee = new Employee('Kollen', 41, 'kollen@gmail.com')

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))

})