// 총 상품가격
export function totalPice(arr) {
  const totalPice = arr.length && arr.reduce((total, item) => {
    total += item.pog.price * item.qty;
    return total;
  }, 0);
  return totalPice;
}
