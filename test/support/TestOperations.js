var assert = require('chai').assert;

function TestOperations(page) {
  this.page = page;
}

TestOperations.prototype = {
  _testIsHidden: function(selector, name) {
    assert(this.page._isHidden(selector), 'the ' + name + ' element should be hidden');
  },

  _testIsVisible: function(selector, name) {
    assert(this.page._isVisible(selector), 'the ' + name + ' element should be visible');
  },

  assertFocussedElementId: function(id) {
    assert(this.page.getFocussedElementId() === id, 'Focus should be inside element with id: '+id);
  },

  assertItemCount: function(count) {
    var todoItems = this.page.getItemElements();

    assert(count === todoItems.length, 'ToDo items count should equal ' + count);
  },

  assertMainSectionIsHidden: function () {
    this._testIsHidden('#main', 'main');
  },

  assertFooterIsHidden: function() {
    this._testIsHidden('#footer', 'footer');
  },

  assertMainSectionIsVisible: function() {
    this._testIsVisible('#main', 'main');
  },

  assertFooterIsVisible: function() {
    this._testIsVisible('#footer', 'footer');
  },

  assertItems: function(items) {
    assert.deepEqual(this.page.getItems(), items);
  },

  assertItemInputFieldText: function(text) {
    assert.equal(this.page.getItemInputField().value, text);
  },

  assertItemText: function(index, text) {
    assert.equal(this.page.getItems()[index], text);
  }
}


module.exports = TestOperations;
