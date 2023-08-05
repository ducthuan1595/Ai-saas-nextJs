"use client"

import { Category, Companion } from "@prisma/client"
import { useForm, SubmitHandler } from "react-hook-form";

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

type Inputs = {
  name: string;
  description: string;
  instructions: string;
  seed: string;
  src: string;
  categoryId: string
}

const formSchema = {
  name: {
    min: 1,
    message: 'Name is required'
  },
  description: {
    min: 1,
    message: 'Description is required'
  },
  instructions: {
    min: 200,
    message: 'Instruction require at less 200 characters'
  },
  seed: {
    min: 200,
    message: 'Seed require at lest 200 characters'
  },
  src: {
    min: 1,
    message: 'Image is required'
  },
  categoryId: {
    min: 1,
    message: 'Category is required'
  }
}

export const CompanionForm = ({
  initialData, categories
}: CompanionFormProps) => {

  const { register, handleSubmit, formState: {errors} } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-second-color">
      <h1 className="ml-4 text-xl font-medium">General Information</h1>
      <span className="ml-4 text-sm text-[#979797]">General information about your Companion</span>
      <input {...register('src', { required: true })} className="bg-black p-2 m-4 rounded-md"/>
      {errors.src && <span>Image is required</span>}

      <label className="ml-4">Name</label>
      <input {...register('name', { required: true })} className="bg-black p-2 m-4 rounded-md"/>    {errors.name && <span>Name is required</span>}
      <label className="ml-4">Description</label>
      <input {...register('description', { required: true })} className="bg-black p-2 m-4 rounded-md"/>
      {errors.description && <span>Description is required</span>}
      <label className="ml-4">Instructions</label>
      <input {...register('instructions', { required: true })} className="bg-black p-2 m-4 rounded-md"/>
      {errors.instructions && <span>Instruction require at less 200 characters</span>}
      <label className="ml-4">Seed</label>
      <input {...register('seed', { required: true })} className="bg-black p-2 m-4 rounded-md"/>
      {errors.seed && <span>Seed require at lest 200 characters</span>}
      
      <label className="ml-4">CategoryId</label>
      <input {...register('categoryId', { required: true })} className="bg-black p-2 m-4 rounded-md"/>
      {errors.categoryId && <span>CategoryId is required</span>}


      <input type="submit" />
    </form>
  )
}