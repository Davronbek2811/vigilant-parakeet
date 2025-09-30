let array = [
    { img: './img/box1.png', name: 'Mars rug', coin: '100', piece: '24 dona mavjud' },
    { img: './img/box2.png', name: 'Keyboard sticker', coin: '49', piece: '11 dona mavjud' },
    { img: './img/box3.png', name: 'Smart watch', coin: '899', piece: '4 dona mavjud' },
    { img: './img/box4.png', name: 'Wireless keyboard', coin: '350', piece: '0 dona mavjud' },
    { img: './img/box5.png', name: 'Mouse', coin: '359', piece: '24 dona mavjud' },
    { img: './img/box6.png', name: 'AirPods', coin: '499', piece: '11 dona mavjud' },
    { img: './img/box7.png', name: 'Powerbank', coin: '899', piece: '5 dona mavjud' },
    { img: './img/box8.png', name: 'USB flash drive', coin: '299', piece: '' },
    { img: './img/box9.png', name: 'Smartphone', coin: '3699', piece: '' },
    { img: './img/box10.png', name: 'Playstation 5', coin: '7449', piece: '' },
    { img: './img/box11.png', name: 'Yandex Station', coin: '1999', piece: '' },
    { img: './img/box12.png', name: 'Planshet Samsung', coin: '4999', piece: '' }
];

let div_HTML = document.getElementById('div');
let inputSearch = document.getElementById('search');

function Products(item) {
    div_HTML.innerHTML = "";
    item.map((item) => {
        let divCreate = document.createElement("div");
        divCreate.innerHTML = `
        <img src=${item.img}>
        <h1>${item.name}</h1>
        <p class='coin'>🪙 ${item.coin} coin</p>
        <p>${item.piece}</p>`;
        divCreate.classList.add('box');
        div_HTML.appendChild(divCreate);
    });
}

Products(array);

inputSearch.addEventListener("input", () => {
    let value = inputSearch.value.toLowerCase().trim();
    let filtered = array.filter(item =>
        item.name.toLowerCase().includes(value)
    );
    Products(filtered);
});