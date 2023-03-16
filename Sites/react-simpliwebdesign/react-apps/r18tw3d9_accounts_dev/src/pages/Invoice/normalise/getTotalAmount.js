
/** This function used in invoiceAmount.js file
 * the total amount of a trasaction */
export const getTotalAmount = (qty, amt) => {
  /** set qty to 1 if qty is null value */
  let quantity = qty === null || '' ? 1 : qty;
  let amount = quantity * amt;
  return amount
}