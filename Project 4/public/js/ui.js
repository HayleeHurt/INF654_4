// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);
  
    var items = document.querySelectorAll(".collapsible");
    M.Collapsible.init(items);
  });
  
  const tasks = document.querySelector(".tasks");
  const loggedOutLinks = document.querySelectorAll(".logged-out");
  const loggedInLinks = document.querySelectorAll(".logged-in");
  
  const setupUI = (user) => {
    if (user) {
      //toggle UI elements
      loggedInLinks.forEach((item) => (item.style.display = "block"));
      loggedOutLinks.forEach((item) => (item.style.display = "none"));
    } else {
      //toggle UI elements
      loggedInLinks.forEach((item) => (item.style.display = "none"));
      loggedOutLinks.forEach((item) => (item.style.display = "block"));
    }
  };
  
const orders = document.querySelector(".orders")

const setupOrders = (data) => {
    let html = "";
    data.forEach((doc) => {
      const order = doc.data();
      const li = `    
      <div class="card-panel task white row" data-id ="${order.id}">
      <img src="/img/task.png" class="responsive-img materialboxed" alt="">
      <div class="task-detail">
          <div class="task-title">${order.title}</div>
          <div class="task-description">${order.description}</div>
      </div>
      <div class="task-delete">
          <i class="material-icons" data-id ="${order.id}">delete_outline</i>
      </div>
  </div>`;
      html += li;
    });
  
    orders.innerHTML = html;
  };

document.addEventListener("DOMContentLoaded", function () {
    //Nav Menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Order
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" })

});

const renderOrder = (data, id) => {
    const html = `
    <div class="card-panel order white row">
                <img src="/public/img/task.png" class="responsive-img materialboxed" alt="">
                <div class="order-detail">
                    <div class="order-title">${data.title}</div>
                    <div class="order-description">${data.description}</div>
                </div>
                <div class="order-delete">
                    <i class="material-icons" data-id="${id}>delete_outline</i>
                </div>
                `;

  
    orders.innerHTML += html;
  };

  //remove order from DOM
const removeOrder = (id) => {
    const order = document.querySelector(`.order[data-id ='${id}']`);
    // console.log(order);
    order.remove();
  };