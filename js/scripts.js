function PlaceList() {
    this.destinations = [];
    this.currentId = 0;
}

PlaceList.prototype.addDestination = function(destination) {
    destination.id = this.assignId();
    this.destinations.push(destination);
}

PlaceList.prototype.assignId = function() {
    this.currentId += 1;
    return this.destinations.currentId;
}

PlaceList.prototype.findDestination = function(id) {
    for (var i=0; i< this.destinations.length; i++) {
        if (this.destinations[i]) {
            if (this.destinations[i].id == id) {
                return this.destinations[i];
            }
        }
    };
    return false;
}

PlaceList.prototype.deleteDestination = function(id) {
    for (var i=0; i< this.contacts.length; i++) {
        if (this.destinations[i]) {
            if (this.destinations[i].id == id) {
                delete this.destinations[i];
            }
        }
    };
    return false;
}

function Destination(location, visitDate) {
    this.locationName = locationName;
    this.visitDate = visitDate;
}

Destination.prototype.entry = function() {
    return this.locationName+ " " + this.visitDate;
}

var placeList = new PlaceList();

function displayPlaceDetails(placeListToDisplay) {
    var destinationsList = $("ul#destinations");
    var htmlforDestinationInfo = "";
    placeListToDisplay.destinations.forEach(function(destination) {
        htmlforDestinationInfo += "<li id=" + destination.id + ">" + destination.locationName + " " + destination.visitDate + "<li>";
    });
    destinationsList.html(htmlforDestinationInfo);
};

$(document).ready(function() {
    $("form#new-destination").submit(function(event) {
        event.preventDefault();
        var locationInput = $("input#new-location").val();
        var dateInput = $("input#visit-date").val();
        var newDestination = new Destination(locationInput, dateInput);
        placeList.addDestination(newDestination);
        displayPlaceDetails(placeList);
    })
})