<template>
    <div id="container">
        <form v-on:submit.prevent="connect">
            <input v-model="username" type="text" id="usernameInput">
            <button>Connect</button>
        </form>
        <hr>
        <div>
            <p v-for="m in messages" :key="m">{{m}}</p>
        </div>
        <form v-on:submit.prevent="send" id="sendForm">
            <input v-model="msg" type="text" id="msgInput">
            <button v-on:click="send" type="button" id="sendBtn">Send</button>
        </form>
    </div>
</template>

<script>
const { Connect, ChatMessage } = require('./chat_pb.js');
const { ChatServiceClient } = require('./chat_grpc_web_pb.js');
var client = new ChatServiceClient('http://localhost:10000');
export default {
    name: 'App',
    data() {
        return {
            username: '',
            msg: '',
            messages: [],
        };
    },
    methods: {
        connect: function() {
            let request = new Connect();
            request.setName(this.username);
            var stream = client.createStream(request, {});
            var thisRef = this;
            stream.on('data', function(response) {
                let message = "-> " + response.getFrom() + ": " + response.getMessage();
                thisRef.messages.push(message);
             });
        },
        send: function() {
            let request = new ChatMessage();
            request.setFrom(this.username);
            request.setMessage(this.msg);
            this.msg = '';
            client.broadcastMessage(request, {}, function(err) {
                if (err) {
                    console.log(err.code);
                    console.log(err.message);
                }
            });
        }
    }
}
</script>

<style>
#sendForm {
    display: inline-block;
    position: absolute;
    bottom: 0;
    width: 100%;
}
#fromInput {
    width: 15%;
}
#sendBtn {
    width: 50px;
}
#msgInput {
    width: calc(80% - 50px);
}

</style>
