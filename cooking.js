const searchInputValue = document.getElementById("searchInput");
document.getElementById("searchButton").addEventListener("click", function() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue.value}`)
        .then(response => response.json())
        .then(data => displayAllFoods(data.meals));

    document.getElementById('searchInput').value = "";

})
const displayAllFoods = allFoods => {

    const foodDiv = document.getElementById("foodCards");
    for (let i = 0; i < allFoods.length; i++) {
        const singleItem = allFoods[i];
        const newDiv = document.createElement('div');
        newDiv.className = 'item';

        const foodInfo = `
            <img src="${singleItem.strMealThumb}" onclick="displayDetailsInfo(${singleItem.idMeal})">
            <h4>${singleItem.strMeal}</h4>
            `;

        newDiv.innerHTML = foodInfo;
        foodDiv.appendChild(newDiv);
    }

}

// loop calai ber korte hobe
const displayDetailsInfo = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayIngrediants(data.meals[0]))
};

const displayIngrediants = ingrediants => {
    const cardDetails = document.getElementById("detailsCard");
    cardDetails.innerHTML = `
    <img class="text-center" src="${ingrediants.strMealThumb}">
    <h2 class="fs-5 text-uppercase">${ingrediants.strMeal}</h2>
    <h5 clss="text-bold"> Ingredients </h5>
    <p>1| ${ingrediants.strIngredient1}</p>
    <p>2| ${ingrediants.strIngredient2}</p>
    <p>3| ${ingrediants.strIngredient3}</p>
    <p>4| ${ingrediants.strIngredient4}</p>
    <p>5| ${ingrediants.strIngredient5}</p>
    <p>6| ${ingrediants.strIngredient6}</p>
    <p>7| ${ingrediants.strIngredient7}</p>
    <p>8| ${ingrediants.strIngredient8}</p>
    <p>9| ${ingrediants.strIngredient9}</p>
    <p>10| ${ingrediants.strIngredient10}</p>
    `;



};