        function adjustRatingsEvents(){
            let formObj = document.getElementsByTagName("form")[0];
            formObj.addEventListener("submit", senTheEstimation, false);
            
            let ratingObjs =                   document.getElementsByClassName("rate");
            for(let i = 0; i< ratingObjs.length; i++){
                //console.log(ratings[i]);
                addEvents(ratingObjs[i]);
            }
        }
        function addEvents(item){
            item.addEventListener('click', function(event){

                let chosenRatingObj = event.originalTarget;
                let chosenValue = chosenRatingObj.attributes[1].value;

                document.getElementsByName("opinion-value")[0].value = chosenValue;
                redefineTheIcons(chosenValue);
            });
        }
        function redefineTheIcons(actValue){
            
            let empty ="star-empty-icon.png";
            let full = "star-icon.png";
            let ratingObjs = document.getElementsByClassName("rate");
            for(let i = 1; i< ( ratingObjs.length -1 ) ; i++){
                
                let imgObj_attributes = ratingObjs[i].children[0].attributes;
                if( imgObj_attributes[1].nodeValue <= actValue ){
                    imgObj_attributes[0].nodeValue = full;
                } else {
                    imgObj_attributes[0].nodeValue = empty;
                }
                //console.log(ratingObjs[i].children[0].attributes[0])
            }
        }
        function senTheEstimation(e){
            e.preventDefault();
            
            let userName = document.getElementsByName("opinion-name")[0].value;
            let userValue = document.getElementsByName("opinion-value")[0].value;
            let userComment = document.getElementsByName("opinion-comment")[0].value;
            //console.log(userName + " " + userValue + " " + userComment);
            
            userName = userName.trim();
            userComment = userComment.trim();
            if(userName != "" && userComment != ""){
                createTheOpinionContent(userName, userValue, userComment);
                resetThiOpinionFields();
            }
        }
        function resetThiOpinionFields(){
            document.getElementsByName("opinion-name")[0].value = "";
            redefineTheIcons(4);
            document.getElementsByName("opinion-comment")[0].value = "";
			document.getElementsByName("opinion-value")[0].value=4;
        }
        function createTheOpinionContent(name, value, comment){
            /*
            <div class="comment-portion">
                <div class="comment-name">aUser</div>
                <div class="comment-rate">5</div>
                <div class="comment-text">This is very good</div>
            </div>
            */
            let nameObj = createDOMObj(name, "comment-name");
            let valueObj = createDOMObj("Rating: " + value, "comment-rate");
            let commentObj = createDOMObj(comment, "comment-text");
            let commPortObj = createDOMComment(nameObj, valueObj, commentObj);
            document.getElementById("opinion-items").appendChild(commPortObj);
        }
        function createDOMObj(textContent, classDef){
            let tempDOMElement = document.createElement("div");
            let textnodeObj = document.createTextNode(textContent);
            tempDOMElement.append(textnodeObj);
            tempDOMElement.classList.add(classDef);
            return tempDOMElement;
        }
        function createDOMComment(nameObj, valueObj, commentObj){
            let commentPortionObj = document.createElement("div");
            commentPortionObj.classList.add("comment-portion");
            commentPortionObj.appendChild(nameObj);
            commentPortionObj.appendChild(valueObj);
            commentPortionObj.appendChild(commentObj);
            return commentPortionObj;
        }