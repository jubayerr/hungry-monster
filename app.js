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
            })
    }
})




