const generateManager = function (Manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Manager.id}</p>
                <p class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
                <p class="office">Office Number: ${Manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (Engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Engineer.id}</p>
                <p class="email">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

const generateIntern = function (Intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Intern.id}</p>
                <p class="email">Email:<a href="mailto:${Intern.email}">${Intern.email}</a></p>
                <p class="school">School: ${Intern.school}</p>
            </div>
    </div>
</div>
    `
};

generateHTML = (teamArray) => {

    pageArray = []; 

    for (let i = 0; i < teamArray.length; i++) {
        const teamMember = teamArray[i];
        const role = teamMember.getRole() 


        if (role === 'Manager') {
            const ManagerCard = generateManager(teamMember);

            pageArray.push(ManagerCard);
        }

        if (role === 'Engineer') {
            const EngineerCard = generateEngineer(teamMember);

            pageArray.push(EngineerCard);
        }

        if (role === 'Intern') {
            const InternCard = generateIntern(teamMember);

            pageArray.push(InternCard);
        }
        
    }


    const teamMemberCards = pageArray.join('')


    const generateTeam = generateTeamPage(teamMemberCards); 
    return generateTeam;

}

const generateTeamPage = function (teamMemberCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1 class="text-center">Team Profile</h1>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${teamMemberCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
}
module.exports = generateHTML