import sleep from './Sleep';

export default async function fetchDataInterval(m) {
  // eslint-disable-next-line
  while (true) {
    try {
      // eslint-disable-next-line
      await m.fetchData();
    } catch (err) {
      // eslint-disable-next-line
      console.error(`Cannot fetch ${m.url}`, err);
    }

    // eslint-disable-next-line
    await sleep(5000);
  }
}
