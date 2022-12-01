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

var c2_sound = document.getElementById("C2-sound");
var c2_1_sound = document.getElementById("C2-1-sound");
var d2_sound = document.getElementById("D2-sound");
var d2_1_sound = document.getElementById("D2-1-sound");
var e2_sound = document.getElementById("E2-sound");
var f2_sound = document.getElementById("F2-sound");
var f2_1_sound = document.getElementById("F2-1-sound");
var g2_sound = document.getElementById("G2-sound");
var g2_1_sound = document.getElementById("G2-1-sound");
var a2_sound = document.getElementById("A2-sound");
var a2_1_sound = document.getElementById("A2-1-sound");
var b2_sound = document.getElementById("B2-sound");

var c3_sound = document.getElementById("C3-sound");
var c3_1_sound = document.getElementById("C3-1-sound");
var d3_sound = document.getElementById("D3-sound");
var d3_1_sound = document.getElementById("D3-1-sound");
var e3_sound = document.getElementById("E3-sound");
var f3_sound = document.getElementById("F3-sound");
var f3_1_sound = document.getElementById("F3-1-sound");
var g3_sound = document.getElementById("G3-sound");
var g3_1_sound = document.getElementById("G3-1-sound");
var a3_sound = document.getElementById("A3-sound");
var a3_1_sound = document.getElementById("A3-1-sound");
var b3_sound = document.getElementById("B3-sound");

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

var C_note = [c1_sound, c2_sound, c3_sound, c4_sound];
var C_sharp = [c1_1_sound, c2_1_sound, c3_1_sound, c4_1_sound];
var D_note = [d1_sound, d2_sound, d3_sound, d4_sound];
var D_sharp = [d1_1_sound, d2_1_sound, d3_1_sound, d4_1_sound];
var E_note = [e1_sound, e2_sound, e3_sound, e4_sound];
var F_note = [f1_sound, f2_sound, f3_sound, f4_sound];
var F_sharp = [f1_1_sound, f2_1_sound, f3_1_sound, f4_1_sound];
var G_note = [g1_sound, g2_sound, g3_sound, g4_sound];
var G_sharp = [g1_1_sound, g2_1_sound, g3_1_sound, g4_1_sound];
var A_note = [a1_sound, a2_sound, a3_sound, a4_sound];
var A_sharp = [a1_1_sound, a2_1_sound, a3_1_sound, a4_1_sound];
var B_note = [b1_sound, b2_sound, b3_sound, b4_sound];

var scale = 4;
var chord_1 = 0;
var chord_2 = 0;
var chord_3 = 0;


function playNote(key, input, type) {

    $(input).addClass("active");
    key.play();
    key.onended = function () {
        $(input).removeClass("active");
        console.log("done");
    };

    if (type == "mouse") {
        $(this).on("mouseleave", function () {
            $(input).removeClass("active");
            key.pause();
            key.currentTime = 0;
            console.log("Mouse up");
        });
    }
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
        chord_1 = "#A" + scale;
        chord_2 = "#C" + scale + "-1";
        chord_3 = "#E" + scale;
        console.log(chord_1);
        playNote(a4_sound, chord_1, "keypress");
        $(chord_1).addClass("active");
        playNote(c4_1_sound, chord_2, "keypress");
        $(chord_2).addClass("active");
        playNote(e4_sound, chord_3, "keypress");
        $(chord_3).addClass("active");
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
    } else if (e.key == ",") {
        scale--;
        if ($("#scale-4").is(":checked")) {
            $("#scale-3").prop("checked", true);
        } else if ($("#scale-3").is(":checked")) {
            $("#scale-2").prop("checked", true);
        } else if ($("#scale-2").is(":checked")) {
            $("#scale-1").prop("checked", true);
        } else if ($("#scale-1").is(":checked")) {
            $("#scale-8").prop("checked", true);
            scale = 8;
        } else if ($("#scale-8").is(":checked")) {
            $("#scale-7").prop("checked", true);
        } else if ($("#scale-7").is(":checked")) {
            $("#scale-6").prop("checked", true);
        } else if ($("#scale-6").is(":checked")) {
            $("#scale-5").prop("checked", true);
        } else if ($("#scale-5").is(":checked")) {
            $("#scale-4").prop("checked", true);
        }
    } else if (e.key == ".") {
        scale++;
        if ($("#scale-4").is(":checked")) {
            $("#scale-5").prop("checked", true);
        } else if ($("#scale-3").is(":checked")) {
            $("#scale-4").prop("checked", true);
        } else if ($("#scale-2").is(":checked")) {
            $("#scale-3").prop("checked", true);
        } else if ($("#scale-1").is(":checked")) {
            $("#scale-2").prop("checked", true);
        } else if ($("#scale-8").is(":checked")) {
            $("#scale-1").prop("checked", true);
            scale = 1;
        } else if ($("#scale-7").is(":checked")) {
            $("#scale-8").prop("checked", true);
        } else if ($("#scale-6").is(":checked")) {
            $("#scale-7").prop("checked", true);
        } else if ($("#scale-5").is(":checked")) {
            $("#scale-6").prop("checked", true);
        }
    }
});
