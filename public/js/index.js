// The API object contains methods for each kind of request we'll make
var API = {
  saveTraveler: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/voyager/",
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

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var usernameInput = $("#username").val();
  var passwordInput = $("#Password").val();
  var emailInput = $("#emailaddress").val();
  var nameInput = $("#name").val();
  var birthdayInput = $("#birthday").val();
  var locationInput = $("#location").val();
  var travelguideInput = $("#travelguide").val();
  var datesInput = $("#time").val();
  var specialrequestsInput = $("#specialrequests").val();

  var newVoyager = {
    username: usernameInput,
    password: passwordInput,
    email: emailInput,
    name: nameInput,
    birthday: birthdayInput,
    location: locationInput,
    travelguide: travelguideInput,
    dates: datesInput,
    specialrequests: specialrequestsInput
  };
  console.log(newVoyager);

  API.saveTraveler(newVoyager).then(function() {
    window.location.href = "/result/" + newVoyager.location;
  });
};

// Add event listeners to the submit and delete buttons
$("#submit").on("click", handleFormSubmit);
