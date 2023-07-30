function calculateDiscount() {
  const purchaseAmountInput = document.getElementById('purchaseAmount');
  const result = document.getElementById('result');
  const totalAmount = parseFloat(purchaseAmountInput.value);

  let discountPercentage = 0;

  if (totalAmount >= 50 && totalAmount < 100) {
    discountPercentage = 5;
  } else if (totalAmount >= 100 && totalAmount < 200) {
    discountPercentage = 10;
  } else if (totalAmount >= 200) {
    discountPercentage = 15;
  }

  const discount = (totalAmount * discountPercentage) / 100;
  const discountedAmount = totalAmount - discount;

  result.innerHTML = `
      <p>Total amount: $${totalAmount.toFixed(2)}</p>
      <p>Discount Percentage: ${discountPercentage}%</p>
      <p>Discount Amount: $${discount.toFixed(2)}</p>
      <p>Discounted Amount to pay: $${discountedAmount.toFixed(2)}</p>
    `;
}
