const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(event){
    //impede que a pagina seja recarregada automaticamente
    event.preventDefault()

    //Captura valores digitados pelo usuario

    let nome = document.getElementById("nome").value

    let email = document.getElementById("email").value

    let telefone = document.getElementById("telefone").value

    let mensagem = document.getElementById("mensagem").value

    if(telefone.trim() === ""){
        alert("Digite seu telefone")

        return
    }

    // 4 - Montar a mensagem que sera enviado para whatts

    const textoWhatsapp = `
    Olá, gostaria de enviar meu formulário para fazer parte da On Fit, segue minhas informações a baixo.
    Nome: ${nome}
    Email: ${email}
    Telefone: ${telefone}
    Mensagem: ${mensagem}.
    `

    let mensagemCodificada = encodeURIComponent(textoWhatsapp)

    let numeroWhatsapp = "5511976040475"

    const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

    window.location.href = link



})