$(function() {

	$('#order-form').on('submit', event => {
		event.preventDefault();

		var name = $('#field-name').val();
		if (name.length === 0) return;
		$('#field-name').val(''); // clear field

		var req = $.post('/api/burgers', { name: name });
		req.done(res => {
			var item = $('<li>', {
				'data-id': res.id
			});
			item.append($('<span>', {
				text: name
			}));
			item.append($('<button>', {
				text: 'Devour',
				class: 'btn btn-outline-warning devour',
				'data-id': res.id
			}));
			$('#menu').append(item);
		});
		req.fail(res => {
			alert(res.error);
		});
	});


	$('#menu').on('click', '.devour', event => {
		/*
		for some reason `this` is just the document
		instead of the button that was clicked
		???????????? i have no idea why it's happening
		so i'm just using event.target and it works i guess
		*/

		// console.log(this) // whyyyyyy

		var id = $(event.target).data('id');

		$.ajax({
			method: 'PUT',
			url: '/api/burgers/' + id
		});

		var menuItem = $('#menu li[data-id="' + id + '"]');
		$('#history').append($('<li>', {
			text: menuItem.find('span').text()
		}));
		menuItem.remove();
	});

});
