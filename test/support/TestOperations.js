var assert = require('chai').assert;

function testIsHidden(el, name) {
  var isHidden = el ? el.offsetParent === null : true;
  assert(isHidden, 'the ' + name + ' element should be hidden');
}

function TestOperations(page) {
  this.page = page;
}

TestOperations.prototype.assertFocussedElementId = function(id) {
  assert(this.page.getFocussedElementId() === id, 'Focus should be inside element with id: '+id);
}

TestOperations.prototype.assertItemCount = function(count) {
  var todoItems = this.page.getItemElements();

  assert(count === todoItems.length, 'ToDo items count should equal ' + count);
}

TestOperations.prototype.assertMainSectionIsHidden = function () {
  testIsHidden(this.page.tryGetMainSectionElement(), 'main');
}

TestOperations.prototype.assertFooterIsHidden = function() {
  testIsHidden(this.page.tryGetFooterElement(), 'footer');
}

TestOperations.prototype.assertItems = function(items) {
  assert.deepEqual(this.page.getItems(), items);
};

module.exports = TestOperations;
