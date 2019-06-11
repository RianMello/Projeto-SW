import axios from 'axios'

export default class Especies{
  constructor(array){
    this.array = array
    this.nome = []
  }

  async render(){
    let html =''

    for(let species of this.array){
      let response = await axios.get(species)
      this.nome.push(response.data.name)
    }

    html += `<ul class="collection" style="box-shadow:none">`

    for(let nome of this.nome){
      html += `<li class="collection-item">${nome}</li>`
    }

    html += `</ul>`

    return html
  }
}