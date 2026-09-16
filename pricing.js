function calculateTotal(items, discountCode) {
  let subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  let discount = 0;

  if (discountCode === 'SAVE10') {
    discount = subtotal * 0.10;
  } else if (discountCode === 'BULK20' && items.length >= 5) {
    discount = subtotal * 0.20;
  } else if (discountCode === 'HOLIDAY15') {
    discount = subtotal * 0.15;
  }

  return subtotal - discount;
}

module.exports = { calculateTotal };