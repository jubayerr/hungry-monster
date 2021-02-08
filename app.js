// const item = 'Arrabiata'

const searchBtn = document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value;
    const item = searchInput;
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + item;

    if (searchInput == item) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const mealContainer = document.getElementById('meal-container');
                const mealDiv = document.createElement('div')
                mealDiv.className = 'meal-items'

                const mealItems = `
                <img src="${data.meals[0].strMealThumb}">
                <h3>${data.meals[0].strMeal}</h3>
                `
                mealDiv.innerHTML = mealItems

                mealContainer.appendChild(mealDiv)
                // Ingredieants 
                mealDiv.addEventListener('click', function () {
                    const idMeal = data.meals[0].idMeal
                    const urlIngredient = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal
                    fetch(urlIngredient)
                        .then(response => response.json())
                        .then(data => {
                            const mealIngredients = document.getElementById('meal-ingredients');
                            const inDiv = document.createElement('div')


                            const ingredientsInfo = `
                            <h3>${data.meals[0].strIngredient1}</h3>
                            <h3>${data.meals[0].strIngredient2}</h3>
                            <h3>${data.meals[0].strIngredient3}</h3>
                            <h3>${data.meals[0].strIngredient4}</h3>
                            `

                            inDiv.innerHTML = ingredientsInfo
                            mealIngredients.appendChild(inDiv)



                        })
                })
            })
    }
})





