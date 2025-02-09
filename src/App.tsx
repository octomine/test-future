import { SearchInput } from "@/components/search-input";
import { ReposList } from "@/components/repos-list";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <SearchInput></SearchInput>
      <ReposList></ReposList>
    </div>
  )
}

export default App
