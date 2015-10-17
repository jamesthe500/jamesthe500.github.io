
////// As this list changes, make certain that the length of A >= B >= C  ///////
var skillsLists = {
        "colA" : [
            "HTML/CSS",
            "Javascript",
            "Git/GitHub",
            "jQuery",
            "Bootstrap",
            "Node.js"
        ],
        "colB" : [
            "GruntJS",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "APIs",
            "Express.js"
        ],
        "colC" : [
            "Jade",
            "AngularJS",
            "Angular Material",
            "D3",
            "Photoshop",
            "Illustrator"
        ]
    };

// todo put photoshop back in

$(document).ready(function(){

    for(i = 0 ; i < skillsLists.colA.length ; i++) {
        $("#skillList").append("<div class='colA col-xs-5'>" + skillsLists.colA[i] + "</div>");

        if (i >= skillsLists.colB.length){return;}
        $("#skillList").append("<div class='colB col-xs-3'>" + skillsLists.colB[i] + "</div>");

        if (i >= skillsLists.colC.length){return;}
        $("#skillList").append("<div class='colC col-xs-4'>" + skillsLists.colC[i] + "</div>");
    }
}); //end of doc ready