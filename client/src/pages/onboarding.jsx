import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function onboarding() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState("");
  const [{ userInfo, newUser }, dispatch] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || "");
  const [image, setImage] = useState("/default_avatar.png");

  const onBoradUserHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(ONBOARD_USER_ROUTE, {
        email: userInfo?.email,
        name,
        about,
        image,
      });

      if (data.status && data.data) {
        console.log(data);
        dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
        dispatch({
          type: reducerCases.SET_USER_INFO,
          userInfo: {
            name,
            email: userInfo?.email,
            profileImage: image,
            status: about,
          },
        });
        setLoading(false);
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      console.log("Error is coming : ", error.message);
    }
  };

  useEffect(() => {
    if (!newUser && !userInfo?.email) {
      router.push("/login");
    } else if (!newUser && userInfo?.email) {
      router.push("/");
    }
  }, [userInfo, newUser, router]);

  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image src={"/whatsapp.gif"} width={300} height={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <h2 className="text-2xl">Create your profile</h2>
      <div className="flex gap-6 mt-6 ">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          <Input
            name={"Dispaly Name"}
            state={name}
            setState={setName}
            label={true}
          />
          <Input
            name={"About"}
            state={about}
            setState={setAbout}
            label={true}
          />
          <div className="flex items-center justify-center">
            <button
              onClick={onBoradUserHandler}
              disabled={loading}
              className="flex items-center justify-center gap-5 bg-search-input-container-background p-4 rounded-lg font-[600] text-[20px] hover:bg-opacity-[0.6]"
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type={"xl"} image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
