import asyncHandler from '../../lib/asyncHandler';
import STATUS from '../../lib/httpStatus';
import sendResponse from '../../lib/sendResponse';
import blogServices from './blog.services';

class BlogControllers {
  private sendResponse = sendResponse;
  private STATUS = STATUS;
  private services = blogServices;
  private messageTitle = 'Blog';

  // Create
  create = asyncHandler(async (req, res) => {
    const result = await this.services.create(req.body);

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.CREATED,
      message: `${this.messageTitle} Created Successfully`,
      data: result,
    });
  });

  // read all
  readAll = asyncHandler(async (req, res) => {
    const result = await this.services.readAll();

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Fetched Successfully`,
      data: result,
    });
  });

  // read all
  readSingle = asyncHandler(async (req, res) => {
    const result = await this.services.readSingle(req.params.id);

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Fetched Successfully`,
      data: result,
    });
  });
}

const blogControllers = new BlogControllers();
export default blogControllers;