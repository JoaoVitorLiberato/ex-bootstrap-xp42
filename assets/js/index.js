const cadastrarProduto = document.querySelector('.container #btn-cadastrarP')

cadastrarProduto.addEventListener('click', () => 
Toastify({
    text: "Produto Cadastrado Com sucesso!",
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#3c3c3d",
      color: "#fff"
    },  
    onClick: function(){} // Callback after click
  }).showToast());


