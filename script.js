let createUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

let getTime = () => {
  return new Date().getTime()
}

let visitors = [
  {
    id: createUUID(),
    name: "Aishawolf Aiwolf",
    date: getTime(),
    phone: 9072007799
  },
  {
    id: createUUID(),
    name: "Hawys Olympia",
    date: getTime(),
    phone: 9072094948
  },
  {
    id: createUUID(),
    name: "Hollis Yaga",
    date: getTime(),
    phone: 9072218397
  },
  {
    id: createUUID(),
    name: "Hecate Asahina",
    date: getTime(),
    phone: 9072290817
  }
]

visitors.push({
  id: createUUID(),
  name: "Adelina",
  date: getTime(),
  phone: 9072007799,
  address: "Chisinau"
})

let addExclamationPointToNames = () => {
  for(let j = 0; j < visitors.length; j++) {
    visitors[j].name += '!'
  }
}

addExclamationPointToNames()

let addPropertyToObject = () => {
  for(let i = 0; i < visitors.length; i++) 
    visitors[i].city = 'Bucuresti'
}
addPropertyToObject()

let showMyVisitors = () => {
  for(let y = 0; y < visitors.length; y++)
    console.log(visitors[y])
}

let concationationOfTwoStrings = () => 'Hello World'

  for(let i = 0; i < visitors.length; i++)
    visitors[i].myFunction = concationationOfTwoStrings

showMyVisitors()

console.log(visitors[0].myFunction())
