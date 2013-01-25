
'use strict';

window.snap = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  init: function() {

    var SnapApp = snap.Views.applicationView;

    var cards = [
      {color : 'red'},
      {color : 'red'},
      {color : 'green'},
      {color : 'green'} ,
      {color : 'blue'},
      {color : 'blue'}
    ];

    var Cards = new snap.Collections.CardCollection(_.shuffle(cards));

    new SnapApp();
  }
};

$(document).ready(function(){
  snap.init();
});
