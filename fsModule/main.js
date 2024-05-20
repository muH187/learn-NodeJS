const fs = require('fs')

fs.writeFile("hello.txt", "This is Muhammad Ali", function(err){
    if(err){console.error(err)}
    else {console.log("Done")}
})

fs.appendFile("hello.txt", ". I'm a Python and Android Programmer.", function(err) {
    if(err) console.error(err)
    else console.log("Text Append")
})

fs.rename("hello.txt", "rename.txt", function(err){
    if(err) console.error(err)
    else console.log("File Rename.")
})

fs.copyFile("rename.txt", "./testing/hello.txt", function(err){
    if(err) console.error(err)
    else console.log("Copy Done")
})

fs.appendFile("./testing/hello.txt", "I'm Multi Millionaire", function(err){
    if(err) console.error(err)
    else console.log("Done")
})