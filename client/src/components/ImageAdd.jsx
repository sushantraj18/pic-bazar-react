import React, { useState } from 'react'
import toast from 'react-hot-toast'
import useUpload from '../../hooks/useUpload'
import axios from 'axios'


function ImageAdd() {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)

    const imageChangeHandle = (e) => {
        const file = e.target.files[0]
        setImage(file)
    }

    const onUploadProgress = (progressEvent) =>
        setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));

    const addPost = async (e) => {
        e.preventDefault()

        try {

            const title = e.target.title.value
            const price = e.target.price.value
            console.log(title)
            console.log(e.target)

            if (!title || !price) return toast.error("all field require")
            if (title.trim === "" || price.trim === "") return toast.error("please fill all the fields")

            const { public_id, secure_url } = await useUpload({ image, onUploadProgress })

            if (!public_id || !secure_url) return toast.error("image upload faild")
            const res = await axios.post(
                import.meta.env.VITE_API_URL + "/post/create",
                {
                    title,
                    price,
                    image: secure_url,
                    public_id: public_id,
                    author,
                })

            const data = await res.data;
            if (data.success == true) {
                toast.success(data.message);
                e.target.reset();
                setImage(null);
                setProgress(0);
            }



        } catch (e) {

            return toast.error(e.response.data.message)

        }
    }

    return (
        <div className="p-5 bg-white mx-9 rounded-2xl shadow-md ">
            <h2 className="text-xl font-bold">Add New Product</h2>
            <form className="grid grid-cols-1 gap-2 my-4" onSubmit={addPost}>
                <img src={`${image ? URL.createObjectURL(image) : ""} `} alt="image loading"
                    className="w-[350px] h-[25vh] sm:h-[30vh] rounded-lg object-cover"
                />
                <div className="flex flex-col">
                    <label
                        htmlFor="image"
                        className="font-bold">
                        Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={imageChangeHandle}
                        className="rounded-lg border outline-none px-3 py-1 mt-1" />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="title"
                        className="font-bold">
                        Title
                    </label>
                    <input
                        type="text"
                        placeholder="text"
                        name="title"
                        id="title"
                        className="rounded-lg border outline-none px-3 py-1 mt-1" />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="price"
                        className="font-bold">
                        Price
                    </label>
                    <input
                        type="text"
                        placeholder="50"
                        name="price"
                        id="price"
                        className="rounded-lg border outline-none px-3 py-1 mt-1" />
                </div>
                <button type="submit" className="py-1 px-3 bg-black font-semibold text-white rounded-lg mt-2">Add Product</button>
            </form>
        </div>
    )
}
// 29:00

export default ImageAdd