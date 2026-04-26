console.log("🟨 video-mindset-countdown.js")


// console.log("🟨 video-mindset-1-countdown-timer.js" )

/* -------------------------------------------------------------------------- */
// ⚠️ Clean Code bitte in Zukunft machen + auslagern
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* ⁉️ What was implemented
/* -------------------------------------------------------------------------- */
/*

  1. Show Countdown of Video - About Mindset Reflect
  2. Var, Help-Funcitons, Promises, Events

*/

/* -------------------------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------------------------- */

    // audio time elements
    var audio_min_reflect_video = document.getElementById("js-audio-min-mindset-reflect-video");
    var audio_sec_reflect_video = document.getElementById("js-audio-sec-mindset-reflect-video");

    // video src
    var video_reflect = document.getElementById("js-video-about-mindset-reflect");

/* -------------------------------------------------------------------------- */
/* Varialbles
/* -------------------------------------------------------------------------- */

var audio_max_duration = 0;
var audio_save_duration = 0;

// to handle full seconds not miliseconds
var secBefore = 0;

/* -------------------------------------------------------------------------- */
/* Functions
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* 🟣 Util Function | Help Function
/* -------------------------------------------------------------------------- */
/*
/* Handling Full Seconds Not Mili Seconds
/* ( because our Event prints from a second many mili seconds too )
/* -------------------------------------------------------------------------- */

    function getFullSecond( secValue ) {


        var formatedSec = Math.floor( secValue );

        // New Second was detected
        // At the beginning, 0 != (0.12=0, 0.82=0, 1.12=1 => yes )
        // then our secBefore is 1 and should be check if 2.12 then we
        // have the 2sec, and secBefore is 2 and so on ...
        if( secBefore != formatedSec ) {

            // set new sec
            secBefore = formatedSec;
            // console.log('⌚:' + secBefore + ' Sec')
            // txtSecAudioToBeFresh.innerText = secBefore;

            return 1;

        } else {

            return 0;
        }

    }

/* -------------------------------------------------------------------------- */
/* 🟣 Util Function | Help Function
/* -------------------------------------------------------------------------- */
/*
/* Set Zero Styling By Numbers
/* -------------------------------------------------------------------------- */

    function setZeroStylingByNumbers ( number ) {

        if( number >= 0 && number <= 9 ) {

            return String('0' + number)
        }

        return number;
    }

/* -------------------------------------------------------------------------- */
/* 🟣 Util Function | Help Function
/* -------------------------------------------------------------------------- */
/*
/*  Get | Minutes By Seconds
/* -------------------------------------------------------------------------- */

    function getMinutesBySeconds( maxSeconds ) {

        return ( Math.floor( maxSeconds / 60 ) )
    }

/* -------------------------------------------------------------------------- */
/* 🟣 Util Function | Help Function
/* -------------------------------------------------------------------------- */
/*
/*  Get | Rest Seconds by Elimanting Full Minutes
/* -------------------------------------------------------------------------- */

    function getRestSecondsFromMinutes( maxSeconds ) {

        return ( Math.floor( maxSeconds % 60 ) )
    }

/* -------------------------------------------------------------- */
/* Set Audio Countdown by sec by sec
/* -------------------------------------------------------------- */

    function audioCountdownIncrement() {

        // stop increment if second is zero
        if( audio_max_duration-1 != -1 ) {

            audio_max_duration-=1;
            // console.log('[⌚ Countdown| ??? ]: ' + audioDurationToBeFresh + ' Seconds' )
        }


    }

/* -------------------------------------------------------------- */
/* Promise Function |
/* SET Audio Duration by Listening Event onloadedmetadata
/* -------------------------------------------------------------- */

    function getAudioDuration( src ) {

        // console.log("### getAudioDuration() ")

        return new Promise( (resolve)=> {

            var audio = new Audio();

            // Event - onloadmetadata , if this event
            // could startet, then resolve and go
            // set src to audio.src
            audio.onloadedmetadata = () => {

                resolve(audio.duration);
            }

            audio.src = src;

        });
    }


/* ------------------------------------------------------------------------------------ */
/* 🪄 | Events
/* ------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------ */
/* Event | Timeupdate
/* ------------------------------------------------------------------------------------ */
/*   it starts only by playing audio & then it will print many milliseconds from
     running audio - we like just detect full seconds, so thats why we
     check if second number is full second, for example time event prints:
     0.5, 0.8, 1.1 | by 1.1 we detect 1 Second, then we print this and so on
/* ------------------------------------------------------------------------------------ */

    video_reflect.addEventListener("timeupdate", () => {

        // console.log("The currentTime attribute has been updated. Again. - " + audioSrcToBeFresh.currentTime );

        // Just Increment Time (Minutes : Seconds ) by full detected second, not by milli seconds
        if( 1 == getFullSecond( video_reflect.currentTime ) ) {

            audioCountdownIncrement()

            // console.log('> Increment = ' + audioDurationToBeFresh )

            // Set Incremented Minutes
            audio_min_reflect_video.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audio_max_duration ) );

            // Set Incremented Seconds
            audio_sec_reflect_video.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audio_max_duration ) );

        }


    });


/* ------------------------------------------------------------------------------------ */
/* Event | play
/* ------------------------------------------------------------------------------------ */
/*
/* if src is play
/* ------------------------------------------------------------------------------------ */

    video_reflect.addEventListener("play", ()=> {

    // console.log("🟩 Video startet")

    /* -------------------------------------- */
    /* Play Video
    /* -------------------------------------- */
    video_reflect.play();

    })

/* ------------------------------------------------------------------------------------ */
/* Event | pause
/* ------------------------------------------------------------------------------------ */
/*
/* if src is pause or ended, triggered same time
/* ------------------------------------------------------------------------------------ */

    video_reflect.addEventListener("pause", ()=> {

    // console.log("🟩 Video Pause/(Ended ?!)")

    /* -------------------------------------- */
    /* Pause Video
    /* -------------------------------------- */
    video_reflect.pause();

    })

/* ------------------------------------------------------------------------------------ */
/* Event | ended
/* ------------------------------------------------------------------------------------ */
/*
/* if src is running to end
/* ------------------------------------------------------------------------------------ */

    video_reflect.addEventListener("ended", ()=> {

    console.log(" 🟥 Video Ende ")

    /* -------------------------------------- */
    /* Pause Video
    /* -------------------------------------- */
    video_reflect.pause();

    // Set Max Duration by Saved Duration again
    // because it is actually by 0 because audio is ended
    audio_max_duration = audio_save_duration;

    // Set Min by max Audio again
    audio_min_reflect_video.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audio_max_duration ) );

    // Set Sec by max Audio again
    audio_sec_reflect_video.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audio_max_duration ) );

    })

/* ------------------------------------------------------------------------------------ */
/* Event | seeking
/* ------------------------------------------------------------------------------------ */
/*
/* if audio src is seeking forward or backward, update countdown of video
/* ------------------------------------------------------------------------------------ */

    video_reflect.addEventListener("seeking", ()=> {

    // console.log(" 😈 Seeking " + video_reflect.currentTime )

    // max audio time (save) - actually seek time = actually time to play
    // +1 because of millisecond differents to unshown -1
    audio_max_duration =  ( audio_save_duration - video_reflect.currentTime) + 1;

    })

/* ------------------------------------------------------------ */
/* 🚀 | Execute
/* ------------------------------------------------------------ */

    // Set Audio Timer by using promise function
    getAudioDuration( video_reflect.querySelector("source").src )

        .then( ( audioDuration ) => {

            // Set Max Audio Duration
            audio_max_duration = Math.floor(audioDuration);

            // Save Max Audio Duration to set again by ending Playing Audio
            audio_save_duration = audio_max_duration;

            // console.log('[⌚ Max ]: ' + audioDurationToBeFresh  + ' Seconds' )

            // Set Max Minutes
            audio_min_reflect_video.innerText = setZeroStylingByNumbers( getMinutesBySeconds( audio_max_duration ) );

            // Set Max Seconds
            audio_sec_reflect_video.innerText = setZeroStylingByNumbers( getRestSecondsFromMinutes( audio_max_duration ) );

        } )
