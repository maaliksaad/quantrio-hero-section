import React from "react";
import Button from "../subComponents/Button";
import Card from "../subComponents/Card";
import IconBackground from "../subComponents/IconBackground";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
} from "../subComponents/Icons";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center w-full p-8 sm:p-0 h-auto sm:h-[611px] ">
      <div className=" flex flex-col sm:flex-row p-6 sm:p-24 sm:gap-36 items-center w-full sm:w-[1280px] h-auto sm:h-[575px] rounded-lg sm:rounded-[60px] bg-secondary">
        <div className="flex flex-col gap-4 sm:gap-8 w-full sm:w-[23.4375rem]">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight sm:leading-[56px]">
            Business Communications Reinvented
          </h1>
          <p className="w-full sm:w-[19rem]">
            Start communicating with your business team more efficiently with
            our app.
          </p>
          <Button text="Get the app" outline />
        </div>

        <div className="hidden sm:block">
          <Card className="w-[21.875rem] h-[6.25rem] flex relative top-[33.75rem] right-10">
            <Icon1 />
            <div className="flex flex-col justify-center items-start ">
              <div className="font-bold leading-[1.3125rem]">
                Uploading Document
              </div>
              <div className="text-xs leading-[1.3125rem]">7,09/ 108,98 GB</div>
            </div>
          </Card>

          <Card className="h-[6.25rem] w-[21.875rem] flex relative top-[35rem] left-[16.75rem]">
            <IconBackground notificaton noticationNumber={2}>
              <div className=" text-lg font-bold">AB</div>
            </IconBackground>

            <div className="inline-flex justify-center items-start gap-9 h-[2.8125rem]">
              <div className="flex flex-col justify-center items-start ">
                <div className="font-bold">Anna Brooks</div>
                <div className="text-xs ">Hi, how are you doing today?</div>
              </div>
              <div className="opacity-75 text-[10px]">2:09 PM</div>
            </div>
          </Card>

          <Card className="flex h-[6.25rem] w-[21.875rem] relative top-[37.75rem] left-[25rem]">
            <IconBackground>
              <Icon2 />
            </IconBackground>
            <div className="flex flex-col justify-center items-start h-[2.8125rem]">
              <div className=" font-bold">Message Saved</div>
              <div className=" text-xs">
                You have successfully saved this message
              </div>
            </div>
          </Card>

          <Card className="h-[6.25rem] w-[21.875rem] flex relative right-10 top-[35.25rem] ">
            <IconBackground notificaton noticationNumber={3}>
              <div className=" text-lg font-bold">JS</div>
            </IconBackground>

            <div className="inline-flex justify-center items-start gap-9 h-[2.8125rem]">
              <div className="flex flex-col justify-center items-start ">
                <div className="font-bold">John Smith</div>
                <div className="text-xs ">
                  Hello, are you available for a pro…
                </div>
              </div>
              <div className="opacity-75 text-[10px]">11:02 AM</div>
            </div>
          </Card>

          <Card className="w-[8.125rem] h-40 relative left-[23rem] top-20">
            <Icon3 />
            <div className="inline-flex justify-center items-center py-6 pl-2 h-[0.8125rem]  text-[10px] ">
              1,73/ 2.09 GB
            </div>
          </Card>

          <div className="relative right-44 bottom-64">
            <Icon4 />
          </div>

          <div className="relative left-60 bottom-28">
            <Icon5 />
          </div>

          <Card className="relative w-[17.25rem] h-40 right-10 bottom-[36.25rem]">
            <div className="flex gap-4">
              <Icon6 />
              <div className="inline-flex flex-col justify-center items-start">
                <div className=" font-bold ">Team Meeting</div>
                <div className=" text-xs ">2:30 PM 15 Apr 2020</div>
              </div>
            </div>
            <div className="flex pt-8 ">
              <div className="border-2 border-white min-w-8 min-h-8 bg-secondary rounded-full flex justify-center items-center">
                <div className=" text-[10px] font-bold ">JM</div>
              </div>
              <div className="border-2 border-white right-[10px] min-w-8 min-h-8 relative bg-secondary rounded-full flex justify-center items-center ">
                <div className="text-[10px] font-bold">AC</div>
              </div>
              <div className="border-2 border-white right-[20px] min-w-8 min-h-8 relative bg-secondary rounded-full flex justify-center items-center">
                <div className=" text-[10px] font-bold ">KD</div>
              </div>
              <div className="border-2 border-white right-[30px] min-w-8 min-h-8 relative bg-secondary rounded-full flex justify-center items-center">
                <div className=" text-[10px] font-bold ">+8</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
