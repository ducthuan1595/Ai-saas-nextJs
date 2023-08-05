import { UserButton } from "@clerk/nextjs"
import { SearchInput } from "@/components/search-input"
import prismadb from "@/lib/prismadb";
import { Categories } from '@/components/categories';

export default async function Home () {
  const categories = await prismadb.category.findMany();

  return (
    <div className='h-full p-4'>
      <SearchInput />
      <Categories data={categories}/>
    </div>
  )
}
