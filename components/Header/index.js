// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(dates, title, temp) {
    let header = document.createElement('div');
    header.classList.add('header');

    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = dates;
    header.appendChild(date);

    let h1 = document.createElement('h1');
    h1.textContent = title;
    header.appendChild(h1);

    let temperature = document.createElement('span');
    temperature.classList.add('temp');
    temperature.textContent = temp;
    header.appendChild(temperature);

    return header;
}

document.querySelector('.header-container').append(Header('SMARCH 28, 2019', 'Lambda Times', '98°'));
