// global functions
{
  function replaceThisOBJClassTitles(managedOBJ, classTitle1, classTitle2){
    if(managedOBJ.classList.contains(classTitle1)){
        managedOBJ.classList.replace(classTitle1, classTitle2);
    } else {
        managedOBJ.classList.replace(classTitle2, classTitle1);
    }
  }

  function createThisDOMElement(tag, classMark, content){
    let tagOBJ = document.createElement(tag);
    tagOBJ.classList.add(classMark);
    if(typeof(content) === 'object'){
        content.forEach((item) => {
          tagOBJ.appendChild(item);
        });
    } else {
      if(content.includes(".jpg"))
        tagOBJ.setAttribute("src", content);
      else
        tagOBJ.appendChild(document.createTextNode(content));
    }
    return tagOBJ;
  }
}



// JS to manage the navigator aside area
{
  let bodyOBJ = document.getElementById("body");
  let asideOBJ = document.getElementById('nav_aside');
  let asideNonVisibleArea = document.getElementById("nav_nonVisible");
  let navSwitch_onHeader = document.getElementById("aside_on");
  let navSwitch_onAside = document.getElementById("aside_off");

  navSwitch_onHeader.addEventListener('click', function(){

      replaceThisOBJClassTitles(asideOBJ, "nav_statusOn", "nav_statusOff");
      this.checked = false;
  });

  navSwitch_onAside.addEventListener('click', function(e){

    replaceThisOBJClassTitles(asideOBJ, "nav_statusOn", "nav_statusOff");
    this.checked = false;
  });


  asideNonVisibleArea.addEventListener('click', function(e){

    replaceThisOBJClassTitles(asideOBJ, "nav_statusOn", "nav_statusOff");
  });

}



// JS to manage the keyboard-inputarea
{
  let searchareaOBJ = document.getElementsByClassName("searcharea")[0];
  let keyboardKeyOBJ = document.getElementsByClassName("keyboard_btn")[0];
  let keyboardAreaOBJ = document.getElementById("keyboard_inputarea");
  let numberAreaOBJ = document.getElementById("numarea");
  let symbolAreaOBJ = document.getElementById("symoblarea");
  let charAreaOBJ = document.getElementById("chararea");
  let spaceAreaOBJ = document.getElementById("spacearea");

  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let symbols = [ '.', ',', ':', '!', '?', '<='];
  let alphabest = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z' ];

  window.addEventListener('load', function(){
    searchareaOBJ.value ="";
  });

  keyboardKeyOBJ.addEventListener('click', function(){
    replaceThisOBJClassTitles(keyboardAreaOBJ,
       "keyboard_nonvisible", 'keyboard_visible');
       // console.log(keyboardAreaOBJ);
    if(keyboardAreaOBJ.classList.contains('keyboard_visible')){
      setTheseKeysToKeyBoardArea(numberAreaOBJ, numbers);
      setTheseKeysToKeyBoardArea(symbolAreaOBJ, symbols);
      setTheseKeysToKeyBoardArea(symbolAreaOBJ, ["shift"]);
      setTheseKeysToKeyBoardArea(charAreaOBJ, alphabest);
      setTheseKeysToKeyBoardArea(spaceAreaOBJ, ["_"]);
    } else {
      numberAreaOBJ.innerHTML = "";
      symbolAreaOBJ.innerHTML = "";
      charAreaOBJ.innerHTML = "";
      spaceAreaOBJ.innerHTML = "";
    }
  });

  function setTheseKeysToKeyBoardArea(destination, keyColl){
    keyColl.forEach((item) => {
      let keyOBJ = createThisDOMElement('div', 'key_element', item);
      keyOBJ.setAttribute('onclick', 'pushTheKeyToSearchBar(\"'+ item+'\")');
      destination.appendChild(keyOBJ);

    });
  }

  function pushTheKeyToSearchBar(pushedItem){
    if(pushedItem == "_"){
      searchareaOBJ.value += " ";
    } else if(pushedItem == "<="){
      let length = searchareaOBJ.value.length;
      searchareaOBJ.value = searchareaOBJ.value.substr(0, length-1);
    } else if(pushedItem == "shift"){
      doTheAlphabetichalCaseChange();
    } else {
      searchareaOBJ.value += pushedItem;
    }
  };

  function doTheAlphabetichalCaseChange(){
    let changeDirection = charAreaOBJ.childNodes[0].innerText.toLowerCase()
      ===  charAreaOBJ.childNodes[0].innerText ;

    charAreaOBJ.childNodes.forEach((item) => {
      let = newAlphabet = changeDirection ? item.innerText.toUpperCase() :
        item.innerText.toLowerCase();
      item.innerText = newAlphabet;
      item.setAttribute('onclick', 'pushTheKeyToSearchBar(\"'+ newAlphabet+'\")');
    });
  }
}




//dynamic site content processes
{
  let contentWrapper = document.getElementById('site_content');
  let siteDatas =
  [
  	{
  		picTitle : "play me1",
  		picImage : "black-cassette-tape-on-top-of-red-and-yellow-surface-1626481.jpg",
  		cardTitle : "Video 1",
  		cardAuthor : "MyPiper 1",
  		cardStat : "344 view - 1 year ago"
  	},
    {
      picTitle : "play me2",
      picImage : "black-vinyl-record-playing-on-turntable-1389429.jpg",
      cardTitle : "Video 2",
      cardAuthor : "MyPiper 1",
      cardStat : "3 244 view - 2 year ago"
    },
    {
      picTitle : "play now1",
      picImage : "people-at-concert-1105666.jpg",
      cardTitle : "Vid from me",
      cardAuthor : "MyPiper 2",
      cardStat : "3 view - 1 month ago"
    },
    {
      picTitle : "play now",
      picImage : "person-playing-string-instruments-144428.jpg",
      cardTitle : "vid from today",
      cardAuthor : "MyPiper 2",
      cardStat : "3 144 view - 1 year ago"
    },
    {
      picTitle : "play here",
      picImage : "silver-colored-microphone-675960.jpg",
      cardTitle : "Fascinating1",
      cardAuthor : "MyPiper 3",
      cardStat : "2 344 view - 1 year ago"
    },
    {
      picTitle : "play that",
      picImage : "brass-classic-classical-music-close-up-45243.jpg",
      cardTitle : "Fascinating2",
      cardAuthor : "MyPiper 3",
      cardStat : "1 344 view - 11 month ago"
    },
    {
      picTitle : "play that here",
      picImage : "black-vinyl-record-playing-on-turntable-1389429.jpg",
      cardTitle : "Fascinating4",
      cardAuthor : "MyPiper 3",
      cardStat : "354 view - 1 month ago"
    },
    {
      picTitle : "play that 2",
      picImage : "person-playing-string-instruments-144428.jpg",
      cardTitle : "Fascinating5",
      cardAuthor : "MyPiper 3",
      cardStat : "4 view - 1 minute ago"
    },
    {
      picTitle : "play me now",
      picImage : "black-cassette-tape-on-top-of-red-and-yellow-surface-1626481.jpg",
      cardTitle : "Amazing",
      cardAuthor : "MyPiper 4",
      cardStat : "44 view - 11 month ago"
    },
  ];


  function loadInTheDatasFromJSON(){
    siteDatas.forEach((item) => {

      contentWrapper.appendChild(
        createACard(item.picTitle, item.picImage,
          item.cardTitle, item.cardAuthor, item.cardStat)
      );
    });

  };
  function createACard(strPicTitle, strImage,
     strCartTitle, strCardAuthor, strCardStat){

       let firstPart = createThisDOMElement('div', 'card_pic', [
         createThisDOMElement('p', 'pic_title', strPicTitle),
         createThisDOMElement('img', 'pic_image', strImage)
       ]);
       let secondPart = createThisDOMElement('div', 'card_descr', [
         createThisDOMElement('p', 'card_title', strCartTitle),
         createThisDOMElement('p', 'card_author', strCardAuthor),
         createThisDOMElement('p', 'card_statist', strCardStat)
       ]);
    return createThisDOMElement('div', 'card_element', [
      firstPart, secondPart
    ]);
  }



  loadInTheDatasFromJSON();
}



//character seeking on site
{
  let contentWrapper = document.getElementById('site_content');
  let searchareaOBJ = document.getElementsByClassName("searcharea")[0];
  searchareaOBJ.addEventListener('keydown', seekTheWordOnSite);
  let seekButon = document.getElementsByClassName('search_btn')[0];
  seekButon.addEventListener('click', seekTheWordOnSite);
  let markerStart = '<span class="things_infocus">';
  let markerEnd = '</span>';

  function seekTheWordOnSite(event){
    if(event.nodeName === "INPUT" && event.key !== "Enter")
      return;
    removeAllMarkingsInTextNodes(contentWrapper);
    let seekedText = searchareaOBJ.value;
    seekedText = seekedText.trim();
    // seekedText = seekedText.toLowerCase();
    if(seekedText.length > 0){
      seekTheWordInThatNode(contentWrapper, seekedText, true);
    }
  }


  // the method parts - marking
  function seekTheWordInThatNode(actNode, strWord){

    if(actNode.hasChildNodes()){
      actNode.childNodes.forEach((childNodeOBJ) => {
        seekTheWordInThatNode(childNodeOBJ, strWord);
      });
    } else{
      if(actNode.textContent.includes(strWord)){
      //   actNode.parentNode.classList.add("things_infocus");  //needed only testing purpose
        let startEndPairs = findTheTextPositionInTextNode(
          actNode.textContent, strWord);
        injectTheMarkingsIntoTextNode(
          actNode, actNode.textContent, startEndPairs);
    }
  }

  function findTheTextPositionInTextNode(strNodeText, strWord){
    let posResults = [];
    let firstPos, previousEndPos = 0;
    let findMultipleWords = true;
    do{
      // console.log("Started with: " + strNodeText);  //needed only testing purpose
      firstPos = strNodeText.indexOf(strWord);
      // console.log("Analize res: " + firstPos);  //needed only testing purpose
      if(firstPos > -1){
        strNodeText =
          strNodeText.substring((firstPos + strWord.length), strNodeText.length);
        posResults.push(previousEndPos + firstPos);
        posResults.push(previousEndPos + firstPos + strWord.length);

        previousEndPos += firstPos + strWord.length;
        // console.log("Array content: " + posResults);  //needed only testing purpose
      } else{
        findMultipleWords = false;
      }
    } while (findMultipleWords);
    return posResults;
  }

  }

  function injectTheMarkingsIntoTextNode(textNode, strNodeText, positionPairs){
    // console.log(positionPairs);  //needed only testing purpose
    let newText = "";
      for(let i = 0; i < positionPairs.length; i+= 2){
        newText = strNodeText.substring(0, positionPairs[i]);
        newText += markerStart;
        newText += strNodeText.substring(positionPairs[i], positionPairs[i+1]);
        newText += markerEnd;
        newText += strNodeText.substring(positionPairs[i+1], strNodeText.length);
      }
    // console.log(newText);  //needed only testing purpose
    textNode.parentNode.innerHTML = newText;
  }

  // the method parts - remove marking
  function removeAllMarkingsInTextNodes(actNode){
    if(actNode.hasChildNodes()){
      actNode.childNodes.forEach((childNodeOBJ) => {
        removeAllMarkingsInTextNodes(childNodeOBJ);
      });
    } else{
      if(actNode.textContent.includes(markerStart))
        console.log();
        removeMarkingFromTheSiteTextNode(actNode);
    }
  }

  function removeMarkingFromTheSiteTextNode(textNode){
    let parentHTMLContent = textNode.parentNode.innerHTML;
    let newInnerHTML = parentHTMLContent.replaceAll(markerEnd,"");
    newInnerHTML = newInnerHTML.replaceAll(markerStart, "");
    textNode.parentNode.innerHTML = newInnerHTML;
  }
}
