App.MeetupController = Ember.ObjectController.extend({
  where: function(key, value) {
    // setter
    if (arguments.length > 1) {
      this.set('location.place',  value);
    }

    // getter
    return this.get('location.place');
  }.property('location.place')
});

App.MeetupShowController = App.MeetupController.extend({
  actions: {
    edit: function() {
      this.set("isEditing", true);
    }
  }
});

App.MeetupEditController = App.MeetupController.extend({
  actions: {
    save: function() {
      this.get("content").save().then(
        this.didSave.bind(this)
      );
    }
  },

  didSave: function(story) {
    this.set("isEditing", false)
  }
});

