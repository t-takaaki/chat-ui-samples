const SearchBox = () => (
    <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <input aria-placeholder="Busca tus amigos o contacta nuevos" placeholder="Busca tus amigos"
            className="py-2 pl-10 block w-full rounded bg-gray-100 outline-none focus:text-gray-700" type="search" name="search" required autoComplete="search" />
    </div>
);

export { SearchBox }