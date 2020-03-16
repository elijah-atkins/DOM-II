// const red = document.querySelector(".block--red");
// const blue = document.querySelector(".block--blue");
// const green = document.querySelector(".block--green");
// const pink = document.querySelector("block--pink");
// const gray = document.querySelector("block--gray");

const blocks = document.querySelectorAll('.block');
blocks.forEach((block) => {
  block.addEventListener('click', (event) => {
    event.target.remove();
    document.querySelector('.blocks').insertBefore(event.target, document.querySelector('.block'));
  });
  Draggable.create(block, {
      type: 'x',
      lockAxis: true
    });
});
