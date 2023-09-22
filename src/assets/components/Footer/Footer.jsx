import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 mb-6 text-white font-[600] md:text-[2rem]'>
              Want to give me an opportunity?
            </h2>
            <a href='#contact'>
            <button className='flex items-center gap-2 text-white font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white
            hover:font-[500] ease-in duration-100'>
              {/* <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 */}
              {/* hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'> */}
                <i class='ri-mail-line'></i>
                safriyandi932@gmail.com
              </button>
            </a>
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0 text-[20px]'>
              "Saya bukanlah Orang hebat yang tahu segalanya, tetapi saya memiliki kemauan untuk belajar dan memecahkan masalah yang sulit."
            </p>

            <div className='flex items-center gap-4 flex-wrap md:gap-8'>
              <span className='text-gray-300 mt-8 font-[600] text-[20px]'>
                Find me on
              </span>

              <span className='w-[40px] h-[40px]  mt-8 bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='https://instagram.com/sfrynd' className='text-gray-font-[500] text-[25px]'><i class="ri-instagram-line"></i></a>
              </span>
          
              <span className='w-[40px] h-[40px]  mt-8 bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='https://www.linkedin.com/in/safri-yandi-53ba911a5/' className='text-gray-300 font-[500] text-[25px]'><i class="ri-linkedlin-box-line"></i></a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* perosnal footer branding */}
      <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px]  bg-white text-black text-[18px] font-[500]
                     rounded-full flex items-center justify-center'>S</span>

                <div className='leading-[20px]'>
                  <h2 className='text-xl text-white font-[700]'>Safri Yandi</h2>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px]'>Copyright &copy; {year} <br /><b>Safri Yandi</b> </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;