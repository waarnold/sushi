var CheckoutView = Backbone.View.extend({
  id: 'checkout',
  template: App.templates.checkout,
  events: {
    'blur input[type="number"]': 'updateCart',
    'click a': 'cancelOrder',
    'click button': 'submitOrder',
  },
  updateCart: function (e) {
    var newQuantity = +$(e.target).val();
    var id = +$(e.target).closest('tr').attr('data-id');
    this.collection.trigger('update_product_quantity', id, newQuantity);
  },

  cancelOrder: function (e) {
    e.preventDefault();
    this.collection.trigger('empty_cart');
    router.navigate('/', { trigger: true });
  },

  submitOrder: function () {
    this.collection.trigger('empty_cart');
    router.navigate('/', { trigger: true });
    console.log('Thank you for your order!');

    // work on passing a flash message!
  },

  render: function () {
    this.$el.html(this.template({
      products: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
    App.$el.html(this.$el);
    $('#pre_content').html('');
    this.delegateEvents();
  },

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'checkout_updated', this.render);
  },
});
