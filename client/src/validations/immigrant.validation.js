import * as Yup from 'yup'

export const immigrantSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    description: Yup.string().required("description is required"),
    imageUrl: Yup.string().required("URL is required")
});