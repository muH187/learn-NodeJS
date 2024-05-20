import fs from "fs"

console.log("Starting")

// fs.writeFileSync("Ali.txt", "Ali is a Millionaire.")
fs.writeFile("Ali2.txt", "Ali is a Multi-Millionaire", ()=> {
    console.log("Done")
    fs.readFile("Ali2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("Ali2.txt", " inshaAllah", (error, data) => {
    console.log(data)
})

console.log("Ending")