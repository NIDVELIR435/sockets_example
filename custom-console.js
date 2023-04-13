const {colors} = require('./colors')


const customConsole = {
    greenLog: (text) => console.log(`${colors.FgGreen}${text}${colors.FgWhite}`),
    redLog: (text) => console.log(`${colors.FgRed}${text}${colors.FgWhite}`),
    blueLog: (text) => console.log(`${colors.FgBlue}${text}${colors.FgWhite}`),
}

module.exports = {customConsole}
