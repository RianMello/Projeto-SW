import axios from 'axios'

export default class Planetas{
  constructor(array){
    this.array = array
    this.nome = []
  }

  async render(){
    let html =''

    for(let planets of this.array){
      let response = await axios.get(planets)
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
