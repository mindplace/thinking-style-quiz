var data = {
  "concreteSequential":
      ["Realistic", "Organized", "Getting to the point", "Practical", "Precise", "Orderly", "Perfectionist", "Hardworking", "Planner", "Memorize", "Wants direction",
      "Cautious", "Practicing", "Completing work", "Doing"],

  "abstractSequential":
      ["Analytical", "Critical", "Debating", "Academic", "Systematic", "Sensible", "Logical", "Intellectual", "Reader", "Think-through", "Judger", "Reasoning", "Examining", "Gaining ideas", "Thinking"],

  "abstractRandom":
      ["Imaginative", "Adaptable", "Relating", "Personal", "Flexible", "Sharing",     "Cooperative", "Sensitive", "People person", "Associate", "Spontaneous", "Communicating", "Caring", "Interpreting", "Feeling"],

  "concreteRandom":
      ["Investigative", "Inquisitive", "Creating", "Adventurous", "Inventive", "Independent", "Competitive", "Risk-taking", "Problem solver", "Original", "Changer", "Discovering", "Challenging", "Seeing possibilities", "Experimenting"]
}

var typeContent = {
  "Abstract Sequential":
    { id: "abstractSequential",
      parallax:
        "<div id='abstractSequential' class='image-container'><div class='inside-image-container'><div class='overflow-hidden'><div class='row center'><h1 class='header center black-text margin-top-15'>Abstract Sequential</h1></div></div></div></div>",

      content:
        "<div class='col s12 m12'><div class='icon-block'><h3 class='center'>Abstract Sequential</h3><p class='center'><a href='index.html#four-styles'>Discover the other types</a> | <a href='http://www.thelearningweb.net/personalthink.html'>TheLearningWeb</a> | <a href='http://www.floatingneutrinos.com/Message/arcs/links_on_abstractrandom.htm'>Floating Neutrinos</a></p><p class='light'>These individuals love the world of theory and abstract thought. They prefer to learn from lectures and reading. Although they are happy following traditional procedures, they prefer to be self-directed rather than be given directions. This is because this type is characterized by their impulse to make sense of structures for themselves. They tend to prefer to work alone and place a high emphasis on contextualizing their thoughts from wide-randing research. They prefer logical explanations and love praise best when it conveys a respect for their intellectual abilities.</p><p class='light'>They often struggle with expressing emotions, including socially accepted emotivity when working cooperatively in groups. They do, however, enjoy debating ideas and controversial issues with others, in part because they strive for intellectual recognition. They tend to not enjoy writing creatively, taking risks, or facing unpredictability. They do not really enjoy open-ended problems and can have difficulty with perfectionism.</p><p class='light'>This thinking style often reads avidly, gathering information and logically presented ideas and spending time analyzing what they learn. They need quiet, solitary environments where they can think and work.  THey like to learn just for the sake of learning, especially when that can be self-directed. They tend to think in a structured, logical, and organized way, and can fear appearing foolish or uninformed.</p></div></div>"},

  "Abstract Random":
    { id: "abstractRandom",
      parallax:
        "<div id='abstractRandom' class='image-container'><div class='inside-image-container'><div class='overflow-hidden'><div class='row center'><h1 class='header center black-text margin-top-15'>Abstract Random</h1></div></div></div></div>",
      content:
        "<div class='col s12 m12'><div class='icon-block'><h3 class='center'>Abstract Random</h3><p class='center'><a href='index.html#four-styles'>Discover the other types</a> | <a href='http://www.thelearningweb.net/personalthink.html'>TheLearningWeb</a> | <a href='http://www.floatingneutrinos.com/Message/arcs/links_on_abstractrandom.htm'>Floating Neutrinos</a></p><p class='light'>These thinkers organize information through reflection, and thrive in unstructured, people-oriented environments. They work well in groups and cooperatively with others, and can prefer this to the point where they might have difficulties working alone. When working with people, they need some sort of emotional involvement from others in order to get a complete picture of how they're working together. They can be extremely sensitive to his/her own and others’ feelings, making them the source of consideration and empathy in groups. More than 'dry' information, these types retain a focus on relationships.</p><p class='light'>Much more than other types, these types prefer assignments with room for interpretation. They enjoy the chance to balance social activities with work, and work best in a noncompetitive atmosphere. They enjoy when their learning is personalized, especially when they are given personal attention and emotional support. They dislike attending to details and giving exact answers, working within explicit time limits, and concentrating on one task at a time. Among other thinking styles, these types especially dislike being corrected.</p><p class='light'>These types particularly dislike routine procedures and orderliness. They're flexible, accepting and responding easily to change. They learn well through discussion and sharing of ideas, and bring their own, often thoroughly imaginative ideas. They personalize information, and are usually involved in many projects or interests at one time. More than other types, these types fear not being liked.</p></div></div>"},

  "Concrete Sequential":
      { id: "concreteSequential",
        parallax:
          "<div id='concreteSequential' class='image-container'><div class='inside-image-container'><div class='overflow-hidden'><div class='row center'><h1 class='header center black-text margin-top-15'>Concrete Sequential</h1></div></div></div></div>",
        content:
          "<div class='row'><div class='col s12 m12'><div class='icon-block'><h3 class='center'>Concrete Sequential</h3><p class='center'><a href='index.html#four-styles'>Discover the other types</a> | <a href='http://www.thelearningweb.net/personalthink.html'>TheLearningWeb</a> | <a href='http://www.floatingneutrinos.com/Message/arcs/links_on_abstractrandom.htm'>Floating Neutrinos</a></p><p class='light'>Individuals of this style tend to be based in reality. They process information in an ordered, sequential, linear way. These thinkers prefer order and quiet, exact directions and guided practice, and structured situations. They're trying to learn the accepted way of doing something. They need opportunities to apply their ideas in a practical, hands-on way. They prefer to be given approval for specific work that they've done.</p><p class='light'>They struggle with making choices without guidance or clarity on underlying structures already in place, so they have a hard time with open ended assignments and 'what if' questions. They don't do well when asked to deal with opposing views or figuring out non-standardized or new approaches. They don't like innterpreting abstract ideas, and have a hard time seeing the forest for the trees.</p><p class='light'>This thinking type is always 'busy', looking for constructive things to do, and can’t sit still for long. They're natural organizers who prefer to do things step by step. In an ideal world, they have legitimate directions to follow. They're natural editors who can take anything and make it better. And, because they see the world as a structured place where things can be correct or incorrect, they have a great fear of being wrong.</p></div></div>"},

  "Concrete Random":
      { id: "concreteRandom",
        parallax:
          "<div id='concreteRandom' class='image-container'><div class='inside-image-container'><div class='overflow-hidden'><div class='row center'><h1 class='header center black-text margin-top-15'>Concrete Random</h1></div></div></div></div>",
        content:
          "<div class='col s12 m12'><div class='icon-block'><h3 class='center'>Concrete Random</h3><p class='center'><a href='index.html#four-styles'>Discover the other types</a> | <a href='http://www.thelearningweb.net/personalthink.html'>TheLearningWeb</a> | <a href='http://www.floatingneutrinos.com/Message/arcs/links_on_abstractrandom.htm'>Floating Neutrinos</a></p><p class='light'>These thinkers are experimenters who most enjoy taking a trial and error approach. They need hands-on experiences to learn, and prefer open-ended activities like brainstorming. They most strive to produce real, but creative, products, and often take original and unique approaches to problem solving. Indeed, this style often seems driven to say or do things in a way others have not. They show original creativity with varied and unusual ideas, ofteh finding new possibilities and creating change as a natural state.</p><p class='light'>Often, this style struggles with pacing and meeting time limitations, or even completing projects rather than moving on to new ones. They often have multiple projects going at once. They dislike choosing one answer when more than one is appropriate or possible, and dislike prioritizing tasks. They don't do well when tasked with keeping detailed records, and often skips steps and details. Indeed, they're notorious for not reading directions or instructions. Most importantly, they struggle with accepting givens: accepting others' ideas without pointing out alternatives, accepting when change is impossible, accepting willful dependency on others' processes.</p><p class='light'>These thinkers are highly curious and can be counted on to find out-of-the-ordinary answers to problems. They're risk-takers who enjoy discovering his/her own way of doing things; they must test things for themselves. They can be extremely independent and competitive. They prefer to investigate and experiment; enjoys hands-on experimenting. More than other types, this type fears structure.</p></div></div>" }
}
