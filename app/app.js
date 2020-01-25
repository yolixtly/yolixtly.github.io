$(document).ready(function () {
  // Navbar Collapse for Responsive Design
  $('.navbar-nav li a').click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });

  // Highlight Skills on Page Load
  const skills = $('.main-btn');
  let start = 0;
  let end = 500;
  let increment = end;
  for (let i = 0; i < skills.length; i++) {
    setTimeout(() => {
      skills[i].classList.add('hover');
    }, start);

    setTimeout(() => {
      skills[i].classList.remove('hover');
    }, end);
    start = end;
    end = end + increment;
  }

  // Market opportunities
  setTimeout(() => {
    $('#relocation').removeClass('relocation');
    $('h2.relocation').addClass('hover');
  }, 2500);

  setTimeout(() => {
    $('#relocation').addClass('relocation');
    $('#relocation').removeClass('hover');
  }, 4000);
});
