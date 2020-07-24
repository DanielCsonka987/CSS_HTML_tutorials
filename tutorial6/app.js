
// left side navigation load up
{
  let generalNavGroupOBJ = document.getElementById("group_generals");
  let popularNavGroupOBJ = document.getElementById("group_popular");
  let sectionNavGroupOBJ = document.getElementById("group_sections");

  const datasGeneral =[
    {
      icon: "airline_seat_flat",
      title: "Hot"
    },
    {
      icon: "add_to_queue",
      title: "Trending"
    },
    {
      icon: "airplanemode_active",
      title: "Fresh"
    },
    {
      icon: "android",
      title: "Get 4FUN app"
    }
  ];
  const datasPopular =[
    {
      icon: "alarm_on",
      title: "Animal"
    },
    {
      icon: "aspect_ratio",
      title: "Awesome"
    },
    {
      icon: "backup",
      title: "Car"
    },
    {
      icon: "blur_off",
      title: "Gaming"
    },
    {
      icon: "border_top",
      title: "GIF"
    },
    {
      icon: "brightness_low",
      title: "Meme"
    },
    {
      icon: "call",
      title: "Video"
    },
    {
      icon: "all_inclusive",
      title: "Walpapper"
    }
  ];
  const datasSections =[
    {
      icon: "business",
      title: "Ask 4FUN"
    },
    {
      icon: "camera",
      title: "Football"
    },
    {
      icon: "cancel",
      title: "History"
    },
    {
      icon: "change_history",
      title: "Horror"
    },
    {
      icon: "child_care",
      title: "Marvel"
    },
    {
      icon: "comment",
      title: "Music"
    },
    {
      icon: "copyright",
      title: "Science & Tech"
    },
    {
      icon: "description",
      title: "Sport"
    },
    {
      icon: "directions_run",
      title: "Star Wars"
    },
    {
      icon: "dvr",
      title: "Travel & Photography"
    },
    {
      icon: "error",
      title: "Wallpapper"
    }
  ];

  window.addEventListener('load',loadInAllSideNavContent);

  function loadInAllSideNavContent(){
    datasGeneral.forEach((item) => {
      generalNavGroupOBJ.append(
        createTheNavIconElement(item.icon, item.title)
      );
    });
    datasPopular.forEach((item) => {
      popularNavGroupOBJ.append(
        createTheNavIconElement(item.icon, item.title)
      );
    });
    datasSections.forEach((item) => {
      sectionNavGroupOBJ.append(
        createTheNavIconElement(item.icon, item.title)
      );
    });

  }

  function createTheNavIconElement(icon, text){
    let paragrNode = document.createElement('p');
    paragrNode.classList.add("aside_icon");

    let iconNode = document.createElement('i');
    iconNode.classList.add('material-icons')
    iconNode.append(document.createTextNode(icon));

    let textNode = document.createTextNode(text);

    paragrNode.append(iconNode);
    paragrNode.append(textNode);
    return paragrNode;
  }
}

// main content load-up
{
  let contentOBJ = document.getElementById("content");

  const datasSiteContent = [
    {
      category: "Awesome",
      categIcon: "aspect_ratio",
      timing: "5h",
      title: "About omthing 1",
      img: "brown-leather-belt-on-white-printer-paper-4452702.jpg",
      caption: "30.553 points - 1.300 comments"
    },
    {
      category: "Car",
      categIcon: "backup",
      timing: "2d",
      title: "About omthing 2",
      img: "close-up-photo-of-cat-s-eye-3324591.jpg",
      caption: "10.553 points - 300 comments"
    },
    {
      category: "Video",
      categIcon: "call",
      timing: "1h",
      title: "About omthing 3",
      img: "photo-of-flowers-and-grass-3060930.jpg",
      caption: "1.553 points - 640 comments"
    },
    {
      category: "Meme",
      categIcon: "brightness_low",
      timing: "5h",
      title: "About omthing 4",
      img: "silhouette-of-mountain-under-the-moon-covered-with-clouds-4100130.jpg",
      caption: "5.553 points - 3.300 comments"
    },
    {
      category: "Gaming",
      categIcon: "blur_off",
      timing: "5h",
      title: "About omthing 5",
      img: "white-and-black-camera-inside-a-wooden-frame-2857580.jpg",
      caption: "12.553 points - 1.101 comments"
    }
  ];

  window.addEventListener('load', loadInAllSiteContent);

  function loadInAllSiteContent(){
    datasSiteContent.forEach((item) => {
      contentOBJ.append(createTheSiteContentCard(item));
    });
  }

  function createTheSiteContentCard(contentElement){
    let cardNode = document.createElement('div');
    cardNode.classList.add("content_card");
    cardNode.append(
      createSiteCardCategory(contentElement)
    );
    cardNode.append(
      createSiteCardSimplePart('p', 'card_title', contentElement.title)
    );

    let imgNode = document.createElement('img');
    imgNode.setAttribute('src', contentElement.img);
    cardNode.append(imgNode);

    cardNode.append(
      createSiteCardSimplePart('p','card_caption', contentElement.caption)
    );
    cardNode.append(
      createSiteContentIconLine()
    );
    return cardNode;
  }

  function createSiteCardSimplePart(tagType, className, content){
    let simpleNode = document.createElement('p');
    simpleNode.classList.add(className);
    simpleNode.append(document.createTextNode(content));
    return simpleNode;
  }

  function createSiteCardCategory(contentElement){
    let cardCategoryNode = document.createElement('p');
    cardCategoryNode.classList.add("card_category");

    let iconOfCategory = document.createElement('i');
    iconOfCategory.classList.add('material-icons')
    iconOfCategory.append(document.createTextNode(contentElement.categIcon));
    let textNode = document.createTextNode(
      contentElement.category + " - " + contentElement.timing);

    cardCategoryNode.append(iconOfCategory);
    cardCategoryNode.append(textNode);
    return cardCategoryNode;
  }

  function createSiteContentIconLine(){
    let cardIconLine = document.createElement('div');
    cardIconLine.classList.add('card_iconline');

    let cardNormalIcons = document.createElement('div');
    cardNormalIcons.classList.add('card_normalicons');
    cardNormalIcons.append(createCardBasicIcon('card_icon', 'arrow_upward'));
    cardNormalIcons.append(createCardBasicIcon('card_icon', 'arrow_downward'));
    cardNormalIcons.append(createCardBasicIcon('card_icon', 'message'));
    cardNormalIcons.append(createCardBasicIcon('card_icon', 'more_horiz'));
    cardIconLine.append(cardNormalIcons);

    let cardShareIcons = document.createElement('div');
    cardShareIcons.classList.add('card_shareIcons');
    cardShareIcons.append(createCardShareIcon(['card_shareFace','card_shareIcon'],
     'Facebook'));
    cardShareIcons.append(createCardShareIcon(['card_sharePint','card_shareIcon'],
     'Pinterest'));
     cardIconLine.append(cardShareIcons);
    return cardIconLine;
  }

  function createCardBasicIcon(className, icon){
    let managerNode = document.createElement('div');
    managerNode.classList.add(className);

    let iconElement = document.createElement('i');
    iconElement.classList.add("material-icons");
    iconElement.append(document.createTextNode(icon));

    managerNode.append(iconElement);
    return managerNode;
  }

  function createCardShareIcon(className, text){
    let sharingNode = document.createElement('button');
    sharingNode.classList.add(className[0]);
    sharingNode.classList.add(className[1]);
    sharingNode.append(document.createTextNode(text));
    return sharingNode;
  }
}

// right side advertise area load-up
{
  let adverOBJ = document.getElementById("adver");

  const datasAdvert =[
    {
      title: "Somthing to advertise from this site",
      img: "items-of-hygiene-on-marble-surface-4202483.jpg"
    },
    {
      title: "Somthing to advertise from this site",
      img: "close-up-of-telephone-booth-257736.jpg"
    },
    {
      title: "Somthing to advertise from this site",
      img: "handheld-tools-hang-on-workbench-909256.jpg"
    },
    {
      title: "Somthing to advertise from this site",
      img: "set-of-tool-wrench-162553.jpg"
    }
  ];

  window.addEventListener('load', loadInAllSiteAdvertisments);

  function loadInAllSiteAdvertisments(){
      datasAdvert.forEach((item) => {
        adverOBJ.append(createAnAdvertisment(item))
      });

  }

  function createAnAdvertisment(advertisContent){
    let advertNode = document.createElement('div');
    advertNode.classList.add('advert_unit');

    let advImg = document.createElement('img');
    advImg.setAttribute("src", advertisContent.img);
    let advText = document.createElement('p');
    advText.append(document.createTextNode(advertisContent.title));

    advertNode.append(advImg);
    advertNode.append(advText);
    return advertNode;
  }
}
