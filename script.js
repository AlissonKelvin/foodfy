const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');


recipes.forEach(recipe => {

    const imgID = recipe.getAttribute('id');
    
    const title = recipe.querySelectorAll('h4');


    console.log(title.values)

    recipe.addEventListener('click', function(){

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src =`images/${imgID}`;

    });
});

modalOverlay.querySelector('.close').addEventListener('click', function(){
    modalOverlay.classList.remove('active');
});