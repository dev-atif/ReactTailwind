import React from "react";

const Contact = () => {
  return (
    <div name="contact">
      <div className="max-w-6xl mx-auto py-10 md:py-20 md:px-0 px-5s">
        <div>
          <div className="text-center">
            <h2 className="title"> Have a Question ??</h2>
            <h1>Get in Touch </h1>
          </div>

          <form>
            <div className="w-full mx-auto grid md:grid-cols-2 gap-10 py-10 px-5 ">
              <div class=" relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full border-b  bg-transparent pt-4 pb-1.5 
                   text-sm font-normal text-white outline-none transition-all 
                   placeholder-shown:border-blue-gray-200 "
                  placeholder=" "
                />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex
                 h-full w-full select-none 
                 text-[11px] font-normal 
                 leading-tight text-blue-gray-500 
                 transition-all 
                 after:absolute after:-bottom-1.5 after:block
                  after:w-full after:scale-x-0 after:border-b-2
                   after:border-color-secondary
                   after:transition-transform
                    after:duration-300 peer-placeholder-shown:text-sm 
                    peer-placeholder-shown:leading-[4.25] 
                    peer-placeholder-shown:text-blue-gray-500 
                    peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-color-secondary
                     peer-focus:after:scale-x-100
                      peer-focus:after:border-color-secondary"
                >
                  Enter Your Name
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full border-b  bg-transparent pt-4 pb-1.5 
                   text-sm font-normal text-white outline-none transition-all 
                   placeholder-shown:border-blue-gray-200 "
                  placeholder=" "
                />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex
                 h-full w-full select-none 
                 text-[11px] font-normal 
                 leading-tight text-blue-gray-500 
                 transition-all 
                 after:absolute after:-bottom-1.5 after:block
                  after:w-full after:scale-x-0 after:border-b-2
                   after:border-color-secondary
                   after:transition-transform
                    after:duration-300 peer-placeholder-shown:text-sm 
                    peer-placeholder-shown:leading-[4.25] 
                    peer-placeholder-shown:text-blue-gray-500 
                    peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-color-secondary
                     peer-focus:after:scale-x-100
                      peer-focus:after:border-color-secondary"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="w-full mx-auto grid md:grid-cols-2 gap-10 md:py-10 px-5 ">
              <div class=" relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full border-b  bg-transparent pt-4 pb-1.5 
                   text-sm font-normal text-white outline-none transition-all 
                   placeholder-shown:border-blue-gray-200 "
                  placeholder=" "
                />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex
                 h-full w-full select-none 
                 text-[11px] font-normal 
                 leading-tight text-blue-gray-500 
                 transition-all 
                 after:absolute after:-bottom-1.5 after:block
                  after:w-full after:scale-x-0 after:border-b-2
                   after:border-color-secondary
                   after:transition-transform
                    after:duration-300 peer-placeholder-shown:text-sm 
                    peer-placeholder-shown:leading-[4.25] 
                    peer-placeholder-shown:text-blue-gray-500 
                    peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-color-secondary
                     peer-focus:after:scale-x-100
                      peer-focus:after:border-color-secondary"
                >
                  Phone
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full border-b  bg-transparent pt-4 pb-1.5 
                   text-sm font-normal text-white outline-none transition-all 
                   placeholder-shown:border-blue-gray-200 "
                  placeholder=" "
                />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex
                 h-full w-full select-none 
                 text-[11px] font-normal 
                 leading-tight text-blue-gray-500 
                 transition-all 
                 after:absolute after:-bottom-1.5 after:block
                  after:w-full after:scale-x-0 after:border-b-2
                   after:border-color-secondary
                   after:transition-transform
                    after:duration-300 peer-placeholder-shown:text-sm 
                    peer-placeholder-shown:leading-[4.25] 
                    peer-placeholder-shown:text-blue-gray-500 
                    peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-color-secondary
                     peer-focus:after:scale-x-100
                      peer-focus:after:border-color-secondary"
                >
                  Company
                </label>
              </div>
            </div>
            <div className="px-5 py-10 md:py-0">
              <div class="relative h-11 w-full min-w-[200px]">
                <textarea
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
                <label
                  class="after:content[' '] pointer-events-none absolute left-0 -top-4 flex
                 h-full w-full select-none 
                 text-[11px] font-normal 
                 leading-tight text-blue-gray-500 
                 transition-all 
                 after:absolute after:-bottom-24 after:block
                  after:w-full after:scale-x-0 after:border-b-2
                   after:border-color-secondary
                   after:transition-transform
                    after:duration-300 peer-placeholder-shown:text-sm 
                    peer-placeholder-shown:leading-[4.25] 
                    peer-placeholder-shown:text-blue-gray-500 
                    peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-color-secondary
                     peer-focus:after:scale-x-100
                      peer-focus:after:border-color-secondary"
                >
                  Please Write Your Message Here
                </label>
              </div>
            </div>
            <div className="grid place-items-center">
            <button class="btn mt-24">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
