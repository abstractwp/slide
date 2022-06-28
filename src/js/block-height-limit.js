(function ( $ ) {
	$(document).ready(function () {
		var target = $("#editor").get(0);
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				checkHeight(mutation);
			});
		});
		var config = {
			childList: true,
			subtree: true,
			characterData: true
		};

		observer.observe(target, config);

		function checkHeight(element) {
			let target;
			if (element.type === 'characterData') {
				target = element.target.parentElement;
			} else {
				target = element.target
			}
			if ( target.classList.contains('wp-block')) {
				const $parent = $(target).parent().parent().parent();
				if($(target).parent().height() > 720) {
					$parent.addClass('overflow-slide');
					$parent.find('.oveflow-alert').remove();
					$parent.append('<span class="oveflow-alert">Overflow warning. Please adjust the amount or size of content to fit slide.</span>');
				} else {
					$parent.removeClass('overflow-slide');
					$parent.find('.oveflow-alert').remove();
				}
			}
		}
	});
}( jQuery ));
