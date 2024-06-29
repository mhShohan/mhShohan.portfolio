import httpStatus from "http-status";
import CustomError from "../../errorHandler/customError";
import generateToken from "../../utils/generateToken";
import verifyPassword from "../../utils/verifyPassword";
import Profile, { IProfile } from "./profile.model";
import hashPassword from "../../utils/hashPassword";

class ProfileServices {
  private model = Profile;

  async create(payload: IProfile) {
    const hashedPassword = await hashPassword(payload.password);
    payload.password = hashedPassword

    return this.model.create(payload);
  }

  // update
  async update(payload: Partial<IProfile>) {
    const id = '667efc3a0f83a8bcab31e3dc'
    return this.model.findByIdAndUpdate(id, payload);
  }

  async self() {
    return this.model.findById('667efc3a0f83a8bcab31e3dc');
  }

  // login 
  async login(payload: { email: string; password: string }) {
    const user = await this.model.findOne({ email: payload.email });

    if (user) {
      await verifyPassword(payload.password, user.password);

      const token = generateToken({ _id: user._id, email: user.email });
      return { token };
    } else {
      throw new CustomError(httpStatus.BAD_REQUEST, 'WrongCredentials');
    }
  }
}

const profileServices = new ProfileServices();
export default profileServices;