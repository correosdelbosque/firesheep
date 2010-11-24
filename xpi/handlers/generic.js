// Authors:
//   Ian Gallagher <crash@neg9.org>

register({
  name: 'Unknown Site',

  matchPacket: function (packet) {
	return true;
  },

  processPacket: function () {
    var local_addr = this.firstPacket.from.split(':', 1)[0];
    var remote_host_hdr = this.firstPacket.host;
    this.sessionId = local_addr + '|' + remote_host_hdr;
    this.userName = local_addr;
    this.siteName = remote_host_hdr;
  },

  identifyUser: function () {
  }
});
