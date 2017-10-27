$(document).ready(function() {


// Add jQuery here

// Navigation

$('.nav_pipe').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.pipe').removeClass('hide');
  $('.item.pipe').addClass('show');
});

$('.nav_plan').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.plan').removeClass('hide');
  $('.item.plan').addClass('show');
});

$('.nav_ad').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ad').removeClass('hide');
  $('.item.ad').addClass('show');
});

$('.nav_window').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.window').removeClass('hide');
  $('.item.window').addClass('show');
});


// Makes thumbnails smaller

$('.nav_thumbnail').click(function(event) {
  $('.item').addClass('thumbnail');
});

// Makes thumbnails larger

$('.nav_thumbnail').click(function(event) {
  $('.item').removeClass('thumbnail');
});


// Show all

$('.nav_all').click(function(event) {
  $('.item').addClass('show');
  $('.item').removeClass('hide');
});





});
