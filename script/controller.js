class Controller {
  constructor() {
    this.model = new Model({
      onPostChanged: this.handelModelPostsChanged
    })

    this.view = new View({
      onNewPost: this.handleViewNewPost
    })

  }

  handelModelPostsChanged = (posts) => {
this.view.renderPosts(posts)
  }

  handleViewNewPost = (title, discription) => {
    this.model.addPost(title, discription)
  }
}