var cart = 0;
function addIterm(id,name,image_url,description,price,moreInfo){
    let html =`
    <div class="item" data-id='${ id }'>
    <div class="name">${ name }</div>
    <img src="${ image_url }" alt="">
    <div class="description">${ description }</div>
    <div class="price">${ price }</div>
    <button class="iterm-add">Add to cart</button>
    <button class="item-remove">Remove</button><br>
    <a href="#" class="more-info-link">More Info</a>
    <div class="more-info">
      ${ moreInfo }
       </div>
    </div>
    `;
    
    $('#container').prepend(html);
}

$(document).ready(function(){
// $('#button-create-item').on('click',function(){
// let name = $('#input-new-item').val();
// $('#input-create-item').val('');
// });

$('#container').on('click','.item-remove', function(){
   $(this).parent().remove();
});

$('#container').on('click','.more-info-link',
function(event){
    event.preventDefault();

    $(this).parent().find('.more-info').slideToggle('slow');
    $(this)
    .animate({"opacity":0.5, "margin-left":10 }, 150)
    .animate({"opacity":1.0, "margin-left": 0 }, 150);
});

$.ajax('data/item.json',{
    dataType:'json',
    contentType:'application/json',
    cache:false
})
.done(function(response){
    let iterms = response.iterms
    iterms.forEach(function(iterm){
        addIterm(iterm.id,iterm.name,iterm.image_url,iterm.description,iterm.price,iterm.moreInfo);
    })
})
.fail(function(request, errorType, errorMessage){
    console.log(errorMessage);
})
.always(function(){

});

$('#container').on('click','.iterm-add',function(){
    let id =$(this).parent().data('id');
    console.log(id)
    $.ajax('data/addToCart.json',{
        type:'post',
        data:{id: id },
        dataType:'json',
        contentType:'application/json'
    })
    .done(function(response){
        if(response.message ==='success'){
            let price = response.price;
            cart += price;

            $('#cart-container').text('$' + cart);
        }
    })
});

$('#news-letter-checkbox').on('change', function(){
 if($(this).is(':checked')){
  $('#news-letter-freq').fadeIn();
 }else{
    $('#news-letter-freq').fadeOut();
 }
});

$('#news-letter-checkbox').trigger('change');

$('#cart-form').on('submit', function(event){
event.preventDefault();

let data = {form: $(this).serialize(), price:cart };
console.log(data.form);
$.ajax($(this).attr('action'),{
    type:'post',
    data:data
})
.done(function(response){
$('#feedback-message').text(response.message);
})
});
});