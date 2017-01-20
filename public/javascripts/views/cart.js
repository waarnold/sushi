var CartView = Backbone.View.extend({
  el: $('#pre_content').get(0),
  template: App.templates.cart,
  events: {
    'click a.empty': 'emptyCart',
    'click a.checkout': 'checkout',
    'click li a': 'removeFromCart',
  },
  removeFromCart: function (e) {
    var id = +$(e.target).closest('li').attr('data-id');
    this.collection.trigger('remove_product', id);
  },

  emptyCart: function (e) {
    e.preventDefault();
    this.collection.trigger('empty_cart');
  },

  render: function () {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      products: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
  },

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  },
});
