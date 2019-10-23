import inquirer from 'inquirer';
import path from 'path';
import ora from 'ora';
import download from './download';


const currentWorkDirectory = process.cwd();

const tplList = [{
  name: 'html5',
  repository: "https://github.com:effi-team/effi-tpl-html5"
}, {
  name: 'react'
}, {
  name: 'electron'
}];

const questions = [{
  type: 'input',
  name: 'projectName',
  message: "What's your project name?"
}, {
  type: 'list',
  name: 'tplRepo',
  message: 'Select a template:',
  choices: () => tplList.map(tpl => {
    return {
      name: tpl.name,
      value: tpl.repository,
    };
  })
}];

export default function init() {
  inquirer
    .prompt(questions)
    .then((answers: any) => {
      const initSpinner = ora(`clone from repository ${answers.tplRepo}`).start();
      const projectDir = path.resolve(currentWorkDirectory, './', answers.projectName);
      download(answers.tplRepo, projectDir)
        .then(() => {
          initSpinner.succeed();
        })
        .catch((err) => console.error('failed: ', err));
    });
}