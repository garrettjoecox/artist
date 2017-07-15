(() => {
  angular
    .module('artist')
    .controller('searchC', searchC);

  function searchC() {
    this.artists = [
      {
        displayName: 'Tyler, The Creator',
        id: 'tyler',
        avatar: 'https://resources.tidal.com/images/f798b3cf/9407/4378/9308/764f873506c7/320x320.jpg',
      },
      {
        displayName: 'Coldplay',
        id: 'coldplay',
        avatar: 'http://images.sk-static.com/images/media/profile_images/artists/197928/huge_avatar',
      },
      {
        displayName: 'Frank Ocean',
        id: 'frank',
        avatar: 'http://ima.ulximg.com/image/src/artist/1392853723_dd7bf404602d4647b315404d9a76a123.jpg/5d4c5b81f923adce94da5a6b9f938bed/1392853723_frank_ocean_86.jpg',
      },
      {
        displayName: 'Lana Del Rey',
        id: 'lana',
        avatar: 'http://media.pitchfork.com/photos/5929f2c7d7a71d1ea569ad15/1:1/w_160/8494510c.jpg',
      },
    ];
  }
})();
