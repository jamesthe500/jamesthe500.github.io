
////// As this list changes, make certain that the length of A >= B >= C  ///////
var skillsLists = {
        "colA" : [
            "HTML5/CSS3",
            "SASS",
            "Jade",
            "JavaScript",
            "Git/GitHub",
            "Bootstrap",
            "PHP"
        ],
        "colB" : [
            "GruntJS",
            "MongoDB",
            "MySQL",
            "APIs",
            "Express.js",
            "Node.js",
            "D3"
        ],
        "colC" : [
            "AngularJS",
            "jQuery",
            "JSON",
            "AJAX",
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Final Cut Pro"
        ]
    };

$(document).ready(function(){

    for(i = 0 ; i < skillsLists.colA.length ; i++) {
        $("#skillList").append("<div class='colA col-xs-5'>" + skillsLists.colA[i] + "</div>");

        if (i >= skillsLists.colB.length){return;}
        $("#skillList").append("<div class='colB col-xs-3'>" + skillsLists.colB[i] + "</div>");

        if (i >= skillsLists.colC.length){return;}
        $("#skillList").append("<div class='colC col-xs-4'>" + skillsLists.colC[i] + "</div>");
    }
}); //end of doc ready