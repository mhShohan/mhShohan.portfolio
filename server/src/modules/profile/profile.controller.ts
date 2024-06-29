import asyncHandler from '../../lib/asyncHandler';
import STATUS from '../../lib/httpStatus';
import sendResponse from '../../lib/sendResponse';
import profileServices from './profile.services';

class ProfileControllers {
  private sendResponse = sendResponse;
  private STATUS = STATUS;
  private services = profileServices;
  private messageTitle = 'Profile';

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

  // login
  login = asyncHandler(async (req, res) => {
    const result = await this.services.login(req.body);

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Login Successfully`,
      data: result,
    });
  });

  self = asyncHandler(async (_req, res) => {
    const result = await this.services.self();

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Fetched Successfully`,
      data: result,
    });
  });

  // update
  update = asyncHandler(async (req, res) => {
    const result = await this.services.update(req.body);

    this.sendResponse(res, {
      success: true,
      statusCode: this.STATUS.OK,
      message: `${this.messageTitle} Updated Successfully`,
      data: result,
    });
  });
}

const profileControllers = new ProfileControllers();
export default profileControllers;