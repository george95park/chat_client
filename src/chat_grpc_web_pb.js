/*eslint-disable*/
/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Connect,
 *   !proto.chat.ChatMessage>}
 */
const methodDescriptor_ChatService_CreateStream = new grpc.web.MethodDescriptor(
  '/chat.ChatService/CreateStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chat.Connect,
  proto.chat.ChatMessage,
  /**
   * @param {!proto.chat.Connect} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ChatMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.Connect,
 *   !proto.chat.ChatMessage>}
 */
const methodInfo_ChatService_CreateStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.ChatMessage,
  /**
   * @param {!proto.chat.Connect} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.chat.Connect} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatServiceClient.prototype.createStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatService/CreateStream',
      request,
      metadata || {},
      methodDescriptor_ChatService_CreateStream);
};


/**
 * @param {!proto.chat.Connect} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatServicePromiseClient.prototype.createStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatService/CreateStream',
      request,
      metadata || {},
      methodDescriptor_ChatService_CreateStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ChatMessage,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatService_BroadcastMessage = new grpc.web.MethodDescriptor(
  '/chat.ChatService/BroadcastMessage',
  grpc.web.MethodType.UNARY,
  proto.chat.ChatMessage,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.ChatMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.ChatMessage,
 *   !proto.chat.Empty>}
 */
const methodInfo_ChatService_BroadcastMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Empty,
  /**
   * @param {!proto.chat.ChatMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatServiceClient.prototype.broadcastMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatService/BroadcastMessage',
      request,
      metadata || {},
      methodDescriptor_ChatService_BroadcastMessage,
      callback);
};


/**
 * @param {!proto.chat.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatServicePromiseClient.prototype.broadcastMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatService/BroadcastMessage',
      request,
      metadata || {},
      methodDescriptor_ChatService_BroadcastMessage);
};


module.exports = proto.chat;
