import users from "./data.js";

const index = () => {
    const tableContainer = document.querySelector('tbody');

    users.map(user => {
        const row = document.createElement(`tr`);
        row.innerHTML = `
            <td>${user.nama}</td>
            <td>${user.umur}</td>
            <td>${user.alamat}</td>
            <td>${user.email}</td>
        `;

        tableContainer.appendChild(row)
    });
}

const store = (user) => {
    users.push(user);
}

const destroy = (nama) => {
    const index = users.findIndex(user => user.nama.toLowerCase() === nama.toLowerCase());
    if (index == -1) return;

    users.splice(index, 1);
}

export { index, store, destroy};