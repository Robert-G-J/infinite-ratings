describe('Controller', function() {

	beforeEach(function() {
		spyOn(Api.prototype, 'get');
	})
	it('gets scores', function() {
		var controller = new Controller();
		controller.getScores(100, 1758);
		expect(Api.prototype.get).toHaveBeenCalled();
	})
})