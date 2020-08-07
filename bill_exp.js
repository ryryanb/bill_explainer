var customJs=forms.customer.utils;userFunctions={pageOnLoadChecks: function() {
 //initialize live chat
 $('head').append('<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, maximum-scale=1.0">');

 $.getScript('/apps/liveperson/import.htm').done(function() {
 livePerson.init({
 section: ["telstra", "consumer", "rebate", "request-a-credit-details"],
 sourceSection: ["tcom"],
 onlyTcomCSS: true
 });
 });
 
 $bg("#question_SI_44257_surveyAnswerText").remove();
 $bg("#question_SI_35253_surveyAnswerText").remove();
 $bg("#question_SI_80124_surveyAnswerText").remove();
 $bg("#question_SI_85366_surveyAnswerText").remove();
 $bg("#question_SI_80124").remove();
 $bg("#question_SI_85366").remove();
 $bg("#question_SI_35253").remove();
 $bg("#question_SI_41831").remove();


 //hide test dropdown
 $bg("#question_SI_11879").hide();
 $bg("#question_SI_19488").hide();

 $bg(".form-mandatory-text").hide();
 $bg("#submitButton").hide();*/

 //insert logic in choosing scenario
 var getUrlParameter = function getUrlParameter(sParam) {
 var sPageURL = window.location.search.substring(1),
 sURLVariables = sPageURL.split('&'),
 sParameterName,
 i;

 for (i = 0; i < sURLVariables.length; i++) {
 sParameterName = sURLVariables[i].split('=');

 if (sParameterName[0] === sParam) {
 return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
 }
 }
 };
$bg("#question_SI_89940").appendTo("#question_section");
$bg("#question_SI_58312").insertAfter("#question_SI_89940");

 var scenarioFromUrl = getUrlParameter('scenario');

 var getMonthFromDateString = function getMonthFromDateString(dateString) {
 switch(dateString) {
 case '01':
 return 'Jan';
 break;
 case '02':
 return 'Feb';
 break;
 case '03':
 return 'Mar';
 break;
 case '04':
 return 'Apr';
 break;
 case '05':
 return 'May';
 break;
 case '06':
 return 'Jun';
 break;
 case '07':
 return 'Jul';
 break;
 case '08':
 return 'Aug';
 break;
 case '09':
 return 'Sep';
 break;
 case '10':
 return 'Oct';
 break;
 case '11':
 return 'Nov';
 break;
 case '12':
 return 'Dec';
 break;
 default:
 return '';
} 
 };



 





var resp = "";

if (scenarioFromUrl == '1') {
 resp = JSON.parse(respjson1);
 
 } else if (scenarioFromUrl == '2') {
 resp = JSON.parse(respjson2);
 } else if (scenarioFromUrl == '3') {
 resp = JSON.parse(respjson3);
 
 } else if (scenarioFromUrl == '4') {
 resp = JSON.parse(respjson4);
 } else if (scenarioFromUrl == '5') {
 resp = JSON.parse(respjson5);
 
 } else if (scenarioFromUrl == '6') {
 
 resp = JSON.parse(respjson6);
 } else if (scenarioFromUrl == '7') {
 
 resp = JSON.parse(respjson7);
 } else {
 resp = JSON.parse(respjson1);
 };


var scenario = resp.scenarios[0].scenarioId;
 
 
 //initialize cosmetics
 $bg("#surveyTitleText").html("Hi " + raa_firstname + ",");

 $bg("#surveyTitleText").insertBefore("#questionTab_1_group_2");
 $bg("#submitButton").html("Continue");
 $bg("#submitButton").insertAfter("#question_SI_58312_surveyAnswer_list");

 $bg("#question_SI_16872_surveyAnswer_0").insertBefore("#banner");
 $bg("#question_SI_16872_surveyAnswer_1").insertAfter("#primary-nav-3");
 
 //hide the banner
 //$bg("#spectrum").remove();

 //service headers
 
 //Home Phone Services
 var homephone_header = '<table class="header_tables" id="homephone_image_table"><tr><td class="header_column1" id="column1_homephone"><img class="service_icons" id="homephone_image" src="/res/images/custom/2547001/homephoneimage.png"></td><td class="header_column2" id="column2_homephone"><span class="bold_text">Home Phone</span><br><span id="homephone_number" class="regular_text">{02 8904 1207}</span></td></tr></table>';

 //Smart Home
 var smarthome_header = '<table class="header_tables" id="smarthome_image_table"><tr><td class="header_column1" id="column1_smarthome"><img class="service_icons" id="smarthome_image" src="/res/images/custom/2547001/smarthomeimage.png"></td><td class="header_column2" id="column2_smarthome"><span class="bold_text">Smart Home</span><br><span id="smarthome_number" class="regular_text">{11708506}</span></td></tr></table>';

 //Foxtel from Telstra
 var foxtel_header = '<table class="header_tables" id="foxtel_image_table"><tr><td class="header_column1" id="column1_foxtel"><img class="service_icons" id="foxtel_image" src="/res/images/custom/2547001/foxtelimage.png"></td><td class="header_column2" id="column2_foxtel"><span class="bold_text">Foxtel from Telstra</span><br><span id="foxtel_number" class="regular_text">{13652723}</span></td></tr></table>';
 //Foxtel from Telstra
 var locator_header = '<table class="header_tables" id="locator_image_table"><tr><td class="header_column1" id="column1_locator"><img class="service_icons" id="locator_image" src="/res/images/custom/2547001/locatorimage.png"></td><td class="header_column2" id="column2_locator"><span class="bold_text">Telstra Locator</span><br><span id="locator_number" class="regular_text">{13652723}</span></td></tr></table>';

 //set background data from tdi call
 customJs.setInput('QS_SI_10795', raa_defaultcac);
 customJs.setInput('QS_SI_64234', raa_defaultcac + ":" + raa_firstname + ":" + raa_lastname + ":" + customJs.getInputText('QS_SI_58312') + ":" + customJs.getInputText('QS_SI_89940') + ":" + tdi_mobileNumber + ":" + tdi_email);


 
 
 var table_body = "";
 

 for (var i = 0; i < resp.services.length; i++) {

 //Adding the Mobile Service section
 if (resp.services[i].serviceType == "Mobile") {
 var mobile_number_header = ""; 
 try {
 mobile_number_header = resp.services[i].serviceId.substring(0,4) + ' ' + resp.services[i].serviceId.substring(4,7) + ' ' + resp.services[i].serviceId.substring(7);
} catch(err) {
 mobile_number_header = resp.services[i].serviceId;
} 
 

 table_body += '<table class="header_tables" class="mobile_image_table"><tr><td class="header_column1 column1_mobile" ><img class="service_icons" class="phone_image" src="/res/images/custom/2547001/phoneimage.png"></td><td class="header_column2 column2_mobile" ><span class="bold_text">Mobile Service</span><br><span class="mobile_number regular_text">' +mobile_number_header + '</span></td></tr></table>';
 table_body += '<table class="charges_table mobile_service_table" >';

 }
 
 else if (resp.services[i].serviceType == "Internet" || resp.services[i].serviceType == "BigPond" ) { 
 

 table_body += '<table class="header_tables"><tr><td class="header_column1"><img class="service_icons" src="/res/images/custom/2547001/nbnimage.png"></td><td class="header_column2" ><span class="bold_text">Broadband Service</span><br><span class="regular_text">' +resp.services[i].serviceId + '</span></td></tr></table>';
 table_body += '<table class="charges_table internet_services_table">';

 }
 
 else if (resp.services[i].serviceType == "Applications & Entertainment" ) { 
 

 table_body += '<table class="header_tables"><tr><td class="header_column1"><img class="service_icons" src="/res/images/custom/2547001/nbnimage.png"></td><td class="header_column2" ><span class="bold_text">Applications & Entertainment</span><br><span class="regular_text">' +resp.services[i].serviceId + '</span></td></tr></table>';
 table_body += '<table class="charges_table internet_services_table">';

 }
 
 else if (resp.services[i].serviceType == "Foxtel") {
 

 table_body += '<table class="header_tables" id="foxtel_image_table"><tr><td class="header_column1" id="column1_foxtel"><img class="service_icons" id="foxtel_image" src="/res/images/custom/2643002/foxtelimage.png"></td><td class="header_column2" id="column2_foxtel"><span class="bold_text">Foxtel from Telstra</span><br><span id="foxtel_address" class="regular_text">' +resp.services[i].serviceId + '</span></td></tr></table>';
 table_body += '<table class="charges_table foxtel_services_table" >';

 }
 
 else if (resp.services[i].serviceType == "Telephone") {
 
 var tele_number_header = ""; 
 try {
 tele_number_header = resp.services[i].serviceId.substring(0,2) + ' ' + resp.services[i].serviceId.substring(2,6) + ' ' + resp.services[i].serviceId.substring(7);
} catch(err) {
 tele_number_header = resp.services[i].serviceId;
} 

 table_body += '<table class="header_tables" id="tele_image_table"><tr><td class="header_column1" id="column1_tele"><img class="service_icons" id="tele_image" src="/res/images/custom/2643002/teleimage.png"></td><td class="header_column2" id="column2_tele"><span class="bold_text">Home Phone</span><br><span id="tele_address" class="regular_text">' + tele_number_header + '</span></td></tr></table>';
 table_body += '<table class="charges_table tele_services_table" >';

 }
 else if (resp.services[i].serviceType == "Telstra Platinum" || resp.services[i].serviceType == "Telstra Smart Home") {

 table_body += '<table class="header_tables" id="smart_image_table"><tr><td class="header_column1" id="column1_smart"><img class="service_icons" id="smart_image" src="/res/images/custom/2643002/smarthome.png"></td><td class="header_column2" id="column2_smart"><span class="bold_text">'+resp.services[i].serviceType+'</span><br><span id="smart_address" class="regular_text">' + resp.services[i].serviceId + '</span></td></tr></table>';
 table_body += '<table class="charges_table smart_services_table" >';

 }
 
 else {

 table_body += '<table class="header_tables" ><tr><td class="header_column1" ><img class="service_icons" src="/res/images/custom/2547001/phoneimage.png"></td><td class="header_column2" ><span class="bold_text">'+resp.services[i].serviceType+'</span><br><span >' + resp.services[i].serviceId + '</span></td></tr></table>';
 table_body += '<table class="charges_table" >';

 }
 

 for (var j = 0; j < resp.services[i].charges.length; j++) {
 
 table_body += '<tr>';

 table_body += '<td class="column1" ><span>';
 var chargeName = "";
 if (resp.services[i].charges[j].description) {
 chargeName = resp.services[i].charges[j].description;
 
 }
 else {
 chargeName += resp.services[i].charges[j].chargeName;
 }
 table_body += chargeName;

 table_body += '<p></span><span id="procharge_button' + i + j + '">';
 table_body += '<a class="expand_button" onclick="$bg(&apos;#prorated_text' + i+ j + '&apos;).show();$bg(&apos;#procharge_button' + i+ j + '&apos;).hide();">see more</a></span><p>';

 table_body += '<div class="description_texts" id="prorated_text' + i + j + '"><p>';

 if (chargeName == "Advance Charges" || chargeName == "Advance Charge") {
 table_body += 'The monthly amount for your service is always charged in advance.<br>';
 try{
 table_body += 'This covers service for <span class="bold_text">' + getMonthFromDateString(resp.services[i].charges[j].startDate.substring(4,6)) + ' ' + resp.services[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.services[i].charges[j].endDate.substring(4,6)) + ' ' + resp.services[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Advance Charges");
 }
 }
 
 if (chargeName == "Credits & discounts" || chargeName == "Adjustments") {
 table_body += 'You changed your plan in this billing cycle and we&apos;re crediting the days you had paid in advance on a previous bill.<br> This credit covers dates: <br>';
 try {
 table_body += '<span class="bold_text">' + getMonthFromDateString(resp.services[i].charges[j].startDate.substring(4,6)) + ' ' + resp.services[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.services[i].charges[j].endDate.substring(4,6)) + ' ' + resp.services[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Third Party Charges");
 }
 }
 
 if (chargeName == "Third Party Charges" || chargeName == "Third Party Charge" || chargeName == "Third Party Purchase") {
 
 try {
 table_body += 'This covers service for <span class="bold_text">' + getMonthFromDateString(resp.services[i].charges[j].startDate.substring(4,6)) + ' ' + resp.services[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.services[i].charges[j].endDate.substring(4,6)) + ' ' + resp.services[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Third Party Charges");
 }
 }
 
 /*if (chargeName == "Other Charges") {
 table_body += 'Charges for ';
 for (var k = 0; k < resp.services[i].charges[j].lineItems.length; k++) {
 
 table_body += '<span class="bold_text">' + resp.services[i].charges[j].lineItems[k].description;
 if (k < resp.services[i].charges[j].lineItems.length - 2) {
 table_body += ', </span>';
 }
 else if (k == resp.services[i].charges[j].lineItems.length - 2) {
 table_body += ' <span class="regular_text">and</span> </span>';
 }
// table_body += '<br>';
 }
 
 } */
 
 if (chargeName == "Other Charges") {
 //table_body += 'Charges for ';
 for (var k = 0; k < resp.services[i].charges[j].lineItems.length; k++) {
 try {
if (resp.services[i].charges[j].lineItems[k].amount.substring(0,1) == '-') {
 table_body += '<li>' + resp.services[i].charges[j].lineItems[k].description + ' (Credit $'+ resp.services[i].charges[j].lineItems[k].amount.substring(1)+ ')' +'</li>';
} else {
 table_body += '<li>' + resp.services[i].charges[j].lineItems[k].description + ' ($'+ resp.services[i].charges[j].lineItems[k].amount.substring(1)+ ')' +'</li>';
}
 } catch(err) {
 console.log("Error in other charges");
 }

// table_body += '<br>';
 }
 
 }
 
 
 if (chargeName == "Part Month Charges" || chargeName == "Part Month Charge") {
 table_body += 'The Part Month charge covers the date this service was added to the start of your next billing month.<br>';
 /*table_body += 'Your billing month starts on the' + ' of each month. <br>';*/
 try {
 table_body += 'This charge covers service for <span class="bold_text">' + getMonthFromDateString(resp.services[i].charges[j].startDate.substring(4,6)) + ' ' + resp.services[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.services[i].charges[j].endDate.substring(4,6)) + ' ' + resp.services[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Part Month Charges");
 }
 
 
 
 }
 
 if (chargeName == "Recurring Charges") {
 table_body += 'You purchased ';
 for (var k = 0; k < resp.services[i].charges[j].lineItems.length; k++) {
 table_body += '<span class="bold_text">' + resp.services[i].charges[j].lineItems[k].description;
 if (k < resp.services[i].charges[j].lineItems.length - 2) {
 table_body += ', </span>';
 }
 else if (k == resp.services[i].charges[j].lineItems.length - 2) {
 table_body += ' <span class="regular_text">and</span> </span>';
 }
 }
 
 try {
 table_body += '<br><span class="regular_text">This charge covers service for </span><span class="bold_text">' + getMonthFromDateString(resp.services[i].charges[j].startDate.substring(4,6)) + ' ' + resp.services[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.services[i].charges[j].endDate.substring(4,6)) + ' ' + resp.services[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Recurring Charges");
 }
 
 }
 //table_body += resp.services[i].charges[j].description;

 table_body += '</p><p><span><a class="collapse_button" style= "display:inline" onclick="$bg(&apos;#procharge_button' + i + j + '&apos;).show();$bg(&apos;#prorated_text' + i + j + '&apos;).hide();">see less</a></span><p>';
 table_body += '</div>';

 table_body += '</td>';
 
 table_body += '<td class="column2"><span class="price_data">';
 
 table_body += '$';
 try {
 table_body += resp.services[i].charges[j].amount.substring(1);
 if (resp.services[i].charges[j].amount.charAt(0) == "-"){
 table_body += '<br>Credit';
 }
 } catch(err) {
 console.log("Error in displaying amount"); 
 }
 table_body += '</span></td>';

 table_body += '</tr>';


 }

 
 }
 
 for (var i = 0; i < resp.bundles.length; i++) {

 //Adding the Mobile Service section
 // if (resp.bundles[i].serviceType == "Mobile") {
 
 table_body += '<table class="header_tables" class="bundle_image_table"><tr><td class="header_column1 column1_bundle"><img class="service_icons" class="bundle_image" src="/res/images/custom/2627001/bundleimage.png"></td><td class="header_column2 column2_bundle" ><span class="bold_text">' + resp.bundles[i].productName + '</span><br></td></tr></table>';

 table_body += '<table class="charges_table" >';

 // }
 
 
 

 for (var j = 0; j < resp.bundles[i].charges.length; j++) {
 table_body += '<tr>';

 table_body += '<td class="column1" ><span>';
 var chargeName = "";
 if (resp.bundles[i].charges[j].description) {
 chargeName = resp.bundles[i].charges[j].description;
 
 }
 else {
 chargeName += resp.bundles[i].charges[j].chargeName;
 }
 table_body += chargeName;

 table_body += '<p></span><span id="bundle_button' + i + j + '">';
 table_body += '<a class="expand_button" onclick="$bg(&apos;#bundle_text' + i+ j + '&apos;).show();$bg(&apos;#bundle_button' + i+ j + '&apos;).hide();">see more</a></span><p>';

 table_body += '<div class="description_texts" id="bundle_text' + i + j + '"><p>';

 if (chargeName == "Advance Charges" || chargeName == "Advance Charge") {
 table_body += 'The monthly amount for your service is always charged in advance.<br>';
 try {
 table_body += 'This covers service for <span class="bold_text">' + getMonthFromDateString(resp.bundles[i].charges[j].startDate.substring(4,6)) + ' ' + resp.bundles[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.bundles[i].charges[j].endDate.substring(4,6)) + ' ' + resp.bundles[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Advance Charges");
 }
 }
 
 if (chargeName == "Third Party Charges" || chargeName == "Third Party Charge" || chargeName == "Third Party Purchases") {
 try {
 table_body += 'This covers service for <span class="bold_text">' + getMonthFromDateString(resp.bundles[i].charges[j].startDate.substring(4,6)) + ' ' + resp.bundles[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.bundles[i].charges[j].endDate.substring(4,6)) + ' ' + resp.bundles[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Third Party Charges");
 }
 }
 
 if (chargeName == "Credits & discounts" || chargeName == "Adjustments") {
 table_body += 'You changed your plan in this billing cycle and we&apos;re crediting the days you had paid in advance on a previous bill.<br> This credit covers dates: <br>';
 try {
 table_body += '<span class="bold_text">' + getMonthFromDateString(resp.services[i].charges[j].startDate.substring(4,6)) + ' ' + resp.services[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.services[i].charges[j].endDate.substring(4,6)) + ' ' + resp.services[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Third Party Charges");
 }
 }
 /*if (chargeName == "Other Charges") {
 table_body += 'Charges for ';
 for (var k = 0; k < resp.bundles[i].charges[j].lineItems.length; k++) {
 table_body += '<span class="bold_text">' + resp.bundles[i].charges[j].lineItems[k].description;
 //table_body += ' <span class="regular_text">for</span> $' + resp.bundles[i].charges[j].lineItems[k].amount.substring(1);
 if (k < resp.bundles[i].charges[j].lineItems.length - 2) {
 table_body += ', </span>';
 }
 else if (k == resp.bundles[i].charges[j].lineItems.length - 2) {
 table_body += ' <span class="regular_text">and</span> </span>';
 }
// table_body += '<br>';
 }
 
 }*/
 
 if (chargeName == "Other Charges") {
 //table_body += 'Charges for ';
 for (var k = 0; k < resp.bundles[i].charges[j].lineItems.length; k++) {
 try {
if (resp.bundles[i].charges[j].lineItems[k].amount.substring(0,1) == '-') {
 table_body += '<li>' + resp.bundles[i].charges[j].lineItems[k].description + ' (Credit $'+ resp.bundles[i].charges[j].lineItems[k].amount.substring(1)+ ')' +'</li>';
} else {
 table_body += '<li>' + resp.bundles[i].charges[j].lineItems[k].description + ' ($'+ resp.bundles[i].charges[j].lineItems[k].amount.substring(1)+ ')' +'</li>';
}
 } catch(err) {
 console.log("Error in other charges");
 }

// table_body += '<br>';
 }
 
 }
 
 if (chargeName == "Part Month Charges" || chargeName == "Part Month Charge") {
 table_body += 'The Part Month charge covers the date this service was added to the start of your next billing month.<br>';
 /*table_body += 'Your billing month starts on the' + ' of each month. <br>';*/
 try {
 table_body += 'This charge covers service for <span class="bold_text">' + getMonthFromDateString(resp.bundles[i].charges[j].startDate.substring(4,6)) + ' ' + resp.bundles[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.bundles[i].charges[j].endDate.substring(4,6)) + ' ' + resp.bundles[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Part Month Charges");
 }
 }
 
 if (chargeName == "Recurring Charges") {
 table_body += 'You purchased ';
 for (var k = 0; k < resp.bundles[i].charges[j].lineItems.length; k++) {
 table_body += '<span class="bold_text">' + resp.bundles[i].charges[j].lineItems[k].description;

 if (k < resp.bundles[i].charges[j].lineItems.length - 2) {
 table_body += ', </span>';
 }
 else if (k == resp.bundles[i].charges[j].lineItems.length - 2) {
 table_body += ' <span class="regular_text">and</span> </span>';
 }
 
// table_body += '<br>';
 }
 try {
 table_body += '<br><span class="regular_text">This charge covers service for </span><span class="bold_text">' + getMonthFromDateString(resp.bundles[i].charges[j].startDate.substring(4,6)) + ' ' + resp.bundles[i].charges[j].startDate.substring(6) + ' to ' + getMonthFromDateString(resp.bundles[i].charges[j].endDate.substring(4,6)) + ' ' + resp.bundles[i].charges[j].endDate.substring(6) + '.</span>';
 } catch(err) {
 console.log("Error in Recurring Charges");
 }
 
 }
 

 table_body += '</p><p><span><a class="collapse_button" style= "display:inline" onclick="$bg(&apos;#bundle_button' + i + j + '&apos;).show();$bg(&apos;#bundle_text' + i + j + '&apos;).hide();">see less</a></span><p>';
 table_body += '</div>';

 table_body += '</td>';
 table_body += '<td class="column2"><span class="price_data">';
 
 table_body += '$';
try {
 table_body += resp.bundles[i].charges[j].amount.substring(1);
 if (resp.bundles[i].charges[j].amount.charAt(0) == "-"){
 table_body += '<br>Credit';
 }
 } catch(err) {
 console.log("Error in displaying amount"); 
 }
 table_body += '</span></td>';

 table_body += '</tr>';
 }
 }
 
 //Account-level charges table
 
 if (resp.accountLevelCharges.length > 0) {
 table_body += '<table class="header_tables" class="mobile_image_table"><tr><td class="header_column1 column1_mobile" ><img class="service_icons" class="phone_image" src="/res/images/custom/2643002/accountimage.png"></td><td class="header_column2 column2_mobile" ><span class="bold_text">Account Charges</span><br><span class="mobile_number regular_text"></span></td></tr></table>';
 table_body += '<table class="charges_table mobile_service_table" >';
 
 for (var i = 0; i < resp.accountLevelCharges.length; i++) {

 //Adding the Mobile Service section
 table_body += '<tr>';

 table_body += '<td class="column1" ><span>';

table_body += resp.accountLevelCharges[i].description;

 table_body += '<p></span><span id="alc_button' + i + '">';
 table_body += '<a class="expand_button" onclick="$bg(&apos;#alc_text' + i + '&apos;).show();$bg(&apos;#alc_button' + i + '&apos;).hide();">see more</a></span><p>';

 table_body += '<div class="description_texts" id="alc_text' + i + '"><p>';
 
if (resp.accountLevelCharges[i].description == "Late Payment Fee" || resp.accountLevelCharges[i].description == "Mobile Contract Cancellation Service Adjustment" || resp.accountLevelCharges[i].description == "Previous Balance" ) {
if (resp.accountLevelCharges[i].additionalDescription) {
 table_body += resp.accountLevelCharges[i].additionalDescription;
 
}

 }
 table_body += '</p><p><span><a class="collapse_button" style= "display:inline" onclick="$bg(&apos;#alc_button' + i + '&apos;).show();$bg(&apos;#alc_text' + i + '&apos;).hide();">see less</a></span><p>';
 table_body += '</div>';

 table_body += '</td>';
 
 table_body += '<td class="column2"><span class="price_data">';
 
 table_body += '$';
 try {
 table_body += resp.accountLevelCharges[i].amount.substring(1);
 if (resp.accountLevelCharges[i].amount.charAt(0) == "-"){
 table_body += '<br>Credit';
 }
 } catch(err) {
 console.log("Error in displaying amount"); 
 }
 table_body += '</span></td>';
 table_body += '</tr>'; 
 } 
 }

 //Adding the total section
 table_body += '<tr class="total_row"><td class="column1"><span class="price_data bold_text">Total </span></td><td class="column2"><span class="price_data bold_text">$';
 
 try {
 table_body += '<span class="bold_text">' + resp.totalAmountDue.substring(1) + '</span>';
 if (resp.totalAmountDue.charAt(0) == "-"){
 table_body += '<br>Credit';
 }
 } catch(err) {
 console.log("Error in displaying total"); 
 }
 table_body += '</td></tr>';
 table_body += '</table>';

console.log(table_body);

 $bg('#tableProratedDiv').html(table_body);
 $bg('#tableProratedDiv').insertBefore('#button_div');
 $bg('.description_texts').hide();
 $bg('#tableProratedDiv').show();
 $bg('#banner').remove();


 $bg("#questionTab_1_group_1").insertAfter("#questionTab_1_group_6");
 $bg("#button_div").insertBefore("#questionTab_1_group_1");
 try {
if (resp.totalAmountDue.charAt(0) == '-') { 
$bg(".bill_total_in_desc").html('$' + resp.totalAmountDue.substring(1) + ' Credit'); 
} else {
 $bg(".bill_total_in_desc").html('$' + resp.totalAmountDue.substring(1));
}
 } catch(err) {
 console.log("Error in total amount due");
 }
 
 
 
 var date = "";
 var productUpdated = "";
 var updatedIndex = "";
 
 

 if (scenario == '1' || scenario == '2') {
 var phone_and_plans = "";
 /*for (var i = 0; i < resp.services.length; i++) {
 if (resp.services[i].deviceName) {
 phone_and_plans += '<span class="bold_text">' + resp.services[i].deviceName + '</span>';
 phone_and_plans += ' <span class="regular_text">and </span>';
 }
 phone_and_plans += '<span class="bold_text">' + resp.services[i].productName;
 if (i < resp.services.length - 1) {
 table_body += ', </span>';
 }
 //if (i != resp.services.length - 1) {
 //phone_and_plans += ' and ';
 //}
 }*/
 if (resp.services[0] && resp.services[0].deviceName) {
 phone_and_plans += '<span class="bold_text">' + resp.services[0].deviceName + '</span>';

 } else {
 phone_and_plans += 'device';
 }
 
 phone_and_plans += '<span class="regular_text"> and </span>';
 if (resp.services[0] && resp.services[0].productName) {
 phone_and_plans += '<span class="bold_text">' + resp.services[0].productName + '.</span>';

 } else {
 phone_and_plans += 'plan.';
 }
 
 $bg("#questionTab_1_group_2").show();
 $bg("#questionTab_1_group_6").show();
 $bg("#phone_and_plan").html(phone_and_plans);
 if (scenario == '1') {
 $bg("#bill_scenario_freq").html("first");
 } else {
 $bg("#bill_scenario_freq").html("second");
 $bg("#welcome_text").remove();
 }
 } else if (scenario == '3' || scenario == '4') {
 $bg("#questionTab_1_group_4").show();
 $bg("#questionTab_1_group_6").show();
 if (scenario == '3') {
 try {
 date = resp.services[resp.scenarios[0].updatedServicesIndex[0]-1].planChangeDate; 

 productUpdated = resp.services[resp.scenarios[0].updatedServicesIndex[0]-1].productName; 
 
 } catch(err) {
 console.log("Error in scenario desc");
 }
 }
 else if (scenario == '4' ) {
 try {
 date = resp.bundles[resp.scenarios[0].updatedBundlesIndex[0]-1].planChangeDate; 
 productUpdated = resp.bundles[resp.scenarios[0].updatedBundlesIndex[0]-1].productName; 
 } catch(err) {
 console.log("Error in scenario desc");
 }
 
 
 }
 try {
 $bg("#plan-changed2").html(date.substring(6) + ' ' + getMonthFromDateString(date.substring(4,6)) + ' ' + date.substring(0,4) );
 $bg("#plan-changed").html(productUpdated );
 } catch(err) {
 console.log("Error in change plan date");
 }
 } else if (scenario == '5' || scenario == '6') {
 $bg("#questionTab_1_group_3").show();
 $bg("#questionTab_1_group_6").show();

 if (scenario == '5' ) {
 
 try {
 date = resp.services[resp.scenarios[0].updatedServicesIndex[0]-1].planChangeDate; 
 } catch(err) {
 console.log("Error in scenario desc");
 }
 
 } else if (scenario == '6' ) {
 try {
 
 date = resp.bundles[resp.scenarios[0].updatedBundlesIndex[0]-1].planChangeDate; 
 
 } catch(err) {
 console.log("Error in scenario desc");
 
 }
 try {
 $bg("#plan-change-date").html(date.substring(6) + ' ' + getMonthFromDateString(date.substring(4,6)) + ' ' + date.substring(0,4) );
 } catch(err) {
 console.log("Error in change plan date");
 }
 }
 

 
 } else if (scenario == '7') {
 $bg("#questionTab_1_group_5").show();
 $bg("#questionTab_1_group_6").show();
 try {


 date = resp.services[resp.scenarios[0].updatedServicesIndex[0]-1].planChangeDate; 
 productUpdated = resp.services[resp.scenarios[0].updatedServicesIndex[0]-1].charges[0].lineItems[0].description; 
if (date && productUpdated ) {
 $bg("#charge_date7").html(date.substring(6) + ' ' + getMonthFromDateString(date.substring(4,6)) + ' ' + date.substring(0,4) );
 $bg("#charge_name7").html(productUpdated );
} else {
 
 $bg("#service_add_statement").hide(); 
}
 } catch(err) {
 $bg("#service_add_statement").hide(); 
 console.log("Error in scenario desc for scenario 7");
 }
 
 } else {
 
 $bg("#button_div").hide();
 $bg("#questionTab_1_group_1").show();
 }

 },

 onChangeQuestion_SI_89940: function(obj) {
 var service = "";
 var request = "";

 request = customJs.getInputText('QS_SI_89940');
 service = customJs.getInputText('QS_SI_58312');

 if (request == 'Late payment fee' || request == 'Excess data charges' || request == 'Excess call charges' || request == 'Early termination charges' || request == 'International roaming') {
 if (service == 'Landline' || service == 'Fixed internet or bundle' || service == 'Mobile' || service == 'Any 2 or more of the above') {
 $bg("#submitButton").show();
 $bg("#submitButton").html("Continue");
 customJs.setInput('QS_SI_64234', raa_defaultcac + ":" + raa_firstname + ":" + raa_lastname + ":" + customJs.getInputText('QS_SI_58312') + ":" + customJs.getInputText('QS_SI_89940') + ":" + tdi_mobileNumber + ":" + tdi_email);
 $bg("#submitButton").prop("onclick", null).off("click");
 userFunctions.submitToForm();
 } else {
 $bg("#submitButton").hide();
 }
 } else if (request == 'Service disruption or outages') {

 if (service == 'Landline' || service == 'Mobile') {
 $bg("#submitButton").show();
 $bg("#submitButton").html("Chat Now");
 $bg("#submitButton").prop("onclick", null).off("click");
 userFunctions.redirectToLiveChat();
 } else if (service == 'Fixed internet or bundle' || service == 'Any 2 or more of the above') {
 $bg("#submitButton").show();
 $bg("#submitButton").html("Continue");
 customJs.setInput('QS_SI_64234', raa_defaultcac + ":" + raa_firstname + ":" + raa_lastname + ":" + customJs.getInputText('QS_SI_58312') + ":" + customJs.getInputText('QS_SI_89940') + ":" + tdi_mobileNumber + ":" + tdi_email);
 $bg("#submitButton").prop("onclick", null).off("click");
 userFunctions.submitToForm();
 } else {
 $bg("#submitButton").hide();
 }
 } else if (request == 'Delayed connection/connection fees' ||
 request == 'Telstra supplied equipment' ||
 request == 'Promised credits by agents/Telstra' ||
 request == 'Third party charges' ||
 request == 'Other') {
 if (service == 'Landline' || service == 'Fixed internet or bundle' || service == 'Mobile' || service == 'Any 2 or more of the above') {
 $bg("#submitButton").show();
 $bg("#submitButton").html("Chat Now");
 $bg("#submitButton").prop("onclick", null).off("click");
 userFunctions.redirectToLiveChat();
 } else {
 $bg("#submitButton").hide();
 }
 } else {
 $bg("#submitButton").hide();
 }
 },

 onChangeQuestion_SI_58312: function(obj) {
 var service = "";
 var request = "";

 request = customJs.getInputText('QS_SI_89940');
 service = customJs.getInputText('QS_SI_58312');

 if (request == 'Late payment fee' || request == 'Excess data charges' || request == 'Excess call charges' || request == 'Early termination charges' || request == 'International roaming') {
 if (service == 'Landline' || service == 'Fixed internet or bundle' || service == 'Mobile' || service == 'Any 2 or more of the above') {
 $bg("#submitButton").show();
 $bg("#submitButton").html("Continue");
 customJs.setInput('QS_SI_64234', raa_defaultcac + ":" + raa_firstname + ":" + raa_lastname + ":" + customJs.getInputText('QS_SI_58312') + ":" + customJs.getInputText('QS_SI_89940') + ":" + tdi_mobileNumber + ":" + tdi_email);
 $bg("#submitButton").prop("onclick", null).off("click");
 userFunctions.submitToForm();
 } else {
 $bg("#submitButton").hide();
 }
 } else if (request == 'Service disruption or outages') {

 if (service == 'Landline' || service == 'Mobile') {
 $bg("#submitButton").show();
 $bg("#submitButton").html("Chat Now");
 $bg("#submitButton").prop("onclick", null).off("click");
 userFunctions.redirectToLiveChat();
 } else if (service == 'Fixed internet or bundle' || service == 'Any 2 or more of the above') {
 $bg("#submitButton").show();
 $bg("#submitButton").html("Continue");
 customJs.setInput('QS_SI_64234', raa_defaultcac + ":" + raa_firstname + ":" + raa_lastname + ":" + customJs.getInputText('QS_SI_58312') + ":" + customJs.getInputText('QS_SI_89940') + ":" + tdi_mobileNumber + ":" + tdi_email);
 $bg("#submitButton").prop("onclick", null).off("click");
 userFunctions.submitToForm();
 } else {
 $bg("#submitButton").hide();
 }
 } else if (request == 'Delayed connection/connection fees' ||
 request == 'Telstra supplied equipment' ||
 request == 'Promised credits by agents/Telstra' ||
 request == 'Third party charges' ||
 request == 'Other') {
 if (service == 'Landline' || service == 'Fixed internet or bundle' || service == 'Mobile' || service == 'Any 2 or more of the above') {
 $bg("#submitButton").show();
 $bg("#submitButton").html("Chat Now");
 $bg("#submitButton").prop("onclick", null).off("click");
 userFunctions.redirectToLiveChat();
 } else {
 $bg("#submitButton").hide();
 }
 } else {
 $bg("#submitButton").hide();
 }
 },

 //function for livechat popup window
 redirectToLiveChat: function() {
 $bg("#submitButton").on("click", function() {
 var service = "";
 var request = "";

 request = customJs.getInputText('QS_SI_89940');
 service = customJs.getInputText('QS_SI_58312');
 var cac = customJs.getInputText('QS_SI_10795');

 if (service == 'Mobile') {
 service = 'mobile';
 } else {
 service = 'fixed';
 }

 livePerson.show({
 isDirect: true,
 section: ["telstra", "consumer", "rebate", "dtq", service]
 });

 lpTag.sdes.push({
 "type": "service",
 "service": {
 "topic": "Credit Reason: " + request, // CREDIT REASON
 "serviceId": cac // CUSTOMER ACCOUNT NUMBER
 }
 });
 });
 },

 //add pvcs submit function to continue button
 submitToForm: function() {
 $bg("#submitButton").on("click", function() {
 pvsc.customer.submitForm();
 });
 },

 onLoadSuccessPage: function() {
 //import livechat page after submit
 $('head').append('<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, maximum-scale=1.0">');

 $.getScript('https://www.telstra.com.au/apps/liveperson/import.htm').done(function() {
 livePerson.init({
 section: ["telstra", "consumer", "rebate", "request-a-credit-details"],
 sourceSection: ["tcom"],
 onlyTcomCSS: true
 });
 });

 // $bg("#surveyTitleText").hide();
 var request = $("#QSI_SI_89940").text();

 //below code is to check whether billing account is eligible or not eligble for credits
 //then redirect it to the display page
 var policyDescription = "";
 var outcomeResult = "";
 var recommendedAction = "";

 var rreResponse = "";
 rreResponse = dsResponse;
 var splitData = rreResponse.split("{\"metadata");

 for (var x = 1; x < splitData.length; x++) {
 var data = splitData[x];
 var lastChar = data[data.length - 1];
 console.log(data.slice(0, -2));
 var trimData = data.slice(0, -2);

 policyDescription = trimData.match(new RegExp("policyDescription\":\"" + "(.*)" + "\",\"outcomeCode"));
 console.log("Policy Description: " + policyDescription[1]);

 if (request == 'Late payment fee' && policyDescription[1] == 'LPF') {
 outcomeResult = trimData.match(new RegExp("outcomeResult\":\"" + "(.*)" + "\",\"outcomeDescription"));
 recommendedAction = trimData.match(new RegExp("recommendedAction\":\"" + "(.*)" + "\"}"));
 outcomeResult = outcomeResult[1];
 recommendedAction = recommendedAction[1];
 break;
 }
 if (request == 'Service disruption or outages' && policyDescription[1] == 'Outages') {
 outcomeResult = trimData.match(new RegExp("outcomeResult\":\"" + "(.*)" + "\",\"outcomeDescription"));
 recommendedAction = trimData.match(new RegExp("recommendedAction\":\"" + "(.*)" + "\"}"));
 outcomeResult = outcomeResult[1];
 recommendedAction = recommendedAction[1];
 break;
 }

 if (request == 'Excess data charges' && policyDescription[1] == 'Excess Data') {
 outcomeResult = trimData.match(new RegExp("outcomeResult\":\"" + "(.*)" + "\",\"outcomeDescription"));
 recommendedAction = trimData.match(new RegExp("recommendedAction\":\"" + "(.*)" + "\"}"));
 outcomeResult = outcomeResult[1];
 recommendedAction = recommendedAction[1];
 break;
 }

 if (request == 'Excess call charges' && policyDescription[1] == 'Excess Call Usage') {
 outcomeResult = trimData.match(new RegExp("outcomeResult\":\"" + "(.*)" + "\",\"outcomeDescription"));
 recommendedAction = trimData.match(new RegExp("recommendedAction\":\"" + "(.*)" + "\"}"));
 outcomeResult = outcomeResult[1];
 recommendedAction = recommendedAction[1];
 break;
 }

 if (request == 'Early termination charges' && policyDescription[1] == 'Early Termination Charges') {
 outcomeResult = trimData.match(new RegExp("outcomeResult\":\"" + "(.*)" + "\",\"outcomeDescription"));
 recommendedAction = trimData.match(new RegExp("recommendedAction\":\"" + "(.*)" + "\"}"));
 outcomeResult = outcomeResult[1];
 recommendedAction = recommendedAction[1];
 break;
 }

 if (request == 'International roaming' && policyDescription[1] == 'International Roaming') {
 outcomeResult = trimData.match(new RegExp("outcomeResult\":\"" + "(.*)" + "\",\"outcomeDescription"));
 recommendedAction = trimData.match(new RegExp("recommendedAction\":\"" + "(.*)" + "\"}"));
 outcomeResult = outcomeResult[1];
 recommendedAction = recommendedAction[1];
 break;
 }
 }

 console.log("policyDescription: " + policyDescription[1]);
 console.log("outcomeResult: " + outcomeResult);
 console.log("recommendedAction: " + recommendedAction);

 if (request == 'Late payment fee' || request == 'Excess data charges' || request == 'Excess call charges' || request == 'Early termination charges' || request == 'International roaming') {
 if (outcomeResult == 1 || outcomeResult == '1' || outcomeResult == "1") {
 console.log(request + " Eligible");
 window.location.href = "/customer/general/forms/request-a-credit-app-yes?assocEid=" + formEntryId;
 } else {
 console.log("Non Eligible");
 window.location.href = "/customer/general/forms/request-a-credit-app-no?assocEid=" + formEntryId;
 }
 } else if (request == 'Service disruption or outages') {
 if (outcomeResult == 1 || outcomeResult == '1' || outcomeResult == "1" || recommendedAction == 2 || recommendedAction == '2' || recommendedAction == "2") {
 console.log("Outages Eligible");
 window.location.href = "/customer/general/forms/request-a-credit-app-yes?assocEid=" + formEntryId;
 } else {
 console.log("Outages Non Eligible");
 window.location.href = "/customer/general/forms/request-a-credit-app-no?assocEid=" + formEntryId;
 }
 }
 }};