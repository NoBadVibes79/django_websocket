const ws = new WebSocket('ws://localhost:8000/ws/presence/');
const presenceEl = document.getElementById('pre_cnt');
const messagesEl = document.getElementById('messages');
const onlineUsers = document.querySelector("#online-users");

ws.onmessage = (event) => {
  onlineUsers.innerHTML = "";
  let data = JSON.parse(event.data)
  presenceEl.innerHTML = data.online;

  const li1 = document.createElement('li');
  li1.innerHTML = data.msg;
  messagesEl.appendChild(li1);

  data.users.forEach(user => {
	const li2 = document.createElement("li");
	li2.classList.add("on-us")
	li2.innerHTML = user;
	onlineUsers.appendChild(li2);
  });

};