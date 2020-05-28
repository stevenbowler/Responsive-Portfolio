//@ts-check
/** 
 * package for inclusion in any program
 * @namespace nodemailer
 * 
 * 
 * @module sendEmail
 */


// add npm package nodemailer to package.json "npm i nodemailer" and require here
/**
 * @requires
 * @type {*}
 */
var nodemailer = require('nodemailer');


/**
 * Schema for nodemailer, must have npm package dotenv installed "npm i dotenv" and .env file with following two lines
 *  NODEMAILER_GMAIL_ACCOUNT=your_gmail_address
 *  NODEMAILER_GMAIL_PASSWORD=your_gmail_password
 * 
 *  assumes your gmail account has "access for less secure apps" enabled
 * @type {*}
 */
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_GMAIL_ACCOUNT,
        pass: process.env.NODEMAILER_GMAIL_PASSWORD
    }
});


/**
 * Parameter object for call to {@link sendEmail}
 * @type {object}
 * parameters for call to sendEmail assumes npm package dotenv installed and .env file in place
 */
var mailOptions = {
    from: process.env.NODEMAILER_GMAIL_ACCOUNT,
    to: 'stevenbowler@yahoo.com',
    subject: 'Your Table is Ready',
    text: 'Your Table is Ready'
};


/**
 * In your app include statement 'var sendEmail = require("thisNodeMailerFile.js")'
 * include call to "sendEmail(targetEmail)" in your code with target email address "targetEmail" as parameter
 * @function sendEmail
 * @param {string} targetEmail 
 */
function sendEmail(targetEmail) {
    // nodemailer
    mailOptions.to = targetEmail;
    console.log(`transporter.sendMail mailOptions.to ${mailOptions.to}`);
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;