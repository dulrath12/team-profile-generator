const Intern = require('../lib/Intern')

test('creates an Intern', () => {
    intern = new Intern('Joey', 23, 'Joey@gmail.com', 'Michigan State University' )

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
})