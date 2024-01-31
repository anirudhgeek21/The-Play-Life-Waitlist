import React, { useState } from 'react';

const ContactComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [refferal, setRefferal] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, age, email, refferal };
      const response = await fetch('http://localhost:8000/regs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      window.location = '/';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-[-4%] md:mt-40 bg-fixed w-full md:w-3/4 lg:w-1/2 xl:w-1/2 h-[800px] md:h-[900px] bg-cover m-auto bg-center bg-gradient-to-r from-black to-[#404142] md:rounded-xl md:pt-0 pt-7">
      <div className="w-full md:w-3/4 mx-auto mb-12 relative md:ml-[6%] px-6 ">
        <h1 className="w-full md:w-3/4 pt-10 md:pt-32 mb-0 md:mb-9 text-5xl md:text-5xl text-white font-mono font-bold">
          Join US !!
        </h1>

        <img
          className="absolute w-[13rem] md:w-80 top-[5.5rem] md:top-[1rem] left-[50%] overflow-none md:left-[19.8rem] hidden md:block"
          src="https://static.wixstatic.com/media/b313a9_24e7e303ef0a483db82a780349e01dc2~mv2.png/v1/fill/w_424,h_392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1987145684_edited.png"
          alt=""
        />
      </div>
      <form onSubmit={onSubmitForm}>
        <div className="w-11/12 md:w-3/4 my-auto mx-auto rounded-2xl h-auto md:h-[600px] bg-inherit p-4 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-20 mt-3">
            <div className="text-slate-500 text-sm">
              <h1 className="text-md font-inter text-left">Name*</h1>
              <input
                className="p-2 md:p-3 mt-2 md:mt-4 h-10 w-full border-solid border-2 border-slate-500 rounded-lg"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="text-slate-500 text-sm">
              <h1 className="text-md font-inter text-left">Age*</h1>
              <input
                className="p-2 md:p-3 mt-2 md:mt-4 h-10 w-full border-solid border-2 border-slate-500 rounded-lg"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>

          <div className="text-slate-500 text-sm mt-2 md:mt-6">
            <h1 className="text-md font-inter text-left">Email*</h1>
            <input
              className="p-2 md:p-3 mt-2 md:mt-4 h-10 w-full border-solid border-2 border-slate-500 rounded-lg"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="text-slate-500 text-sm mt-2 md:mt-6">
            <h1 className="text-md font-inter text-left">Referral Code (If any)</h1>
            <input
              className="p-2 md:p-3 mt-2 md:mt-4 h-10 w-full border-solid border-2 border-slate-500 rounded-lg "
              type="text"
              value={refferal}
              onChange={(e) => setRefferal(e.target.value)}
            />
          </div>

          <div className="w-[90%] mt-9 md:mt-0 mx-auto md:mx-0">
            <button className="bg-blue-950 hover:bg-purple-700 duration-300 tracking-wide p-2 md:p-5 w-full md:w-[100%] md:ml-[1.67rem] text-white mt-2 md:mt-12 rounded-lg font-inter mx-auto">
              <strong>Join</strong>
            </button>
          </div>

          <div className="mt-6 text-slate-500">
            <h1 className="md:text-xl text-lg font-inter md:mt-0 mt-9">
              Your Referral Code :-<span className='font-bold text-white'>{"TPL" + name + 2*age + 5 * age + email[3]}</span> 
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactComponent;
