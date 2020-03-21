import fetch from 'isomorphic-unfetch';

const projects = [
  'facebook/flipper',
  'vuejs/vuepress',
  'rust-lang/rust',
  'zeit/next.js',
];

export default (req, res) => {
  setTimeout(() => {
    res.json(projects);
  }, 2000);
};
