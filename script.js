// ---- Mobile nav ----
(function () {
  var toggle = document.querySelector('.top__toggle');
  var nav = document.querySelector('.top__nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// ---- Project filtering (only runs on the projects page) ----
(function () {
  var bar = document.querySelector('.filterbar');
  if (!bar) return;

  var chips = Array.prototype.slice.call(bar.querySelectorAll('.chip'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('.pcard'));
  var countEl = document.querySelector('.filter-count');
  var emptyEl = document.querySelector('.empty-note');

  function apply(tag) {
    var shown = 0;
    cards.forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').split(/\s+/);
      var match = tag === 'all' || tags.indexOf(tag) !== -1;
      card.classList.toggle('is-hidden', !match);
      if (match) shown++;
    });
    if (countEl) {
      countEl.textContent = tag === 'all'
        ? shown + ' projects'
        : shown + (shown === 1 ? ' project' : ' projects') + ' · ' + tag;
    }
    if (emptyEl) emptyEl.style.display = shown ? 'none' : 'block';
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      apply(chip.getAttribute('data-filter'));
    });
  });

  // initial state
  apply('all');
})();
