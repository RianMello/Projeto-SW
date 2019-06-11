import axios from 'axios'
import Filmes from './scripts/Filmes'
import Characters from './scripts/Personagens'
import Planetas from './scripts/Planetas'
import Naves from './scripts/Naves'
import Especies from './scripts/Especies'

const listagem = document.querySelector('#listagem')

const state = {
    detalheFilme: []
}

Filmes.render().then(res => {
    listagem.innerHTML = res
    $('.collapsible').collapsible();
})

$(document).on('click', '.ver-personagem', async function () {
    let card = $(this).parent().parent().parent().find('.card-panel')
    card.show()
    let filme = await axios.get(card.parent().data('url'))
    await getCharacters(filme, card)
})
$(document).on('click', '.ver-planetas', async function () {
    let card = $(this).parent().parent().parent().find('.card-panel')
    card.show()
    let filme = await axios.get(card.parent().data('url'))
    await getPlanetas(filme, card)
})
$(document).on('click', '.ver-especies', async function () {
    let card = $(this).parent().parent().parent().find('.card-panel')
    card.show()
    let filme = await axios.get(card.parent().data('url'))
    await getEspecies(filme, card)
})
$(document).on('click', '.ver-naves', async function () {
    let card = $(this).parent().parent().parent().find('.card-panel')
    card.show()
    let filme = await axios.get(card.parent().data('url'))
    await getNaves(filme, card)
})
async function getCharacters(filme, element) {
    console.log({ filme, element })
    let characters = await new Characters(filme.data.characters).render()
    element.html(characters)
}
async function getPlanetas(filme, element) {
    console.log({ filme, element })
    let planets = await new Planetas(filme.data.planets).render()
    element.html(planets)
}
async function getEspecies(filme, element) {
    console.log({ filme, element })
    let species = await new Especies(filme.data.species).render()
    element.html(species)
}
async function getNaves(filme, element) {
    console.log({ filme, element })
    let spaceships = await new Naves(filme.data.starships).render()
    element.html(spaceships)
}