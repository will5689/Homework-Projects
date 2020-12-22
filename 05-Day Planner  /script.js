$(document).ready(function () {
  var currentTime = moment().format("MMMM Do YYYY, h:mm a");
  console.log(currentTime);
  $("#emtpyDiv").text(currentTime);

  $("#8am").val(localStorage.getItem("8am-block"));

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();

    //$(".textinput").each(function();

    var eight = localStorage.getItem("8");
    var nine = localStorage.getItem("9");
    $("#9").data("input-text ");
    $("#8").data("input-text");
    localStorage.setItem(eight, $("#8").val());
    localStorage.setItem(nine, $("#9").val());
    console.log(localStorage);
  });
});

// var savedText10 = localStorage.getItem("savedInput10");
// $("#input10").val(savedText10);

//  <div class="container">
//       <div class="row">
//         <div class="col-sm-2 time-block" id="testTime" value="9" name="4">
//           9 AM
//         </div>
//         <div class="col-sm-8 textinput" value = "9">
//           <input
//             id="input9"
//             type="text"
//             class="form-control inputText"
//             aria-label="Sizing example input"
//             aria-describedby="inputGroup-sizing-sm"
//           />
//         </div>
