'use strict';


function calculatePriceWithDiscount (price, discount){
  const percentageWithoutDiscount = 100 - discount;
  const priceWithDiscount = (price*percentageWithoutDiscount)/100;
  return priceWithDiscount;
}

function calculateDiscountPrice (price, discount){
  const percentageWithoutDiscount = 100 - discount;
  const priceWithDiscount = (price*percentageWithoutDiscount)/100;
  const discountPrice = price - priceWithDiscount;
  return discountPrice;
}

const coupons = [
  {
    name:'otono-2022',
    discount: 15,
  },
  {
    name:'YaizaHalloween-2022',
    discount: 30,
  },
  {
    name:'noel-2022',
    discount: 25,
  },
];

const onClickButtonPriceDiscount = () =>{
  const inputPrice = document.getElementById('InputPrice');
  const priceValue = inputPrice.value ;

  const inputCoupon = document.getElementById('InputCoupon');
  const couponValue = inputCoupon.value;

  const isCouponValueCorrect = function(coupon){
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueCorrect);

  if (!userCoupon){
    alert('El cupón ' + couponValue + ' no es válido');
  }
  else {
    const discount = userCoupon.discount;

    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);

    const discountPrice = calculateDiscountPrice(priceValue, discount);

    const percentageDiscount = document.getElementById('PercentageDiscount');
    percentageDiscount.innerText = 'El descuento de tu cupón es de: ' + discount + '%';

    const resultPrice = document.getElementById('ResultPrice');
    resultPrice.innerText = 'El precio final con descuento es de: ' + priceWithDiscount + '€';

    const priceDiscount = document.getElementById('PriceDiscount');
    priceDiscount.innerText = 'Te has ahorrado: ' + discountPrice + '€';
  }
};

