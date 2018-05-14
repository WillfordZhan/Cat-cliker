$(function(){

    var model = {
        init: function() {
            
        },
        
    };


    var octopus = {
        
        
        init: function() {
            model.init();
            catView.init();
            catListView.init();
        }
    };


    var catView = {
        init: function() {
            
            catView.render();
        },
        render: function(){
            
        }
    };

    var catListView = {
        init: function() {

            catListView.render();
        },
        render: function() {

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