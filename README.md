Create fake email account
find Bieber's fan mail site
send fake emails on a loop
relish in glory

*  JasmineDiamond@gmail.com
*  http://scooterbraun.com/about


*  nightmare
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

  *  yayyyy!
