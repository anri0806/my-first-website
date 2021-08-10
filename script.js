const test = document.getElementById('demo');

function clickChange() {
  test.style.backgroundColor = "pink";
}

test.addEventListener('click', clickChange);