import asyncHandler from '../../lib/asyncHandler';
import STATUS from '../../lib/httpStatus';
import sendResponse from '../../lib/sendResponse';
import technologyServices from './technology.services';

class TechnologyControllers {
  private sendResponse = sendResponse;
  private STATUS = STATUS;
  private services = technologyServices;
  private messageTitle = 'Technology';

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
  readAll = asyncHandler(async (req, res) => {
    const result = await this.services.readAll();

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Fetched Successfully`,
      data: result,
    });
  });
}

const technologyControllers = new TechnologyControllers();
export default technologyControllers;