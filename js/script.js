document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");

  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("open");
      });
    });
  }

  // Services page tabs
  var tabButtons = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");

  function activateTab(id) {
    tabButtons.forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.tab === id);
    });
    tabPanels.forEach(function (panel) {
      panel.classList.toggle("active", panel.id === id);
    });
  }

  if (tabButtons.length) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activateTab(btn.dataset.tab);
        history.replaceState(null, "", "#" + btn.dataset.tab);
      });
    });

    var initial = window.location.hash ? window.location.hash.substring(1) : null;
    if (initial && document.getElementById(initial)) {
      activateTab(initial);
    }
  }
});
