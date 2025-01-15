import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { BASE_URL } from '../constants/api';
import { immigrantSchema } from '../validations/immigrant.validation';
import Swal from 'sweetalert2';

const AddImmigrant = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          description: '',
          imageUrl: '',
        },
        async onSubmit(values){
          await axios.post(BASE_URL,values);
          Swal.fire({
            title: "success!",
            icon: "success",
            draggable: true
          });
        }, 
        validationSchema:immigrantSchema
      });
  return (
    <> 
        <div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                   onChange={formik.handleChange}
                   value={formik.values.name}  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <p>{formik.errors.name}</p>
            <div className="mb-5">
                <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
                    Description
                </label>
                <input type="text" name="description" id="description" placeholder="Enter description"
                   onChange={formik.handleChange}
                   value={formik.values.description}  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                <p>{formik.errors.description}</p>
            </div>
            <div className="mb-5">
                <label htmlFor="imageUrl" className="mb-3 block text-base font-medium text-[#07074D]">
                    URL
                </label>
                <input type="url" name="imageUrl" id="imageUrl" placeholder="Enter image URL"
                   onChange={formik.handleChange}
                   value={formik.values.imageUrl}  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    <p>{formik.errors.imageUrl}</p>
            </div>


            <div>
                <button type='submit' style={{backgroundColor:"rgb(233, 15, 88)"}}
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Add Immigrant
                </button>
            </div>
        </form>
    </div>
</div>
    </>
  )
}

export default AddImmigrant