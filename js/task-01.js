const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.children;
console.log(`Кількість категорій: ${categoryItems.length}`);

for (const categoryItem of categoryItems) {
    const categoryName = categoryItem.querySelector('h2').textContent;
    const categoryList = categoryItem.children[1];
    const categoryElements = categoryList.children;

    console.log(`Назва заголовку: ${categoryName}`);
    console.log(`Кількість елементів в категорії: ${categoryElements.length}`);
}