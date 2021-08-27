// Back some good vibes

const vibes = [
  '...and you ROCK!',
  '...try to Dream Every Day',
  '...your hard work is paying off',
  '...I love your smile! Do, Do, Do, Do, Do, Do, Do, Do, Do.',
  '...and you got this, bro!',
  '...enjoy the beach today!',
  '...have fun with the family',
]

// Choose a random good vibe
let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

// Display a good vibe
document.querySelector('.vibe').append(vibe)
