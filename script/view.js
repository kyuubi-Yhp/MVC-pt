class View {
  constructor({ onNewPost}) {
    this.postsNode = document.querySelector('#post__lenta')
    this.titleInpiutNode = document.querySelector('#title__input')
    this.discriptionInpiutNode = document.querySelector('#discription__input')
    this.btnNode = document.querySelector('#add__post-btn')

    this.onNewPost = onNewPost

    this.btnNode.addEventListener('click', this.handleBtnClick)
  }

  renderPosts(posts) {
    this.postsNode.innerHTML = ''

    posts.forEach(post => {
      this.postsNode.innerHTML += `
      <div>
        <p>${post.title}</p>
        <p>${post.discription}</p>
      </div>
      `
    });
  }

  handleBtnClick = () => {
    const title = this.titleInpiutNode.value
    const discription = this.discriptionInpiutNode.value

    this.onNewPost(title, discription)

    console.log(title, discription)
  }
}