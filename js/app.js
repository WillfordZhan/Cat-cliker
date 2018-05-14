$(function(){

    var model = {
        init: function() {
            if (!cats) {
                cats = {};
            }
        },
        catNum,
        addCat: function () {
            var newCat = {
                name: "cat"+this.catNum,
                imgURL:"/img/cat"+this.catNum+".jpg",
                ClickTimes: 0
            }
            this.catNum++;
        },
        getCatNum = function () {
            return this.catsNum;
        },
        addAndReturnClickTimes = function (catIndex) {
            this.cats[index].ClickTimes++;
            return this.cats[index].ClickTimes;
        },
        getCat = function (catIndex) {
            return this.cats[catIndex];
        },
    };


    var octopus = {
        init: function() {
            model.init();
            this.addCat();
            this.addCat();
            this.addCat();
            this.addCat();
            this.addCat();
            catListView.init(model.getCatNum());
            catView.render(this.getCat(0));
        },
        addCat = function () {
            model.addCat();
        },
        getCat = function (catIndex) {
            return model.getCat(catIndex);
        },
        changeCurrentCat = function(catIndex){
            catView.render(this.getCat(catIndex));
        },
        addAndReturnClickTimes = function (catIndex) {
            this.getCat(catIndex);
            return model.addAndReturnClickTimes(catIndex);
        },

        
    };


    var catView = {
        init: function() {
            var catNameNode = $(".cat-name");
            var catImgNode = $(".cat-img");
            var catTimesNode = $(".cat-times");
        },
        renderClickTimes = function (ClickTimes) {
            catTimesNode.innerText = "<span>"+catClickTimes+"</span>";
        },
        render: function(cat){
            var catName = anotherCat.name;
            var catImgURL = anotherCat.imgURL;
            var catClickTimes = anotherCat.ClickTimes;

            catNameNode.innerHTML = "<span>"+catName+"</span>";
            catImgNode.innerHTML = "<img src='"+catImgURL+"'>";
            this.renderClickTimes(catClickTimes);
            catImgNode.addEventListener('click',(function(){
                var newClickTime = octopus.addAndReturnClickTimes(catIndex);
                this.renderClickTimes(newClickTime);
            })());
        },
        
    };

    var catListView = {
        init: function(catNum) {
            var catListNode = $(".cat-list");
            catListView.render(catNum);
        },
        render: function(catNum) {
            for (let i = 0; i < catNum; i++) {
                var catButton = document.createElement('button');
                catButton.innerText = "cat"+i;
                catButton.click((function (iCopy){
                    octopus.changeCurrentCat(iCopy);
                })(i));
            }
        }
    };

    octopus.init();
});













/* document.body.style.background="white";
var catClickTimes = [];


var buttons = document.getElementsByClassName("buttons")[0];
var cat = document.getElementsByClassName("cat")[0];

for (let i = 0; i < 5; i++) {
    var catButton = document.createElement('button');
    catButton.innerText = "cat" + i;
    catClickTimes.push(0);
    buttons.appendChild(catButton);
};

// 让我们循环遍历数组中的所有数字
for (var i = 0; i < catClickTimes.length; i++) {
    
    var catClickTime = catClickTimes[i];
    var catButton = buttons.childNodes[i];
    // 我们为这个数字创建一个DOM元素
    var catElem = document.createElement('div');
    var catNameElem = document.createElement('div');
    var catClicker = document.createElement('div');
    var catShower = document.createElement('div');
    
    catNameElem.innerHTML = '<p>'+ 'cat' + i +'</p>';
    catClicker.innerHTML = '<img src="img/cat'+ i +'.jpg">';

    catClicker.addEventListener('click', (function(catClickTimeCopy){
        catClickTimeCopy++;
        catShower.innerHTML = '<p>Click times: </p> <p class="timeShower">'+ catClickTimeCopy +'</p>';
    })(catClickTime));

    catElem.appendChild(catNameElem);
    catElem.appendChild(catClicker);
    catElem.appendChild(catShower);

    catButton.addEventListener('click',(function(catElemCopy){
        cat.innerHTML = catElemCopy.innerHTML;
    })(catElem));
 };

*/