export class TodoList {
  tasks = [];

  add(task) {
    this.tasks.push({ task, done: false });
  }

  complete(index) {
    if (this.tasks[index]) {
      this.tasks[index].done = true;
    }
  }

  list() {
    return this.tasks
      .map(
        (t, i) => `${i + 1}. [${t.done ? 'x' : ' '}] ${t.task}`
      )
      .join('\n');
  }
}
