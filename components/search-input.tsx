"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { ChangeEventHandler, useEffect, useState } from "react";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debounceValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debounceValue,
      categoryId: categoryId,
    };
    const url = queryString.stringifyUrl({
      url: window.location.href,
      query,
    }, {
      skipEmptyString: true, skipNull: true
    });
    router.push(url)
  }, [debounceValue, router, categoryId]);

  return (
    <div className="relative">
      <div className="flex justify-start items-center absolute  top-3 left-4 bg-second-color p-2 rounded-lg right-4">
        <Search className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-second-color ml-3 outline-none"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};
