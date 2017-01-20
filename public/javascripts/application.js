var App = {
  templates: JST,
  $el: $('#main_content'),
  createCart: function () {
    this.cart = new Cart();
    this.cart.view = new CartView({ collection: this.cart });
    this.cart.headerView = new HeaderView({ collection: this.cart });
  },

  bindEvents: function () {
    _.extend(this, Backbone.Events);
    this.on('add_to_cart', this.cart.addProduct.bind(this.cart));
  },

  detailedView: function (id) {
    new DetailedView({ model: this.products.get(id) });
  },

  checkoutView: function () {
    this.checkout = new CheckoutView({ collection: this.cart });
  },

  indexView: function () {
    this.index = new ProductsView({ collection: this.products });
    this.cart.view.render();
  },

  init: function () {
    this.createCart();
    this.bindEvents();
  },
};

Handlebars.registerHelper('formatPrice', function (price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper('convertToKcal', function (kj) {
  return (+kj / 4.1868).toFixed(4);
});

Handlebars.registerHelper('prevID', function (id) {
  var result = +id - 1;
  return result === 0 ? 19 : result;
});

Handlebars.registerHelper('nextID', function (id) {
  var result = +id + 1;
  return result === 20 ? 1 : result;
});
