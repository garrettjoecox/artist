(() => {
  angular
    .module('artist')
    .controller('artistC', artistC);

  function artistC($stateParams, $state) {
    const tyler = {
      displayName: 'Tyler, The Creator',
      avatar: 'https://resources.tidal.com/images/f798b3cf/9407/4378/9308/764f873506c7/320x320.jpg',
      banner: 'https://yt3.ggpht.com/_sSbX71D6CjrUNoTIPtpYREuIYQao_YuKAPJCbWphHGPw3REQdMUK4eOnCCOsYRMxmUa0dVP=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no',
      following: '4,034,495',
    };

    const coldplay = {
      displayName: 'Coldplay',
      avatar: 'http://images.sk-static.com/images/media/profile_images/artists/197928/huge_avatar',
      banner: 'https://is3-ssl.mzstatic.com/image/thumb/Features4/v4/0c/4b/b2/0c4bb231-4f24-f684-eb67-025b802fbe80/source/0x540h.jpg',
      following: '21,703,039',
    };

    const frank = {
      displayName: 'Frank Ocean',
      avatar: 'http://ima.ulximg.com/image/src/artist/1392853723_dd7bf404602d4647b315404d9a76a123.jpg/5d4c5b81f923adce94da5a6b9f938bed/1392853723_frank_ocean_86.jpg',
      banner: 'https://i.scdn.co/image/6e0dff95f7e7f4169941d6c09a7e35c9d4906a8d',
      following: '6,906,124',
    };

    const lana = {
      displayName: 'Lana Del Rey',
      avatar: 'http://media.pitchfork.com/photos/5929f2c7d7a71d1ea569ad15/1:1/w_160/8494510c.jpg',
      banner: 'https://pbs.twimg.com/profile_banners/45266183/1499885048/1500x500',
      following: '6,594,495',
    };

    const artists = {
      tyler,
      coldplay,
      frank,
      lana,
    };

    if (artists[$stateParams.id]) {
      this.artist = artists[$stateParams.id];
    } else {
      $state.go('search');
    }
  }
})();
