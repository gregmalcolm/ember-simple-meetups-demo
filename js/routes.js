App.Router.map(function() {
  this.resource('locations', function() {
    this.resource('meetups', function() {
      this.route('edit', { path: '/edit/:meetup_id'} );
    });
  });
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

