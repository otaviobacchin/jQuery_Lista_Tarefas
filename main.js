$(document).ready(function() {

    $('.itens-lista').on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#nova-tarefa').val();
        const novaTarefa = $(`
            <li style="display: none">${tarefa}</li>`)
        novaTarefa.appendTo('div .itens-lista');
        $(novaTarefa).fadeIn();
        $('#nova-tarefa').val('')
    })
})