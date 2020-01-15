const program = require('commander')
const ora = require('ora')
const printProgramInfo = require('./index')
const getCurrentTime = require('./test')

program
  .option('-t, --time <number>','等待时间(秒)',3)
  .option('-m, --message <string>','要输出的信息','hello world')
  .parse(process.argv)

setTimeout(() => {
  spinner.stop()
  console.log(program.message)
}, program.time * 1000);


printProgramInfo()
console.log('当前时间',getCurrentTime())
const spinner = ora('正在加载中，请稍后...').start()