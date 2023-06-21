import getPrismaInstance from "../utils/PrismaClient.js";

const prisma = getPrismaInstance();

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ msg: "Email is required.", status: false, data: null });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.json({ msg: "User not found.", status: false, data: null });
    }

    return res
      .status(200)
      .json({ msg: "User Found", status: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const onBoardUser = async (req, res, next) => {
  try {
    const { email, name, about, image: profilePicture } = req.body;
    if (!email || !name || !profilePicture) {
      return res.send({
        msg: "Email,Name and Profile picture is required.",
        status: false,
        data: null,
      });
    }

    const newUser = await prisma.user.create({
      data: { email, name, about, profilePicture },
    });

    return res.json({
      msg: "User has been created successfully.",
      status: true,
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};
