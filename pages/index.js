/** @format */

import { RiLoginCircleLine } from "react-icons/ri";
import { MdShareLocation } from "react-icons/md";
import Image from "next/image";

const Home = () => {
  const items = [
    {
      icon: <MdShareLocation size={55} color={"#626EE3"} />,
      text: "Live Tracking",
      description:
        "Track your Bicycle at any given point of time. If any suspicicious activty directly report us",
    },
    {
      icon: <MdShareLocation size={55} color={"#626EE3"} />,
      text: "Live Tracking",
      description:
        "Track your Bicycle at any given point of time. If any suspicicious activty directly report us",
    },
    {
      icon: <MdShareLocation size={55} color={"#626EE3"} />,
      text: "Live Tracking",
      description:
        "Track your Bicycle at any given point of time. If any suspicicious activty directly report us",
    },
    {
      icon: <MdShareLocation size={55} color={"#626EE3"} />,
      text: "Live Tracking",
      description:
        "Track your Bicycle at any given point of time. If any suspicicious activty directly report us",
    },
    {
      icon: <MdShareLocation size={55} color={"#626EE3"} />,
      text: "Live Tracking",
      description:
        "Track your Bicycle at any given point of time. If any suspicicious activty directly report us",
    },
    {
      icon: <MdShareLocation size={55} color={"#626EE3"} />,
      text: "Live Tracking",
      description:
        "Track your Bicycle at any given point of time. If any suspicicious activty directly report us",
    },
  ];
  const steps = [
    {
      number: 1,
      title: "Register your Cycle",
      description:
        "Fill up a small form with the details of the cycle incuding your price per hour, photos and other things",
    },
    {
      number: 2,
      title: "Get Requests for Borrowing",
      description:
        "People will send a borrow request if they are interested to borrow and you can either accept it or reject it",
    },
    {
      number: 3,
      title: "Keep Track of Cycle after allowing it to be borrowed",
      description:
        "Keep a Live Track of your cycle and also you can send message to the borrower in case of an emergency",
    },
    {
      number: 4,
      title: "Earn your Money",
      description:
        "After ride collect the amount of money mentioned in the application",
    },
  ];
  const borrowerSteps = [
    {
      number: 1,
      title: "Register your Cycle",
      description:
        "Fill up a small form with the details of the cycle incuding your price per hour, photos and other things",
    },
    {
      number: 2,
      title: "Get Requests for Borrowing",
      description:
        "People will send a borrow request if they are interested to borrow and you can either accept it or reject it",
    },
    {
      number: 3,
      title: "Keep Track of Cycle after allowing it to be borrowed",
      description:
        "Keep a Live Track of your cycle and also you can send message to the borrower in case of an emergency",
    },
    {
      number: 4,
      title: "Earn your Money",
      description:
        "After ride collect the amount of money mentioned in the application",
    },
  ];
  return (
    <>
      {/* HeroSection */}
      <div className='flex justify-around font-OpenSans'>
        <div className='flex justify-center items-center'>
          <div className='flex-col'>
            <div className='text-3xl font-Montserrat font-bold'>JazzBike</div>
            <div className='mt-4 text-xl'>
              Have you ever imagined to make money from your unused bicycles ?
            </div>
            <div className='my-2 text-xl'>
              Use JazzBike to make money from those unused cycles
            </div>
            <button className='mt-5 flex bg-purple-800 px-10 py-3 rounded-lg'>
              <RiLoginCircleLine size={25} color={"white"} />
              <span className='text-white text-xl ml-3'>Log In</span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src={"/HeroBikeRide.svg"}
            alt='bike logo'
            width={"450px"}
            height={"450px"}
          />
        </div>
      </div>
      {/* /HeroSection */}
      {/* Middle Section - Steps */}
      <div className='mt-3'>
        <h1 className='text-center font-Montserrat font-semibold text-3xl'>
          What is Jazzbike?
        </h1>
        <div className='my-4 text-center'>
          This is a C2C product that helps you lend your bicycle to a person.
          There are multiple features supported in this product
        </div>
        <div className='mx-32 flex justify-center flex-wrap'>
          {items.map((element, index) => (
            <div
              key={index}
              className='mr-24 w-64 p-4 my-4  border-2 border-gray-300 shadow-lg rounded-lg'>
              <div className='flex justify-center'>{element.icon}</div>
              <div className='text-center text-xl font-semibold text-gray-900 py-3'>
                {element.text}
              </div>
              <div className='text-center'>{element.description}</div>
            </div>
          ))}
        </div>
      </div>
      {/* /Middle Section  */}
      {/* Steps Section */}
      <div className='my-9'>
        <h1 className='text-3xl text-blue-800 text-center font-bold'>
          How to use it as Lender?
        </h1>
        <div className='flex mt-9 px-14'>
          <div>
            {steps.map((element, index) => (
              <div
                className='flex p-5 bg-purple-800 mb-6 w-5/6 rounded-lg text-white'
                key={index}>
                <div className='mr-5 text-2xl'>{element.number}</div>
                <div className='w-5/6'>
                  <div className='mb-2 text-xl font-bold'> {element.title}</div>
                  <div> {element.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={"/StepsSVG.svg"}
              alt='bike logo'
              width={"450px"}
              height={"450px"}
            />
          </div>
        </div>
      </div>
      <div className='my-9'>
        <h1 className='text-3xl text-blue-800 text-center font-bold'>
          How to use it as Borrower?
        </h1>
        <div className='flex justify-between mt-9 px-14'>
          <div>
            <Image
              src={"/StepsSVG.svg"}
              alt='bike logo'
              width={"450px"}
              height={"450px"}
            />
          </div>
          <div>
            {steps.map((element, index) => (
              <div
                className='flex p-5 bg-purple-800 mb-6 w-5/6 rounded-lg text-white'
                key={index}>
                <div className='mr-5 text-2xl'>{element.number}</div>
                <div className='w-5/6'>
                  <div className='mb-2 text-xl font-bold'> {element.title}</div>
                  <div> {element.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* /Steps Section */}
    </>
  );
};

export default Home;
