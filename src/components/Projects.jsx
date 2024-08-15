import React from "react";
import {
  ArrowDown,
  Pencil,
  Box,
  ChartLine,
  Sparkles,
  CircleUserRound,
  Users,
} from "lucide-react";
import nuclear from "../assets/images/nuclear.png";
import oneone from "../assets/images/oneone.jpg";
import onetwo from "../assets/images/onetwo.jpg";
import onethree from "../assets/images/onethree.jpg";
import vr from "../assets/images/vr.png";
import twoone from "../assets/images/twoone.jpg";
import twotwo from "../assets/images/twotwo.jpg";
import twothree from "../assets/images/twothree.jpg";
import threeone from "../assets/images/threeone.jpg";
import threetwo from "../assets/images/threetwo.jpg";
import threethree from "../assets/images/threethree.jpg";
import computing from "../assets/images/computing.png";
import midjourney from "../assets/images/midjourney.png";

const Projects = () => {
  return (
    <div className="flex flex-col  min-h-[900px] justify-center items-center ">
      <div className="animate-bounce ">
        <ArrowDown size={40} />
      </div>
      <div className="w-[540px] h-[420px] rounded-[50px] hover:border hover:border-t-4 hover:border-white hover:duration-300 hover:bg-gray-100">
        <div className="flex p-2">
          <img src={nuclear} className="w-[60px] gap-9"></img>
          <p className="text-xl font-semibold mt-6">
            Nuclear Fusion Reactor - 2017-2020
          </p>
        </div>
        <div className="flex gap-2 pl-[60px]">
          <div className="w-[110px] h-[35px] flex gap-2  bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <Pencil size={16} className="mt-1" /> Research
            </div>
          </div>
          <div className="w-[113px] h-[35px] flex gap-2  bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <Box size={18} className="mt-1" /> Hardware
            </div>
          </div>
        </div>
        <div class="flex h-[285px] p-8 py-1">
          <div class="bg-[#e5e5e5] w-0.5"></div>
          <div class="pl-[40px]">
            <div className="flex flex-row gap-[120px] relative min-h-[300px] drop-shadow-2xl relative justify-center items-center ">
              <img
                src={oneone}
                className=" w-[120px]  h-[140px] mt-5 rounded-[30px] drop-shadow-2xl  hover:rotate-6 rotate-270"
              ></img>
              <img
                src={onetwo}
                className="w-[200px] absolute z-10 rounded-[20px] mt-[120px] hover:rotate-6"
              ></img>
              <img
                src={onethree}
                className="w-[170px] h-[160px] rounded-[20px] rotate-6 hover:rotate-270"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[540px] h-[435px] rounded-[50px] hover:border hover:border-t-4 hover:border-white  hover:duration-300 hover:bg-gray-100">
        <div className="flex p-4 ">
          <img src={vr} className="w-[60px] gap-9"></img>
          <p className="text-xl font-semibold mt-2">
            Virtual Reality - 2022-2023
          </p>
        </div>
        <div className="flex gap-2 pl-[60px]">
          <div className="w-[110px] h-[35px] flex gap-2  bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <Pencil size={16} className="mt-1" /> Research
            </div>
          </div>
          <div className="w-[113px] h-[35px] flex gap-2  bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <Box size={18} className="mt-1" /> Hardware
            </div>
          </div>
        </div>
        <div class="flex h-[285px] p-8 py-1">
          <div class="bg-[#e5e5e5] w-0.5"></div>
          <div class="pl-[50px]">
            <div className="flex flex-row min-h-[230px] relative justify-center items-center drop-shadow-2xl">
              <img
                src={twoone}
                className=" w-[120px] h-[160px] mt-5 rounded-[30px] rotate-3 hover:rotate-270"
              ></img>
              <img
                src={twotwo}
                className="w-[150px] h-[240px] rounded-[20px] mt-12  hover:rotate-6 rotate-270"
              ></img>
              <img
                src={twothree}
                className="w-[120px] h-[160px] rounded-[20px] rotate-2 hover:rotate-270"
              ></img>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-[540px] h-[420px] rounded-[50px] hover:border hover:border-t-4 hover:border-white  hover:duration-300 hover:bg-gray-100">
        <div className="flex py-4">
          <img src={computing} className="w-[60px] gap-9"></img>
          <p className="text-xl font-semibold mt-2">
            Contextual Computing - 2023-2024
          </p>
        </div>
        <div className="flex gap-2 pl-[60px]">
          <div className="w-[100px] h-[35px] bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <ChartLine size={16} className="mt-1" /> StartUp
            </div>
          </div>
          <div className="w-[110px] h-[35px] bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <CircleUserRound size={18} className="mt-1" /> Founder
            </div>
          </div>
          <div className="w-[113px] h-[35px] flex gap-2  bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <Box size={18} className="mt-1" /> Hardware
            </div>
          </div>
          <div className="w-[50px] h-[35px] bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-1 ">
              <Sparkles size={18} className="mt-1" /> AI
            </div>
          </div>
        </div>
        <div class="flex h-[290px] p-8 py-1">
          <div class="bg-[#e5e5e5] w-0.5"></div>
          <div class="pl-[40px]">
            <div className="flex flex-row gap-[220px] min-h-[200px] drop-shadow-2xl relative justify-center items-center ">
              <img
                src={threeone}
                className=" w-[130px]  h-[120px] mt-[150px] rounded-[30px] rotate-6 hover:rotate-270"
              ></img>
              <img
                src={threetwo}
                className="w-[250px] absolute z-0 rounded-[20px]  hover:rotate-6"
              ></img>
              <img
                src={threethree}
                className="w-[110px] abolute z-10 h-[110px] rounded-[20px] mt-[150px] hover:rotate-6 rotate-270"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[540px] h-[400px] rounded-[50px] ">
        <div className="flex ">
          <img src={midjourney} className="w-[60px] gap-9"></img>
          <p className="text-xl font-semibold mt-2">Midjourney - 2024</p>
        </div>
        <div className="flex gap-2 pl-[60px]">
          <div className="w-[100px] h-[35px] bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <ChartLine size={16} className="mt-1" /> StartUp
            </div>
          </div>
          <div className="w-[120px] h-[35px] bg-[#d9d9d9] rounded-full text-center text-[#7d7d7d] font-semibold">
            <div className="mx-2 flex py-1 gap-2 ">
              <Users size={16} className="mt-1" /> Employees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
