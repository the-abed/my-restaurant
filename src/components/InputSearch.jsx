"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
    const router = useRouter();
    const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    const newSearchParams = new URLSearchParams(params.toString());
    newSearchParams.set("search", value);

    router.push(`/foods?${newSearchParams.toString()}`);
  };

  return (
    <div className="py-3 flex justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="border-2 rounded-2xl px-4 py-2"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
