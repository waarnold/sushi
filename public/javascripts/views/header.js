var HeaderView = Backbone.View.extend({
  el: $('a#cart').get(0),
  template: App.templates.header,
  render: function () {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
    }));
  },

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
    this.listenTo(this.collection, 'checkout_updated', this.render);
    this.$el.on('click', function (e) { e.preventDefault(); });
  },
});
