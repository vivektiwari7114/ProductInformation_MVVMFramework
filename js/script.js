var ViewModel = function(){
    this.name = ko.observable('Clothes');
    this.clickCounter = ko.observable(0);
    this.imageSrc = ko.observable('images/p1.jpg');
    this.incrementClick = function(){
        this.clickCounter(this.clickCounter() + 1);
    }
    this.productLevel = ko.computed(function(){
        var levelValue = this.clickCounter();
        if(levelValue > 10){
             this.name('No More Items');
        }
        
        
    }, this);
}
ko.applyBindings(new ViewModel());