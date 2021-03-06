import bootstrap from 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'bootstrap/css/bootstrap-theme.css!'

import $ from 'jquery';

// Make jquery available in the console
window.$ = $;

$('body').show();

$(function() {
  $('button#add').click(function(e) {
    // Make sure the form does not get submitted
    e.preventDefault();

    // extract the current value of the todo
    var newTodo = $('input[name=todo]').val();

    // create a completely new (unattached)
    // list item element (<li>)
    var newListElement = $('<li></li>');

    // Set its text
    newListElement.text(newTodo);

    // And add it to the end of the list
    $('ul').append(newListElement);

    // Then clear out the input element
    $('input[name=todo]').val("");
  });
});
