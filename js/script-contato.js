let form = $('.contato-form');

form.validate({
    errorElement: 'span',
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        subject: 'required',
        text: 'required'
    },
    messages: {
        name: 'Por favor, informe seu nome',
        email: {
            required: 'Por favor, insira seu e-mail',
            email: 'Por favor, insira um e-mail válido'
        },
        subject: 'Por favor, informe o assunto',
        text: 'Por favor, digite sua mensagem'
    }
})