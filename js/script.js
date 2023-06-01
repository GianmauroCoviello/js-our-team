
// OBJECTS
let fullTeam = [
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    },
]

// CICLO FOR PER STAMPARE LE CARD ALL'INTERNO DEL DOM
for (let i = 0; i < fullTeam.length; i++) {
    
    console.log(fullTeam[i].name)
    console.log(fullTeam[i].role)
    console.log(fullTeam[i].image)

    
}

// CICLO FOR PER INNIETTARE LE CARD ALL'INTERNO DEL DOM
let compilate = document.querySelector('.card')

for(let i = 0; i < fullTeam.length; i++){
    compilate.innerHTML += `<h3>${fullTeam[i].name} </h3>`
    compilate.innerHTML += `${fullTeam[i].role} <br>`
    compilate.innerHTML += `${fullTeam[i].image}`

}
