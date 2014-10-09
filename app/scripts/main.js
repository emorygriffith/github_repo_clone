
var users = 'https://api.github.com/users/emorygriffith';
var repo = 'https://api.github.com/users/emorygriffith/repos';
var org = 'https://api.github.com/users/emorygriffith/orgs';
var orgs;




  var template = $('#top_box').html();
  var rendered = _.template(template);

  $.getJSON(users).done( function(i){
    $('.headright').prepend(rendered(i));
  });


  var template2 = $('#side_box').html();
  var rendered2 = _.template(template2);

  $.getJSON(users).done( function(i){
    $('.boxleft').prepend(rendered2(i));
  });



  var template3 = $('#orgimg').html();
  var rendered3 = _.template(template3);

  $.getJSON(org).done( function(i){
    i.forEach(function(o){
      orgs = o.avatar_url;

    $('.org').append(rendered3(o));
    })
  });
