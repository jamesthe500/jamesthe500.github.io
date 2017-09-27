
////// As this list changes, make certain that the length of A >= B >= C  ///////
var skillsLists = {
        "colA" : [
            "HTML5",
            "CSS3",
            "JavaScript",
            "C#",
            "jQuery",
            "Bootstrap"
        ],
        "colB" : [
            "MEAN Stack",
            "&nbsp;&nbsp;&bull;MongoDB",
            "&nbsp;&nbsp;&bull;Express.js",
            "&nbsp;&nbsp;&bull;AngularJS",
            "&nbsp;&nbsp;&bull;Node.js",
            "ASP.NET"
        ],
        "colC" : [
            "MySQL",
            "JSON",
            "APIs",
            "AJAX",
            "Arduino/C++",
            "Java"
        ],
        "colD" : [
            "Git",
            "GitHub",
            "Illustrator",
            "Photoshop",
            "&nbsp;&nbsp;&bull;Scripting JS",
            "Final Cut Pro X"
        ]
    };

$(document).ready(function(){

    for(i = 0 ; i < skillsLists.colA.length ; i++) {
        $("#skillList").append("<div class='skill colA col-xs-3'>" + skillsLists.colA[i] + "</div>");

        if (i >= skillsLists.colB.length){return;}
        $("#skillList").append("<div class='skill colB col-xs-3'>" + skillsLists.colB[i] + "</div>");

        if (i >= skillsLists.colC.length){return;}
        $("#skillList").append("<div class='skill colC col-xs-3'>" + skillsLists.colC[i] + "</div>");
        
        if (i >= skillsLists.colD.length){return;}
        $("#skillList").append("<div class='skill colD col-xs-3'>" + skillsLists.colD[i] + "</div>");
    }
}); //end of doc ready