function calcular() {

    let inputA = document.getElementById('adultos')
    let inputC = document.getElementById('criancas')
    let inputD = document.getElementById('duracao')
    let resultado = document.getElementById('resultado')
    let adultos = inputA.value
    let criancas = inputC.value
    let duracao = inputD.value
    let QtdCarne = carnePP(duracao) * adultos + (criancas * carnePP(duracao) / 2)
    let qtdBebida = bebidaPP(duracao) * adultos + (criancas * bebidaPP(duracao) / 2)

    
    resultado.innerHTML = `Você vai precisar de: </br></br> ${Math.ceil(QtdCarne / 1000)}Kg de carne </br></br> ${Math.ceil(qtdBebida / 2000)}L de bebidas </br></br> Playlist recomendada: </br></br> ${SelecionarPlaylist()}`




}

function carnePP(duracao) {

    let carnePP = 400

    if (duracao >= 6) {
        return 650
    }
    else {
        return 400
    }
}

function bebidaPP(duracao) {

    let bebidaPP = 1200

    if (duracao >= 6) {
        return 2000
    }
    else {
        return 1200
    }
}


function SelecionarPlaylist() {

    let selMusica = playlist.value
    let links = {
        link1: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/49EcKBC0weVNKb5lYwGLVM?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>>',
        link2: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXeSNtpjKSsO?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        link3: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/01zzqHy5rv189lOqeLJgl9?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        link4: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3Jnc8tKbg6B7nZy0K5lCem?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        link5: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4FtdilLkWkfiLwGpbj4nLE?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    }

    let randomLink = [links.link1, links.link2, links.link3, links.link4, links.link5]
    let randomPlaylist = randomLink[Math.floor(Math.random() * randomLink.length)]


    switch (selMusica) {

        case 'estilo musical':
            return ('PARECE QUE VOCÊ NÃO ESCOLHEU UM ESTILO MUSICAL :(')

        case 'gospel':
            return (links.link1)

        case 'sertanejo raiz':
            return (links.link2)

        case 'rock':
            return (links.link3)

        case 'mpb':
            return (links.link4)

        case 'world music':
            return (links.link5)

        case 'sortear':
            return (randomPlaylist)

        default:
            return ('ERROR#')

    }

}

