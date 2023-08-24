let products = [
    {id:1, price: 200, name:'ny Quang', img:'https://i.vietgiaitri.com/2022/1/6/noi-tieng-loa-khung---ba-chua-vsbg-phuong-anh-le-tiep-tuc-khieu-khich-bang-anh-nguc-cong-mong-thu-voi-bo-do-quen-thuoc-nhin-ngo--17f-6252856.jpg'},
    {id:2, price: 100, name:'ny Hiếu', img:'https://openseauserdata.com/files/07b2c25f2c7ed30453c51b6b8ae2d60a.jpg'},
    {id:3, price: 400, name:'ny Minh', img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7F42HBVj1NjbGJIIT_JX0YV7hoxHnuVDczzWxMN1Goh6_uT_6yPXSKHxDJqkb1TYq7rdxJhB4Bcj1vyaxTlXNF-8tGw1GHUQi7NFAaevShlL2R6MHk8RKtAofE7NP72EX5jaXNjSXB6Fw2WteMf9NwNp1qe72nLxaudSNJQS0Z6BRS_DUp3P0e0Nu/s1731/2.jpg'}
];

show();


function show() {
    let str = "";
    for (const product of products) {
        str += ` <tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td><img src="${product.img}" width="300" height="250"></td>
              <td><button type="button" class="btn btn-warning" onclick="showEdit(${product.id})"  data-toggle="modal" data-target="#modalEdit" >Edit</button></td>
              <td><button type="button" class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button></td>
             </tr>`
    }
    document.getElementById("show").innerHTML =str;
}

function showEdit(idP) {
    let index = findIndexById(idP);
    document.getElementById("idE").value = products[index].id;
    document.getElementById("nameE").value = products[index].name;
    document.getElementById("priceE").value = products[index].price;
    document.getElementById("imgE").value = products[index].img;
}

function editProduct() {
    let id = document.getElementById("idE").value;
    let name = document.getElementById("nameE").value;
    let price = document.getElementById("priceE").value;
    let img = document.getElementById("imgE").value;
    let product = {id,name,price,img}
    let index = findIndexById(id);
    products[index] = product;
    show();
}

function deleteProduct(idP) {
    let index = findIndexById(idP);
    products.splice(index,1);
    show();
}

function findIndexById(idP) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == idP) return i;
    }
    return -1;
}

function createProduct() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let img = document.getElementById("img").value;
    let product = {id,name,price,img}
    products.push(product);
    show();
}
