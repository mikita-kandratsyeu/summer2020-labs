/**
 * Task - 7
 * @description: Create a tag cloud:
 * - Visualize a string of tags (strings) in a given container
 * - By given "minFontSize" and "maxFontSize", generate the tags with different
 * "font1-size", depending on the number of occurrences
 */

function generateTagCloud(tags, min, max) {
  const config = {};

  const unique = tags.filter((item, idx) => tags.indexOf(item) === idx);

  for (let i = 0; i < unique.length; i += 1) {
    let count = 0;

    for (let j = 0; j < tags.length; j += 1) {
      if (unique[i] === tags[j]) {
        count += 1;
        config[unique[i]] = count;
      }
    }
  }

  const quantity = Math.max(...Object.values(config));

  const unit = Math.abs(max - min) / quantity;

  return Object.keys(config).map((item) => `<span style="font-size: ${unit * config[item] + min}px">${item}</span>`).join(' ');
}

const tags = [
  'cms', 'javascript', 'js', 'ASP.NET MVC', '.net', '.net', 'css',
  'wordpress', 'xaml', 'js', 'http',
  'web', 'asp.net', 'asp.net MVC', 'ASP.NET MVC', 'wp', 'javascript',
  'js', 'cms', 'html', 'javascript',
  'http', 'http', 'CMS',
];

const tagCloud = generateTagCloud(tags, 17, 42);

document.querySelector('.content__task-7').innerHTML = tagCloud;
