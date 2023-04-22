export interface User{
    id?:    number
    token?:  string
    userName:   string
    password:  string
}

export interface Auth{
    token:  string
    user:   User
}

export interface Especialidade{
    id?:        number
    imagem:     string
    nome:       string
    url:        string
}

export interface Variavel{
    id?:        number
    name:       string
    value:      string
}

export interface PortPic{
    id?:            number
    id_portfolio:   number
    imagem:         string
    order:          number
}

export interface Portfolio{
    id:        number
    nome:       string
    descricao:  string
    pics:       PortPic[]
}

export interface picAlbum{
    id?:         number
    id_album:    number
    imagem:      string
    nome:      string
    checked:     boolean
}

export interface Album{
    id?:       number
    nome:      string
    capa:      string
    pics:      picAlbum[]
}


export class AlbumClass {
    constructor(public alb:Album) { }
   
    getSelectedsText():string {
        var count = 0
        for(var i=0;i<this.alb.pics.length;i++){
            count = this.alb.pics[i].checked?count + 1:count
        }

        return `${count}/${this.alb.pics.length.toString()}`
    } 
  }


