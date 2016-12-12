var ProductModel = function(){
    this.name = ko.observable('Clothes');
    this.clickCounter = ko.observable(0);
    this.imageSrc = ko.observable('images/p1.jpg');
    this.nickName = ko.observableArray([{name : 'Men wear'}, {name : 'Women wear'}, {name : 'Girls wear'}]);
    
    this.productLevel = ko.computed(function(){
        var levelValue = this.clickCounter();
        if(levelValue > 10){
             this.name('No More Items');
        }
        
        
    }, this);
    
}

var ViewModel = function(){
    this.productInstance = ko.observable(new ProductModel());
    this.incrementClick = function(){
        this.productInstance().clickCounter(this.productInstance().clickCounter() + 1);
    }
    
}
ko.applyBindings(new ViewModel());