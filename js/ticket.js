//變數宣告
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
//按鈕加減功能
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
//顯示購票區域及填寫資料區域的切換
function showStep(stepShowed, stepHided) {
  stepShowed.style.display = "block";
  stepHided.style.display = "none";
}

document
  .querySelector(".next-step-button")
  .addEventListener("click", function () {
    if (
      adultValue.value == 0 &&
      halfValue.value == 0 &&
      childValue.value == 0
    ) {
      showWarning("請選擇欲購買的票數");
    } else {
      showStep(ticketFillInfo, ticketBuying);
      updateTotalPrice();
    }
  });
document
  .querySelector(".previous-step-button")
  .addEventListener("click", function () {
    showStep(ticketBuying, ticketFillInfo);
    updateTotalPrice();
  });
//顯示並計算購票數量及價錢
function updatePrice(
  quantityInput,
  quantityDisplay,
  priceDisplay,
  pricePerUnit
) {
  let quantity = parseInt(quantityInput.value);
  quantityDisplay.innerHTML = `<span>${quantity}</span>`;
  let price = quantity * pricePerUnit;
  priceDisplay.innerHTML = `<span>$ ${price}</span>`;
  return price;
}
//顯示並計算總價格
function updateTotalPrice() {
  let totalPrice =
    updatePrice(adultValue, adultarea, adultPriceArea, 300) +
    updatePrice(halfValue, halfarea, halfPriceArea, 150) +
    updatePrice(childValue, childarea, childPriceArea, 100);
  totalPriceArea.innerHTML = `<span>$ ${totalPrice}</span>`;
}

function checkForm() {
  let name = document.querySelector("#name");
  let tel = document.querySelector("#tel");
  let email = document.querySelector("#email");
  let creditCard = document.querySelector("#credit-card");
  let expriy = document.querySelector("#expriy");
  let cvv = document.querySelector("#cvv");
  if (!name.value || !tel.value || !email.value) {
    showWarning("請輸入完整的基本資料");
    return false;
  }
  if (!creditCard.value || !expriy.value || !cvv.value) {
    showWarning("請輸入完整的信用卡資料");
    return false;
  }
  if (creditCard.value.length < 16) {
    showWarning("請輸入正確的信用卡資料");
    return false;
  }
  showThanks(); //無錯誤則彈出感謝視窗
}

document.querySelector(".mask").addEventListener("click", hidePopUp);
function showPopUp() {
  document.querySelector(".pop-up").style.display = "block";
  document.querySelector(".mask").style.display = "block";
}
function hidePopUp() {
  document.querySelector(".pop-up").style.display = "none";
  document.querySelector(".mask").style.display = "none";
}

function showWarning(message) {
  let popUp = document.querySelector(".pop-up");
  popUp.innerHTML = `<div class="warning">
      <p>${message}</p>
  </div>
  <button class="confirm">確認</button>`; // 修改警告內文
  showPopUp();
  document.querySelector(".confirm").addEventListener("click", hidePopUp);
}

document.querySelector(".confirm-button").addEventListener("click", checkForm);

function showThanks() {
  let popUp = document.querySelector(".pop-up");
  popUp.innerHTML = `<div class="thanks-area">
  <p>感謝你的填寫，確定要送出嗎?</p>
</div>
<div class="confirm-btns">
  <button class="cancel">取消</button>
  <button class="confirm">確認</button>
</div>`; // 修改感謝並確認內容
  showPopUp();
  document.querySelector(".cancel").addEventListener("click", hidePopUp);
  document.querySelector(".confirm").addEventListener("click", () => {
    document.querySelector(".fill-info").submit(); // 送出表單
  });
}
