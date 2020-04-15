const dogsList = document.querySelector('.dogs-list')
const dogs = [
  { name: 'bruce', type: 'chihuahua'},
  { name: 'chance', type: 'bernese'}
]

for (let dog of dogs) {
  const dogData     = document.createElement('div')
  dogData.classList.add('jumbotron', 'text-center')
  dogData.innerText = `${dog.name} is a ${dog.type}`
  dogsList.appendChild(dogData)
}
