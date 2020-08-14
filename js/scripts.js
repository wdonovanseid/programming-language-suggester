function add(num1, num2) {
  return num1 + num2;
}


$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const answer1 = $("select#ques1").val();
    const answer2 = $("select#ques2").val();
    const answer3 = $("select#ques3").val();
    const answer4 = $("select#ques4").val();
    const answer5 = $("select#ques5").val();

    let rubytotal = 0;
    let csharptotal = 0;
    let pythontotal = 0;

    if (answer1 === "ruby") {
      rubytotal = add(rubytotal, 1);
    } else if (answer1 === "c#") {
      csharptotal = add(csharptotal, 1);
    } else if (answer1 === "python") {
      pythontotal = add(pythontotal, 1);
    }

    if (rubytotal > csharptotal && rubytotal > pythontotal) {
      $("#pLanguage").text("Ruby on Rails");
    } else if (csharptotal > rubytotal && csharptotal > pythontotal) {
      $("#pLanguage").text("C#");
    } else if (pythontotal > rubytotal && pythontotal > csharptotal) {
      $("#pLanguage").text("Python");
    } else if (rubytotal === csharptotal && csharptotal === pythontotal) {
      $("#pLanguage").text("ANY")
    }

    $("#result").show();
  });
});