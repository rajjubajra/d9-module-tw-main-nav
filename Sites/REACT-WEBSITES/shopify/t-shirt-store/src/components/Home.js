import {useEffect, useState} from 'react'
import Client from 'shopify-buy';


function Home() {


  useEffect(()=>{

       // Initializing a client to return content in the store's primary language
        const client = Client.buildClient({
          domain: 'yw-t-shirt.myshopify.com',
          storefrontAccessToken: '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'
        });

        // Fetch all products in your shop
        client.product.fetchAll().then((products) => {
          // Do something with the products
          console.log(products);
        });
  },[])


    


  return (
    <div>
      
    </div>
  )
}

export default Home
