/// <reference path="../typings/angularjs/angular.d.ts" />
/**
 * This will create the angular module.
 */
(function () {
    angular.module("jetstreamApp", []);
})();

var JetStream;
(function (JetStream) {
    var Components;
    (function (Components) {
        var NewsItemControler = (function () {
            function NewsItemControler() {
            }
            NewsItemControler.prototype.$onInit = function () {
                this.name = "chan";
            };
            return NewsItemControler;
        }());
        Components.NewsItemControler = NewsItemControler;
        Components.NewsItemComponent = {
            controller: NewsItemControler,
            templateUrl: '/app/news-item.html',
            controllerAs: 'vm'
        };
    })(Components = JetStream.Components || (JetStream.Components = {}));
})(JetStream || (JetStream = {}));

(function () {
    angular.module("jetstreamApp").component("newsItem", JetStream.Components.NewsItemComponent);
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiLCJhcHAuY29tcG9uZW50LnRzIiwiYXBwLmluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEO0FBRTFEOztHQUVHO0FBQ0gsQ0FBQztJQUVHLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXZDLENBQUMsQ0FBQyxFQUFFLENBQUM7O0FDVEwsSUFBTyxTQUFTLENBY2Y7QUFkRCxXQUFPLFNBQVM7SUFBQyxJQUFBLFVBQVUsQ0FjMUI7SUFkZ0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUN6QjtZQUFBO1lBS0EsQ0FBQztZQUhHLG1DQUFPLEdBQVA7Z0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFDdkIsQ0FBQztZQUNMLHdCQUFDO1FBQUQsQ0FMQSxBQUtDLElBQUE7UUFMWSw0QkFBaUIsb0JBSzdCLENBQUE7UUFFTyw0QkFBaUIsR0FBRztZQUM5QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFdBQVcsRUFBRSxxQkFBcUI7WUFDNUIsWUFBWSxFQUFFLElBQUk7U0FDeEIsQ0FBQztJQUVILENBQUMsRUFkZ0IsVUFBVSxHQUFWLG9CQUFVLEtBQVYsb0JBQVUsUUFjMUI7QUFBRCxDQUFDLEVBZE0sU0FBUyxLQUFULFNBQVMsUUFjZjs7QUNkRCxDQUFDO0lBQ0csT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRyxDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6Im91dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2FuZ3VsYXJqcy9hbmd1bGFyLmQudHNcIiAvPlxyXG5cclxuLyoqXHJcbiAqIFRoaXMgd2lsbCBjcmVhdGUgdGhlIGFuZ3VsYXIgbW9kdWxlLlxyXG4gKi9cclxuKCgpPT4ge1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiamV0c3RyZWFtQXBwXCIsIFtdKTtcclxuXHJcbn0pKCk7IiwibW9kdWxlIEpldFN0cmVhbS5Db21wb25lbnRzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBOZXdzSXRlbUNvbnRyb2xlciB7XHJcbiAgICAgICAgbmFtZTpzdHJpbmc7XHJcbiAgICAgICAgJG9uSW5pdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gXCJjaGFuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRleHBvcnQgbGV0IE5ld3NJdGVtQ29tcG9uZW50ID0ge1xyXG5cdFx0Y29udHJvbGxlcjogTmV3c0l0ZW1Db250cm9sZXIsXHJcblx0XHR0ZW1wbGF0ZVVybDogJy9hcHAvbmV3cy1pdGVtLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG5cdH07XHJcblx0XHJcbn1cclxuXHJcbiIsIigoKT0+IHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiamV0c3RyZWFtQXBwXCIpLmNvbXBvbmVudChcIm5ld3NJdGVtXCIsIEpldFN0cmVhbS5Db21wb25lbnRzLk5ld3NJdGVtQ29tcG9uZW50KTtcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
