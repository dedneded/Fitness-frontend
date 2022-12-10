// удаление строчки в таблице
$(document).ready(function(){
    $("#table_with_js").on("click", ".delete_button",  function() {
        
        str = $(this).closest("tr")
        $('.accept_delete').click(function(event){
            str.remove();
        });
       
    });
});

