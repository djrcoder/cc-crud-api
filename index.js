async function getFromLog() {
    let elem = document.querySelector('table');
    elem.parentNode.removeChild(elem);
    let newTable = document.createElement("table");
    document.body.appendChild(newTable)

    const URL = `http://localhost:3000/api/log`
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const data = await response.json();


    let table = document.querySelector("table");

    function generateTableHead(table, tdata) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of tdata) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    function generateTable(table, tdata) {
        for (let element of tdata) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }

    let tdata = Object.keys(data[0]);
    generateTableHead(table, tdata);
    generateTable(table, data);
}


async function fetchByActivityId() {
    const activityId = document.getElementById("actid").value;
    let elem = document.querySelector('table');
    elem.parentNode.removeChild(elem);
    let newTable = document.createElement("table");
    document.body.appendChild(newTable)

    const URL = `http://localhost:3000/api/${activityId}`
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const data = await response.json();

    for (const element of data) {
        if (element.time_date) {
            element.time_date = moment(element.time_date).format('M/D h:mm');
        }

        if (element.total_time) {
            element.total_time = Math.floor(element.total_time / 60) + " minutes"
        }

        if (element.distance) {
            element.distance = element.distance + " km"
        }

        let table = document.querySelector("table");

        function generateTableHead(table, tdata) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of tdata) {
                let th = document.createElement("th");
                let text = document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
            }
        }

        function generateTable(table, tdata) {
            for (let element of tdata) {
                let row = table.insertRow();
                for (key in element) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }

        let tdata = Object.keys(data[0]);
        generateTableHead(table, tdata);
        generateTable(table, data);
    }
}

async function getAll() {

    let elem = document.querySelector('table');
    elem.parentNode.removeChild(elem);
    let newTable = document.createElement("table");
    document.body.appendChild(newTable)

    const URL = `http://localhost:3000/api/`
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const data = await response.json();

    for (const element of data) {
        if (element.time_date) {
            element.time_date = moment(element.time_date).format('hh:mm   M/D/YYYY');
        }

        if (element.total_time) {
            element.total_time = Math.floor(element.total_time / 60) + " minutes"
        }

        if (element.distance) {
            element.distance = element.distance + " km"
        }
    }

    let table = document.querySelector("table");

    function generateTableHead(table, tdata) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of tdata) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    function generateTable(table, tdata) {
        for (let element of tdata) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }

    let tdata = Object.keys(data[0]);
    generateTableHead(table, tdata);
    generateTable(table, data);
}



async function newLog() {
    const newEntry = {
        "activity_id": "4058",
        "type_of_ride": "Morning",
        "activity_type": "Bike",
    }

    return fetch('http://localhost:3000/api/new', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify(newEntry)
    }).then(response => response.json()).then((json) => {
        console.log("success")
    })
}



async function newAct() {

    const newEntry = {
        "activity_id": "4058",
        "time_date": "2020-01-26 09:54:32+09",
        "distance": "25",
        total_time: "5600"
    }

    return fetch('http://localhost:3000/api/newact', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify(newEntry)
    }).then(response => response.json()).then((json) => {
        console.log("success")
    })
}


async function deleteById() {

    const deleteId = document.getElementById("delid").value;
    console.log(deleteId)
    const deleteOb = {
        "id": `${deleteId}`
    }


    await fetch(`http://localhost:3000/api/del`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'DELETE',
        body: JSON.stringify(deleteOb)
    })
}

async function distanceUpdate() {
    const id = document.getElementById("iddistance").value;
    const distance = document.getElementById("newdistance").value;
    const distanceOb = {
        "id": `${id}`,
        "distance": `${distance}`
    }

    await fetch('http://localhost:3000/api/update', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PATCH',
        body: JSON.stringify(distanceOb)
    })
}