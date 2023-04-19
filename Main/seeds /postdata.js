const { Post } = require("../models");

const postData = [
  {
    title: "The new guy makes the tea",
    content:
      "Its an unwritten rule, universal regardless of your location on this planet.  If youre new to the team, you are on tea duty till the next newbie comes along.",
    user_id: 1,
  },
  {
    title: "Its ok to say no to your boss",
    content:
      "We all have felt the pressure to help out at work when there are staff shortages, deadlines, etc.  Most of us will have heard those loathsome words 'its for the good of the company', 'do it for your team-mates', 'we cant let the customer down'. To be honest, i dont care.  Im going home, I have fulfilled my working hour obligation and I owe you no more.  You do not have to explain to anyone why you cant stay behind to work and we need to stop shaming people in to working beyond their finish times.  ",
    user_id: 2,
  },
  {
    title: "Eating at your desk",
    content:
      "Unless there is no canteen, there is no need to eat at your desk.  Many desks are shared and I for one do not wish to navigate my keyboard around your coranation chicken sandwich crumbs.  Its un-hygenic and un-professional.  Please do stop!",
    user_id: 3,
  },
  {
    title: "Staff Training",
    content:
      "Staff training is an absolute essential in the work-place.  I have worked with colleagues who had only received the very basic training to carry out their job.  This resulted in many mistakes on their end, often being reprimanded by a manager through no fault of their own.  It also placed un-due pressure on their collegues to come to their aid, often having to leave their desks in order to help out.  Many employers are reluctant to schedule in regular training as it means work hours will be lost.  however, many, many more are lost due to the lack of traing.",
    user_id: 4,
  },
  {
    title: "Take five and breathe",
    content:
      "If I found myself in a position where I was not able to focus, I would tell my manager I needed the loo.  I would then take myself off in any direction but the loo and have a wonder about the building.  If it was a pleasant day, I would hang outside and smoke till I felt a calming wave washing over me.  I would then spray myself with perfume I always carry with myself, to disguise the smell of my cigarettes.  My male managers would never ask me why it had taken me so long, well its not polite to ask us ladies.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;