import assert       from 'assert';
import westwingPage from '../pageobjects/westwing-page.js';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Performing a search item on westwing', function() {
  it("add wishlist",  ()=> {

    westwingPage.open();
    westwingPage.acceptCookieBanner();
    westwingPage.searchItem("Mobel");
    westwingPage.productListGridIsDisplayed();
    westwingPage.loginModalPopup();
    westwingPage.assertWishlistCounter();
    westwingPage.clickAndNavigateToWishList();
    westwingPage.deleteWishlist();
    
  });

  // it("I search for",(Mobel)=>{

  //   westwingPage.searchItem(Mobel);
  // })

  // it("I should see product listing page with a list of products",()=>{

  //   westwingPage.productListGridIsDisplayed();
  // })

  // it("I click on wishlist icon of the first found product",()=>{


  // })
});
