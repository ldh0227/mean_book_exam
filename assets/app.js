angular.module("app",[]),angular.module("app",[]).controller("PostsCtrl",["$scope","PostsSvc",function(t,s){t.addPost=function(){t.postBody&&s.create({username:"dickeyxxx",body:t.postBody}).success(function(s){t.posts.unshift(s),t.postBody=null})},s.fetch().success(function(s){t.posts=s})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(s){return t.post("/api/posts",s)}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsInVzZXJuYW1lIiwiYm9keSIsInN1Y2Nlc3MiLCJwb3N0IiwicG9zdHMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxVQ0FBRCxRQUFBQyxPQUFBLFVBQ0FDLFdBQUEsYUFBQSxTQUFBLFdBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQUUsUUFBQSxXQUNBRixFQUFBRyxVQUNBRixFQUFBRyxRQUNBQyxTQUFBLFlBQ0FDLEtBQUFOLEVBQUFHLFdBRUFJLFFBQUEsU0FBQUMsR0FDQVIsRUFBQVMsTUFBQUMsUUFBQUYsR0FDQVIsRUFBQUcsU0FBQSxRQUtBRixFQUFBVSxRQUFBSixRQUFBLFNBQUFFLEdBQ0FULEVBQUFTLE1BQUFBLE9DaEJBWixRQUFBQyxPQUFBLE9BQ0FjLFFBQUEsWUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFILE1BQUEsV0FDQSxNQUFBRSxHQUFBRSxJQUFBLGVBRUFELEtBQUFWLE9BQUEsU0FBQUksR0FDQSxNQUFBSyxHQUFBTCxLQUFBLGFBQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBQb3N0c1N2Yykge1xyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgICB1c2VybmFtZTogJ2RpY2tleXh4eCcsXHJcbiAgICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHBvc3QpIHtcclxuICAgICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHBvc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoIGZ1bmN0aW9uKHBvc3RzKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSBwb3N0cztcclxuICB9KTsgIFxyXG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuICB0aGlzLmZldGNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==