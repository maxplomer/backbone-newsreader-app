NewsReader.Views.FeedShow = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    // must render the view again once the collection is fetched
  },

  template: JST['feeds/show'],

  tagName: 'ul',

  render: function() {
    var content = this.template( {feed: this.model} );
    this.$el.html(content)
    var that = this;

    this.model.entries().each(function(entry) {
      var view = new NewsReader.Views.EntryShow({
        model: entry
      });
      that.$el.append(view.render().$el);
    });

    return this
  }


});