/* THIS FILE IS UPDATED BY A REMOTE SCRIPT. */
/* ANY CHANGES MADE TO THIS FILE WILL BE LOST IN A FUTURE UPDATE. */

// set css property --scrollbar-width that provides width of the scrollbar globally
document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");

// set css properties for dark-fill transparency globally
var body_style = getComputedStyle(document.body);
var dark_fill = body_style.getPropertyValue('--dark-fill');
document.documentElement.style.setProperty('--dark-fill-10', dark_fill + "10");
document.documentElement.style.setProperty('--dark-fill-20', dark_fill + "20");
document.documentElement.style.setProperty('--dark-fill-30', dark_fill + "30");
document.documentElement.style.setProperty('--dark-fill-40', dark_fill + "40");
document.documentElement.style.setProperty('--dark-fill-50', dark_fill + "50");
document.documentElement.style.setProperty('--dark-fill-60', dark_fill + "60");
document.documentElement.style.setProperty('--dark-fill-70', dark_fill + "70");
document.documentElement.style.setProperty('--dark-fill-80', dark_fill + "80");
document.documentElement.style.setProperty('--dark-fill-90', dark_fill + "90");

// set css properties for alt-fill transparency globally
var body_style = getComputedStyle(document.body);
var alt_fill = body_style.getPropertyValue('--alt-fill');
document.documentElement.style.setProperty('--alt-fill-10', alt_fill + "10");
document.documentElement.style.setProperty('--alt-fill-20', alt_fill + "20");
document.documentElement.style.setProperty('--alt-fill-30', alt_fill + "30");
document.documentElement.style.setProperty('--alt-fill-40', alt_fill + "40");
document.documentElement.style.setProperty('--alt-fill-50', alt_fill + "50");
document.documentElement.style.setProperty('--alt-fill-60', alt_fill + "60");
document.documentElement.style.setProperty('--alt-fill-70', alt_fill + "70");
document.documentElement.style.setProperty('--alt-fill-80', alt_fill + "80");
document.documentElement.style.setProperty('--alt-fill-90', alt_fill + "90");

function classScroll(url,class_name,y_offset){
  if (url == window.location.pathname) {
    if(typeof y_offset !== 'undefined') {
      var y = document.getElementsByClassName(class_name)[0].getBoundingClientRect().top + window.pageYOffset + y_offset;
      window.scrollTo({top: y, behavior: 'smooth'});
    } else {
      document.getElementsByClassName(class_name)[0].scrollIntoView({behavior:'smooth'});
    }
  } else {
    location.href = url;
  }
}

function imgswap(img,ref){
  if (document.images) {
        document.images[img].src = ref;
  }
}

function _CloseOnEsc() {
  if (event.keyCode == 27) { window.returnValue=false; window.close(); }
}

function changeStyle(nodeObj, newStyle) {
  var attrMax = nodeObj.attributes.length
  for (var j=0; j<attrMax; j++) {
    if (nodeObj.attributes.item(j).nodeName == 'class') {
      nodeObj.attributes.item(j).nodeValue = newStyle;
    }
  }
}

if (typeof toggleSubNav !== 'function') {
  function toggleSubNav(mid){
    var mydiv = document.getElementById("div_subsection_" + mid).style.display;
    /*
    var i;
    var element = document.getElementsByTagName("div");
    var l = element.length;
    for(i=0;i<l;i++){
      if(element[i].hasAttribute('id')){
        if(element[i].getAttribute('id').substring(0,15) == 'div_subsection_') element[i].style.display = "none";
      }
    }
    var i;
    var element2 = document.getElementsByTagName("img");
    var l = element2.length;
    for(i=0;i<l;i++){
      if(element2[i].hasAttribute('id')){
        if(element2[i].getAttribute('id').substring(0,20) == 'button_toggleSubNav_') element2[i].src = "images/arrow_expand.gif";
      }
    }
    */
    if (mydiv == "none") {
      document.getElementById("div_subsection_" + mid).style.display = "block";
      //document.getElementById("button_toggleSubNav_" + mid).src = "images/arrow_collapse.gif";
      document.getElementById("button_toggleSubNav_" + mid).classList = "fa fa-minus";
    } else {
      document.getElementById("div_subsection_" + mid).style.display = "none";
      //document.getElementById("button_toggleSubNav_" + mid).src = "images/arrow_expand.gif";
      document.getElementById("button_toggleSubNav_" + mid).classList = "fa fa-plus";
    }
  }
}

function popUp() {
  var popLeft = (screen.availWidth - popUp.arguments[1]) / 2;
  var popTop = (screen.availHeight - popUp.arguments[2]) / 2;
  if (this.popUpWindow != null) {
    this.popUpWindow.close();
  }
  this.popUpWindow = window.open(
    popUp.arguments[0],
    "",
    "toolbar=no," +
    "location=no," +
    "directories=no," +
    "status=no," +
    "menubar=no," +
    "personalbar=no," +
    "scrollbars=" + popUp.arguments[3] + "," +
    "titlebar=yes," +
    "resizable=no," +
    "left=" + popLeft + "," +
    "top=" + popTop + "," +
    "width=" + popUp.arguments[1] + "," +
    "height=" + popUp.arguments[2]
  );
  return false;
}

function YCDT_preloadImages() {
  if(!document.YCDT_img)
    document.YCDT_img = new Array();
  var argNum, numImg=document.YCDT_img.length;
  for(argNum=0; argNum<YCDT_preloadImages.arguments.length; argNum++) {
    document.YCDT_img[numImg] = new Image();
    document.YCDT_img[numImg++].src = YCDT_preloadImages.arguments[argNum];
  }
}

function YCDT_swapImages() {
  document.YCDT_swap = new Array();
  var i , numImg=0;
  for(i=0; i<(YCDT_swapImages.arguments.length-1); i+=2, numImg++) {
    document.YCDT_swap[numImg] = YCDT_swapImages.arguments[i];
    document.YCDT_swap[numImg].oSrc = document.YCDT_swap[numImg].src;
    document.YCDT_swap[numImg].src = YCDT_swapImages.arguments[i+1];
  }
}

function YCDT_restoreImages() {
  var i;
  for(i=0; i<document.YCDT_swap.length; i++)
    document.YCDT_swap[i].src = document.YCDT_swap[i].oSrc;
}

function YCDT_swapImages2() {
  document.YCDT_swap2 = new Array();
  document.YCDT_swap2[0] = document.YCDT_swap[0];
  document.YCDT_swap3 = new Image();
  document.YCDT_swap3.src = document.YCDT_swap[0].oSrc;
  document.YCDT_swap[0].oSrc = YCDT_swapImages2.arguments[1];
}

function YCDT_restoreImages2() {
  if(!document.YCDT_swap2)
    return;
  document.YCDT_swap2[0].src = document.YCDT_swap3.src;
  document.YCDT_swap2[0].oSrc = document.YCDT_swap3.src;
}


function trim(myString) {
// myString     : any string
// RETURN VALUE : myString with all beginning and ending whitespace removed

   myString = myString.replace(/^[\s]+/g,"");
   myString = myString.replace(/[\s]+$/g,"");

  return myString;
}


function checkPostalCode(myPC, isRequired) {
// myPC         : Canadian Postal Code
// isRequired   : 1=yes, 0=no
// RETURN VALUE : empty string on valid postal code, text message on invalid postal code

  if (myPC == "") {
    if (isRequired == 1) {
      return "Postal Code is required.";
    } else {
      return "";
    }
  }

  if ((myPC.length < 6) || (myPC.length > 7)) {
    return "Postal Code must contain 6 characters.";
  }

  if (/([DFIOQU])/.test(myPC)) {
    return "Postal Code contains an invalid character.";
  }

  if (/^([WZ])/.test(myPC)) {
    return "Postal Code syntax is incorrect.";
  }

  if (/^([A-Z]{1}\d[A-Z]{1})( |-)?(\d[A-Z]{1}\d)$/.test(myPC)) {
    return "";
  }

  return "Postal Code syntax is incorrect.";
}


function checkPhone(myPhone, myExtension, myName, isRequired) {
// myPhone      : phone number
// myExtension  : optional extension number, up to 4 digits
// myName       : optional name for the myPhone field, used for returning messages
// isRequired   : 1=yes, 0=no (this only checks if myPhone is required; myExtension is always optional)
// RETURN VALUE : empty string on valid phone number, text message on invalid phone number

  if (myName == "") { myName = "The phone number"; }

  myPhone = trim(myPhone);
  myExtension = trim(myExtension);

  if (myPhone == "") {
    if (isRequired == 1)        { return myName + " is required."; }
    else if (myExtension != "") { return myName + " Extension can't be specified if " + myName + " is not specified."; }
    else                        { return ""; }
  }

  myPhone = myPhone.replace(/^(\d{3})[ \-=\.]*(\d{4})$/, "$1$2");
  myPhone = myPhone.replace(/^[ (]*(\d{3})[ \-=\.)]*(\d{3})[ \-=\.]*(\d{4})$/, "$1$2$3");
  myPhone = myPhone.replace(/^[ (]*1[ \-=\.(]*(\d{3})[ \-=\.)]*(\d{3})[ \-=\.]*(\d{4})$/, "$1$2$3");

  if (myPhone.length == 7) { return "Please specify the area code for " + myName + "."; }
  if (myPhone.length != 10) { return myName + " syntax is incorrect.  Ten digits (including the area code) are required."; }
  if (!myPhone.match(/^(\d)+$/)) { return myName + " syntax is incorrect."; }

  if (myExtension != "") {
    if (myExtension.length > 4) { return myName + " Extension can't contain more than 4 digits."; }
    if (!myExtension.match(/^(\d)+$/)) { return myName + " Extension syntax is incorrect.  It can only contain numerical digits."; }
  }

  return "";
}


function checkEmail(myEmail, myName, isRequired) {
// myEmail      : e-mail address
// myName       : optional name for the myEmail field, used for returning messages
// isRequired   : 1=yes, 0=no
// RETURN VALUE : empty string on valid e-mail, text message on invalid e-mail syntax

  if (myName.length < 1) {
    myName = "The e-mail address";
  }

  if (myEmail == "") {
    if (isRequired == 1) {
      return myName + " is required.";
    } else {
      return "";
    }
  }

/*
  // regular expression source: http://www.breakingpar.com/bkp/home.nsf/Doc!OpenNavigator&87256B280015193F87256C40004CC8C6
  if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(myEmail))) {
    return myName + " syntax is incorrect.";
  }
*/

  // regular expression source: http://www.hexillion.com/samples/
  // Matches a limited version of the RFC 2822 addr-spec form.
  if (!(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/.test(myEmail))) {
    return myName + " syntax is incorrect.";
  }

  return "";
}


function checkText(myText, myName, minLength, maxLength) {
// myText       : some text string to perform a check
// myName       : optional name for the myText field, used for returning messages
// minLength    : non-negative integer (0 means myText can be empty string)
// maxLength    : integer (0 means myText must be empty string, -1 means myText has no max length)
// RETURN VALUE : empty string on valid text, text message on invalid text

  if (myName.length < 1) {
    myName = "The text";
  }

  if (myText == "") {
    if (minLength > 0) {
      return myName + " is required.";
    } else {
      return "";
    }
  }

  if (myText.length < minLength) {
    return myName + " must contain at least " + minLength + " characters.";
  }

  if ((maxLength >= 0) && (myText.length > maxLength)) {
    return myName + " cannot contain more than " + maxLength + " characters.";
  }

  return "";
}


function checkUserID(myUserID, myName, minLength, maxLength) {
// myUserID     : username to perform a check
// myName       : optional name for the myUserID field, used for returning messages
// minLength    : non-negative integer (0 means myUserID can be empty string)
// maxLength    : integer (0 means myUserID must be empty string, -1 means myUserID has no max length)
// RETURN VALUE : empty string on valid username, text message on invalid username

  if (myName.length < 1) {
    myName = "The Username";
  }

  if (myUserID == "") {
    if (minLength > 0) {
      return myName + " is required.";
    } else {
      return "";
    }
  }

  if (myUserID.length < minLength) {
    return myName + " must contain at least " + minLength + " characters.";
  }

  if ((maxLength >= 0) && (myUserID.length > maxLength)) {
    return myName + " cannot contain more than " + maxLength + " characters.";
  }

  if (/^(([a-z]|\d)*)$/.test(myUserID)) {
    return "";
  }

  return myName + " syntax is incorrect.  It can only contain alphanumeric characters.";
}


function checkPassword(myPassword, myName, minLength, maxLength) {
// myPassword   : password to perform a check
// myName       : optional name for the myPassword field, used for returning messages
// minLength    : non-negative integer (0 means myPassword can be empty string)
// maxLength    : integer (0 means myPassword must be empty string, -1 means myPassword has no max length)
// RETURN VALUE : empty string on valid password, text message on invalid password

  if (myName.length < 1) {
    myName = "The Password";
  }

  if (myPassword == "") {
    if (minLength > 0) {
      return myName + " is required.";
    } else {
      return "";
    }
  }

  if (myPassword.length < minLength) {
    return myName + " must contain at least " + minLength + " characters.";
  }

  if ((maxLength >= 0) && (myPassword.length > maxLength)) {
    return myName + " cannot contain more than " + maxLength + " characters.";
  }

  if (/^(([a-z]|\d)*)$/.test(myPassword)) {
    return "";
  }

  return myName + " syntax is incorrect.  It can only contain alphanumeric characters.";
}


function isUnsignedInteger(myInteger) {
// myInteger    : string representation of an integer
// RETURN VALUE : true on valid integer, false on invalid integer

  if (/^(\d)+$/.test(myInteger)) {
    return true;
  }
  return false;
}


function isDate(myMonth, myDay, myYear) {
// myMonth      : month (1-12)
// myDay        : date of the month (1-31)
// myYear       : 4-digit year
// RETURN VALUE : true on valid date, false on invalid date


  if (!isUnsignedInteger(myMonth)) return false;
  if ((myMonth < 1) || (myMonth > 12)) return false;

  if (!isUnsignedInteger(myDay)) return false;
  if ((myDay < 1) || (myDay > 31)) return false;

  if (!isUnsignedInteger(myYear)) return false;
  if ((myYear < 1000) || (myYear > 9999)) return false;

  if (myMonth == 2) {
    // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    if ((myYear % 4 == 0) && ((!(myYear % 100 == 0)) || (myYear % 400 == 0))) {
      // leap year
      if (myDay > 29) return false;
    } else {
      // not a leap year
      if (myDay > 28) return false;
    }
  }

  if ((myMonth == 4) || (myMonth == 6) || (myMonth == 9) || (myMonth == 11)) {
    if (myDay > 30) return false;
  }

  return true;
}

function translateBadChars(myString) {
// myString     : string to check for bad chars (i.e. MS-Word special characters)
// RETURN VALUE : updated string

  myString = myString.replace(/’/g,"'");
  myString = myString.replace(/‘/g,"'");
  myString = myString.replace(/“/g,'"');
  myString = myString.replace(/”/g,'"');
  myString = myString.replace(/…/g,"...");
  myString = myString.replace(/–/g,"-");
  myString = myString.replace(/—/g,"-");
  myString = myString.replace(/Œ/g,"Oe");
  myString = myString.replace(/œ/g,"oe");

  return myString;
}

function getPostData(myForm) {
// myForm       : form from which POST data will be extracted
// RETURN VALUE : URL encoded string of POST data

  var postData = '';
  for (e=0; e<myForm.elements.length; e++) {
    if (myForm.elements[e].name != '') {
      if (((myForm.elements[e].type.toLowerCase() == "radio") || (myForm.elements[e].type.toLowerCase() == "checkbox")) && (!myForm.elements[e].checked)) {
        continue;
      }
      postData += (postData == '') ? '' : '&';
      // plus signs would have been interpreted as space characters, as JavaScript's escape() function doesn't encode it, so we encode it ourselves
      postData += escape(myForm.elements[e].name).replace(/\+/g,"%2B") + '=' + escape(translateBadChars(myForm.elements[e].value)).replace(/\+/g,"%2B");
    }
  }
//alert(postData);
  return postData;
}

function createXMLHttpRequest() {
   try { return new XMLHttpRequest(); } catch(e) {}
   try { return new ActiveXObject("MSXML2.XMLHTTP.5.0"); } catch (e) {}
   try { return new ActiveXObject("MSXML2.XMLHTTP.4.0"); } catch (e) {}
   try { return new ActiveXObject("MSXML2.XMLHTTP.3.0"); } catch (e) {}
   try { return new ActiveXObject("MSXML2.XMLHTTP"); } catch (e) {}
   try { return new ActiveXObject("MICROSOFT.XMLHTTP.1.0"); } catch (e) {}
   try { return new ActiveXObject("MICROSOFT.XMLHTTP.1"); } catch (e) {}
   try { return new ActiveXObject("MICROSOFT.XMLHTTP"); } catch (e) {}
   return null;
}

function sendRequestAsynch(myPostData, serverScript) {
// myPostData   : URL encoded string of POST data to send to server
// serverScript : location of required scripts
// RETURN VALUE : response from server, or error message

  // Check if serverScript is set
  if (serverScript.length < 1) {
    return "Error: serverScript not specified.";
  }

  var xmlhttp = createXMLHttpRequest();
  if (xmlhttp == null) {
    return "Error: XMLHttpRequest is not supported by your browser.";
  }

  if (window.ActiveXObject) { // IE
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          getRequestAsynchResponse(xmlhttp.responseText);
        } else {
          getRequestAsynchResponse("Error: Incorrect server response (" + xmlhttp.status + " - " + xmlhttp.statusText + ").");
        }
      }
    }
  } else { // Mozilla
    xmlhttp.addEventListener("load", function() {
      if (xmlhttp.status == 200) {
        getRequestAsynchResponse(xmlhttp.responseText);
      } else {
        getRequestAsynchResponse("Error: Incorrect server response (" + xmlhttp.status + " - " + xmlhttp.statusText + ").");
      }
    }, false);
  }

  xmlhttp.open('POST', serverScript, true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.setRequestHeader('Connection', 'close'); // without this header, the connection hangs every now and then, at least in IE 6
  try {
    xmlhttp.send(myPostData);
  } catch(e) {
    return "Error: Data not sent to server due to a connection problem.";
  }

  return "OK";
}

function saveData(myPostData, mySection) {
// myPostData   : URL encoded string of POST data to send to server
// mySection    : keyword determining which part of the database we are updating
// RETURN VALUE : response from server, or error message

  var serverScript = "";
  if      (mySection == 'public_users')                { serverScript = 'public_update.php'; }
  else    { return "Error: Section not specified."; }

  var xmlhttp = createXMLHttpRequest();
  if (xmlhttp == null) {
    return "Error: XMLHttpRequest is not supported by your browser.";
  }

  xmlhttp.open('POST', serverScript, false);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.setRequestHeader('Connection', 'close'); // without this header, the connection hangs every now and then, at least in IE 6
  try {
    xmlhttp.send(myPostData);
  } catch(e) {
    return "Error: Data not sent to server due to a connection problem.";
  }

  if (xmlhttp.status != 200) {
    return "Error: Incorrect server response (" + xmlhttp.status + " - " + xmlhttp.statusText + ").";
  }

  return xmlhttp.responseText;
}

function YCDT_Submit(myPostData, serverScript) {
// NEW function - April 29, 2015
// This function replaces the use of "saveData"

// myPostData   : URL encoded string of POST data to send to server
// serverScript : location of required scripts
// RETURN VALUE : response from server, or error message

  // Check if serverScript is set
  if (serverScript.length < 1) {
    return "Error: serverScript not specified.";
  }

  //******************//
  // Leave rest as is //
  //******************//

  var xmlhttp = createXMLHttpRequest();
  if (xmlhttp == null) {
    return "Error: XMLHttpRequest is not supported by your browser.";
  }

  xmlhttp.open('POST', serverScript, false);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.setRequestHeader('Connection', 'close'); // without this header, the connection hangs every now and then, at least in IE 6
  try {
    xmlhttp.send(myPostData);
  } catch(e) {
    return "Error: Data not sent to server due to a connection problem.";
  }

  if (xmlhttp.status != 200) {
    return "Error: Incorrect server response (" + xmlhttp.status + " - " + xmlhttp.statusText + ").";
  }

  return xmlhttp.responseText;
}

function validateLabelOptionsForm() {
  var status = "";
  status = checkText(document.getElementById("label_start_position").value, "Start Position", 1, 2);
  if (status != "") {
    document.getElementById("label_start_position").focus();
    alert(status);
    return false;
  }
  document.myLabelOptionsForm.submit();
  return false;
}

function addElement(parentId, elementTag, elementId, html) {
  // Adds an element to the document
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute('id', elementId);
  newElement.style.paddingBottom = '5px';
  newElement.innerHTML = html;
  p.appendChild(newElement);
}

function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}