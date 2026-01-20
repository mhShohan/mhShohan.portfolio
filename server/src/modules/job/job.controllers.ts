import asyncHandler from '../../lib/asyncHandler';
import STATUS from '../../lib/httpStatus';
import sendResponse from '../../lib/sendResponse';
import jobServices from './job.services';

class JobControllers {
  private sendResponse = sendResponse;
  private STATUS = STATUS;
  private services = jobServices;
  private messageTitle = 'Job';

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
    const result = await this.services.readAll(req.query);

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

  // delete one
  deleteOne = asyncHandler(async (req, res) => {
    const result = await this.services.deleteOne(req.params.id);

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Deleted Successfully`,
      data: result,
    });
  });

  // update one
  updateOne = asyncHandler(async (req, res) => {
    const result = await this.services.updateOne(req.params.id, req.body);

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Updated Successfully`,
      data: result,
    });
  });
}

const jobControllers = new JobControllers();
export default jobControllers;
