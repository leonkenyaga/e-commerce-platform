import { useSnapshot } from "valtio";
import React from "react";
import {search} from "../State/store.tsx";

function Navbar() {
    const snap = useSnapshot(search);
    return (
      <input
        className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
        placeholder="Search"
        value={snap.query}
        onChange={(evt) => {
          search.query = evt.target.value;
        }}
      />
    );
}

export default Navbar
