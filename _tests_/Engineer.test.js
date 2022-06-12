const Engineer = require('../lib/Engineer')

test('creates an Engineer', () => {
    engineer = new Engineer('Kyle', 123, 'kyle@gmail.com', 'kylesgithub')

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
})