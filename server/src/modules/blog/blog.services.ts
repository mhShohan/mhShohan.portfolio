import Blog, { IBlog } from "./blog.model";

class BlogServices {
  private model = Blog;

  async create(payload: IBlog) {
    return this.model.create(payload);
  }

  async readAll() {
    return this.model.find();
  }

  async readSingle(id: string) {
    return this.model.findById(id);
  }
}

const blogServices = new BlogServices();
export default blogServices;