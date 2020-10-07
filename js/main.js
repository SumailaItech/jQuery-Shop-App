$(document).ready(function(){
$('#button-create-item').on('click',function(){
let name = $('#input-new-item').val();
$('#input-create-item').val('');

let html =`
<div class="item">
<div class="name">${ name }</div>
<img src="assets/1.jpeg" alt="">
<div class="description">Lorem ipsum dolor, 
sit amet consectetur adipisicing elit. 
Officiist.</div>
<div class="price">499</div>
<button class="item-add">Add to cart</button>
<button class="item-remove">Remove</button><br>
<a href="#" class="more-info-link">More Info</a>
<div class="more-info">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, cum error aliquid repellendus quod ullam quisquam, pariatur at facilis voluptatum minus maxime consectetur,
   </div>
</div>
`;

$('#container').prepend(html);
});

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
});