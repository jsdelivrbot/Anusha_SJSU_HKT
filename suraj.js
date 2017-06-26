var WebSocket = require('ws');


var token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI2NDdiOWZkNmVmOWE0YTdmYmJiYTRjNDkwN2ZmOTBjMCIsInN1YiI6ImhhY2thdGhvbiIsInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsImllLWN1cnJlbnQuU0RTSU0tSUUtUFVCTElDLVNBRkVUWS5JRS1QVUJMSUMtU0FGRVRZLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEFSS0lORy5JRS1QQVJLSU5HLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEVERVNUUklBTi5JRS1QRURFU1RSSUFOLkxJTUlURUQuREVWRUxPUCJdLCJjbGllbnRfaWQiOiJoYWNrYXRob24iLCJjaWQiOiJoYWNrYXRob24iLCJhenAiOiJoYWNrYXRob24iLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjlmMWYyYzRkIiwiaWF0IjoxNDk4MjQ1NjA4LCJleHAiOjE0OTg4NTA0MDgsImlzcyI6Imh0dHBzOi8vODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3IiwiYXVkIjpbImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBBUktJTkcuSUUtUEFSS0lORy5MSU1JVEVEIiwiaWUtY3VycmVudC5TRFNJTS1JRS1QVUJMSUMtU0FGRVRZLklFLVBVQkxJQy1TQUZFVFkuTElNSVRFRCIsInVhYSIsImhhY2thdGhvbiIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBFREVTVFJJQU4uSUUtUEVERVNUUklBTi5MSU1JVEVEIl19.nTrO5Nzb5m_0xu7F4ymCLy1eGe4v_Wk3ccULoV823E7eUZfUvJXSuCHLFN0obusIpkK3BYq5I_MNeds_rVh6K87gJM9nlXZoyU5n0NyGjzgeR0H4Gwp7995e92Riuzz56nD7vuq9PfYsdL4mpOo2KMHjhBLZ29FCeKmDXy4mJ0LLE0B7j4JVfAuhx7aNho9bNgwjuKNQ_T3zK3s_85X4AC0xAYfny2ORfOxE9_fPcIeqnXt1vJ-wC72ZvMS1x8xFkW1FFGL53k1lu2v_e1hSzGhc2wH_bmU-Uqz3rWatGQ4vOjUPlViQBENVI26ttKV0I_PPfgbaM__pf8SfJpn14w";
var options = {
    headers: {
    Authorization : "Bearer " + token,
    "Predix-Zone-Id" : "SDSIM-IE-PEDESTRIAN"
    }
};

var ws = new WebSocket("wss://ic-websocket-server.run.aws-usw02-pr.ice.predix.io/events", options);
var cnt = 0;

ws.on('open', function() {
	 console.log("sending");
    inputData = {"assetUid":"CAM-HYP1071-F","eventTypes":["PEDEVT"]};
    ws.send(JSON.stringify(inputData));
});

var old = 0;
var diff= 0 ;
ws.on('message', function(data) {

console.log("receiving");
    myobject = JSON.parse(data);


console.log("-----------------------------------------------------------------------------");
      for(var attributename in myobject){
        console.log(attributename+": "+myobject[attributename]);
	}
	console.log("-----------------------------------------------------------------------------");

    cnt++;
});

ws.on('close', function(code) {
  console.log('Disconnected: ' + code);
});

ws.on('error', function(error) {
  console.log('Error: ' + error);
});
