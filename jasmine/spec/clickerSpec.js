$(function(){

    /*describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(1, done);
        });
        
        it('should have at least an feed entry',function(done){
            expect($('.feed').children.length).toBeGreaterThan(0);
            // TODO: why is the done() below is needed?
            done();
        });

    });*/

    describe('catList Entries',function(){
        it('should show the catList Entries',function(){
            var catListElem = $('.cat-list');
            expect(catListElem.innerHTML).not.toBe(undefined);
        });

        it('should change the cat when click button',function(){
            var imgElem = $('cat-img');            
            var countElem = $('.cat-times');
        });
    });

    describe('cat Clicker',function(){
        beforeEach(function(){
            var imgElem = $('cat-img');            
            var countElem = $('.cat-times');
        });

        it('should show the img',function(){
            expect(imgElem.src).not.toBe(undefined);
        });

        it('should show the img title',function(){
            expect($('.cat-name'.innerText)).not.toBe(undefined);            
        });

        it('should show the img click counts',function(){
            expect(countElem.innerText).not.toBe(undefined);            
        });

        it('should add the count of clicks after click.',function(){
            imgElem.trigger('click');
            expect($('.cat-times')).toBe(countElem.innerText + 1);
        });
    });
});

