NewsReader.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    '' : 'index',
    'feeds/:id': 'feedShow' //routes have an implied # sign
  },

  index: function () {
    NewsReader.feeds.fetch();
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    $('#content').html(indexView.render().$el);   //.html or .append???'
  },

  feedShow: function (id) {
    //alert("the id is" + id); //test by going to http://localhost:3000/#/feeds/1
    NewsReader.feeds.fetch({

      success: function() {
        var feed = NewsReader.feeds.get(id);
        feed.fetch();
        var showView = new NewsReader.Views.FeedShow({
          model: feed
        });

        $('#content').html(showView.render().$el);
      }
    });
  }

});