$(function(){
    $('#askme').click(event => {
        let message = prompt ('what can i help you');
        alert (`you said ${message}`)
    })

    $('[name="selectAll"]').change(function(){
        let isChecked = $(this).is(':checked');
        $('[name="answer1"]').prop('checked', isChecked);
    })

    $('[name="showresult"]').click(event=>{
        let DOMs = $('[name="answer1"]:checked');
        let message = '';
        if (DOMs.length){
            $.each(DOMs, function(index, DOM){
                message += `${DOM.value} ,`;
            });
            alert (`i choose ${message} ,`);
        }else {
            alert ('not yet choose')
        }
    })

    $('[name="addText"]').click (event =>{
        let length = $("#addedtext > p").length;
        let DOM = $(`<p> this text is added to ${++length}</p>`);
        $("#addedtext").append(DOM);
    })
})