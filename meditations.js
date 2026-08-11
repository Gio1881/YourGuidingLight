// Your Guiding Light — meditation library content.
// Each item tuple: [title, description, scriptureRef, duration, audioStyle]
// Builder adds narrator (alternating), completed + support-label cadence.

const NARR = ['Male narrator', 'Female narrator'];

function build(items) {
  return items.map((it, i) => {
    const [title, desc, scripture, duration, audio] = it;
    return {
      title, desc, scripture, duration, audio,
      narrator: NARR[i % 2],
      completed: i % 5 === 1,
      label: i % 6 === 0 ? 'Donation-supported' : 'Free',
    };
  });
}