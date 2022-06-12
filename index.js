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