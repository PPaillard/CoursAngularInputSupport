export class Post {
  text: string
  urlImage: string
  author: string

  constructor(textPost: string, urlImagePost: string, authorPost: string){
    this.text = textPost
    this.urlImage = urlImagePost
    this.author = authorPost
  }
}
