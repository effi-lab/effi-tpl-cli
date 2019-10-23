#!/usr/bin/env node
const { resolve } = require('path')
const program = require('commander')
const commands = require(resolve(__dirname, './build/main/index.js'));
const { version } = require(resolve(__dirname, './package.json'))

// process.env.NODE_PATH = resolve(__dirname, '../node_modules/')

program
  .version(version)

program
  .usage('<command>')

program
  .command('init')
  .description('Generate a new project')
  .alias('i')
  .action(commands.init)

program.parse(process.argv)

if(!program.args.length){
  program.help()
}