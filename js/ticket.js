//------------------------------------------->變數宣告
let ticketBuying = document.querySelector("#ticket-buying");
let ticketFillInfo = document.querySelector("#ticket-fill-info");
let adultValue = document.querySelector(".adult-input");
let halfValue = document.querySelector(".half-input");
let childValue = document.querySelector(".child-input");
let adultarea = document.querySelector(".area-adult-result .quantity");
let halfarea = document.querySelector(".area-half-result .quantity");
let childarea = document.querySelector(".area-child-result .quantity");
let adultPriceArea = document.querySelector(".area-adult-result .price");
let halfPriceArea = document.querySelector(".area-half-result .price");
let childPriceArea = document.querySelector(".area-child-result .price");
let totalPriceArea = document.querySelector(".area-total .price");
//------------------------------------------->按鈕加減功能
let plusBtn = document.querySelectorAll(".plus");
plusBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.previousElementSibling.value =
      parseInt(e.target.previousElementSibling.value) + 1;
    updateTotalPrice();
  });
});
let minusBtn = document.querySelectorAll(".minus");
minusBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.nextElementSibling.value > 0) {
      e.target.nextSibling.value =
        parseInt(e.target.nextElementSibling.value) - 1;
      updateTotalPrice();
    }
  });
});
//------------------------------------------->顯示購票區域的切換
function showStep(stepShowed, stepHided) {
  stepShowed.style.display = "block";
  stepHided.style.display = "none";
}

document
  .querySelector(".next-step-button")
  .addEventListener("click", function () {
    showStep(ticketFillInfo, ticketBuying);
    updateTotalPrice();
  });
document
  .querySelector(".previous-step-button")
  .addEventListener("click", function () {
    showStep(ticketBuying, ticketFillInfo);
    updateTotalPrice();
  });
//------------------------------------------->顯示購票數量及價錢
function updatePrice(
  quantityInput,
  quantityDisplay,
  priceDisplay,
  pricePerUnit
) {
  let quantity = parseInt(quantityInput.value);
  quantityDisplay.innerHTML = `<span>${quantity}</span>`;
  let price = quantity * pricePerUnit;
  priceDisplay.innerHTML = `<span>NTD ${price}</span>`;
  return price;
}
//------------------------------------------->顯示總價格
function updateTotalPrice() {
  let totalPrice =
    updatePrice(adultValue, adultarea, adultPriceArea, 300) +
    updatePrice(halfValue, halfarea, halfPriceArea, 150) +
    updatePrice(childValue, childarea, childPriceArea, 100);
  console.log(totalPrice);
  totalPriceArea.innerHTML = `<span>NTD ${totalPrice}</span>`;
}
