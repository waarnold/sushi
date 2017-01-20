var ProductsView = Backbone.View.extend({
  tagName: 'ul',
  id: 'products',
  template: App.templates.products,
  events: {
    'click button': 'addToCart',
  },

  addToCart: function (e) {
    var id = $(e.target).closest('li').attr('data-id');

    // this seems off...
    var model = App.products.get(id);
    App.trigger('add_to_cart', model);
  },

  render: function () {
    this.$el.html(this.template({ products: this.collection.toJSON() }));
    App.$el.html(this.$el);
  },

  initialize: function () {
    this.render();
  },
});
