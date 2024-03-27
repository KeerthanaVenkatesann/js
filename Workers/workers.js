let localst = [];
let infor = {};
let editId;
function addform() {
  window.location.href = "/Workers/workerstab.html";
}
function add1form() {
  window.location.href = "/index.html";
}

function submit() {
  var WorkerName = document.getElementById("WorkerName").value;
  var FatherName = document.getElementById("FatherName").value;
  var Age = document.getElementById("Age").value;
  var DateofBirth = document.getElementById("DateofBirth").value;
  var City = document.getElementById("City").value;
  var Address = document.getElementById("Address").value;
  var Pincode = document.getElementById("Pincode").value;
  var MaleFemale = document.getElementById("MaleFemale").value;

  console.log(WorkerName);
  console.log(FatherName);
  console.log(Age);
  console.log(DateofBirth);
  console.log(City);
  console.log(Address);
  console.log(Pincode);
  console.log(MaleFemale);

  if (WorkerName == "") {
    document.getElementById("content").innerHTML = "'Required'";
    document.getElementById("content").style.color = "red";
    document.getElementById("WorkerName").style.border = "1px solid red";
  } else {
    document.getElementById("content").innerHTML = "";
    document.getElementById("WorkerName").style.border = "1px solid green";
  }

  if (FatherName == "") {
    document.getElementById("content2").innerHTML = "'Required'";
    document.getElementById("content2").style.color = "red";
    document.getElementById("FatherName").style.border = "1px solid red";
  } else {
    document.getElementById("content2").innerHTML = "";
    document.getElementById("FatherName").style.border = "1px solid green";
  }
  if (Age == "") {
    document.getElementById("content3").innerHTML = "'Required'";
    document.getElementById("content3").style.color = "red";
    document.getElementById("Age").style.border = "1px solid red";
  } else {
    document.getElementById("content3").innerHTML = "";
    document.getElementById("Age").style.border = "1px solid green";
  }

  if (DateofBirth == "") {
    document.getElementById("content4").innerHTML = "'Required'";
    document.getElementById("content4").style.color = "red";
    document.getElementById("DateofBirth").style.border = "1px solid red";
  } else {
    document.getElementById("content4").innerHTML = "";
    document.getElementById("DateofBirth").style.border = "1px solid green";
  }

  // document
  //   .getElementById("DateofBirth")
  //   .addEventListener("change", function () {
  //     var dob = new Date(this.value);
  //     var DateofBirth =
  //       (dob.getMonth() + 1).toString().padStart(2, "0") +
  //       "/" +
  //       dob.getDate().toString().padStart(2, "0") +
  //       "/" +
  //       dob.getFullYear();

  //     if (DateofBirth !== "NaN/NaN/NaN") {
  //       document.getElementById("content4").innerHTML = "";
  //       document.getElementById("DateofBirth").style.border = "1px solid green";
  //     } else {
  //       document.getElementById("content4").innerHTML =
  //         "Invalid date format (MM/DD/YYYY)";
  //       document.getElementById("content4").style.color = "red";
  //       document.getElementById("DateofBirth").style.border = "1px solid red";
  //     }
  //   });

  if (City == "") {
    document.getElementById("content5").innerHTML = "'Required'";
    document.getElementById("content5").style.color = "red";
    document.getElementById("City").style.border = "1px solid red";
  } else {
    document.getElementById("content5").innerHTML = "";
    document.getElementById("City").style.border = "1px solid green";
  }
  if (Address == "") {
    document.getElementById("content6").innerHTML = "'Required'";
    document.getElementById("content6").style.color = "red";
    document.getElementById("Address").style.border = "1px solid red";
  } else {
    document.getElementById("content6").innerHTML = "";
    document.getElementById("Address").style.border = "1px solid green";
  }

  if (Pincode == "") {
    document.getElementById("content7").innerHTML = "'Required'";
    document.getElementById("content7").style.color = "red";
    document.getElementById("Pincode").style.border = "1px solid red";
  } else {
    document.getElementById("content7").innerHTML = "";
    document.getElementById("Pincode").style.border = "1px solid green";
  }
  if (MaleFemale == "") {
    document.getElementById("content8").innerHTML = "'Required'";
    document.getElementById("content8").style.color = "red";
    document.getElementById("MaleFemale").style.border = "1px solid red";
  }
  // (MaleFemale == "Choose"){
  //   document.getElementById("content8").innerHTML = "'Required'";
  //   document.getElementById("content8").style.color = "red";
  //   document.getElementById("MaleFemale").style.border = "1px solid red";
  // }
  else {
    document.getElementById("content8").innerHTML = "";
    document.getElementById("MaleFemale").style.border = "1px solid green";
  }

  if (
    WorkerName == "" ||
    FatherName == "" ||
    Age == "" ||
    DateofBirth == "" ||
    City == "" ||
    Address == "" ||
    Pincode == "" ||
    MaleFemale == ""
  ) {
    return false;
  }

  infor["WorkerName"] = WorkerName;
  infor["FatherName"] = FatherName;
  infor["Age"] = Age;
  // infor["DateofBirth"] = DateofBirth;
  infor["City"] = City;
  infor["Address"] = Address;
  infor["Pincode"] = Pincode;
  infor["MaleFemale"] = MaleFemale;

  const Birth = new Date(DateofBirth);
  const formatteddate = Birth.toLocaleDateString("en-GB");
  infor["DateofBirth"] = formatteddate;

  if (editId != undefined) {
    let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees";
    fetch(url + "/" + editId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(infor),
    })
      .then((Result) => Result.json())
      .then((string) => {
        // Printing our response
        console.log(string);
        window.location.replace("workerstab.html");
        // getList();
        // Printing our field of our response
        console.log(`Title of our response :  ${string.WorkerName}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(infor),
    })
      .then((Result) => Result.json())
      .then((string) => {
        // Printing our response
        console.log(string);
        window.location.replace("workerstab.html");
        // getList();
        // Printing our field of our response
        console.log(`Title of our response :  ${string.WorkerName}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  document.getElementById("WorkerName").value = "";
  document.getElementById("FatherName").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("DateofBirth").value = "";
  document.getElementById("City").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Pincode").value = "";
  document.getElementById("MaleFemale").value = "";
}

function onload() {
  Edit(); 
}
function Edit() {
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  console.log(id);
  editId = id;
  if (id) {
    let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees";
    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        // Printing our response
        console.log(string);
        localst = string;
        console.log(localst);
        // Printing our field of our response

        document.getElementById("WorkerName").value = localst.WorkerName;
        document.getElementById("FatherName").value = localst.FatherName;
        document.getElementById("Age").value = localst.Age;

        localst.DateofBirth = localst.DateofBirth.split("/")
          .reverse()
          .join("-");
        document.getElementById("DateofBirth").value = localst.DateofBirth;

        document.getElementById("DateofBirth").value = localst.DateofBirth;
        document.getElementById("City").value = localst.City;
        document.getElementById("Address").value = localst.Address;
        document.getElementById("Pincode").value = localst.Pincode;
        document.getElementById("MaleFemale").value = localst.MaleFemale;
        
        // document.getElementById("MaleFemale").value = localst.MaleFemale;

        console.log(`Title of our response :  ${localst.WorkerName}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.querySelector('.was-validated');

//   form.addEventListener('submit', function(event) {
//     if (!form.checkValidity()) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     form.classList.add('was-validated');
//   });

//   const inputs = form.querySelectorAll('input');
//   inputs.forEach(function(input) {
//     input.addEventListener('input', function() {
//       if (input.checkValidity()) {
//         input.classList.remove('is-invalid');
//         input.classList.add('is-valid');
//       } else {
//         input.classList.remove('is-valid');
//         input.classList.add('is-invalid');
//       }
//     });
//   });

//   const checkboxes = form.querySelectorAll('.form-check-input');
//   checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener('change', function() {
//       if (checkbox.checkValidity()) {
//         checkbox.classList.remove('is-invalid');
//         checkbox.classList.add('is-valid');
//       } else {
//         checkbox.classList.remove('is-valid');
//         checkbox.classList.add('is-invalid');
//       }
//     });
//   });
// });
