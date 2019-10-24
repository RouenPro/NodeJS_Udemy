const validator = require('validator')
console.log(validator.isEmail('chamrouen@gmail.com'))
console.log("Hellow")

const command = process.argv[2]

if(command === 'add'){
    console.log("Adding note.......")
}
else if(command === 'remove'){
    console.log("Thank for remove....")
}
