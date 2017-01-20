var Cart = Backbone.Collection.extend({
  quantity: 0,
  total: 0,

  getQuantity: function () {
    return this.quantity;
  },

  getTotal: function () {
    return this.total;
  },

  setQuantity: function () {
    this.quantity = this.toJSON().reduce(function (a, b) {
      return a + b.quantity;
    }, 0);

    return this;
  },

  updateProductQuantity: function (id, newQuantity) {
    this.get(id).set('quantity', newQuantity);
    this.update();
    this.trigger('checkout_updated');
  },

  setTotal: function () {
    this.total = this.toJSON().reduce(function (a, b) {
      return a + b.quantity * b.price;
    }, 0);

    return this;
  },

  removeProduct: function (id) {
    this.remove(id);
    this.update();
    this.trigger('cart_updated');
  },

  update: function () {
    this.setTotal().setQuantity();
  },

  empty: function () {
    this.reset();
    this.update();
    this.trigger('cart_updated');
  },

  addProduct: function (model) {
    var existing = this.get(model.get('id'));

    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      existing = model.clone();
      existing.set('quantity', 1);
      this.add(existing);
    }

    this.update();
    this.trigger('cart_updated');
  },

  initialize: function () {
    this.on('remove_product', this.removeProduct);
    this.on('empty_cart', this.empty);
    this.on('update_product_quantity', this.updateProductQuantity);
  },
});
