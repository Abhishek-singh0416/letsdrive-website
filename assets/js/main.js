(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }
  document.querySelectorAll('.has-dropdown > button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var li = btn.parentElement;
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.has-dropdown.open').forEach(function (li) {
      if (!li.contains(e.target) && window.innerWidth > 900) {
        li.classList.remove('open');
        li.querySelector('button').setAttribute('aria-expanded', 'false');
      }
    });
  });
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
