const app = new Vue({
    el: "#app",
    data: {
      message: "",
      logs: [],
      status: "disconnected",
      batch: "b1"
    },
    methods: {
      execute() {
        this.message ="";
        this.socket = new WebSocket("ws://localhost:8080/?" + this.batch);
        this.socket.onopen = () => {
          this.status = "connected";
         // this.logs.push({ event: "Connected to", data: 'websocketd'})
          
  
          this.socket.onmessage = ({data}) => {
            this.message += "\n" + data;
          };
        };
      },
      disconnect() {
        this.socket.close();
        this.status = "disconnected";
        this.logs = [];
      },
      sendMessage(e) {
        this.socket.send(this.message);
        this.logs.push({ event: "Sent message", data: this.message });
        this.message = "";
      }
    }
  });
  