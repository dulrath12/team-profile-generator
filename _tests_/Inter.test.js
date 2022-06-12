const Intern = require('../lib/Intern')

test('creates an Intern', () => {
    intern = new Intern('Joey', 32, 'joey@gmail.com', 'Michigan State University')

    expect(intern.name).toEqual(String)
    expect(intern.id).toEqual(Number)
    expect(intern.email).toEqual(String)
    expect(intern.school).toEqual(String)
})