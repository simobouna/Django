function img(){
    var myImages = new Array();
    var rnd = Math.floor(Math.random() * 12);

    myImages[0] = "dros.jpg";
    myImages[1] = "khtek.jpg";
    myImages[2] = "toto1.jpg";
    myImages[3] = "7liwa.jpg";
    myImages[4] = "bigg.jpg";
    myImages[5] = "bigg2.jpg";
    myImages[6] = "moro.jpg";
    myImages[7] = "shayfeen.jpg";
    myImages[8] = "spleux.jpg";
    myImages[9] = "nssa.jpg";
    myImages[10] = "toto2.jpg";
    myImages[11] = "madd.jpg";
    document.write('<style> .diapo { background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(static/'+myImages[rnd]+');}</style>');


}
