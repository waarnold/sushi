var router = new (Backbone.Router.extend({
  routes: {
    'menu/:id': 'productDetails',
    'checkout': App.checkoutView.bind(App),
  },
  productDetails: function (id) {
    App.detailedView(id);
  },

  index: function () {
    App.indexView();
  },

  initialize: function () {
    this.route(/^\/?$/, 'index', this.index);
  },
}))();

Backbone.history.start({ pushState: true });

$(document).on('click', 'a[href^="/"]', function (e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});
