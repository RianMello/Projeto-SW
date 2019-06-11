import axios from 'axios'

export default class Characters {
    constructor(array) {
        this.array = array
        this.nomes = []
    }

    async render() {
        let html = ''

        for (let item of this.array) {
            let response = await axios.get(item)
            this.nomes.push(response.data.name)
        }
        html += `
        <ul class="collection" style="box-shadow:none">
            `
        for (let nome of this.nomes) {
            html += `
            <li class="collection-item">${nome}</li>
            `
        }

        html += `
            </ul>
        `

        return html
    }
}