(function() {
	window.addEventListener('load', function() {
		let controller = new Controller();
		// set arbitrary establishment and pageSize values to test
		controller.getScores(100, 1758);
	})
})();