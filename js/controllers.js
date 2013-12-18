App.MeetupsController = Ember.ArrayController.extend({
  actions: {
    edit: function(id) {
      this.transitionToRoute("meetups.edit", id);
    }
  }
});
App.MeetupsEditController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get("content").save().then(
        this.didSave.bind(this)
      );
    }
  },

  didSave: function(story) {
    this.transitionToRoute("meetups");
  }
});

