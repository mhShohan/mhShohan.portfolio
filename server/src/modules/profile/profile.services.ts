import httpStatus from "http-status";
import CustomError from "../../errorHandler/customError";
import generateToken from "../../utils/generateToken";
import verifyPassword from "../../utils/verifyPassword";
import Profile, { IProfile } from "./profile.model";
import hashPassword from "../../utils/hashPassword";
import { ITechnology } from "../technology/technology.model";
import mongoose from "mongoose";
import Blog from "../blog/blog.model";
import Project from "../project/project.model";

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
    const { techStacks, socialLinks, expertiseStack, ...restPayload } = payload

    const modifiedPayload: Record<string, unknown> = { ...restPayload }

    if (socialLinks && Object.keys(socialLinks).length) {
      for (const [key, value] of Object.entries(socialLinks)) {
        modifiedPayload[`socialLinks.${key}`] = value;
      }
    }

    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      // update technology stack
      // ------------------------------------------------------------------------
      if (techStacks) {
        const { backend, databases, frontend, languages, tools } = techStacks

        const separate = (path: ITechnology[]) => {
          if (!path) return { add: [], remove: [] }

          const add = path.filter((item: ITechnology) => !item.isDeleted)
          const remove = path.filter((item: ITechnology) => item.isDeleted)

          return { add, remove }
        }

        // add tech stacks
        const addTechStacks = {
          backend: separate(backend as ITechnology[]).add,
          databases: separate(databases as ITechnology[]).add,
          frontend: separate(frontend as ITechnology[]).add,
          languages: separate(languages as ITechnology[]).add,
          tools: separate(tools as ITechnology[]).add,
        }

        await this.model.findByIdAndUpdate(id,
          {
            $addToSet: {
              'techStacks.backend': { $each: addTechStacks.backend },
              'techStacks.databases': { $each: addTechStacks.databases },
              'techStacks.frontend': { $each: addTechStacks.frontend },
              'techStacks.languages': { $each: addTechStacks.languages },
              'techStacks.tools': { $each: addTechStacks.tools },
            }
          }
          , {
            session,
            new: true,
          })

        /// remove tech stacks
        const removeTechStacks = {
          backend: separate(backend as ITechnology[]).remove.map((item) => item.name),
          databases: separate(databases as ITechnology[]).remove.map((item) => item.name),
          frontend: separate(frontend as ITechnology[]).remove.map((item) => item.name),
          languages: separate(languages as ITechnology[]).remove.map((item) => item.name),
          tools: separate(tools as ITechnology[]).remove.map((item) => item.name),
        }

        await this.model.findByIdAndUpdate(id,
          {
            $pull: {
              'techStacks.databases': { name: { $in: removeTechStacks.databases } },
              'techStacks.backend': { name: { $in: removeTechStacks.backend } },
              'techStacks.frontend': { name: { $in: removeTechStacks.frontend } },
              'techStacks.languages': { name: { $in: removeTechStacks.languages } },
              'techStacks.tools': { name: { $in: removeTechStacks.tools } },
            }
          },
          {
            session, new: true, multi: true
          })
      }


      // update expertise stack
      // ------------------------------------------------------------------------
      if (expertiseStack) {
        const { expertise, comfortable, familiar } = expertiseStack

        const separate = (path: ITechnology[]) => {
          if (!path) return { add: [], remove: [] }

          const add = path.filter((item: ITechnology) => !item.isDeleted)
          const remove = path.filter((item: ITechnology) => item.isDeleted)

          return { add, remove }
        }

        // add expertise stacks
        const addExpertiseStacks = {
          expertise: separate(expertise as ITechnology[]).add,
          comfortable: separate(comfortable as ITechnology[]).add,
          familiar: separate(familiar as ITechnology[]).add,
        }

        await this.model.findByIdAndUpdate(id,
          {
            $addToSet: {
              'expertiseStack.expertise': { $each: addExpertiseStacks.expertise },
              'expertiseStack.comfortable': { $each: addExpertiseStacks.comfortable },
              'expertiseStack.familiar': { $each: addExpertiseStacks.familiar },
            }
          }
          , {
            session,
            new: true,
          })

        /// remove expertise stacks
        const removeExpertiseStacks = {
          expertise: separate(expertise as ITechnology[]).remove.map((item) => item.name),
          comfortable: separate(comfortable as ITechnology[]).remove.map((item) => item.name),
          familiar: separate(familiar as ITechnology[]).remove.map((item) => item.name)
        }

        await this.model.findByIdAndUpdate(id,
          {
            $pull: {
              'expertiseStack.expertise': { name: { $in: removeExpertiseStacks.expertise } },
              'expertiseStack.comfortable': { name: { $in: removeExpertiseStacks.comfortable } },
              'expertiseStack.familiar': { name: { $in: removeExpertiseStacks.familiar } },
            }
          },
          {
            session, new: true, multi: true
          })
      }

      const profile = await this.model.findByIdAndUpdate(id, modifiedPayload, {
        session,
        new: true,
        runValidators: true,
      })

      await session.commitTransaction();


      return profile;

    } catch (error) {
      await session.abortTransaction();
    } finally {
      await session.endSession();
    }

  }

  async self() {
    return this.model.findById('667efc3a0f83a8bcab31e3dc');
  }

  async analysis() {
    const blogCount = await Blog.countDocuments();
    const projectCount = await Project.countDocuments();

    return { blogCount, projectCount };
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