var a0_sound = document.getElementById("A0-sound");
var a0_1_sound = document.getElementById("A0-1-sound");
var b0_sound = document.getElementById("B0-sound");

var c1_sound = document.getElementById("C1-sound");
var c1_1_sound = document.getElementById("C1-1-sound");
var d1_sound = document.getElementById("D1-sound");
var d1_1_sound = document.getElementById("D1-1-sound");
var e1_sound = document.getElementById("E1-sound");
var f1_sound = document.getElementById("F1-sound");
var f1_1_sound = document.getElementById("F1-1-sound");
var g1_sound = document.getElementById("G1-sound");
var g1_1_sound = document.getElementById("G1-1-sound");
var a1_sound = document.getElementById("A1-sound");
var a1_1_sound = document.getElementById("A1-1-sound");
var b1_sound = document.getElementById("B1-sound");

var c4_sound = document.getElementById("C4-sound");
var c4_1_sound = document.getElementById("C4-1-sound");
var d4_sound = document.getElementById("D4-sound");
var d4_1_sound = document.getElementById("D4-1-sound");
var e4_sound = document.getElementById("E4-sound");
var f4_sound = document.getElementById("F4-sound");
var f4_1_sound = document.getElementById("F4-1-sound");
var g4_sound = document.getElementById("G4-sound");
var g4_1_sound = document.getElementById("G4-1-sound");
var a4_sound = document.getElementById("A4-sound");
var a4_1_sound = document.getElementById("A4-1-sound");
var b4_sound = document.getElementById("B4-sound");
var scale = 4;


function playNote(key, input, type) {
    $(input).addClass("active");
    key.play();
    key.onended = function () {
        $(input).removeClass("active");
        console.log("done");
    };
    // if (type == "mouse") {
    //     $(this).on("mouseup", function () {
    //         $(input).removeClass("active");
    //         key.pause();
    //         key.currentTime = 0;
    //         console.log("Mouse up");
    //     });
    //     $(this).on("mouseleave", function () {
    //         $(input).removeClass("active");
    //         key.pause();
    //         key.currentTime = 0;
    //         console.log("Mouse left");
    //     });
    // } else if (type == "keypress") {
    //     $(this).on("keyup", function () {
    //         $(input).removeClass("active");
    //         key.pause();
    //         key.currentTime = 0;
    //         console.log("Key up");
    //     });
    // }
}

$("#A0").on("mousedown", function () { playNote(a0_sound, "#A0", "mouse"); });
$("#A0-1").on("mousedown", function () { playNote(a0_1_sound, "#A0-1", "mouse"); });
$("#B0").on("mousedown", function () { playNote(b0_sound, "#B0", "mouse"); });

// Scale 1
$("#C1").on("mousedown", function () { playNote(c1_sound, "#C1", "mouse"); });
$("#C1-1").on("mousedown", function () { playNote(c1_1_sound, "#C1-1", "mouse"); });
$("#D1").on("mousedown", function () { playNote(d1_sound, "#D1", "mouse"); });
$("#D1-1").on("mousedown", function () { playNote(d1_1_sound, "#D1-1", "mouse"); });
$("#E1").on("mousedown", function () { playNote(e1_sound, "#E1", "mouse"); });
$("#F1").on("mousedown", function () { playNote(f1_sound, "#F1", "mouse"); });
$("#F1-1").on("mousedown", function () { playNote(f1_1_sound, "#F1-1", "mouse"); });
$("#G1").on("mousedown", function () { playNote(g1_sound, "#G1", "mouse"); });
$("#G1-1").on("mousedown", function () { playNote(g1_1_sound, "#G1-1", "mouse"); });
$("#A1").on("mousedown", function () { playNote(a1_sound, "#A1", "mouse"); });
$("#A1-1").on("mousedown", function () { playNote(a1_1_sound, "#A1-1", "mouse"); });
$("#B1").on("mousedown", function () { playNote(b1_sound, "#B1", "mouse"); });

// Scale 4
$("#C4").on("mousedown", function () { playNote(c4_sound, "#C4", "mouse"); });
$("#C4-1").on("mousedown", function () { playNote(c4_1_sound, "#C4-1", "mouse"); });
$("#D4").on("mousedown", function () { playNote(d4_sound, "#D4", "mouse"); });
$("#D4-1").on("mousedown", function () { playNote(d4_1_sound, "#D4-1", "mouse"); });
$("#E4").on("mousedown", function () { playNote(e4_sound, "#E4", "mouse"); });
$("#F4").on("mousedown", function () { playNote(f4_sound, "#F4", "mouse"); });
$("#F4-1").on("mousedown", function () { playNote(f4_1_sound, "#F4-1", "mouse"); });
$("#G4").on("mousedown", function () { playNote(g4_sound, "#G4", "mouse"); });
$("#G4-1").on("mousedown", function () { playNote(g4_1_sound, "#G4-1", "mouse"); });
$("#A4").on("mousedown", function () { playNote(a4_sound, "#A4", "mouse"); });
$("#A4-1").on("mousedown", function () { playNote(a4_1_sound, "#A4-1", "mouse"); });
$("#B4").on("mousedown", function () { playNote(b4_sound, "#B4", "mouse"); });


$(document).on("keypress", function (e) {
    console.log(e.key);
    if (e.key == "A") { // A:Maj
        playNote(a4_sound, "#A4", "keypress");
        $("#A4").addClass("active");
        playNote(c4_1_sound, "#C4-1", "keypress");
        $("#C4-1").addClass("active");
        playNote(e4_sound, "#E4", "keypress");
        $("#E4").addClass("active");
    } else if (e.key == "a") { // A:Min
        playNote(a4_sound, "#A4", "keypress");
        $("#A4").addClass("active");
        playNote(c4_1_sound, "#C4", "keypress");
        $("#C4").addClass("active");
        playNote(e4_sound, "#E4", "keypress");
        $("#E4").addClass("active");
    } else if (e.key == "C") { // C:Maj
        playNote(c4_sound, "#C4", "keypress");
        $("#C4").addClass("active");
        playNote(e4_sound, "#E4", "keypress");
        $("#E4").addClass("active");
        playNote(g4_sound, "#G4", "keypress");
        $("#g4").addClass("active");
    } else if (e.key == "c") { // C:Min
        playNote(c4_sound, "#C4", "keypress");
        $("#C4").addClass("active");
        playNote(d4_1_sound, "#D4-1", "keypress");
        $("#D4-1").addClass("active");
        playNote(g4_sound, "#G4", "keypress");
        $("#g4").addClass("active");
    } else if (e.key == "D") { // D:Maj
        playNote(d4_sound, "#D4", "keypress");
        $("#D4").addClass("active");
        playNote(f4_1_sound, "#F4-1", "keypress");
        $("#F4-1").addClass("active");
        playNote(a4_sound, "#A4", "keypress");
        $("#A4").addClass("active");
    } else if (e.key == "d") { // D:min
        playNote(d4_sound, "#D4", "keypress");
        $("#D4").addClass("active");
        playNote(f4_1_sound, "#F4", "keypress");
        $("#F4").addClass("active");
        playNote(a4_sound, "#A4", "keypress");
        $("#A4").addClass("active");
    } else if (e.key == "E") { // E:Maj
        playNote(e4_sound, "#E4", "keypress");
        $("#E4").addClass("active");
        playNote(g4_1_sound, "#G4-1", "keypress");
        $("#G4-1").addClass("active");
        playNote(b4_sound, "#B4", "keypress");
        $("#B4").addClass("active");
    } else if (e.key == "e") { // E:Min
        playNote(e4_sound, "#E4", "keypress");
        $("#E4").addClass("active");
        playNote(g4_sound, "#G4", "keypress");
        $("#G4").addClass("active");
        playNote(b4_sound, "#B4", "keypress");
        $("#B4").addClass("active");
    } else if (e.key == "F") { // F:Maj
        playNote(f4_sound, "#F4", "keypress");
        $("#F4").addClass("active");
        playNote(a4_sound, "#A4", "keypress");
        $("#A4").addClass("active");
        playNote(c4_sound, "#C4", "keypress");
        $("#C4").addClass("active");
    } else if (e.key == "f") { // F:Min
        playNote(f4_sound, "#F4", "keypress");
        $("#F4").addClass("active");
        playNote(g4_1_sound, "#G4-1", "keypress");
        $("#G4-1").addClass("active");
        playNote(c4_sound, "#C4", "keypress");
        $("#C4").addClass("active");
    } else if (e.key == "G") { // G:Maj
        playNote(g4_sound, "#G4", "keypress");
        $("#G4").addClass("active");
        playNote(b4_sound, "#B4", "keypress");
        $("#B4").addClass("active");
        playNote(d4_sound, "#D4", "keypress");
        $("#D4").addClass("active");
    } else if (e.key == "g") { // G:Min
        playNote(g4_sound, "#G4", "keypress");
        $("#G4").addClass("active");
        playNote(a1_1_sound, "#A4-1", "keypress");
        $("#A4-1").addClass("active");
        playNote(d4_sound, "#D4", "keypress");
        $("#D4").addClass("active");
    }


    if (e.key == "ArrowLeft") {


    } else if (e.key == "ArrowRight") {

    }
});
