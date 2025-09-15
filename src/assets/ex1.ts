function calculate(a: number, b: number, callback: (result: number) => void): void {
  const sum = a + b;
  callback(sum);
}
calculate(5, 5, (result: number) => {
  console.log("Kết quả phép cộng là:", result);
});
