// 총 상품가격
export function totalPice(arr) {
  if (arr.length < 1) return 0;

  const totalPice = arr.reduce((total, item) => {
    total += item.pog.price * item.qty;
    return total;
  }, 0);
  return totalPice;
}
