function analize(){
    $("#blocMessages").empty()
    const $form = $("#chatGet")
    const url = $form.attr("action")

    $.post(url,
        function (data) {
            $.each(data, function (i, obj) {
                $("#blocMessages").append(obj.date + " à " + obj.time + "   " + obj.user + " : " + obj.msg +  "<br>")
            }

            )

        },
        'json'
    )
}

analize()

$("#chatForm").submit(function (event) {
    event.preventDefault();

    const $form = $(this)
    const url = $form.attr("action")
    const messg = $form.find("input[name = 'msg']").val()

    $.post(url,
        { msg: messg },
        function (data) {
            $("#sendingMsg").empty().append(data.msg)
            setTimeout(function () { $("#sendingMsg").empty() }, 5000) //Retirage du texte sous le input 5 secondes après un envois de message
        },
        'json'
    ) 
    analize()
   
})
