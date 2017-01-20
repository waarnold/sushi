var Products = Backbone.Collection.extend({
  model: Product,
  lastID: 0,
  nextID: function () {
    return ++this.lastID;
  },
});
