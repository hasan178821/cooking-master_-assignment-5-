document.getElementById("searchButton").addEventListener("click", function() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => {
            const foodCard = document.getElementById("foodCards");

            for (let i = 0; i < data.meals.length; i++) {
                const card = data.meals[i];
                const Image = document.createElement("img");
                Image.src = data.meals[0].strMealThumb;
                foodCard.appendChild(Image);

                const h4 = document.createElement("h4");
                h4.innerText = data.meals[0].strMeal;
                foodCard.appendChild(h4);
            }

            // const Image = document.createElement("img");
            // Image.src = data.meals[0].strMealThumb;
            // foodCard.appendChild(Image);

            // const h4 = document.createElement("h4");
            // h4.innerText = data.meals[0].strMeal;
            // foodCard.appendChild(h4);

        })
})