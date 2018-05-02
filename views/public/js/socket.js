var socket = io('http://192.168.187.132:3000');

socket.on('connect', function(){
  console.log('connect----------');
});

socket.on('event', function(data){});

socket.on('disconnect', function(){
  console.log('disconnect');
});

socket.on('getTapAmount', function(data) {
  console.log('tap amount', data);
  $('#tapAmount').val(data);
  var tapAmountEl = document.getElementById("tapAmount");
  tapAmountEl.textContent = data / 1e18 + 'ETH';
});

