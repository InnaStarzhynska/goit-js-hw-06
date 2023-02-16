const categoriesRef = document.querySelectorAll('li.item');
const titlesRef = document.querySelectorAll('.item h2');

const printCategoriesQuantity = (categories) => {
    console.log(`Number of categories: ${categories.length}`);
};
 
const printCategoriesInfo = (titles) => {
    titles.forEach((title) => {
        console.log(`Category: ${title.textContent}`);
        console.log(`Elements: ${title.nextElementSibling.children.length}`)
    });
};

printCategoriesQuantity(categoriesRef);
printCategoriesInfo(titlesRef);
