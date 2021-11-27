var inquirer = require('inquirer');
const cp = require('child_process')

function displayDetails(){
inquirer
  .prompt([
    {
        type :'list',
        name:'Selection',
        choices:['About','Skills','Projects','Academics']
    }
  ])
  .then((choices) => {
     if(choices.Selection == 'About'){
         console.log(`A passionate learner who is excited to learn and explore new things. 
         Seeking opportunities to develop practical knowledge. 
         Aspiring to improve my problem solving skills.`)
         displayNext()
     }

     else if(choices.Selection == 'Skills'){
         console.log('Java , C++ , Node , Javascript, React ')
         displayNext()
     }

     else if(choices.Selection == 'Projects'){
         cp.execSync('start chrome https://github.com/ishika2741')
         displayNext()
     }

     else if(choices.Selection == 'Academics'){
         cp.execSync('start chrome https://drive.google.com/file/d/1cHaB3dZC_UrYcLMWhCrDrVFAyOmnRM5g/view?usp=sharing')
         displayNext()
     }
  })
}

displayDetails()

function displayNext(){
    inquirer
  .prompt([
    {
        type :'list',
        name:'GoBack',
        choices:['Back']
    }
  ])
  .then((choice) => {
    if(choice.GoBack == 'Back'){
        displayDetails()
    }
  })

}
  