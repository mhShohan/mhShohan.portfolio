import asyncHandler from '../../lib/asyncHandler';
import STATUS from '../../lib/httpStatus';
import sendResponse from '../../lib/sendResponse';
import projectServices from './project.services';

class ProjectControllers {
  private sendResponse = sendResponse;
  private STATUS = STATUS;
  private services = projectServices;
  private messageTitle = 'Project';

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

  // Create
  update = asyncHandler(async (req, res) => {
    const result = await this.services.update(req.params.id, req.body);

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.CREATED,
      message: `${this.messageTitle} Updated Successfully`,
      data: result,
    });
  });

  // read All
  readAll = asyncHandler(async (_req, res) => {
    const result = await this.services.readAll();

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Fetched Successfully`,
      data: result,
    });
  });

  // read One
  readOne = asyncHandler(async (req, res) => {
    const result = await this.services.readOne(req.params.id);

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Fetched Successfully`,
      data: result,
    });
  });
}

const projectControllers = new ProjectControllers();
export default projectControllers;