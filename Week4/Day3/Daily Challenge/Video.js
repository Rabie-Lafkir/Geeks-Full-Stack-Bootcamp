class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; // seconds
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

// Two sample instances
const vid1 = new Video('Intro to OOP', 'Alice', 300);
vid1.watch();

const vid2 = new Video('Advanced JavaScript Patterns', 'Bob', 750);
vid2.watch();

// Bonus: batch‑create 5 videos from data
const videoData = [
  { title: 'CSS Grid Tutorial', uploader: 'Chris', time: 420 },
  { title: 'React Hooks in Depth', uploader: 'Dana', time: 900 },
  { title: 'Node.js Streams', uploader: 'Evan', time: 660 },
  { title: 'Python for Beginners', uploader: 'Fay', time: 540 },
  { title: 'Docker Essentials', uploader: 'Gus', time: 720 }
];

const videos = videoData.map(({ title, uploader, time }) => new Video(title, uploader, time));

videos.forEach(v => v.watch());
