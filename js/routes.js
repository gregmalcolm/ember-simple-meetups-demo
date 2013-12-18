App.Router.map(function() {
  this.resource('locations', function() {
    this.resource('meetups');
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(params) {
    this.transitionTo("meetups");
  }
});

App.LocationsRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").findAll('location');
  }
});

App.MeetupsRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").findAll('meetup');
  }
});

