var Nightmare = require('nightmare');
var nightmare = Nightmare({  show: true });

nightmare
  .goto('http://scooterbraun.com/about')
  .click("div#contact.title-container.collapse-control.collapsed[rel='contact']")
  .wait(30000)
  .type("input#contact-name.ibox", "Jasmine Diamond")
  .type("input#contact-email.ibox", "hardtobelieb@gmail.com")
  .type("textarea#contact-message.ibox", "You're the reason I get up in the morning")
  .click("input.contact-submit")
  .evaluate(function () {
    return document.querySelector('.contact-form')
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
