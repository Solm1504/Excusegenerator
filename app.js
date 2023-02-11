const who = ["My husband🙋‍♂️", "My mom💁‍♀️", "My daughter👧", "My grandma👵"];    
const what = ["ate🍕", "cooked 🍲", "cried😭", "jumped🦘"];
const when = ["Yesterday👣","in the morning☀️", "when I was praying🙏", "before the show🎪"];

function generarexcusa (){
    const columnOnevalue = who[Math.floor(Math.random() * who.length)];
    const columnTwovalue = what[Math.floor(Math.random() * what.length)];
    const columnThreevalue = when[Math.floor(Math.random() * when.length)];
    alert(columnOnevalue +" " + columnTwovalue+ " " + columnThreevalue)}
