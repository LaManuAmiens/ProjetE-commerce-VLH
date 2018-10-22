var itemCount = 0;
var priceTotal = 0;

// Ajout d'articles au panier
$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  // La méthode .siblings() retourne tous les éléments frères de l'élément sélectionné.
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
<<<<<<< HEAD
});
=======
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
>>>>>>> c2e75fa630cbdd5cb5f335bb8c6c94f67e506810
