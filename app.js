const searchBtn = document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value;
    const item = searchInput;
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + item;

    if (searchInput == item) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const mealContainer = document.getElementById('meal-container');
                const mealDiv = document.createElement('div');
                mealDiv.className = 'meal-items';

                const mealItems = `
                <img src="${data.meals[0].strMealThumb}">
                <h3>${data.meals[0].strMeal}</h3>
                `
                mealDiv.innerHTML = mealItems;
                mealContainer.appendChild(mealDiv);

                // Meal Ingredieants 

                mealDiv.addEventListener('click', function () {
                    const idMeal = data.meals[0].idMeal
                    const urlIngredient = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal;
                    fetch(urlIngredient)
                        .then(response => response.json())
                        .then(data => {
                            const mealIngredients = document.getElementById('meal-ingredients');
                            mealIngredients.className = 'ingredients-container';
                            const inDiv = document.createElement('div');

                            const ingredientsInfo = `
                            <img src="${data.meals[0].strMealThumb}">
                            <h2>${data.meals[0].strMeal}</h2>
                            <h4>Ingredients</h4>
                            <p> <b><span>&#10003;</span></b> ${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}</p>
                            <p> <b><span>&#10003;</span></b> ${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}</p>
                            <p> <b><span>&#10003;</span></b> ${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}</p>
                            <p> <b><span>&#10003;</span></b> ${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}</p>
                            <p> <b><span>&#10003;</span></b> ${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}</p>
                            <p> <b><span>&#10003;</span></b> ${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}</p>
                            `

                            inDiv.innerHTML = ingredientsInfo;
                            mealIngredients.appendChild(inDiv);

                            mealIngredients.style.display = 'block';
                            mealContainer.style.display = 'none';

                        })
                })
            })
    }
    if (searchInput == '') {
        const mealContainer = document.getElementById('meal-container');
        mealContainer.style.display = 'none';
        const contentNotFound = document.getElementById('content-not-found');
        contentNotFound.style.display = 'block';
        const contentNotFoundDiv = document.createElement('div');
        contentNotFoundDiv.className = 'content-not-found';

        const contentNotFoundInfo = `
        <h2>Item Not Found</h2>
        <p>Please Try This Menu List: </p>
        <ul>
        <li>Chicken</li>
        <li>Beef</li>
        <li>Mustard</li>
        <li>Salad</li>
        <li>& Many more</li>
        </ul>
        `
        contentNotFoundDiv.innerHTML = contentNotFoundInfo;
        contentNotFound.appendChild(contentNotFoundDiv);
    }
    document.getElementById('search-input').value = '';
})