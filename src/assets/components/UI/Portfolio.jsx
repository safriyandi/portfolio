import React, { useState, useEffect } from 'react';
import data from '../../data/portfolioData';
import Modal from './Modal';

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(3);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandler = () => {
        setNextItems((prev) => prev + 3);
    };

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveID(id);
    };

    useEffect(() => {
        if (selectTab === 'all') {
            setPortfolios(data);
        }
        if (selectTab === 'Product Manager') {
            const filteredData = data.filter((item) => item.category === 'Product Manager');
            setPortfolios(filteredData);
        }
        if (selectTab === 'QA Engineer') {
            const filteredData = data.filter((item) => item.category === 'QA Engineer');
            setPortfolios(filteredData);
        }
    }, [selectTab]);

    const showLessHandler = () => {
        setNextItems(3);
    };

    return (
        <section id='portfolio'>
            <div className='container'>
                {/* Title & Buttons */}
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='mb-7 sm:mb-0'>
                        <h3 className='text-headingColor text-[2.5rem] font-[700]'>Projects</h3>
                    </div>

                    <div className='flex gap-4'>
                        <button
                            onClick={() => setSelectTab('all')}
                            className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor ease-in duration-100 py-2 px-4 rounded-[8px]'
                        >
                            All
                        </button>
                        <button
                            onClick={() => setSelectTab('Product Manager')}
                            className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor ease-in duration-100 py-2 px-4 rounded-[8px]'
                        >
                            Product Manager
                        </button>
                        <button
                            onClick={() => setSelectTab('QA Engineer')}
                            className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor ease-in duration-100 py-2 px-4 rounded-[8px]'
                        >
                            QA Engineer
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4 flex-wrap mt-12'>
                    {portfolios?.slice(0, nextItems).map((portfolio, index) => (
                        <div
                            key={index}
                            data-aos='fade-zoom-in'
                            data-aos-delay='50'
                            data-aos-duration='1000'
                            className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'
                        >
                            <figure>
                                <img className='rounded-[8px]' src={portfolio.imgUrl} alt='' />
                            </figure>

                            <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                <div className='w-full h-full flex items-center justify-center'>
                                    <button
                                        className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'
                                    >
                                        {' '}
                                        <a target='_blank' href={portfolio.siteUrl && portfolio.siteUrl}>
                                            {' '}
                                            CLICK HERE!{' '}
                                        </a>{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-6'>
                    {nextItems < portfolios.length && data.length > 3 && (
                        <button
                            onClick={loadMoreHandler}
                            className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor ease-in duration-100 py-2 px-4 rounded-[8px]'
                        >
                            Show More!
                        </button>
                    )}
                    {nextItems > 3 && (
                        <button
                            onClick={showLessHandler}
                            className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor ease-in duration-100 py-2 px-4 rounded-[8px]'
                        >
                            Show Less!
                        </button>
                    )}
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
        </section>
    );
};

export default Portfolio;
