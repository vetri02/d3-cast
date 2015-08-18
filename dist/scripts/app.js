"use strict";
function draw(data) {
  var sel = d3.select('ul').selectAll('li').data(data);
  sel.enter().append('li').text((function(d) {
    return (d.title + " (" + d.view_count + ")");
  }));
  sel.exit().attr('class', 'deleted');
}
var screencasts = [];
d3.json('/dist/scripts/feed.json', (function(data) {
  d3.select('#container').append('ul');
  screencasts = data.sort((function(a, b) {
    return b.view_count - a.view_count;
  }));
  draw(screencasts);
}));
