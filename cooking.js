const searchInputValue = document.getElementById("searchInput");
document.getElementById("searchButton").addEventListener("click", function() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue.value}`)
        .then(response => response.json())
        .then(data => displayAllFoods(data));

    const displayAllFoods = allFoods => {
        // console.log(allFoods.meals[0].strMeal);
        const foodDiv = document.getElementById("foodCards");
        const newDiv = document.createElement('div');

        // const image = document.createElement("img");
        // image.src = `${allFoods.meals[0].strMealThumb}`;
        // newDiv.appendChild(image);

        // const h4 = document.createElement("h4");
        // h4.innerText = `${allFoods.meals[0].strMeal}`;
        // newDiv.appendChild(h4);
        const foodInfo = `
        <img src="${allFoods.meals[0].strMealThumb}">
        <h4>${allFoods.meals[0].strMeal}</h4>
        `
        foodDiv.innerHTML = foodInfo;

        foodDiv.appendChild(newDiv);

    }

})