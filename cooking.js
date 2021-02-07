/* // let getInputValue = document.getElementById("searchInput").value.trim();
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
    .then(res => res.json())
    .then(data => displayAllFoods(data));


const displayAllFoods = foodCard => {
    const cardsFood = document.getElementById('foodCards');
    foodCard.forEach(card => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'allItem';

        const foodInfo = `
        <img src="${meals.strMealThumb}">
        <h4>${meals.strMeal}</h4>
        `;

        foodDiv.innerHTML = foodInfo;
        cardsFood.appendChild(foodDiv);

    });
} */



const searchInputValue = document.getElementById("searchInput");
document.getElementById("searchButton").addEventListener("click", function() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue.value}`)
        .then(response => response.json())
        .then(data => displayAllFoods(data));

    const displayAllFoods = allFoods => {
        // console.log(allFoods.meals[0].strMeal);
        const foodDiv = document.getElementById("foodCards");

        const image = document.createElement("img");
        image.src = `${allFoods.meals[0].strMealThumb}`;
        foodDiv.appendChild(image);

        const h4 = document.createElement("h4");
        h4.innerText = `${allFoods.meals[0].strMeal}`;
        foodDiv.appendChild(h4);

    }

})