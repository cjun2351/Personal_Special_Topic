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
  // 遊歷每個 plus 按鈕
  element.addEventListener("click", (e) => {
    // 對每一個 plus 按鈕增加點擊事件
    e.target.previousElementSibling.value =
      parseInt(e.target.previousElementSibling.value) + 1; //點擊後對上一個兄弟元素的值加一
    updateTotalPrice(); // 更新總價
  });
});
let minusBtn = document.querySelectorAll(".minus"); // 遊歷每個 minus 按鈕
minusBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    // 對每一個 minus 按鈕增加點擊事件
    if (e.target.nextElementSibling.value > 0) {
      //如果上一個兄弟元素的值大於 0
      e.target.nextSibling.value =
        parseInt(e.target.nextElementSibling.value) - 1; //點擊後對上一個兄弟元素的值減一
      updateTotalPrice(); // 更新總價
    }
  });
});
//------------------------------------------->顯示購票區域的切換
function showStep(stepShowed, stepHided) {
  // 新增切換區域的函數
  stepShowed.style.display = "block"; // 要顯示的區域設定 display 為 block
  stepHided.style.display = "none"; // 要隱藏的區域設定 display 為 none
}

document
  .querySelector(".next-step-button") // 選取下一階按鈕
  .addEventListener("click", function () {
    // 增加點擊事件
    showStep(ticketFillInfo, ticketBuying); // 呼叫切換區域的函數
    updateTotalPrice(); // 更新總價
  });
document
  .querySelector(".previous-step-button") // 選取上一階按鈕
  .addEventListener("click", function () {
    // 增加點擊事件
    showStep(ticketBuying, ticketFillInfo); // 呼叫切換區域的函數
    updateTotalPrice(); // 更新總價
  });
//------------------------------------------->顯示購票數量及價錢
function updatePrice( // 新增更新價格與顯示價格區域
  quantityInput, // input 區域參數
  quantityDisplay, // 數量顯示區參數
  priceDisplay, // 價格顯示區參數
  pricePerUnit // 單價參數
) {
  let quantity = parseInt(quantityInput.value); // 獲取 input 內的數量數值
  quantityDisplay.innerHTML = `<span>${quantity}</span>`; // 更新顯示數量區域
  let price = quantity * pricePerUnit; // 價格計算
  priceDisplay.innerHTML = `<span>$ ${price}</span>`; // 更新顯示價格區域
  return price; // 回傳價格
}
//------------------------------------------->顯示總價格
function updateTotalPrice() {
  let totalPrice =
    updatePrice(adultValue, adultarea, adultPriceArea, 300) +
    updatePrice(halfValue, halfarea, halfPriceArea, 150) +
    updatePrice(childValue, childarea, childPriceArea, 100); // 設定總價為三值總和
  totalPriceArea.innerHTML = `<span>$ ${totalPrice}</span>`; // 更新總價區
}
