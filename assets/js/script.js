var itemCount = 0;
var priceTotal = 0;

// Ajout d'articles au panier
$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Supprimer Articles</button>');

  // Calcul prix total
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal += price;
  $('#cartTotal').text("Total: £" + priceTotal);
});

// Cacher et afficher les articles du panier
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});

// Vider le panier
$('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;

  $('#itemCount').css('display', 'none');
  $('#cartItems').text('');
  $('#cartTotal').text("Total: £" + priceTotal);
});

// Supprimer articles depuis le panier
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();
  itemCount --;
  $('#itemCount').text(itemCount);

  // Supprimer le prix d'un article du prix total
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal -= price;
  $('#cartTotal').text("Total: £" + priceTotal);

  if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});
