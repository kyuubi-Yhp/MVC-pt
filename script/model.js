class Model {
  constructor({ onPostChanged }) {
    this.posts = [];
    this.onPostChanged = onPostChanged
  }

  addPost(title, discription) {
    this.posts.push({
      title,
      discription
    })
    this.onPostChanged(this.posts)
  }

  getPosts() {
    return this.posts
  }
}
// class Model {
//   constructor() {
//     this.posts = []
//   }
// }