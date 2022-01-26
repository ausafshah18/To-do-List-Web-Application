
exports.getDate = function() {     // getDate is an object (so we can use module.exports here many times to export different stuff) it calls function and we can export it to app.js because we have required this self made module in app.js

    const today = new Date();  // new Date() gets todays date

    const options = 
    {
        weekday : "long",  // displayed like "Monday"
        day : "numeric",  // displayed as number
        month : "long"
    };
    return today.toLocaleDateString("en-US", options); // formating of day. returns day
};
