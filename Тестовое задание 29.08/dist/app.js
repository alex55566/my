"use strict";

console.log(document.documentElement.clientWidth);

function convertPXToVW(px) {
  console.log(px * (100 / document.documentElement.clientWidth));
}

convertPXToVW(200);
var popupLinks = document.querySelectorAll('.contact');
var body = document.querySelector('body');
var unlock = true;
var timeout = 800;

if (popupLinks.length > 0) {
  var _loop = function _loop(i) {
    var popupLink = popupLinks[i];
    popupLink.addEventListener('click', function (e) {
      var popupName = popupLink.id.substr(0, 5);
      var curentPopup = document.querySelector(".".concat(popupName));
      popupOpen(curentPopup);
      console.log(popupName);
      e.preventDefault();
    });
  };

  for (var i = 0; i < popupLinks.length; ++i) {
    _loop(i);
  }
}

var popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
  var _loop2 = function _loop2(_i) {
    var el = popupCloseIcon[_i];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  };

  for (var _i = 0; _i < popupCloseIcon.length; ++_i) {
    _loop2(_i);
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    bodyLock();
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function bodyLock() {
  var lockPaddingValue = window.innerWidth - document.querySelector('.section-header').offsetWidth + 'px';
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function popupClose(popupActive) {
  popupActive.classList.remove('open');
  bodyUnlock();
}

function bodyUnlock() {
  setTimeout(function () {
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  var check = document.querySelector('.popup.open');

  if (e.which === 27 && check != null) {
    var popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector);
var formButton = document.querySelector('.add-client');
formButton.disabled = true;
formButton.classList.add('disabled');
var form = document.querySelector('.form-client-info');
var check = document.querySelector('.edition-cheking');
var input = document.querySelector('.client-phone');
var error = document.querySelector('.errorrender');
var popupupper = document.querySelector('.popupupper');
var lengthInput = im.mask(selector).undoValue.replace(/ *\([^)]*\) */g, "").replace(/_/g, "").replace(/ /g, "").length;
var checkState;
check.addEventListener('click', function () {
  if (check.checked === true) {
    formButton.disabled = false;
    formButton.classList.remove('disabled');
  } else {
    formButton.disabled = true;
    formButton.classList.add('disabled');
  }

  console.log(check.checked);
});

function sendMessage() {
  form.reset();
  formButton.disabled = true;
  formButton.classList.add('disabled');
  error.classList.remove('open');
  popupupper.classList.add('open');
  setTimeout(function () {
    return popupupper.classList.remove('open');
  }, 2000);
}

function renderError() {
  error.classList.add('open');
  popupupper.classList.remove('open');
}

input.addEventListener('input', function () {
  error.classList.remove('open');
  console.log(im.mask(selector).undoValue.replace(/ *\([^)]*\) */g, "").replace(/_/g, "").replace(/ /g, "").length);

  if (im.mask(selector).undoValue.replace(/ *\([^)]*\) */g, "").replace(/_/g, "").replace(/ /g, "").length === 9) {
    formButton.addEventListener('click', function (e) {
      e.preventDefault(e);
      sendMessage();
    });
  } else {
    formButton.addEventListener('click', function (e) {
      e.preventDefault(e);
      renderError();
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNvbnZlcnRQWFRvVlciLCJweCIsInBvcHVwTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmxvY2siLCJ0aW1lb3V0IiwibGVuZ3RoIiwiaSIsInBvcHVwTGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicG9wdXBOYW1lIiwiaWQiLCJzdWJzdHIiLCJjdXJlbnRQb3B1cCIsInBvcHVwT3BlbiIsInByZXZlbnREZWZhdWx0IiwicG9wdXBDbG9zZUljb24iLCJlbCIsInBvcHVwQ2xvc2UiLCJjbG9zZXN0IiwiYm9keUxvY2siLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YXJnZXQiLCJsb2NrUGFkZGluZ1ZhbHVlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwic3R5bGUiLCJwYWRkaW5nUmlnaHQiLCJzZXRUaW1lb3V0IiwicG9wdXBBY3RpdmUiLCJyZW1vdmUiLCJib2R5VW5sb2NrIiwiY2hlY2siLCJ3aGljaCIsInNlbGVjdG9yIiwiaW0iLCJJbnB1dG1hc2siLCJtYXNrIiwiZm9ybUJ1dHRvbiIsImRpc2FibGVkIiwiZm9ybSIsImlucHV0IiwiZXJyb3IiLCJwb3B1cHVwcGVyIiwibGVuZ3RoSW5wdXQiLCJ1bmRvVmFsdWUiLCJyZXBsYWNlIiwiY2hlY2tTdGF0ZSIsImNoZWNrZWQiLCJzZW5kTWVzc2FnZSIsInJlc2V0IiwicmVuZGVyRXJyb3IiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFdBQXJDOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLEVBQXZCLEVBQTJCO0FBQ3ZCTixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssRUFBRSxJQUFJLE1BQU1KLFFBQVEsQ0FB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Z0JBQXBDLEVBQXNELEVBQXRELEVBQTBEQSxPQUExRCxDQUFrRSxJQUFsRSxFQUF3RSxFQUF4RSxFQUE0RUEsT0FBNUUsQ0FBb0YsSUFBcEYsRUFBMEYsRUFBMUYsRUFBOEYzQyxNQUExRzs7QUFDQSxNQUFJZ0MsRUFBRSxDQUFDRSxJQUFILENBQVFILFFBQVIsRUFBa0JXLFNBQWxCLENBQTRCQyxPQUE1QixDQUFvQyxnQkFBcEMsRUFBc0QsRUFBdEQsRUFBMERBLE9BQTFELENBQWtFLElBQWxFLEVBQXdFLEVBQXhFLEVBQTRFQSxPQUE1RSxDQUFvRixJQUFwRixFQUEwRixFQUExRixFQUE4RjNDLE1BQTlGLEtBQXlHLENBQTdHLEVBQWdIO0FBQzVHbUMsSUFBQUEsVUFBVSxDQUFDaEMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDQSxNQUFBQSxDQUFDLENBQUNNLGNBQUYsQ0FBaUJOLENBQWpCO0FBQ0EwQyxNQUFBQSxXQUFXO0FBQ2QsS0FIRDtBQUlILEdBTEQsTUFPSztBQUNEWCxJQUFBQSxVQUFVLENBQUNoQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFDQyxDQUFELEVBQU87QUFDeENBLE1BQUFBLENBQUMsQ0FBQ00sY0FBRixDQUFpQk4sQ0FBakI7QUFDQTRDLE1BQUFBLFdBQVc7QUFDZCxLQUhEO0FBSUg7QUFDSixDQWhCRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0UFhUb1ZXKHB4KSB7XHJcbiAgICBjb25zb2xlLmxvZyhweCAqICgxMDAgLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpKTtcclxufVxyXG5cclxuY29udmVydFBYVG9WVygyMDApXHJcblxyXG5cclxuY29uc3QgcG9wdXBMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0Jyk7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5sZXQgdW5sb2NrID0gdHJ1ZTtcclxuXHJcbmNvbnN0IHRpbWVvdXQgPSA4MDA7XHJcblxyXG5pZiAocG9wdXBMaW5rcy5sZW5ndGggPiAwKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwTGlua3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBjb25zdCBwb3B1cExpbmsgPSBwb3B1cExpbmtzW2ldO1xyXG4gICAgICAgIHBvcHVwTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwTmFtZSA9IChwb3B1cExpbmsuaWQpLnN1YnN0cigwLCA1KVxyXG4gICAgICAgICAgICBjb25zdCBjdXJlbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwTmFtZX1gKTtcclxuICAgICAgICAgICAgcG9wdXBPcGVuKGN1cmVudFBvcHVwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocG9wdXBOYW1lKVxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHBvcHVwQ2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLXBvcHVwJyk7XHJcblxyXG5pZiAocG9wdXBDbG9zZUljb24ubGVuZ3RoID4gMCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cENsb3NlSWNvbi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gcG9wdXBDbG9zZUljb25baV07XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBwb3B1cENsb3NlKGVsLmNsb3Nlc3QoJy5wb3B1cCcpKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1cE9wZW4oY3VyZW50UG9wdXApIHtcclxuICAgIGlmIChjdXJlbnRQb3B1cCAmJiB1bmxvY2spIHtcclxuICAgICAgICBib2R5TG9jaygpXHJcbiAgICAgICAgY3VyZW50UG9wdXAuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgIGN1cmVudFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcucG9wdXBfX2NvbnRlbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBDbG9zZShlLnRhcmdldC5jbG9zZXN0KCcucG9wdXAnKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBib2R5TG9jaygpIHtcclxuICAgIGNvbnN0IGxvY2tQYWRkaW5nVmFsdWUgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWhlYWRlcicpLm9mZnNldFdpZHRoICsgJ3B4JztcclxuXHJcbiAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGxvY2tQYWRkaW5nVmFsdWVcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXHJcblxyXG4gICAgdW5sb2NrID0gZmFsc2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHVubG9jayA9IHRydWVcclxuICAgIH0sIHRpbWVvdXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVwQ2xvc2UocG9wdXBBY3RpdmUpIHtcclxuICAgIHBvcHVwQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgYm9keVVubG9jaygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBib2R5VW5sb2NrKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcclxuXHJcbiAgICB9LCB0aW1lb3V0KTtcclxuXHJcbiAgICB1bmxvY2sgPSBmYWxzZVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdW5sb2NrID0gdHJ1ZVxyXG4gICAgfSwgdGltZW91dClcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAub3BlbicpXHJcbiAgICBpZiAoZS53aGljaCA9PT0gMjcgJiYgY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHBvcHVwQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLm9wZW4nKVxyXG4gICAgICAgIHBvcHVwQ2xvc2UocG9wdXBBY3RpdmUpXHJcblxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbnZhciBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZWwnXVwiKTtcclxuXHJcbnZhciBpbSA9IG5ldyBJbnB1dG1hc2soXCIrNyAoOTk5KSA5OTkgOTkgOTlcIik7XHJcbmltLm1hc2soc2VsZWN0b3IpO1xyXG5cclxuY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtY2xpZW50Jyk7XHJcbmZvcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5mb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2xpZW50LWluZm8nKTtcclxuXHJcbmNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRpb24tY2hla2luZycpO1xyXG5cclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpZW50LXBob25lJyk7XHJcblxyXG5sZXQgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JyZW5kZXInKTtcclxuXHJcbmNvbnN0IHBvcHVwdXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXB1cHBlcicpXHJcblxyXG5jb25zdCBsZW5ndGhJbnB1dCA9IGltLm1hc2soc2VsZWN0b3IpLnVuZG9WYWx1ZS5yZXBsYWNlKC8gKlxcKFteKV0qXFwpICovZywgXCJcIikucmVwbGFjZSgvXy9nLCBcIlwiKS5yZXBsYWNlKC8gL2csIFwiXCIpLmxlbmd0aDtcclxuXHJcbmxldCBjaGVja1N0YXRlXHJcblxyXG5jaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjaGVjay5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgZm9ybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGNoZWNrLmNoZWNrZWQpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UoKSB7XHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICBmb3JtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgcG9wdXB1cHBlci5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gcG9wdXB1cHBlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyksIDIwMDApXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXJyb3IoKSB7XHJcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgIHBvcHVwdXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbn1cclxuXHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICBjb25zb2xlLmxvZyhpbS5tYXNrKHNlbGVjdG9yKS51bmRvVmFsdWUucmVwbGFjZSgvICpcXChbXildKlxcKSAqL2csIFwiXCIpLnJlcGxhY2UoL18vZywgXCJcIikucmVwbGFjZSgvIC9nLCBcIlwiKS5sZW5ndGgpO1xyXG4gICAgaWYgKGltLm1hc2soc2VsZWN0b3IpLnVuZG9WYWx1ZS5yZXBsYWNlKC8gKlxcKFteKV0qXFwpICovZywgXCJcIikucmVwbGFjZSgvXy9nLCBcIlwiKS5yZXBsYWNlKC8gL2csIFwiXCIpLmxlbmd0aCA9PT0gOSkge1xyXG4gICAgICAgIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgcmVuZGVyRXJyb3IoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
