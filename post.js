var Nightmare = require('nightmare'),
    vo = require('vo'),
    nightmare = Nightmare({show:true});
require('nightmare-upload')(Nightmare);

module.exports = function * (ad, track) {
    console.log('Processing ad', track);
    if(track == 0){
        console.log(ad.URL);
        yield nightmare.goto(ad.URL)
            .wait(2000)
            .click('#postlks #post')
            .wait(2000)
            .click('input[value=so]')
            .click('.pickbutton')
            .wait(2000)
            .click('.selection-list li input')
            .wait(2000)
            .insert('#inputEmailHandle', 'justinbauer200@gmail.com')
            .insert('#inputPassword', 'justin654321')
            .click('.login-box .accountform-btn')
            .wait(3000)
            .insert('#PostingTitle', ad.title_of_post)
            .insert('#postal_code', '84097')

            .insert('#PostingBody', ad.body_of_text)
            .click('.bigbutton') // continue to image uplaoder
            .wait(2000)
            .click('.bigbutton') // done w images
            .wait(2000)
            .click('.bigbutton') // publish
            .wait(2000)
    } else {
        console.log(ad.URL);
        yield nightmare.goto(ad.URL)
            .wait(2000)
            .click('#postlks #post')
            .wait(2000)
            .click('input[value=so]')
            .click('.pickbutton')
            .wait(2000)
            .click('.selection-list li input')
            .wait(2000)
            .insert('#contact_phone', ad.reply_phone_number)
            .insert('#PostingTitle', ad.title_of_post)
            .insert('#postal_code', '84097')

            .insert('#PostingBody', ad.body_of_text)
            .click('.bigbutton') // continue to image uplaoder
            .wait(2000)
            .click('.bigbutton') // done w images
            .wait(2000)
            .click('.bigbutton') // publish
            .wait(2000)
    }
}
