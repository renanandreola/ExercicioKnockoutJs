//data-bind - text - show words
function AppViewModel() {
    this.firstName = ko.observable("Renan");
    this.lastName = ko.observable("Andreolla");
    this.age = ko.observable("18");
    this.fullName = (this.firstName + this.lastName);

    this.list = ko.observable([1, "José", 7, 970, "Renan"]);
    this.clickButton = function(){
        alert("olá!")
    }

    this.labelText = ko.observable("Digite o numero 100");
    this.inputValue = ko.observable("imput Value");

    this.inputValue.subscribe(function(Valor){
        if(Valor == "100")
            alert("Acertou!")
        else {
            alert("Errou")
        }
    })

    this.computed = function(){
        return this.labelText() + " " + this.inputValue();
    },this
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());








