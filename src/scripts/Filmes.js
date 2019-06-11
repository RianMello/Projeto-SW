import axios from 'axios'


class Filmes {
    render() {
        return new Promise((resolve, reject) => {
            axios.get('https://swapi.co/api/films/').then(res => {
                let html = this.montaCards(res.data.results)
                resolve(html)
            }).catch(err => {
                reject(err)
            })
        })
    }

    montaCards(data) {
        let html = ''

        for (let filme of data) {
            console.log(filme)
            html += `
            
            <ul class="collection with-header">
                <li class="collection-header"><h4>${filme.title}</h4></li>
                <li class="collection-item">: ${filme.director}</li>
                <li class="collection-item">Ano Lançamento: ${(new Date(filme.release_date)).getFullYear()}</li>
                <li class="collection-item">
                    <ul class="collapsible">
                        <li>
                        <div class="collapsible-header"><i class="material-icons">description</i>Sinopse</div>
                        <div class="collapsible-body"><p>${filme.opening_crawl}</p></div>
                        </li>
                    </ul>
                </li>
                <li class="collection-item">
                    <ul class="collapsible">
                        <li>
                        <div class="collapsible-header"><i class="material-icons">more</i>Detalhes</div>
                        <div class="collapsible-body" data-url="${filme.url}">
                        <div class="card-panel" style="display:none;">
                        <div style="display: flex;justify-content: center;">
                            <div class="preloader-wrapper small active">
                                <div class="spinner-layer spinner-green-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div><div class="gap-patch">
                                    <div class="circle"></div>
                                </div><div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div class="row" style="background-color: #e1e2e6;">
                                <div class="col s6 m6 l6">
                                    <p>Personagens</p>
                                </div>
                                <div class="col s6 m6 l6" style="display: flex;justify-content: flex-end;padding-top: 7px;">
                                    <button class="btn-small green ver-personagem"><i class="material-icons">remove_red_eye</i></button>
                                </div>
                            </div>
                            <div class="row" style="background-color: #e1e2e6;">
                                <div class="col s6 m6 l6">
                                    <p>Planetas Apresentados</p>
                                </div>
                                <div class="col s6 m6 l6" style="display: flex;justify-content: flex-end;padding-top: 7px;">
                                    <button class="btn-small green ver-planetas"><i class="material-icons">remove_red_eye</i></button>
                                </div>
                            </div>
                            <div class="row" style="background-color: #e1e2e6;">
                                <div class="col s6 m6 l6">
                                    <p>especies Apresentadas</p>
                                </div>
                                <div class="col s6 m6 l6" style="display: flex;justify-content: flex-end;padding-top: 7px;">
                                    <button class="btn-small green ver-especies"><i class="material-icons">remove_red_eye</i></button>
                                </div>
                            </div>
                            <div class="row" style="background-color: #e1e2e6;">
                                <div class="col s6 m6 l6">
                                    <p>Naves Apresentadas</p>
                                </div>
                                <div class="col s6 m6 l6" style="display: flex;justify-content: flex-end;padding-top: 7px;">
                                    <button class="btn-small green ver-naves"><i class="material-icons">remove_red_eye</i></button>
                                </div>
                            </div>
                        </div>
                        </li> 
                    </ul>
                </li>
            </ul>
            `
        }

        return html;
    }
}

export default new Filmes()
