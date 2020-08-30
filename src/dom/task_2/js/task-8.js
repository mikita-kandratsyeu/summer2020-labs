/**
 * Task - 8
 * @description: Create a TreeView component:
 *  - Initially only the top items must be visible
 *  - On item click
 * *  - If its children are hidden (collapsed), they must be made visible
 (expanded)
 * *  - If its children are visible (expanded), they must be made hidden
 (collapsed)
 * - Research about events
 */

const container = document.querySelector('.content__task-8 > ul');

const clickHandler = (e) => {
  const child = e.target.children;

  if (!e.target.dataset.container) {
    Object.keys(child)
      .forEach((item) => child[item].classList.toggle('hidden'));
  }
};

container.addEventListener('click', clickHandler);
