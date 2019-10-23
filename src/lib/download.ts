import gitDownload from 'download-git-repo';

export default function download(path, dist) {
  return new Promise((resolve, reject) => {
    gitDownload(path, dist, { clone: true }, (err) => {
      if(err) {
        return reject(err);
      }
      resolve({
        dist
      });
    });
  })
}