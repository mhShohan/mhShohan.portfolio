import asyncHandler from '../../lib/asyncHandler';
import STATUS from '../../lib/httpStatus';
import sendResponse from '../../lib/sendResponse';
import experienceServices from './experience.services';

class ExperienceControllers {
  private sendResponse = sendResponse;
  private STATUS = STATUS;
  private services = experienceServices;
  private messageTitle = 'Experience';

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
  readAll = asyncHandler(async (_req, res) => {
    const result = await this.services.readAll();

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Fetched Successfully`,
      data: result,
    });
  });
}

const experienceControllers = new ExperienceControllers();
export default experienceControllers;