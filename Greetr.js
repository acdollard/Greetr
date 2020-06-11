(function(global, $){

    let Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language)
    }

    let supportedLangs = ['en','es','de'];

    let greetings =  {
        en: 'Hello',
        es: 'Hola',
        de: 'Hallo'
    };

    let formalGreetings = {
        en: 'Salutations',
        es: 'Saludos',
        de: 'Guten Tag'
    };

    let logMessages = {
        en: 'logged in',
        es: 'Inicío sesíon',
        de: 'Sie haben begonnen'
    }

    //setting an empty object that will be the prototype for the object that will be returned from calling Greetr G&()
    Greetr.prototype = {

        fullName: function(){
            return this.firstName + ' ' + this.lastName
        },
        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "invalid language"
            }
        },
        greeting: function() {
            //as concatenated string
            return greetings[this.language] + ' ' + this.firstName + '!'
        },
        formalGreeting: function() {
            //as template literal
            return `${formalGreetings[this.language]} ${this.fullName()}`
        },
        greet: function(formal) {

            let msg;

            if(formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if (console){
                console.log(msg);
            }
            //'this' makes it chainable
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.languages] + ': ' + this.fullName() )
            }
            return this
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        },
        HTMLgreeting: function(selector, formal){
            if(!$){
                throw 'jQuery not loaded'
            }
            if(!selector){
                throw 'missing selector!'
            }
            let msg; 

            if(!formal){
                msg = this.greeting()
            }
            else {
                msg = this.formalGreeting()
            }
            
            $(selector).html(msg);
            return this
        }
    };


    Greetr.init = function(firstName, lastName, language){

        let self = this
        self.firstName = firstName ||  ' ';
        self.lastName = lastName || ' ';
        self.language = language || 'en';

        self.validate();
    }

    //setting the prototype of our Greetr init object to our empty object defined above
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery))