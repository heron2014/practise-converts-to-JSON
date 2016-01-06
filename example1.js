var string = "BEGIN:VCARD\nVERSION:2.1\nN:Gump;Forrest\nFN:Forrest Gump\nTITLE:Shrimp Man\nORG:Bubba Gump Shrimp Co.\nEMAIL;INTERNET:forrestgump@example.com\nEND:VCARD\nBEGIN:VCARD\nVERSION:2.1\nN:Vader;Darth\nFN:Darth Vader\nTITLE:Hero\nORG:Star Wars Co.\nEMAIL;INTERNET:darfvader@example.com\nEND:VCARD\nBEGIN:VCARD\nVERSION:2.1\nN:Jones;Tom\nFN:Tom Jones\nTITLE:Singer\nORG:Sinder Co.\nEMAIL;INTERNET:tomjones@example.com\nEND:VCARD";

var arr = string.split('BEGIN:VCARD');

arr.shift();

var myobj = []

arr.forEach(function (i) {
    
    var n = i.split('\n');
    
   
 
    var obj = {};
    
    n.forEach(function(w) {
       
       if (w.indexOf('FN') === 0) {
           obj.name = w.split(':')[1];
           
       }
       
       if (w.indexOf('TITLE') === 0) {
           obj.title = w.split(':')[1];
       }
       if (w.indexOf('ORG') === 0) {
           obj.org = w.split(':')[1];
       }
       if (w.indexOf('EMAIL') === 0) {
           obj.email = w.split(':')[1];
       }
      
       
    })
    
    console.log(obj)
    myobj.push(obj)
})



console.log(myobj);