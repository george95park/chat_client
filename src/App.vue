<template>
    <div id="container">
        <div id="inputDiv">
            <input v-model="from" type="text" id="fromInput">
            <input v-model="msg" type="text" id="msgInput">
            <button v-on:click="send" type="button" id="sendBtn">Send</button>
        </div>
    </div>
</template>

<script>
const { ChatMessage } = require('./chat_pb.js');
const { ChatServiceClient } = require('./chat_grpc_web_pb.js');
var client = new ChatServiceClient('http://localhost:3000');
export default {
    name: 'App',
    data() {
        return {
            from: '',
            msg: ''
        };
    },
    methods: {
        send() {
            let request = new ChatMessage();
            request.setFrom(this.from);
            request.setMessage(this.msg);
            client.chat(request, {}, function(err, response) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(response);
                }
            })
        }
    }
}
</script>

<style>
#inputDiv {
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
