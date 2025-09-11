var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Purpose",
  "body": "Purpose  This textbook is intended for collegiate pre-nursing students as a part of a two semester course in General, Organic, and Biological chemistry. The first ten chapters of this text is also appropriate for high school students as a first chemistry course and pairs with the Franciscan Advantage program in chemistry that is offered by Franciscan University of Steubenville.  I believe that this textbook is unique in that it pairs active-learning in chemistry with a Catholic-Christian understanding of science and chemistry. Active learning is an educational term that encompasses many different approaches, but importantly means that the student is actively engaged in learning rather than listening to lectures.  This textbook is divided into chapters. Each chapter is further divided into lessons (which are appropriate for a 50 min college class or perhaps several days worth of a high school class). Within each lesson are several sections, each of which teaches a different concept. The sections contain a text lesson, which should ideally be read by the student before class. Each section ends with several exercises which are designed to be completed during class, with the help of peers or the instructor. Studies have repeatedly shown that students learn better and retain knowledge better when they are actively engaged in learning new material rather than simply having it presented to them.  This text also aims to incorporate a Catholic-Christian understanding of science, philosophy, and ethics. The first chapter of the textbook focuses heavily on this, but there are additional places throughout the textbook where the relevance of the lesson to our faith and morals is discussed further.  To further aid in student learning, this textbook includes helpful online video instruction to accompany the various chapters and lessons in the textbook. These videos are freely available on YouTube, and teachers and students are encouraged to utilize them where they deem appropriate.  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Learning in an Active Classroom",
  "body": "Learning in an Active Classroom  This textbook is designed for use in an Active Learning environment. This may be different than other classes that you’re used to taking in that there is substantially less lecturing from your instructor and more emphasis on you learning by actively participating in the learning process. This requires that you listen and take notes when your instructor is teaching, just as you would in any class. Even more important, though, is that you complete all of the exercises in this text. These should be completed before you go on to the next section, since much of science builds upon prior knowledge and skills.  When completing the exercises, you should be aware of the following guidelines:   Always WRITE down your responses to each question and include any work. If you struggled with this problem, your work should include notes to help you remember how you solved the problem. Writing helps you commit your responses to memory and provides an invaluable study aid for quizzes and\/or exams.    If you are struggling with a problem, first ask your group for help. If your group cannot solve the problem, ask your instructor for help. Reaching out for help is an essential skill in an active learning environment and throughout life!    Always make sure to check your answer with the key in the textbook. Everyone makes mistakes! The only way to correct them is to know that you made a mistake in the first place.    If you get help, write down notes about the help you receive!    Do not skip or ignore any exercise problem. They are all there for a reason!    Don’t be afraid to struggle! There’s no shame in not understanding something. The real failure is if you give up.     In an active learning classroom group work is highly encouraged. Not only does it give you an opportunity to help others, but it strengthens learning by requiring you to be able to explain the concepts that you’re learning about. Also, if you are the one who is having to ask the questions, forming fraternal bonds with your classmates can help you through your struggles in a class and ensure that you always have multiple sources of help available to you. On the other hand, if you’re the one explaining a concept to a fellow group member, make sure that they understand what you are saying and be patient with them if they continue to struggle. It’s all too common to have a student respond “Oh I get it now” when they don’t fully grasp what you said. Don’t be afraid to struggle!  Group work can have pitfalls if you don’t utilize it properly. It’s the responsibility of each member of the group to contribute to the exercises, to ensure that they understand the material being covered, and to ensure that their fellow group members understand the material. If you don’t understand a concept, keep asking for help until you do. Don’t just rush through the exercises and assume that because the group got the answers right that you also understand the concept or how to solve the problem. Again, don’t be afraid to struggle!   Exercise: Learning in an active classroom     Write down the 6 guidelines to completing exercises in an active classroom. Why is each one of these guidelines important?    Introduce yourself to your group members (no need to write anything down for this one, unless you want to). Suggested information includes your name, hometown, major, hobbies, etc. You may find yourself in a different group from time-to-time. Always take time to introduce yourself to people who are new to you and to learn about them as well. If you’re completing this course on your own (ex. in a homeschool environment), make sure to find someone knowledgeable in chemistry who you can reach out to. Also you can always reach out to the author, Dr. James Vranish, by emailing him at jvranish@franciscan.edu .      "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
