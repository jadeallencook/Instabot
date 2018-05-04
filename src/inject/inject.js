chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			// see if user is on 'tags' page
			if (window.location.pathname.indexOf('/explore/tags/') !== -1) {
				// where to place btn
				var container = document.querySelector('div._ex0oh');
				// create btn
				var btn = document.createElement('div');
				btn.classList.add('instabot-btn');
				btn.innerText = 'Like Posts';
				// new like posts btn 
				btn.onclick = function () {
					var likes = 0;
					document.querySelector('div._e3il2').click();
					var automation = setInterval(function () {
						// cache document elements
						var heart = document.querySelector('span.coreSpriteHeartOpen');
						var next = document.querySelector('a.coreSpriteRightPaginationArrow');
						var close = document.querySelector('button._dcj9f');
						// end automation
						function end() {
							clearInterval(automation);
							alert('You liked ' + likes + ' posts!');
						}
						// close btn
						if (close) close.onclick = end;
						// heart elem
						if (heart) {
							heart.click();
							likes++;
							if (likes === 1) console.log('INSTABOT: ' + likes + ' post liked.');
							else console.log('INSTABOT: ' + likes + ' posts liked.');
						} else {
							console.warn('INSTABOT: Skipping post...');
						}
						// next btn
						if (next) {
							next.click();
						}
						else {
							console.warn('INSTABOT: No next button was found!');
							end();
						}

					}, 1800)
				}
				container.appendChild(btn);
			}

		}
	}, 10);
});