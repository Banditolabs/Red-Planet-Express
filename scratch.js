$("select").append($launch)
            $('#close-modal').on('click', function (){
                packageStats = []
                
            }) 

            let $modalSubmit =  $('#submit-btn').on('click', function (){
                $(".input").each(function (){
                    packageStats.push($(this).val())
                    console.log (packageStats)    

                     

        let myModal = $('#modal-body')
        $(document).on('shown.bs.modal', '#modal-body', function () {
            myModal.focus()
        } )
    })
    console.log(packageStats)


