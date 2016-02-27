$(document).ready(function(){
	var headerAuthorizeLink = $('.js-head-lk-enter');
	var headerAuthorizeBlock = $('.js-head-enter-block');

	var headerSearchLink = $('.js-head-lk-search');
	var headerSearchBlock = $('.js-head-search-block');

	//Окно авторизации и поиск по кнопке
	headerAuthorizeLink.on('click', function(){
		headerAuthorizeBlock.toggleClass('head-lk-enter__enter-block_active');
		return false;
	});

	headerSearchLink.on('click', function(){
		headerSearchBlock.toggleClass('head-lk-search__search-block_active');
		return false;
	});
});