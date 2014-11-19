NewsReader.Views.FeedsIndex = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    // must render the view again once the collection is fetched
  },

  template: JST['feeds/index'],

  render: function() {
    var renderedContent = this.template({
      feeds: this.collection//NewsReader.feeds
    });

    this.$el.html(renderedContent);  ///$el = ????, empty, all content put inside a div on page

    return this;
  }

});
