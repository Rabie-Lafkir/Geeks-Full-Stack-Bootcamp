/*
Outcome:
1. Logs 'calling' immediately.
2. After ~2 s logs 'resolved'.
   The await pauses execution until the promise from resolveAfter2Seconds settles.
*/
function resolveAfter2Seconds() {
  return new Promise(res => setTimeout(() => res('resolved'), 2000));
}
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}
asyncCall();
