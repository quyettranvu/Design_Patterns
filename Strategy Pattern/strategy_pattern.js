/**
 * Following the structure - concrete strategies
 * @param {*} type_Price
 * @returns
 */
function casualMemberPrice(originalPrice) {
  return originalPrice * 0.8;
}

function vipMemberPrice(originalPrice) {
  return originalPrice <= 250 ? originalPrice * 0.9 : originalPrice - 20;
}

function discountVoucherPrice(originalPrice) {
  return originalPrice <= 250 ? originalPrice * 0.8 : originalPrice - 40;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

//Context
const getStrategies = {
  //following the structure: context-interface
  casualMember: casualMemberPrice,
  vipMember: vipMemberPrice,
  discountVoucher: discountVoucherPrice,
  default: defaultPrice,
};

//Client Instances
function getTransportPrice(originalPrice, typePromotion) {
  return getStrategies[typePromotion](originalPrice);
}

console.log("Price-->>>", getTransportPrice(200, "discountVoucher"));

//P/s: The structure for promotions are organized in Strategy Pattern which can help us easier to add more promotion without making more complexities
