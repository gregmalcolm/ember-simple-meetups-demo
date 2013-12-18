//App.ApplicationAdapter = DS.RESTAdapter.extend();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Location = DS.Model.extend({
  place: DS.attr('string'),
  address: DS.attr('string'),
  meetups: DS.hasMany('meetup')
});

App.Meetup = DS.Model.extend({
  when: DS.attr('date'),
  group: DS.attr('string'),
  topic: DS.attr('string'),
  location: DS.belongsTo('location')
});

