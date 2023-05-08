//Task about Ecommerce Transportation in City Problem when adding more promotions
function getTransportPrice(originalPrice, typePromotion = "default") {
  //If user purchased member transportation card
  if (typePromotion === "casualMember") {
    return originalPrice * 0.8;
  }

  if (typePromotion === "vipMember") {
    return originalPrice <= 250 ? originalPrice * 0.9 : originalPrice - 20;
  }

  //When user get voucher the following code need to be added
  if (typePromotion === "discountVoucher") {
    return originalPrice <= 250 ? originalPrice * 0.8 : originalPrice - 40;
  }

  if (typePromotion === "default") {
    return originalPrice;
  }
}

console.log("Price-->>>", getTransportPrice(200, "discountVoucher"));

//P/s: If we have more promotions for buying transport card then more if-else -> make more complicated for further updates
