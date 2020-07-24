
{
    let newData1 = '<div class="shopping_card"><div class="card_img">' +
                  '<img src="plastic-boxes-with-various-fresh-vegetables-for-sale-on-3874021.jpg" alt="a product">' +
                  '<div class="title"><p>Added contnet 1</p></div>' +
                '</div>' +
                '<div class="card_content">' +
                  '<h4>Lorem ipsum dolor</h4>'+
                    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, iste architecto corrupti obcaecati odit inventore nam, autem illo vitae eveniet placeat fuga soluta tempore vel quam esse veritatis ullam.</p>'+
                    '<div class="card_manage"><img src="Full-Cart-icon.png" alt="buy" class="card_mange_item"><img src="Science-Literature-icon.png" alt="read more..." class="card_mange_item"></div>' +
                '</div>' +
              '</div>  <!-- /shopping_card -->';
    let newData2 = '<div class="shopping_card"><div class="card_img">' +
                            '<img src="cupcakes-with-white-icing-on-top-4099124.jpg" alt="a product">' +
                            '<div class="title"><p>Added contnet 2</p></div>' +
                          '</div>' +
                          '<div class="card_content">' +
                            '<h4>Lorem ipsum dolor</h4>'+
                              '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, iste architecto corrupti obcaecati odit inventore nam, autem illo vitae eveniet placeat fuga soluta tempore vel quam esse veritatis ullam.</p>'+
                              '<div class="card_manage"><img src="Full-Cart-icon.png" alt="buy" class="card_mange_item"><img src="Science-Literature-icon.png" alt="read more..." class="card_mange_item"></div>' +
                          '</div>' +
                        '</div>  <!-- /shopping_card -->';

    let progressCircle1 = '<div id="progressCircleObj" class="progress_basis progress_circle_radius">' +
                '<div class="progress_basis progress_animated"></div>' +
                '<div class="progress_circle_filling"></div>' +
              '</div>';

    let progressCircle2 = '<div class="progress_basis progress_animated"></div>' +
              '<div class="progress_circle_filling"></div>';
    let progressCircleElement = document.createElement('div');
    progressCircleElement.id = "progressCircleObj";
    progressCircleElement.classList.add("progress_basis");
    progressCircleElement.classList.add("progress_circle_radius");
    progressCircleElement.innerHTML = progressCircle2;

    let progressCircleObj = document.getElementById("progressCircleObj");
    let cardList = document.getElementById("shopping_allchards");
    let bodyObj = document.getElementsByTagName("body")[0];
    let wrapperObj = document.getElementById("siteWrapper");
    // console.log(progressCircleObj);
    // console.log(cardList);
    // console.log(bodyObj[0]);
    // console.log(wrapperObj);

    // console.log(bodyObj.offsetHeight);
    // console.log(window.scrollY);
    let needProgressShow = true;
    window.addEventListener('scroll', function(){

      // console.log( "Content inner "+ wrapperObj.offsetHeight);
      // console.log( "Win heigth " + window.innerHeight);
      // console.log( "Win scroll "+window.scrollY);
      if(( (wrapperObj.offsetHeight - window.innerHeight) * 1.1 ) <=
        window.scrollY  ){

        if(needProgressShow){
          manageProgressCircle(true);
          setTimeout(function(){
            manageProgressCircle(false);
            addMoreData();
          },3000);
        }
      }

    });

    function addMoreData(){
        wrapperObj.innerHTML += newData1;
        wrapperObj.innerHTML += newData2;
    }

    function manageProgressCircle(add_remove){
      if(add_remove){
        wrapperObj.appendChild(progressCircleElement);
        needProgressShow = false;
        console.log("progress added");
      }else{
        wrapperObj.removeChild(progressCircleElement);
        needProgressShow = true;
        console.log("progress removed");
      }
    }
}
