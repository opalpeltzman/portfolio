

    // document.getElementById("cv").onclick = function () {
    //     window.open("C:\Users\opalp\Documents\opalpeltzman\OPAL PELTZMAN CV.pdf");
    //     window.location.href = "C:\Users\opalp\Documents\opalpeltzman";
    //     document.getElementById('C:\Users\opalp\Documents\opalpeltzman\OPAL PELTZMAN CV.pdf').click();
    // };
  // Start file download. 
  document.getElementById("cv").addEventListener("click", function() { 
    // Generate download of hello.txt file with some content 
    var text = "OpalPeltzmanCV"; 
    var filename = "OpalPeltzmanCV.pdf"; 

    download(filename, text); 
}, false); 