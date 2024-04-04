fetch('https://randomuser.me/api/?results=5').then((data) => {
    return data.json();
    }).then((data) => {
        let tableData = "";
        data.results.map((values) => {
            tableData += `<tr>
            <td>${values.name.first}</td>
            <td>${values.location.city}</td>
            </tr>`;
        });
        document.getElementById('table').innerHTML = tableData;
    })