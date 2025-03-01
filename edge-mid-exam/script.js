const jsonData = `[
    {"id": 1, "name":"Alice Johnson","email":"alice@example.com"},
    {"id": 2, "name":"Bob Smith","email":"bob@example.com"},
    {"id": 3, "name":"Charlie Brown","email":"charlie@example.com"},
    {"id": 4, "name":"David Wilson","email":"david@example.com"},
    {"id": 5, "name":"Emma Davis","email":"emma@example.com"},
    {"id": 6, "name":"Frank Thomas","email":"frank@example.com"},
    {"id": 7, "name":"Grace Miller","email":"grace@example.com"},
    {"id": 8, "name":"Henry White","email":"henry@example.com"},
    {"id": 9, "name":"Isabella Moore","email":"isabella@example.com"},
    {"id": 10, "name":"Jack Taylor","email":"jack@example.com"}
]`;

const data = JSON.parse(jsonData);
const tableBody = document.querySelector('#dataTable tbody');

data.forEach(item => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = item.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = item.email;
    row.appendChild(emailCell);

    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', () => {
        row.remove();
    });
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
});