// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
const path=require("path")
const markdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
{
type:"imput",
name:"title",
message:"What is the name of your project?",


},
{
    type:"imput",
    name:"email",
    message:"What is your email?",
    
    
    },
    {
        type:"imput",
        name:"github",
        message:"What is your github username?",
        
        
        },
        {
            type:"imput",
            name:"description",
            message:"Enter a description of your project",
            
            
            },
            {
                type:"imput",
                name:"installation",
                message:"What command needs to be run to install any dependencies?",
                
                
                },
                {
                    type:"imput",
                    name:"usage",
                    message:"Is there anything the user should know about the project?",
                    
                    
                    },
                    {
                        type:"imput",
                        name:"contribution",
                        message:"What should a user know about contributing to thie project?",
                        
                        
                        },
                        {
                            type: 'list',
                            name: 'license',
                            message: 'What kind of license should your project have?',
                            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
                          }  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(),fileName),data)

}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((inquirerResponses)=>{
    writeToFile("readme.md",markdown({...inquirerResponses}))
})

}

// Function call to initialize app
init();
