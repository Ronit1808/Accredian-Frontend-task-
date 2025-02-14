import React, { useState } from 'react';
import axios from 'axios';
import { X, Users, Building2, Users2 } from 'lucide-react';

const ReferNow = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
        courseName: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.referrerName) newErrors.referrerName = 'Required';
        if (!formData.referrerEmail) {
            newErrors.referrerEmail = 'Required';
        } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
            newErrors.referrerEmail = 'Invalid email';
        }
        if (!formData.refereeName) newErrors.refereeName = 'Required';
        if (!formData.refereeEmail) {
            newErrors.refereeEmail = 'Required';
        } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
            newErrors.refereeEmail = 'Invalid email';
        }
        if (!formData.courseName) newErrors.courseName = 'Required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return ;
            try {
            const response = await axios.post('http://localhost:5000/api/referral', formData);
            alert('Referral submitted successfully!');
            setIsModalOpen(false);
            setFormData({
                referrerName: '',
                referrerEmail: '',
                refereeName: '',
                refereeEmail: '',
                courseName: ''
            });
        }
        catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Failed to submit referral.');
    }};

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-2">
                    <div className="flex justify-between items-center py-4 md:justify-start md:space-x-6">
                        <div className="flex flex-col justify-center lg:w-0 lg:flex-1">
                            <div className="text-3xl font-bold text-blue-600">accredian</div>
                            <div className="text-xs pb-2 px-1 font-sans ">credtianls that matters</div>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <a href="#" className="text-gray-600 font-semibold hover:text-gray-900">Features</a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-gray-900">Community</a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-gray-900">Blog</a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-gray-900">Pricing</a>
                        </nav>
                        <div className="flex items-center justify-end md:flex-1 lg:w-0">
                            <button
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Register Now →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="pt-16 pb-24 md:pt-8 md:pb-32 flex flex-col md:flex-row items-center">
                            <div className="text-center md:text-left md:w-1/2">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                                    <span className="block">Unlock Dream Career with</span>
                                    <span className="block text-blue-600">Top Universities</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:mx-0">
                                    Share knowledge, earn rewards! Refer a friend and both get special discounts.
                                </p>
                                <div className="mt-8">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        Refer Now
                                    </button>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-0 md:w-1/2">
                                <img src="/Refer.svg" alt="Hero illustration" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-blue-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">How do i <span className='text-blue-600'>refer? </span></h2>
                        </div>
                        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="pt-6">
                                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                                    <div className="-mt-6 text-center ">
                                        <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                                            <Users className="h-6 w-6 text-white" />
                                        </div>

                                        <p className="mt-5 text-center text-base text-gray-500">
                                            Submit referrals easily via our website’s referral section
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                                    <div className="-mt-6 text-center">
                                        <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                                            <Building2 className="h-6 w-6 text-white" />
                                        </div>
                                        <p className="mt-5 text-center text-base text-gray-500">
                                            Earn rewards once your referral joins an Accredian program.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                                    <div className="-mt-6 text-center">
                                        <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                                            <Users2 className="h-6 w-6 text-white" />
                                        </div>             <p className="mt-5 text-center text-base text-gray-500">
                                            Referrer receives a bonus 30 days after program enrollmen
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
             {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-gray-500 opacity-75" onClick={() => setIsModalOpen(false)} />
            <div className="relative bg-white w-full max-w-md rounded-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-center font-semibold">Refer a Friend</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="referrerName"
                    value={formData.referrerName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="referrerEmail"
                    value={formData.referrerEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Friend's Name</label>
                  <input
                    type="text"
                    name="refereeName"
                    value={formData.refereeName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Friend's Email</label>
                  <input
                    type="email"
                    name="refereeEmail"
                    value={formData.refereeEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Select Course</label>
                  <select
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default ReferNow;

