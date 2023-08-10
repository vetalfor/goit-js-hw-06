const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
    const categoryName = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('ul > li');
    console.log(`Назва заголовку: ${categoryName}`);
    console.log(`Кількість елементів в категорії: ${categoryElements.length}`);
});