const names = [
    "pedro",
    "emilio",
    "rodrigo",
    "ana",
    "yesica",
    "valeria",
    "romina",
    "armando"
]

const random = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    console.log(name);
}

module.exports = {random};