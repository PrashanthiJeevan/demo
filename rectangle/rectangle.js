var app = angular.module('myapp', []);
app.directive('testDirective', function ($compile) {
    return {
        template: "<button id='a'>click here</button>",
        restrict: 'EAC', scope: false,
        link: function (scope, elem, attrs) {
            document.getElementById('a').addEventListener('click', function () {
                for (let i = 0; i < attrs.counter; i++) {
                    document.getElementById('remove').innerHTML += '<div id="remove1' + i + '"style="border:1px solid #000; height:100px;width:200px;">rectangle' + i + ' <button onclick="click_it('+ i+')"> Remove </button> </div>';
                }

                $compile(elem.contents())(scope);
            });
            
        }

    }

});

function click_it(i) {
    
    document.getElementById('remove1' + i).remove();
}