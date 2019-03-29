// The API object contains methods for each kind of request we'll make
var API = {
  saveTraveler: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/voyager",
      data: JSON.stringify(example)
    });
  },
  getAllTravelers: function() {
    return $.ajax({
      url: "api/voyager",
      type: "GET"
    });
  },
  getSimilarTravelers: function(location) {
    return $.ajax({
      url: "api/voyager/" + location,
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var newVoyager = {
    name: $("#name")
      .val()
      .trim(),
    email: $("#emailaddress")
      .val()
      .trim(),
    username: $("#username")
      .val()
      .trim(),
    password: $("#Password")
      .val()
      .trim(),
    birthday: $("#birthday")
      .val()
      .trim(),
    location: $("#location")
      .val()
      .trim(),
    travelGuide: $("#travelGuide")
      .val()
      .trim(),
    time: $("#time")
      .val()
      .trim(),
    specialRequests: $("#specialrequests")
      .val()
      .trim()
  };

  API.saveTraveler(newVoyager).then(function(savedVoyager) {
    $("#username").val("");
    $("#password").val("");
    $("#name").val("");
    $("#birthday").val("");
    $("#location").val("");
    $("#specialrequests").val("");
    $("#travelGuide").val("");
    $("#time").val("");

    window.location.replace(
      window.location.hostname + "/voyager/" + savedVoyager.location
    );
  });
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
$("#submit").on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);
