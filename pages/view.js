export default {
  getTemplateElement(elment, data) {
    // elment название формируемого блока (часть идентификатора)
    const selector = elment + 'Template';
    const source = document.getElementById(selector).innerHTML;
    //компиляция найденого шаблона с id = selector
    const template = Handlebars.compile(source);
    // совмещение данных и шаблона
    return template(data);
  },
};
