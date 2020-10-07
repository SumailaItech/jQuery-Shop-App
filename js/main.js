$(document).ready(function(){
 // $('#container input:required').addClass('highlight');
// $('#container')
// .find('.hot')
// .children('.non-solid')
// .first()
// .next()
// .addClass('highlight');

// $('.box').on('click','.box-button', function(){
//   $(this).parent().toggleClass('highlight');
// });

//     $('#select-menu').on('change',function(){
//     let name = $('#select-menu option:selected').text();
//     let distance = $('#select-menu option:selected').val();
//     let price =  $('#select-menu option:selected').data('price');
//         console.log(price);
//      if(distance){
//         $('#feedback-message').text('You are signing up for a '+name+', which costs '+ price +', to a distance of '+distance +'km');
//     }else{
//         $('#feedback-message').empty();
//     }
// })

$('#input-name').on('keyup', function(){
    let name = $(this).val();
    console.log(name);
    $('#feedback-message').text('Pleased to meet you ' +name);

    $('a').on('click', function(e){
        $('#feedback-message').text('That\s fine');
        e.preventDefault();
    })
})
});

// parent() to go up
// closest() is for finding the closest parent