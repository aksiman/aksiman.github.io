$(function() {


	

	$(".carusel").owlCarousel({
		loop:true,

		responsive:{
			0:{
				items:2,
				
			},
			600:{
				items:4,
				
			},
			1000:{
				items:5,
								
				}
			}
	});



	$(".s2item").animated("slideInUp");
	$(".tr").animated("slideInUp");
	$(".s5item").animated("slideInUp");
	$("h2").animated("bounceInLeft");
	$(".s6item").animated("slideInUp");
	$(".wow").animated("pulse");
	$(".tr1").animated("bounceInRight");






	$(".buttonh").click(function () {
		$("html, body").animate({
			scrollTop : $(".s2").offset().top
		}, 1000);
	});

	$(".onas").click(function () {
		$("html, body").animate({
			scrollTop : $(".s4").offset().top
		}, 1000);
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});

		// Закрыть попап «спасибо»
	$('.js-close-thank-you').click(function() { // по клику на крестик
		$('.js-overlay-thank-you').fadeOut();
	});

	$(document).mouseup(function (e) { // по клику вне попапа
		var popup = $('.popup');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-thank-you').fadeOut();
		}
	});

	// Маска ввода номера телефона (плагин maskedinput)
	$(function($){
		$('[name="phone"]').mask("+7(999) 999-9999");
	});

	$("a[href='#raz']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

	$("a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		$(".form-callback h3").text(dataForm);
		$(".form-callback [name=admin-data]").val(dataForm);
	});

	$(".pop").magnificPopup({
		mainClass: 'mfp-zoom-in',

		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
