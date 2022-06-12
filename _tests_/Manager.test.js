const Manager = require('../lib/Manager')

test('creates a Manager', () => {
    const manager = new Manager('Kasen', 6, 'Kasen@gmail.com', 1)

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number))
})