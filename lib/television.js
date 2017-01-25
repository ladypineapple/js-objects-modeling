'use strict';

const television = {
  make: 'JC Penney',
  model: '1983 Monitor',
  mfgYear: '1982',
  power: 'Off',
  volume: 0,

  togglePower: function() {
    //perhaps add guard clause to prevent bad input
    if (this.power === 'Off') { //don't worry about 'this' just yet
        this.power = 'On';
    } else {
      this.power = 'Off';
    }
    return this.power;
  },

  increaseVolume: function() {
    return ++this.volume;
  },
  decreaseVolume: function () {
    return--this.volume;
  },

  increaseChannel: function() {
    return ++this.channel;
  },
  decreaseChannel: function () {
    return --this.channel;
  },

  changeChannel: function (channelNumber) {
    this.channel = channelNumber;
    return this.channel;
  }

};

module.exports = television;
