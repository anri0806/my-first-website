const test = document.getElementById('demo');

function clickRemove() {
  test.remove();
}

test.addEventListener('click', clickRemove);