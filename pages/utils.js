export default function filterColumn(dataPageTable, column) {
  if (localStorage.getItem('direction') === 'up') {
    dataPageTable = dataPageTable.sort((a, b) => a[column] - b[column]);
    localStorage.setItem('direction', 'down');
  } else {
    dataPageTable = dataPageTable.sort((a, b) => b[column] - a[column]);
    localStorage.setItem('direction', 'up');
  }
  return dataPageTable;
}
