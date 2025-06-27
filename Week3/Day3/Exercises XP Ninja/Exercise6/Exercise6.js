/**
 * createCalendar
 * @param {*} year 
 * @param {*} month 
 */
function createCalendar(year, month) {
    const mon = month - 1;
    let date = new Date(year, mon);

    // build the month name
    const monthName = date.toLocaleString('default', { month: 'long' });

    // add year + month heading row
    let table = `<table border="1">
    <tr><th colspan="7">${monthName} ${year}</th></tr>
    <tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>`;

    for (let i = 0; i < getDay(date); i++) {
        table += "<td>.</td>";
    }

    while (date.getMonth() === mon) {
        table += `<td>${date.getDate()}</td>`;
        if (getDay(date) % 7 === 6) {
            table += "</tr><tr>";
        }
        date.setDate(date.getDate() + 1);
    }

    table += "</tr></table>";
    document.body.innerHTML = table;
}

/**
 * getDay
 * @param {*} date 
 * @returns day index from 0 (Monday) to 6 (Sunday)
 */
function getDay(date) {
    let day = date.getDay();
    if (day === 0) day = 7; // treat Sunday as 7
    return day - 1;
}

// test
createCalendar(2000, 6);
