
var vara = [];

vara[0] = new Vara(
    "#vara-container",
    []
);
vara[1] = new Vara(
    "#vara-container2",
    []
);
vara[2] = new Vara(
    "#vara-container3",
    []
);

$(".front:not(.last)").click(function () {
    var ix = $(this)
        .parent(".paper")
        .index();
    $(".book").addClass("open");
    $(this)
        .parent(".paper")
        .addClass("open");
    if (ix === 0) {
        typewriter1();
    } else if (ix == 1) {
        typewriter2();
    } else if (ix == 2) {
        typewriter3();
    }

});
$(".back").click(function () {
    if (
        $(this)
            .parent(".paper")
            .index() == 0
    )
        $(".book").removeClass("open");
    $(this)
        .parent(".paper")
        .removeClass("open");
});


var aText1 = new Array(
    "「ぼっち・ざ・ろっく！」が放映開始時に特別な注目を集めなかったものの、高い品質と視聴者と主人公との共感によって、2022年のアニメとして際立った存在になりました。",
    "では、なぜぼっちちゃんの社交不安のキャラクター設定が深く人々の心に響くのでしょうか。もしもあなたが社交面で少し自信がないなら、ぼっちちゃんの姿に自分自身の影を多かれ少なかれ見ることができるでしょう。例えば、他人を拒否する方法がわからない、心の中でドラマを作り上げることが好き、独り言を言うことが好き、頭の中に架空の友達がいる、自分の黒歴史にこだわるなど、これらの点が「世界にもう一人の自分がいる」ような共感を感じさせます。",
    "もちろん、製作チームはうまくバランスを取り、ぼっちちゃんの性格が鬱陶しくならないようにしました。彼女は時々自分の世界に没頭して、不器用に物事をする、表..."
);


var aText2 = new Array(
    "現が苦手な社交不安の人物に過ぎません。言葉がうまく出ないことから、少しずつ恐怖を克服し、最終的には団体の中で立派なギターヒーローになるまでの成長が、視聴者の好感度を高めました。",
    "日常的な萌え系アニメとして、日常の描写に対して、製作チームは型にはまらないスタイルで、奇妙で魅力的な効果を生み出し、同時に良いユーモアの範囲を維持しています。",
    "LIVEシーンの演出は、作画や選曲の水準も非常に高く、従来とは異なり、製作チームは舞台上のパフォーマーの心情の展示に重点を置いています。不安から最終的に自分の輝く感覚を楽しむまでの描写は非常に成功しています。",
    "「ぼっち・ざ・ろっく！」が私に与えた感覚を正確に表現するのは難しいですが、それはまるで経験したことがないが、「青春」としか言いようのない、羨ましいほ..."
);

var aText3 = new Array(
    "ど美しいものです。ぼっちちゃんが踏み出したその一歩は、多くの人が最初から最後まで踏み出さなかった一歩かもしれません。",
    "最後まで見て、私は「ぼっち・ざ・ろっく！」が決してぼっちではないことに気づきました。それは次元の壁を破り、音楽と物語を通じてあなたの感情をアニメに引き込み、一人な物語を体験させ、平凡な結末で「戻って、生活は続いている、あなたはすでに一人に立ち向かう力を持っている」と伝えます。",
    "次に「ぼっち・ざ・ろっく！」と再会するその瞬間まで、あなたは次のぼっちと共に新たな旅に出て、再び一人の力を得るでしょう。",
    "これらは「ぼっち・ざ・ろっく！」に対する私の個人的な見解です。最後まで読んでいただき、ありがとうございました。",
    "                                               HAL大阪 chenyuguang"
);



var iSpeed = 100; // time delay of print out
var iIndex1 = 0; // start printing array at this posision
var iIndex2 = 0; // start printing array at this posision
var iIndex3 = 0; // start printing array at this posision
// the length of the text array
var iScrollAt = 20; // start scrolling up at this many linesmany lines
var iArrLength1 = aText1[0].length;
var iArrLength2 = aText2[0].length;
var iArrLength3 = aText3[0].length;
var iTextPos1 = 0; // initialise text position
var iTextPos2 = 0; // initialise text position
var iTextPos3 = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter1() {
    sContents = ' ';
    iRow = Math.max(0, iIndex1 - iScrollAt);
    var destination = document.getElementById("typedtext1");

    while (iRow < iIndex1) {
        sContents += '<p style="margin-bottom: 20px;">' + aText1[iRow++] + '</p>';
    }
    destination.innerHTML = sContents + aText1[iIndex1].substring(0, iTextPos1) + "_";
    if (iTextPos1++ == iArrLength1) {
        iTextPos1 = 0;
        iIndex1++;
        if (iIndex1 != aText1.length) {
            iArrLength1 = aText1[iIndex1].length;
            setTimeout("typewriter1()", 300);
        }
    } else {
        setTimeout("typewriter1()", iSpeed);
    }
}
function typewriter2() {
    sContents = ' ';
    iRow = Math.max(0, iIndex2 - iScrollAt);
    var destination = document.getElementById("typedtext2");

    while (iRow < iIndex2) {
        sContents += '<p style="margin-bottom: 20px;">' + aText2[iRow++] + '</p>';
    }
    destination.innerHTML = sContents + aText2[iIndex2].substring(0, iTextPos2) + "_";
    if (iTextPos2++ == iArrLength2) {
        iTextPos2 = 0;
        iIndex2++;
        if (iIndex2 != aText2.length) {
            iArrLength2 = aText2[iIndex2].length;
            setTimeout("typewriter2()", 300);
        }
    } else {
        setTimeout("typewriter2()", iSpeed);
    }
}

function typewriter3() {
    sContents = ' ';
    iRow = Math.max(0, iIndex3 - iScrollAt);
    var destination = document.getElementById("typedtext3");

    while (iRow < iIndex3) {
        sContents += '<p style="margin-bottom: 20px;">' + aText3[iRow++] + '</p>';
    }
    destination.innerHTML = sContents + aText3[iIndex3].substring(0, iTextPos3) + "_";
    if (iTextPos3++ == iArrLength3) {
        iTextPos3 = 0;
        iIndex3++;
        if (iIndex3 != aText3.length) {
            iArrLength3 = aText3[iIndex3].length;
            setTimeout("typewriter3()", 300);
        }
    } else {
        setTimeout("typewriter3()", iSpeed);
    }
}




