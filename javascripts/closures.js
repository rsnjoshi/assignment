// simple example

var a = 30;

function calculate() {
    var b = 20;

    var add = () => {
        var c = 30;        // variable b and a are accessable to function add where as variable c is not accessable to function calculate
        console.log(a + b + c);
    }
    add();
}

calculate();
S

//--------------------------------little advanced-----------------------/
//------person's weeding party algorithm---------------------/

var task1 = "Get Invitation ";

function partyAttend() {
    gift()
    function gift() {
        var task2 = ",give gift to bride and groom ";
        talkToRelatives()

        function talkToRelatives() {
            var task3 = ",talk to relatives ";
            snacks()

            function snacks() {
                var task4 = ",eat snacks ";
                drinks()

                function drinks() {
                    var task5 = ",drink as much as you can ";
                    dance()

                    function dance() {
                        var task6 = ",break the dance floor ";
                        dinner()

                        function dinner() {
                            var task7 = ",have dinner ";
                            leave()

                            function leave() {
                                var task8 = "and leave ";
                                console.log(task1, task2, task3, task4, task5, task6, task7, task8);
                            }
                        }
                    }
                }
            }
        }
    }
}

partyAttend();   // we can't break the dance floor without a drink