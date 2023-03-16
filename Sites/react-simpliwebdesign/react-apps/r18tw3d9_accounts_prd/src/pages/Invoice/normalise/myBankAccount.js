


    /** Bank Details */
    export const myBankAccount = (id, bank) => {
      //console.log(id);
      //console.log(bank.data[0].relationships.field_bank_account_id_invoice.data.id);
      const arr = [];
      const checked = bank?.data?.some((item)=> item.relationships.field_bank_account_id_invoice.data.id === id);
      //console.log(checked);
      checked &&
      bank?.data?.map(item => {
        const {title,field_bank_account_details} = item.attributes;
        return arr.push({
          "bankId" : id,
          "bank" : title,
          "bank_detail" : field_bank_account_details
        })
      })
      return arr;
    }