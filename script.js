const hero = {
  name: 'Bruce Wayne',
  alias: 'Batman',
  catchprase: 'To the Batcave!',
  speak: function() {
    return 'Attention!' + this.catchprase
  },
  attack: function(sound) {
    return `(punches bad guy) ${sound}`
  }
}

const thingToLookFor = 'alias'

console.log(hero.name)
console.log(hero[thingToLookFor])

console.log(hero.speak())
console.log(hero.attack('POWWWWW'))
