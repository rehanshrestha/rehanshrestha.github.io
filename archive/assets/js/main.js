$(document).ready(function() {


// Add jQuery here

// Navigation

$('.nav_runway').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.runway').removeClass('hide');
  $('.item.runway').addClass('show');
});

$('.nav_magazine').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.magazine').removeClass('hide');
  $('.item.magazine').addClass('show');
});

$('.nav_gq').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.gq').removeClass('hide');
  $('.item.gq').addClass('show');
});

$('.nav_vogue').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.vogue').removeClass('hide');
  $('.item.vogue').addClass('show');
});


$('.nav_hb').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.hb').removeClass('hide');
  $('.item.hb').addClass('show');
});


$('.nav_backstage').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.backstage').removeClass('hide');
  $('.item.backstage').addClass('show');
});


$('.nav_sp').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.sp').removeClass('hide');
  $('.item.sp').addClass('show');
});


$('.nav_dior').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.dior').removeClass('hide');
  $('.item.dior').addClass('show');
});


$('.nav_ysl').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ysl').removeClass('hide');
  $('.item.ysl').addClass('show');
});


$('.nav_chanel').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.chanel').removeClass('hide');
  $('.item.chanel').addClass('show');
});


$('.nav_versace').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.versace').removeClass('hide');
  $('.item.versace').addClass('show');
});


$('.nav_valentino').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.valentino').removeClass('hide');
  $('.item.valentino').addClass('show');
});



// Show all

$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});



$('.nav_thumbnail').click(function(event){
$ ('.item').removeClass('col1of4');
$ ('.item').removeClass('fullsize');
$ ('.item').addClass('thumbnail');


});

$('.nav_large').click(function(event){

  $ ('.item').addClass('large');


});
