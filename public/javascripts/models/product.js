var Product = Backbone.Model.extend({
  initialize: function () {
    if (!this.get('id')) this.set('id', this.collection.nextID());
  },
});
