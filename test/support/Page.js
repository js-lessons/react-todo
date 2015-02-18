function Page(casper) {
  this.casper = casper;
}

Page.prototype = {
  getFocussedElementId: function() {
    return this.casper.evaluate(function() {
      return document.activeElement ? document.activeElement.id : '';
    });
  },

  getItemElements: function() {
    return this.casper.evaluate(function() {
      return document.querySelectorAll('#todo-list li');
    });
  },

  tryGetMainSectionElement: function() {
    return this.casper.evaluate(function() {
      return document.querySelector('section#main');
    });
  },

  tryGetFooterElement: function () {
    return this.casper.evaluate(function() {
      return document.querySelector('footer#footer');
    });
  },

  getItemInputField: function() {
    return this.casper.evaluate(function() {
      return document.querySelector('#new-todo');
    });
  },

  enterItem: function(text, callback) {
    this.casper.sendKeys('#new-todo', text);
    this.casper.sendKeys('#new-todo', this.casper.page.event.key.Enter , { keepFocus: true });
  },

  getItems: function() {
    return this.casper.evaluate(function() {
      return Array.prototype.map.call(document.querySelectorAll('#todo-list li label'), function(l) {
        return l.textContent;
      });
    });
  }
}


module.exports = Page;
