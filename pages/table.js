import View from '../pages/view.js';

//переменная для хранения данных для страницы
var dataPageTable = [];

export default {
  //загрузка данных для страницы
  setData(weather) {
    dataPageTable = weather;
  },
  render(column) {
    const newElement = document.querySelector('.content');
    dataPageTable = dataPageTable.sort((a, b) => a[column] - b[column]);
    newElement.innerHTML = View.getTemplateElement('cities', {
      list: dataPageTable,
    });
    const elementActive = document.getElementById(column);
    elementActive.classList.add('active');
    //отслеживание кликов по заголовкам колонок
    const elementTitle = document.querySelector('.title');
    elementTitle.addEventListener('click', (event) => {
      const target = event.target.id;
      if (
        target === 'temp' ||
        target === 'humidity' ||
        target === 'wind_speed'
      ) {
        this.render(event.target.id);
      }
    });
  },
};
