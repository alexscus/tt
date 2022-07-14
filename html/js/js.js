function stateDisabled() {
  let state = document.querySelectorAll('.state__item');

  for (let elem of state) {
    elem.addEventListener(
      'click',
      function () {
        let stateInput = this.parentNode.previousElementSibling;
        let stateParent = this.parentNode;

        if (stateInput.disabled === false) {
          stateInput.disabled = true;
          stateParent.classList.add('state__item--act');
        } else {
          stateInput.disabled = false;
          stateParent.classList.remove('state__item--act');
        }
      },
      false
    );
  }
}
stateDisabled();

function selectMulty() {
  let select = document.querySelector('.multi-select__head');
  let selectAct = document.querySelector('.multi-select');

  select.addEventListener(
    'click',
    function () {
      let selectActiv = this.parentNode;

      if (!selectActiv.classList.contains('multi-select--act')) {
        selectActiv.classList.add('multi-select--act');
      } else {
        selectActiv.classList.remove('multi-select--act');
      }
    },
    false
  );

  window.addEventListener('click', (e) => {
    const target = e.target;

    if (
      !target.closest('.multi-select__head') &&
      !target.closest('.multi-select .multi-select__body')
    ) {
      selectAct.classList.remove('multi-select--act');
    }
  });
}
selectMulty();

$(function () {
  $.mask.definitions['~'] = '[+-]';
  $('.mask-phone').mask('+7(999)999-9999');

  $('input')
    .blur(function () {
      $('#info').html('Unmasked value: ' + $(this).mask());
    })
    .dblclick(function () {
      $(this).unmask();
    });
});

// function selectFake(selectName, selectWindow, sectionSearch) {
//   var selectFake = $(selectName);
//   $(function () {
//     $(selectFake)
//       .find(selectWindow)
//       .on('click', function () {
//         $(selectFake).toggleClass('show');
//       });

//     $(selectFake)
//       .find('.option_fake')
//       .on('click', function () {
//         $(this).addClass('active').siblings().removeClass('active');
//         $(selectFake).find(selectWindow).html($(this).html());
//         $(selectFake).find(sectionSearch).val($(this).data('value'));
//         $(selectFake).removeClass('show');
//       });

//     window.addEventListener('click', (e) => {
//       const target = e.target;
//       if (
//         !target.closest(selectName) &&
//         !target.closest('selectName .n_cloud')
//       ) {
//         selectFake.removeClass('show');
//       }
//     });
//   });
// }

// selectFake('#n-select-1', '#n-select__window-1', '#section-search-1');
// selectFake('#n-select-2', '#n-select__window-2', '#section-search-2');
