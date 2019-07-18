function createCalendar(elem, year, month) {
    let date = new Date(year, month - 1);
    let tb = document.createElement('table');
    let trh = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        let th = document.createElement('th');
        switch (i) {
            case 0: th.innerText = 'MO';
                break;
            case 1: th.innerText = 'TU'; break;
            case 2: th.innerText = 'WE'; break;
            case 3: th.innerText = 'TH'; break;
            case 4: th.innerText = 'FR'; break;
            case 5: th.innerText = 'SA'; break;
            case 6: th.innerText = 'SU'; break;
        }
        trh.append(th);
    }
    tb.append(trh);

    let tr = document.createElement('tr');
    let count = Math.abs(date.getDay() - 1);
    if (date.getDay() === 0) {
        count = 6;
    }
    for (let i = 0; i < count; i++) {
        let td = document.createElement('td');
        tr.append(td);
    }
    tb.append(tr);

    while (date.getMonth() == month - 1) {
        let tdi = document.createElement('td');
        tdi.innerText = date.getDate();
        tr.append(tdi);
        if ((date.getDay()) % 7 == 0) { // sunday, last day of week - newline
            tb.append(tr);
            tr = document.createElement('tr');
        }
        date.setDate(date.getDate() + 1);
    }
    tb.append(tr);
    elem.append(tb);
}


let elem = document.querySelector('#cal');
let year = 2016;
let month = 4;
createCalendar(elem, year, month);