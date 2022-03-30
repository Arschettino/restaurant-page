export function displayHome(content) {
    content.innerHTML = "";
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let banner = document.createElement('div');
    banner.textContent = "North Italia Fine Steakhouse"
    banner.classList.add('heading-banner');

    let mission = document.createElement('div');
    mission.classList.add('mission');
    mission.textContent = "We strive to serve the best fine Italian steak in all the land. We promise you won't be disappointed"

    let hours = document.createElement('div');
    hours.classList.add('hours');
    let list = document.createElement('ul');

    for (let i = 0; i < 7; i++) {
        let day = document.createElement('li');
        day.textContent = week[i] + ": " + "4:30pm - 11:00pm";
        list.appendChild(day);
    }
    hours.appendChild(list);
    content.appendChild(banner);
    content.appendChild(mission);
    content.appendChild(hours);
}