const dogsList = document.querySelector('.dogs-list')
const dogs = [
  { name: 'bruce', type: 'chihuahua'},
  { name: 'chance', type: 'bernese'}
]

for (let i = 0; i < dogs.length; i++) {
  const dog         = dogs[i]
  const dogData     = document.createElement('div')
  dogData.classList.add('jumbotron', 'text-center')
  dogData.innerText = `${dog.name} is a ${dog.type}`
  dogsList.appendChild(dogData)
}
