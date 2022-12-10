// добавление строчки
$(document).ready(function(){
    strs = []
    $('#table_modal :checkbox').change(function() {
        str = $(this).closest("tr")
        strs.push(str)
        console.log('привет')
    });
   
    $('.button_save').click(function(event){
        $.each(strs,function(index,value){
            $(this).children("td:eq(2)").remove();
            $(this).find('td').eq(1).after('<td class="delete_str"><button class="delete_button border-0 btn btn-outline-none" data-bs-toggle="modal"data-bs-target="#deleteRole"><a class="text-decoration-none text-danger danger_hover" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a></button></td> ');
            $('#table_with_js').append(value);
          }); 
    }); 
});

