var DetailedView = Backbone.View.extend({
  id: 'product',
  template: App.templates.product_details,
  events: {
    'click button': 'addToCart',
  },

  addToCart: function () {
    App.trigger('add_to_cart', this.model);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },

  initialize: function () {
    this.render();
  },
});
