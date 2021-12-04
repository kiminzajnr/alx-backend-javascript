export default function handleResponseFromAPI(promise) {
  const myPromise = promise;
  myPromise.then(() => ({
    status: 200,
    body: 'success',
  }));
  myPromise.catch(() => new Error());
  myPromise.finally(() => console.log('Got a response from the API'));
  return myPromise;
}
