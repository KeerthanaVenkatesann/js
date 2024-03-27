function addform() {
  window.location.href = "/Workers/workersform.html";
}
function backform() {
  window.location.href = "/index.html";
}

let localst = [];
let editId;
function onload() {
  gettable();
}
function gettable() {
  editId = undefined;
  let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees";

  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      // Printing our response
      // console.log(string);

      console.log(string);
      localst = string;
      addTable();
      // Printing our field of our response
      console.log(`Title of our response :  ${localst.WorkerName}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function addTable() {
  var table = "";
  console.log(localst);

  for (i = 0; i < localst.length; i++) {
    table += " <tr>";
    table += "<td>" + localst[i].WorkerName + "</td>";
    table += "<td>" + localst[i].FatherName + "</td>";
    table += "<td>" + localst[i].Age + "</td>";
    table += "<td>" + localst[i].DateofBirth + "</td>";
    table += "<td>" + localst[i].City + "</td>";
    table += "<td>" + localst[i].Address + "</td>";
    table += "<td>" + localst[i].Pincode + "</td>";
    table += "<td>" + localst[i].MaleFemale + "</td>";

    table +=
      '<td ><button class="btn  mr-3 w-50 rounded btn-outline-light "  style=" background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%)" onclick="Edit(' +
      localst[i].id +
      ')">Edit</button><button class="btn   w-50 rounded  btn-outline-light " style="  background-image: linear-gradient(to right, #CC95C0 0%, #DBD4B4  51%, #CC95C0  100%);" onclick="Delete(' +
      localst[i].id +
      ')">Delete</button></td>';

    table += "</tr>";
  }
  document.getElementById("work").innerHTML = table;
}

function Delete(id) {
  let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees";

  fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      gettable();
      console.log(`Title of our response :  ${string.WorkerName}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function Edit(id) {
  editId = id;
  window.location.href = "workersform.html?id=" + id;
}
