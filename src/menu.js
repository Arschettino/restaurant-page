export function displayMenu(content) {
    content.innerHTML = "";
    let food = ['Steak', 'Chicken', 'Fish', 'Mystery Meat', 'Sushi', 'Horse', 'Dog'];

    let banner = document.createElement('div');
    banner.textContent = "Today's Omakase Menu"
    banner.classList.add('heading-banner');

    let menu = document.createElement('div');
    menu.classList.add('menu');
    let list = document.createElement('ul');

    for (let i = 0; i < 7; i++) {
        let item = document.createElement('li');
        item.textContent = food[i] + " - " + "$100";
        list.appendChild(item);
    }

    menu.appendChild(list);
    content.appendChild(banner);
    content.appendChild(menu);
}