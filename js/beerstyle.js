var beerChosen = [];

function BeerStyle (beerName,abv,ibu,srm,imgs,beerDescription){
  this.beerName = beerName;
  this.abv = abv;
  this.ibu = ibu;
  this.srm = srm;
  this.imgs = imgs;
  this.beerDescription = beerDescription;
  beerChosen.push(this);

}


var iPA = new BeerStyle ('IPA',"ABV: 6.3%-7.5%","IBU: 50-70","SRM: 6-14", "<img src='imgs/ipa.jpg'>", "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale");

var amberAle = new BeerStyle ('Amber',"ABV: 4.5%-6%", "IBU: 30-40", "SRM: 11-18", "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness, flavor, and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.");

var paleAle = new BeerStyle ('Pale',"ABV: 4.5%-5.6%", "IBU: 30-42", "SRM: 6-14", "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the 'traditional' style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.");

var hefeweizen = new BeerStyle ('Hefe',"ABV: 4.9%-5.5%", "IBU: 10-15","SRM: 3-9","The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove-, nutmeg-like, mildly smoke-like or even vanilla-like. Banana-like esters should be present at low to medium-high levels. These beers are made with at least 50 percent malted wheat, and hop rates are quite low. Hop flavor and aroma are absent or present at very low levels. Weissbier is well attenuated and very highly carbonated and a medium to full bodied beer. The color is very pale to pale amber. Because yeast is present, the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.")

var stout = new BeerStyle ('Stout',"ABV: 5.7%-8.8%", "IBU: 35-60", "SRM: 40-40", "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.")

var blondeAle = new BeerStyle ('Blonde',"ABV: 4%-5%", "IBU: 15-25","SRM: 3-7", "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.")

var brownAle = new BeerStyle ('Brown',"ABV: 4%-6.4%", "IBU: 25-45", "SRM: 15-26", "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.")

var darkAle = new BeerStyle ('Dark', "ABV: 7%-11%", "IBU: 20-50", "SRM: 9-35", "•	Belgian dark strong ales are amber to dark brown in color. Often, though not always, brewed with dark Belgian 'candy' sugar, these beers can be well attenuated, ranging from medium to full-bodied. The perception of hop bitterness is low to medium, with hop flavor and aroma also in this range. Fruity complexity along with the soft flavors of roasted malts add distinct character. The alcohol strength of these beers can often be deceiving to the senses. The intensity of malt character can be rich, creamy, and sweet with intensities ranging from medium to high. Very little or no diacetyl is perceived. Herbs and spices are sometimes used to delicately flavor these strong ales. Low levels of phenolic spiciness from yeast byproducts may also be perceived. Chill haze is allowable at cold temperatures.")

var esb = new BeerStyle ('ESB',"ABV: 4.8%-5.8%", "IBU: 30-45", "SRM: 8-14", "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)")

var lightAle = new BeerStyle ('Light',"ABV: 2.8%-3.5%", "IBU: 9-20", "SRM: 8-17", "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)")


var beerSelector = document.getElementById('beerStyles');
function beerDisplay(){
  var selUser = beerSelector.options[beerSelector.selectedIndex].value;
  for(var i=0; i<beerChosen.length; i++){
    if(beerChosen[i].beerName === selUser){
      document.getElementById('bName').textContent = beerChosen[i].beerName;
      document.getElementById('abv').textContent = beerChosen[i].abv;
      document.getElementById('ibu').textContent = beerChosen[i].ibu;
      document.getElementById('srm').textContent = beerChosen[i].srm;
      document.getElementById('bDescription').textContent = beerChosen[i].beerDescription;
      document.getElementById('image').innerHTML = beerChosen[i].imgs;

      console.log(beerChosen[i]);
    }
  }
}
beerSelector.addEventListener('change', beerDisplay);

// (function buildAlbum() {
//   for (var i = 0; i < images.length; i++){
//     new BeerStyle('../imgs/' + images[i] + '.jpg');
//   }
// })();
