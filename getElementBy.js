const getElementBy = (byType, elementName) => {
  let dict = {
    'NAME' : document.getElementsByName(elementName),
    'ID' : document.getElementById(elementName),
    'CLASS' : document.getElementsByClassName(elementName),
    'TAG' : document.getElementsByTagName(elementName),
    'SELECTOR' : document.querySelectorAll(elementName)
  }
  return dict[byType.toUpperCase()];
}
