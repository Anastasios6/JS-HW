let objects = [];
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
        objects = res;
        renderObjects();
    })


document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e);
    const ID = document.getElementById("id").value;
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    const rating = { rate: document.getElementById("rate").value };

    const newObject = {
        id: ID,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
        rating: rating
    };
    console.log(newObject);
    objects.push(newObject);
    // update local storage
    document.getElementById("id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("image").value = "";
    renderObjects();

})
function renderObjects() {
    const tableBody = document.getElementById("tBody");
    tableBody.innerHTML = "";

    objects.forEach((object) => {
        const tr = document.createElement("tr");

        tr.innerHTML = ` <td>${object.id}</td>
                     <td>${object.title}</td>
                     <td>${object.price}</td>
                        <td>${object.description}</td>
                        <td>${object.category}</td>
                        <td><img src="${object.image}" alt="Image" width="50"></td>
                        <td>${object.rating.rate}</td>
                           <td>
                <button onclick="editObject('${object.id}')">Edit</button>
                <button onclick="deleteObject('${object.id}')">Delete</button>
            </td>
                     `;
        tableBody.appendChild(tr);
    });
}
function deleteObject(id) {
    const idToDelete = Number(id);
   objects = objects.filter((object) => object.id != idToDelete);
    renderObjects();
}