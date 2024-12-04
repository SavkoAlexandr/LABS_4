/**
 * Удаляет все элементы из списка, содержащие значение k
 * @param {ListNode} l - голова списка
 * @param {Number} k - значение, которое нужно удалить
 * @return {ListNode} - измененный список
 */
module.exports = function removeKFromList(l, k) {
 
  let current = l;

  
  while (current !== null && current.value === k) {
    current = current.next;
  }
  let newHead = current;
  let prev = null;

  
  while (current !== null) {
    if (current.value === k) {
      
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  
  
  return newHead;
};
