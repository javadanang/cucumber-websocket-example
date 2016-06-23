/**
 * Copyright (c) 2016 QUp World Inc. All Rights Reserved.
 *
 * This document contains proprietary and confidential information of QUp World.
 * It may not be used for any other purposes, reproduced in whole or in part, nor passed to any organization or person
 * without the specific permission in writing of the Technical Director, QUp World.
 *
 * @author QUp World
 *
 * @see http://qupworld.com/terms
 * @see http://qupworld.com/privacy
 *
 * Description
 *
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fleetSchema = new Schema({
    "_id": String,
    "fleetId": String,
    "ownerId": {
        type: String,
        ref: 'User'
    },
    "name": String,
    "homeHeading": String,
    "address": String,
    "email": String,
    "phone": String,
    "logo": String,
    "website": String,
    "timezone": String,
    "country": String,
    "autoDisableDrv": Boolean,
    "format24Hour": Boolean,
    "googleAddress": Number,
    "SPID": {
        type: String,
        ref: 'SolutionPartner'
    },
    "kiosk": {
        "enable": Boolean,
        "backgroundImage": String,
        "mainColor": String,
        "secondColor": String
    },
    "priority": Number,
    "currency": {
        "iso": { "type": String},
        "symbol": { "type": String}
    },
    "password": {
        "passenger": Boolean,
        "driver": Boolean
    },
    "unitDistance": String,
    "isActive": Boolean,
    "forceCreditCardApp": Boolean,
    "forceCreditCardWeb": Boolean,
    "preAuthorized": {
        "amount": Number,
        "isActive": Boolean
    },
    "driverAppAlert": Number,
    "paxAppAlert": Number,
    "paymentClearanceHouses": Array,
    "smsGateway": String,
    "mapProviderId": String,
    "mapProvider": {
        "passenger": String,
        "driver": String
    },
    "editAvatar" : {
        type: Boolean,
        default: true
    },
    "appStore": String,
    "googlePlay": String,
    "appStoreDrv": String,
    "googlePlayDrv": String,
    "revision" : {
        "fareNormal" : Number,
        "fleetFare" :  Number,
        "fareFlat" :  Number,
        "fareLocation" :  Number,
        "vehicleType" :  Number
    },
    "__v": Number,
    "isShowZipCode" : {
        type: Boolean,
        default: false
    },
    "licensePlate":{
        type: Boolean,
        default: false
    },
    "additionalService" : {
        "fromAirport" : {
            "flightInfo" : {
                type: Boolean,
                default: false
            },
            "meetDriver" : {
                type: Boolean,
                default: false
            },
            "isActive" : {
                type: Boolean,
                default: false
            }
        },
        "toAirportNew" : {
            "flightInfo" : {
                type: Boolean,
                default: false
            },
            "isActive" : {
                type: Boolean,
                default: false
            }
        },
        "toAirport" : {
            type: Boolean,
            default: false
        },
        "hourly" : {
            type: Boolean,
            default: false
        },
        "isActive" : {
            type: Boolean,
            default: false
        }
    },
    "shortestPathEstimation":{
        type: Boolean,
        default: false
    },
    "trackTrace":{
        "navColor": String,
        "track" : {
            "trackURL" : {
                type: String,
                default: ''
            },
            "isActive" : {
                type: Boolean,
                default: true
            }
        }
    },
    "carHailing": {
        type: Boolean,
        default: false
    },
    "standInQueue": {
        type: Boolean,
        default: false
    },
    "hardwareMeter": {
        type: Boolean,
        default: false
    },
    "fleetType": String,
    "editTip": {
        type: Boolean,
        default: false
    },
    "webBooking" : {
        "mainColor" : String,
        "secondColor" : String,
        "backgroundDesktop" : String,
        "backgroundMobile" : String
    },
    "language": {
        type: String,
        default: 'en'
    },
    "mDispatcher": {
        "assignDriver": {
            type: Boolean,
            default: false
        },
        "queueList": {
            type: Boolean,
            default: false
        }
    },
    "forceCreditCardMDispatcher": {
        type: Boolean,
        default: false
    },
    "multipleOptions": {
        type: Number,
        default: 0
    },
    "emailNotifications": Boolean,
    "arrive":{
        isLimited: {
            type: Boolean,
            default: true
        },
        value: {
            type: Number,
            default: 30
        }
    }
}, { collection: 'Fleet'});
// fleetSchema.statics = {
//     /**
//      * find sms gateway with fleetId
//      *
//      * @method getSMSGateway
//      * @params {String} fleetId
//      * @return {Object} cb
//      */
//     "getSMSGateway": function(fleetId, cb){
//         this.findOne({ "fleetId": fleetId }).select('smsGateway').exec(cb);
//     },
//     /**
//      * get timezone with fleetId
//      *
//      * @method getTimezone
//      * @params {String} fleetId
//      * @return {Object} cb
//      */
//     "getTimezone": function(fleetId, cb){
//         this.findOne({ "fleetId": fleetId }).select('timezone').exec(cb);
//     }
// };
module.exports = mongoose.model('Fleet', fleetSchema);