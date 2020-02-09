 
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
                delete this.contacts[i];
            }
        }
    };
    return false;
}

function Destination(location, visitDate) {
    this.location = location;
    this.visitDate = visitDate;
}

Destination.prototype.entry = function() {
    return this.location + " " + this.visitDate;
}