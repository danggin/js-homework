const navigation = document.querySelector('.nav');
const container = document.querySelector('.container');
const audio = document.querySelector('.audio');
const visualImage = document.querySelector('.visual img');
const title = document.querySelector('.nickName');
const body = document.querySelector('body');

/* 6. 함수 분리 */

function handleClass(e) {
  const target = e.target.closest('li');
  const ul = e.target.closest('ul');
  const list = [...ul.children];

  if (!list) return;

  list.forEach((li) => {
    li.classList.remove('is-active');
  });
  target.classList.add('is-active');
}

/* 2. nav 클릭시 배경 색상 변경 */

function handleBackgroundColor(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  const index = target?.dataset.index;

  if (!target) return;
  handleClass(e);

  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]})`;
}

/* 3. 이미지 변경 */

function handleImage(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  const index = target?.dataset.index;

  if (!target) return;

  visualImage.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  visualImage.alt = data[index - 1].alt;
}

/* 4. 텍스트 변경 */

function handleText(e) {
  e.preventDefault();

  const target = e.target.closest('li');
  const index = target?.dataset.index;

  if (!target) return;

  title.textContent = data[index - 1].name;
}

/* 5. 오디오 변경 */

function handleAudio(e) {
  const target = e.target.closest('li');
  const index = target?.dataset.index;

  if (!target) return;

  if (!audio) {
    container.insertAdjacentHTML(
      'beforeend',
      `
        <audio src="./assets/audio/${
          data[index - 1].name
        }.m4a" class="audio" autoplay></audio>
    `
    );
  } else {
    audio.src = `./assets/audio/${data[index - 1].name}.m4a`;
  }
}

/* 1. 클릭 이벤트 활성화 */

navigation.addEventListener('click', handleBackgroundColor);
navigation.addEventListener('click', handleImage);
navigation.addEventListener('click', handleText);
navigation.addEventListener('click', handleAudio);
