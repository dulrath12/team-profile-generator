// html generation import
const generateHTML = require('./src/generateHTML')

//npm modules
const fs = require('fs')
const inquirer = require('inquirer')

//Team member import
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

//team array
const teamArray = []

//start prompt/Manager prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of your team?',
            validate: nameInput =>{
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the name of your Manager!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Manager's ID number?",
            validate: idInput => {
                if (idInput !== Number) {
                    console.log("Please enter your Manager's ID Number!")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Manager's Email address?"
        },
        {
           type: 'input',
           name: 'officeNumber',
           message: "What is the Manager's office number?",
           validate: officeNumberInput => {
               if (officeNumberInput !== Number) {
                   console.log("Please enter your Manager's office number!")
                   return false
               } else {
                   return true
               }
           }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput
        const manager = new Manager(name, id, email, officeNumber)

        teamArray.push(manager)
        console.log(manager)
    })
}

const addTeamMember = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the Team Member's role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Member's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Team Member's ID number?",
            validate: idInput => {
                if (idInput !== Number) {
                    console.log("Please enter the Team Member's ID number")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Team Member's Email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Team Member's Github username.",
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log("Please enter the Team Member's github username!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school.",
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true
                } else {
                    console.log("Please enter the Intern's school!")
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add more Team Members?',
            default: false
        }
    ])
    .then(teamMemberData => {
        let {name, id, email, role, github, school, confirmAddTeamMember} = teamMemberData
        let teamMember

        if (role === 'Engineer') {
            teamMember = new Engineer(name, id, email, github)

            console.log(teamMember)
        } else if (role === 'Intern') {
            teamMember = new Intern(name, id, email, school)

            console.log(teamMember)
        }

        teamArray.push(teamMember)

        if (confirmAddTeamMember) {
            return addTeamMember(teamArray)
        } else {
            return teamArray
        }
    })
}