'use strict';

const products = [
    { title: 'Shirt', price: 150, img: 'https://olimpstar.ru/upload/resize_cache/iblock/745/400_400_140cd750bba9870f18aada2478b24840a/V2EA7001-71.jpg' },
    { title: 'Socks', price: 50, img: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/B2201BKG.jpg' },
    { title: 'Jacket', price: 350, img: 'https://i.pinimg.com/originals/0e/4d/66/0e4d661b8df96caff09ca4f66388f779.jpg' },
    { title: 'Shoes', price: 250, img: 'https://i.ebayimg.com/images/g/ZUsAAOSw6FpeVq48/s-l400.jpg' },
];

const renderProduct = (product) =>
    `<div class="goods-item">
    <img src="${product.img}">
    <h3>${product.title}</h3>
    <p>${product.price}</p>
    <button class="btn-buy">Купить</button></div>`;

const renderGoodsList = list => {
    document.querySelector('.goods-list').innerHTML = (list.map(product => renderProduct(product))).join('');
};

renderGoodsList(products);
