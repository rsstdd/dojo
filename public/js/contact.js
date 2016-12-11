'use strict';
(function() {
  $('#contactForm').submit((event) => {
    event.preventDefault();

    console.log('Hello');

    const email = $('#email').val();
    const first = $('#firstName').val().trim();
    const last = $('#last-name').val().trim();
    const student = $('#student').val().trim();
    const fname = $('#firstName').val().trim();
    const subject = $('#subject').val().trim();
    const text = $('#text').val().trim();

    const mailOptions = {};
// , last, phone, student, formEmail, subject, text
    console.log(fname, last, email, student, email, subject, text);

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ fname, last, email, student, subject, text }),
      dataType: 'json',
      type: 'POST',
      url: '/contact'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });

    // const mailOptions = {
    //   from: formEmail, // sender address
    //   to: 'rosstod@gmail.com', // list of receivers
    //   subject: 'Someone is Interested', // Subject line
    //   text: text
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    // }

  });
})();
